"use client";

import { Card, CardContent } from "@/components/ui/card";

export function UserGreeting() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Welcome back, John</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your students today.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}