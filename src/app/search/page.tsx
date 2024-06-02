"use client";

import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MoviesList from "@/components/MoviesList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface pageProps {}

let Page: FC<pageProps> = ({}) => {
  let searchParam = useSearchParams();
  let movieName = searchParam.get("query");
  let [movies, setMovies] = useState();
  let router = useRouter();

  useEffect(() => {
    let fetchData = async function () {
      let response = await fetch(
        ` http://www.omdbapi.com/?s=${movieName}&apikey=b434076e`
      );
      let movies = await response.json();
      setMovies(movies);
    };

    fetchData();
  }, [movieName]);

  const handleGoBack = () => {
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 300); // slight delay to ensure navigation happens
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="mx-6 ">Showing Search for {movieName}</h1>
        <Button className="mr-6" variant="outline" onClick={handleGoBack}>
          <ChevronLeft className="h-4 w-4 mr-3" />
          Go Back
        </Button>
      </div>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Page;
