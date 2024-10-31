import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col gap-3 px-8 md:px-20">
      <Navbar />
      {children}
    </div>
  );
}
