import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export let POST = async (req: Request) => {
  let body = await req.json();
  let { Title, Year, Type, Poster } = body.movie;

  let user = await currentUser();

  let parseYear = parseInt(Year);

  let post = await db.post.create({
    data: {
      title: Title,
      year: parseYear,
      poster: Poster,
      userId: user?.id,
    },
  });
  return new NextResponse(JSON.stringify(post));
};
