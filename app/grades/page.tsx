import { GradesTable } from "@/components/grades/grades-table";
import { GradesChart } from "@/components/grades/grades-chart";

export default function GradesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Grades Overview</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <GradesChart />
      </div>
      <GradesTable />
    </div>
  );
}