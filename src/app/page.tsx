import Movie from "@/components/Movie";
import MoviesList from "@/components/MoviesList";
import { Search } from "@/components/Search";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  let user = await currentUser();

  let wishlistedMovies = await db.post.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <>
      <Search />
      {wishlistedMovies.length > 0 ? (
        <h4 className="mx-6 mt-4">Your Watchlist</h4>
      ) : (
        <h4 className="mx-6 mt-4">Your watchlist be shown here</h4>
      )}
      <div className=" mx-6 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {wishlistedMovies.map((movie: any) => {
          return <Movie key={Math.random()} movie={movie} />;
        })}
      </div>
    </>
  );
}
