import { Suspense, useState } from "react";

export default async function Page({ params }: {
  params: {id: string} })
  {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();



  return (
    <main className="px-7 pt-24 text-center">
        <h1 className="text-4xl font-semibold mb-8">{post.title}</h1>
        <Suspense fallback = "Loading...">
        <p className="max-w-[700px] mx-auto">{post.body}</p>
        </Suspense>

    </main>
  )
}
