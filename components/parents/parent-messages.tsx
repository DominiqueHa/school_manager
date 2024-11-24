"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  {
    id: "1",
    from: "Dr. Brown",
    subject: "Mathematics Progress Update",
    content: "Emma has shown great improvement in calculus this month.",
    date: "2024-02-15",
    read: false,
  },
  {
    id: "2",
    from: "Ms. Davis",
    subject: "Physics Project Reminder",
    content: "The physics project is due next week. Emma should start finalizing her work.",
    date: "2024-02-14",
    read: true,
  },
];

export function ParentMessages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
        <CardDescription>
          Communications from teachers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-lg border p-4 ${
                  !message.read ? "bg-muted" : ""
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="font-semibold">{message.from}</div>
                  <div className="text-sm text-muted-foreground">
                    {message.date}
                  </div>
                </div>
                <div className="mb-1 text-sm font-medium">{message.subject}</div>
                <div className="text-sm text-muted-foreground">
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}