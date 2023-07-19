import React, { ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="h-[calc(100vh-64px)] bg-[#eee1c9]">{children}</main>
    </>
  );
}
