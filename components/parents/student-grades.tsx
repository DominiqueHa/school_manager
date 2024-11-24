"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    subject: "Mathematics",
    grade: 15,
    date: "2024-02-15",
    teacher: "Dr. Brown",
    comment: "Excellent work on algebraic expressions",
  },
  {
    id: "2",
    subject: "Physics",
    grade: 13.5,
    date: "2024-02-14",
    teacher: "Ms. Davis",
    comment: "Good understanding of mechanics",
  },
];

export function StudentGrades() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emma's Grades</CardTitle>
        <CardDescription>
          View your child's academic performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Comment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade) => (
              <TableRow key={grade.id}>
                <TableCell className="font-medium">{grade.subject}</TableCell>
                <TableCell>{grade.grade}/20</TableCell>
                <TableCell>{grade.date}</TableCell>
                <TableCell>{grade.teacher}</TableCell>
                <TableCell>{grade.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}