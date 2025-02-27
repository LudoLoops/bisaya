import { Webhook } from "svix"
import { headers } from "next/headers"
import { db } from "@/app/db"
import { users } from "@/app/db/schema"
import { eq } from "drizzle-orm"

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET

// Define a custom type for the Clerk user data
interface ClerkUserData {
  id: string
  username: string | null
  // ... other properties ... (add other properties as needed)
}

// Define a custom type for the Clerk event
interface ClerkEvent {
  type: string
  data: ClerkUserData
}

export async function POST(req: Request) {
  // Verify the webhook signature
  const headerList = await headers()

  const svixId = headerList.get("svix-id")
  const svixTimestamp = headerList.get("svix-timestamp")
  const svixSignature = headerList.get("svix-signature")

  if (!webhookSecret || !svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occurred -- no secret or missing headers", {
      status: 400,
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(webhookSecret)
  let evt: ClerkEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkEvent
  } catch (err) {
    console.error("Error verifying webhook:", err)
    return new Response("Error occurred", {
      status: 400,
    })
  }

  // Handle the event
  const eventType = evt.type

  // User created event
  if (eventType === "user.created") {
    const user = evt.data
    try {
      if (user.username) {
        await db.insert(users).values({
          clerkId: user.id,
          username: user.username,
        })
      } else {
        console.error(`user has no username, id : ${user.id}`)
      }
    } catch (e) {
      console.error("Error creating user:", e)
      return new Response("Error creating user in db", { status: 500 })
    }
  }

  // User updated event
  if (eventType === "user.updated") {
    const user = evt.data
    try {
      if (user.username) {
        await db
          .update(users)
          .set({ username: user.username })
          .where(eq(users.clerkId, user.id))
      } else {
        console.error(`user has no username, id : ${user.id}`)
      }
    } catch (e) {
      console.error("Error updating user:", e)
      return new Response("Error updating user in db", { status: 500 })
    }
  }

  // User deleted event
  if (eventType === "user.deleted") {
    const user = evt.data
    try {
      await db.delete(users).where(eq(users.clerkId, user.id))
    } catch (e) {
      console.error("Error deleting user:", e)
      return new Response("Error deleting user in db", { status: 500 })
    }
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
