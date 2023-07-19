import initialBooks from "~/initialBooks";

export default function Read() {
  return (
    <div>
      <h1 className="pl-8 text-3xl">Read</h1>
      {initialBooks
        .filter((b) => b.completed)
        .map((book) => (
          <li key={book.title} className="list-none">
            {book.title} by {book.author}
          </li>
        ))}
    </div>
  );
}
