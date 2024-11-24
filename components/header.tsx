"use client";

import { UserNav } from "./user-nav";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { GraduationCap } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold">School Dashboard</span>
        </div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}