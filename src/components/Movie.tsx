import { FC } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";



interface MovieProps {
  movie: Object;
}

let Movie: FC<MovieProps> = ({ movie }) => {
  console.log(movie);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
          <div className="relative">
            <img
              src={movie.Poster}
              alt={movie.Title}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-lg font-bold text-white mb-1">
                {movie.Title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {movie.Description}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle>{movie.Title}</DialogTitle>
          <DialogDescription>{movie.Year}</DialogDescription>
          <img
            src={movie.Poster}
            alt={movie.Title}
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" className="mr-auto">
            Add to Watchlist
          </Button>
          <Button>Watch Here</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};



export default Movie;
