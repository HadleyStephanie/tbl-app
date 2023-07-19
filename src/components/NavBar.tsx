import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="h-18 w-screen bg-black">
      <Logo />
      <div className="mr-8 flex justify-end gap-6 pb-2 text-white">
        <Link href="/tbr">TBR</Link>
        <Link href="/read">Read</Link>
        <Link href="/bookClubs">My Book Clubs</Link>
        <Link href="/overview">My Overview</Link>
        <Link href="/explore">Explore</Link>
      </div>
    </div>
  );
}
