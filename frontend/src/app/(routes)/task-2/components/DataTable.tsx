import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps {
  data: [];
}
export default function DataTable({ data }: DataTableProps) {
  console.log("DATA", data);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Output Table</h1>
      <Table>
        <TableCaption>
          Table displaying various currencies exchange rates.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Open</TableHead>
            <TableHead>High</TableHead>
            <TableHead>Low</TableHead>
            <TableHead>Close</TableHead>
            <TableHead>Adj.Close</TableHead>
            <TableHead>Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item[0]}</TableCell>
              <TableCell>{item[1]}</TableCell>
              <TableCell>{item[2]}</TableCell>
              <TableCell>{item[3]}</TableCell>
              <TableCell>{item[4]}</TableCell>
              <TableCell>{item[5]}</TableCell>
              <TableCell>{item[6]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
