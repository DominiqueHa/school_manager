"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Overview
      </Link>
      <Link
        href="/students"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/students" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Students
      </Link>
      <Link
        href="/teachers"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/teachers" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Teachers
      </Link>
      <Link
        href="/parents"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/parents" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Parents
      </Link>
      <Link
        href="/grades"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/grades" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Grades
      </Link>
    </nav>
  );
}