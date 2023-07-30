import BookCoverCard from "~/components/BookCoverCard";
import { GetServerSideProps } from "next";
import { env } from "~/env.mjs";
import { useEffect, useState } from "react";
// import useSWR, { Fetcher, SWRConfiguration } from "swr";

export default function Explore() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function bookSearch() {
      setIsLoading(true);
      try {
        await fetch("https://www.googleapis.com/books/v1/volumes?q=mistborn")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
            console.log(data);
          });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    bookSearch().catch((e) => console.error(e));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data is not available or does not exist.</p>;
  // const { data } = useSWR<unknown, Error, SWRConfiguration>(
  //   "https://www.googleapis.com/books/v1/volumes?q=mistborn",
  //   fetcher
  // );

  // // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="pb-10 pl-8 text-3xl">Explore</h1>
      <div className="flex gap-6">
        <p>{JSON.stringify(data)}</p>
        {/* <BookCoverCard />
        <BookCoverCard />
        <BookCoverCard />
        <BookCoverCard /> */}
      </div>
    </div>
  );
}
