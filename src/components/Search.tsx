"use client";

import { PlaceholdersAndVanishInput } from "./ui/vanishInput";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export function Search() {
  const placeholders = ["Fight Club", "Batman", "Kingsman", "Matrix", "Dune"];
  let inputRef = useRef<HTMLInputElement>(null);
  let router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let movieName = inputRef.current?.value;
    router.push(`/search?query=${movieName}`);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-start px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        FASAL
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        inputRef={inputRef}
      />
    </div>
  );
}
