import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={cormorant.className}>
      <NavBar />
      <main className={`h-[calc(100vh-64px)] bg-emerald-950  text-white`}>
        {children}
      </main>
    </div>
  );
}

// bg-[#eee1c9] text-[#152C1B]
