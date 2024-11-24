"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ParentMessages } from "./parent-messages";
import { ParentNotifications } from "./parent-notifications";
import { StudentGrades } from "./student-grades";

export function ParentDashboard() {
  return (
    <Tabs defaultValue="grades" className="space-y-4">
      <TabsList>
        <TabsTrigger value="grades">Grades</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="grades" className="space-y-4">
        <StudentGrades />
      </TabsContent>
      <TabsContent value="messages" className="space-y-4">
        <ParentMessages />
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <ParentNotifications />
      </TabsContent>
    </Tabs>
  );
}