import initialBooks from "~/initialBooks";
import Image from "next/image";

import BookCoverCard from "~/components/BookCoverCard";

export default function tbrPage() {
  return (
    // <div>
    //   <h1 className="pl-8 text-3xl">TBR</h1>
    //   {initialBooks
    //     .filter((b) => !b.completed)
    //     .map((book) => (
    //       <li key={book.title} className="list-none">
    //         {book.title} by {book.author}
    //       </li>
    //     ))}
    //   <BookCoverCard />
    // </div>

    <div className="flex pt-8">
      {initialBooks
        .filter((b) => !b.completed)
        .map((book) => (
          <BookCoverCard key={book.title}>
            <img src={book.cover} alt={book.title}></img>
            {book.cover}
          </BookCoverCard>
        ))}
    </div>
  );
}
