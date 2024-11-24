"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: "1",
    title: "New Grade Posted",
    message: "A new grade has been posted for Mathematics",
    date: "2024-02-15",
    read: false,
  },
  {
    id: "2",
    title: "Parent-Teacher Meeting",
    message: "Upcoming parent-teacher meeting scheduled for next week",
    date: "2024-02-14",
    read: true,
  },
];

export function ParentNotifications() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <CardTitle>Notifications</CardTitle>
        </div>
        <CardDescription>
          Stay updated with your child's academic activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-lg border p-4 ${
                  !notification.read ? "bg-muted" : ""
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="font-semibold">{notification.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {notification.date}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {notification.message}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}