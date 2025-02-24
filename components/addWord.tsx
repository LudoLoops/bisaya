"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { postWord } from "@/app/db/queries"
import { toast } from "sonner"

const formSchema = z.object({
  bisaya: z.string().min(2, {
    message: "Bisaya word should be at least 2 characters.",
  }),
  english: z.string().min(2, {
    message: "English word should be at least 2 characters",
  }),
  category: z.string().min(2, {
    message: "category should be at least 2 characters",
  }),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  example: z.string().optional(),
  isSubmitting: z.boolean(),
})

export default function AddWord() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bisaya: "",
      english: "",
      category: "",
      difficulty: "beginner",
      example: "",
      isSubmitting: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      form.setValue("isSubmitting", true)
      // await postWord([values])
      toast("Success", {
        description: `${values.bisaya} was properly added into the database `,
      })
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast("Error while adding the word", {
        description: "please, check and try again",
      })
    } finally {
      form.setValue("isSubmitting", false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a word</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="bisaya"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bisaya</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Bisaya word" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.bisaya?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="english"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anglais</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter English word" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.english?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Ex: Nourriture, Transport, etc."
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.category?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="difficulty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty level</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.difficulty?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="exemple"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exemple (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Show an example of how to use this word"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.example?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mt-6"
            >
              {form.formState.isSubmitting ? "Saving word..." : "Add word"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
