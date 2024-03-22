"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Compass, Ghost, Menu } from "lucide-react";
import { navLinks } from "@/constants";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function DashboardHeader() {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");
  return (
    <header className="h-[var(--header-height)] border-b px-5 flex items-center justify-between sticky top-0 bg-background z-30">
      {isDesktop ? (
        <div className="flex gap-1 items-center z-40 font-semibold cursor-default">
          <Compass />
          <span>Calpass</span>
        </div>
      ) : (
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="pb-4">
            <DrawerHeader>
              <DrawerTitle className="flex items-center gap-1 justify-center">
                <Compass />
                Calpass
              </DrawerTitle>
            </DrawerHeader>
            {navLinks.map((item) => (
              <div key={item.id} className="p-3">
                <DrawerClose asChild>
                  <Link href={item.href} className="flex  gap-3">
                    {<item.icon />}
                    {item.name}
                  </Link>
                </DrawerClose>
              </div>
            ))}
          </DrawerContent>
        </Drawer>
      )}
      <div className="flex gap-3 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
