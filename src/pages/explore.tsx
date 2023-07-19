import BookCoverCard from "~/components/BookCoverCard";

export default function Explore() {
  return (
    <div>
      <h1 className="pb-10 pl-8 text-3xl">Explore</h1>
      <div className="flex gap-6">
        <BookCoverCard />
        <BookCoverCard />
        <BookCoverCard />
        <BookCoverCard />
        <BookCoverCard />
      </div>
    </div>
  );
}
