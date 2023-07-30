import Link from "next/link";
import Logo from "./Logo";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: sessionData } = useSession();
  return (
    <div className={`h-18 w-screen bg-emerald-950  drop-shadow-lg `}>
      <Logo />
      <div className="mr-8 flex justify-end gap-6 pb-2 text-lg text-white">
        <button
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          Sign in
        </button>
        <Link href="/tbr">TBR</Link>
        <Link href="/read">Read</Link>
        <Link href="/bookClubs">My Book Clubs</Link>
        <Link href="/overview">My Overview</Link>
        <Link href="/explore">Explore</Link>
      </div>
    </div>
  );
}

// -[#152C1B]
