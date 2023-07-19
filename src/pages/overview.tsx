import { IoMdGlobe } from "react-icons/io";
import Link from "next/link";

export default function Overview() {
  return (
    <div className="pl-12">
      {/* <h1 className="pb-10 text-5xl">My Overview</h1> */}
      <h2 className="pb-8 pt-8 text-5xl">Welcome back, Reader</h2>

      <div className="pb-8">
        <h3 className="text-3xl">My Shelves</h3>
        <div className="flex flex-col pt-2 text-xl text-[#9f7f6b]">
          <p>Currently Reading</p>
          <Link href="/tbr">TBR</Link>
          <Link href="/read">Read</Link>
        </div>
      </div>

      <div className="pb-8">
        <h3 className="text-3xl">My Book Clubs</h3>
        <div className="pt-2 text-xl text-[#9f7f6b]">
          <p>Brando Sando</p>
          <p>Family</p>
        </div>
      </div>

      <div className="flex gap-2">
        <h3 className="text-4xl">Explore</h3>
        <IoMdGlobe size={40} />
      </div>
    </div>
  );
}
