import { FC } from "react";
import Movie from "./Movie";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface MoviesListProps {
  movies: Object | undefined;
}

let MoviesList: FC<MoviesListProps> = ({ movies }) => {
  if (movies === undefined)
    return (
      <div className="flex flex-row justify-center">
        <Button className="mx-6" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
      </div>
    );

  let moviesList = movies?.Search;

  return (
    <div className=" mx-6 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {moviesList.map((movie: object) => {
        return <Movie key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
