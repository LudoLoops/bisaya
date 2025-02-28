"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-purple-400/90 to-indigo-600/90 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-purple-400/75 supports-[backdrop-filter]:to-indigo-600/75">
      <div className="container flex h-16 items-center w-full">
        <div className="flex items-center space-x-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-white hover:bg-white/20"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[240px] sm:w-[300px] bg-gradient-to-b from-purple-400 to-indigo-600"
            >
              <div className="flex flex-col space-y-4 py-4">
                {/* <Link
                  href="/"
                  className="text-white hover:text-white/80 text-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learn
                </Link> */}
                <SignedIn>
                  <Link
                    href="/account"
                    className="text-white hover:text-white/80 text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Account
                  </Link>
                  <Link
                    href="/achievements"
                    className="text-white hover:text-white/80 text-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Achievements
                  </Link>
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-white text-xl">FlashLearn</span>
          </Link>
        </div>
        <MainNav className="mx-6 hidden md:flex" />
        <div className="ml-auto flex items-center space-x-4">
          <SignedIn>
            <UserNav />
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
                asChild
              >
                <SignInButton />
              </Button>
              <Button
                className="bg-white text-indigo-600 hover:bg-white/90"
                asChild
              >
                <SignUpButton />
              </Button>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
