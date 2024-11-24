"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Math", average: 15.5 },
  { subject: "Physics", average: 14.2 },
  { subject: "Chemistry", average: 16.8 },
  { subject: "Biology", average: 17.5 },
  { subject: "English", average: 18.0 },
];

export function GradesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Grades by Subject</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="subject"
              stroke="currentColor" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="currentColor"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}/20`}
              domain={[0, 20]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              cursor={{ fill: "hsl(var(--muted))" }}
              formatter={(value) => [`${value}/20`, "Average"]}
            />
            <Bar
              dataKey="average"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}