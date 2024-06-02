"use client";

import { FC } from "react";

import axios from "axios";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface MovieProps {
  movie: {
    Title: String;
    title?: String;
    Poster: string;
    poster?: string;
    Year: String;
    year: String;
  };
}

let Movie: FC<MovieProps> = ({ movie }) => {
  let watchListHandler = async () => {
    try {
      let response = await axios.post("/api/watchlist", { movie });
      if (response.status == 200) {
        console.log("wishlist created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  let removeWatchListHandler = async () => {
    console.log("removed from watch list");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
          <div className="relative">
            <img
              src={movie.Poster || movie.poster}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-lg font-bold text-white mb-1">
                {movie.Title || movie.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">{movie.year}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle>{movie.Title || movie.title}</DialogTitle>
          <DialogDescription>{movie.Year || movie.year}</DialogDescription>
          <img
            src={movie.Poster || movie.poster}
            width={400}
            height={400}
            className="w-full h-64 object-cover"
          />
        </DialogHeader>
        <DialogFooter>
          {movie.title ? (
            <Button
              variant="outline"
              className="mr-auto"
              onClick={removeWatchListHandler}
            >
              Remove from watchlist
            </Button>
          ) : (
            <Button
              variant="outline"
              className="mr-auto"
              onClick={watchListHandler}
            >
              Add to Watchlist
            </Button>
          )}
          {/* <Button
            variant="outline"
            className="mr-auto"
            onClick={watchListHandler}
          >
            Add to Watchlist
          </Button> */}
          <Button>Watch Here</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Movie;
