import Image from "next/image";
import { GiBookshelf } from "react-icons/gi";
import ArchiveLogo from "../../public/Archive-Logo";

export default function Logo() {
  return (
    <div className="flex gap-2 pl-4 pt-6">
      <ArchiveLogo size={48} />
    </div>
  );
}

// color: text-[#9f7f6b]
