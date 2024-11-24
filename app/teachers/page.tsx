import { TeachersTable } from "@/components/teachers/teachers-table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Teacher
        </Button>
      </div>
      <TeachersTable />
    </div>
  );
}