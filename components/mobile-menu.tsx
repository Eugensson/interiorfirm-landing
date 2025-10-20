"use client";

import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="xl:hidden">
        <RiMenu4Fill size={30} />
      </SheetTrigger>
      <SheetContent className="p-6 xl:hidden">
        <SheetHeader>
          <Logo className="mb-12" />
          <SheetTitle className="sr-only" />
          <SheetDescription className="sr-only" />
        </SheetHeader>
        <Nav
          containerStyles="my-auto"
          listStyles="flex flex-col items-center justify-center gap-12"
          linkStyles="text-lg font-semibold uppercase"
          setMobileNav={() => setOpen(false)}
        />
        <SheetFooter>
          <button type="button" className="btn btn-sm btn-accent">
            Contact Us
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
