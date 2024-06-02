"use client";

import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesList from "@/components/MoviesList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, Divide } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface pageProps {}

let Page: FC<pageProps> = ({}) => {
  let searchParam = useSearchParams();
  let movieName = searchParam.get("query");
  let [movies, setMovies] = useState();
  let router = useRouter();
  let { toast } = useToast();

  useEffect(() => {
    let fetchData = async function () {
      let response = await fetch(
        `https://www.omdbapi.com/?s=${movieName}&apikey=b434076e`
      );
      let movies = await response.json();

      if (movies.Response === "False") {
        router.push("/");
        toast({
          variant: "destructive",
          title: "Can not find this movie",
        });
      } else {
        setMovies(movies);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="mx-6 ">Showing Search for {movieName}</h1>
        <Button className="mr-6" variant="outline">
          <ChevronLeft className="h-4 w-4 mr-3" />
          <a href="/">Go Back</a>
        </Button>
      </div>

      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Page;
