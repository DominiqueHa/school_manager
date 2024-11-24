"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const grades = [
  {
    id: "1",
    student: "John Smith",
    subject: "Mathematics",
    grade: 15,
    date: "2024-02-15",
    teacher: "Dr. Brown",
  },
  {
    id: "2",
    student: "Sarah Johnson",
    subject: "Physics",
    grade: 17.5,
    date: "2024-02-14",
    teacher: "Ms. Davis",
  },
];

export function GradesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Teacher</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.student}</TableCell>
              <TableCell>{grade.subject}</TableCell>
              <TableCell>{grade.grade}/20</TableCell>
              <TableCell>{grade.date}</TableCell>
              <TableCell>{grade.teacher}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}