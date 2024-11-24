"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      description: "Sarah Johnson submitted Math homework",
      time: "2 hours ago",
    },
    {
      id: 2,
      description: "New grade posted for Physics class",
      time: "3 hours ago",
    },
    {
      id: 3,
      description: "Parent meeting scheduled with Mr. Smith",
      time: "5 hours ago",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your classes</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}