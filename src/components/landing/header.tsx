"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import Image from "next/image";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="AboutTime Logo" width={48} height={48} />
          <span className="font-bold text-xl font-headline">ABOUT TIME</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/menu"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/gallery"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Gallery
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-secondary">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-6">
                <nav className="flex flex-col gap-4 text-lg">
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className="hover:text-accent transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      About Us
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/menu"
                      className="hover:text-accent transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Menu
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/blog"
                      className="hover:text-accent transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/gallery"
                      className="hover:text-accent transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Gallery
                    </Link>
                  </SheetClose>
                </nav>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="#contact" onClick={() => setIsSheetOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
