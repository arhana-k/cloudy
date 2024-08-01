import { Suspense } from "react";
import PostsList from "../components/posts-list";

export default async function Page() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-center p-4">
     <h1 className="text-3xl md:text-4xl font-bold mb-8">All posts</h1>
    <Suspense fallback = "Loading...">
     <PostsList/>
     </Suspense>
  </main>
  );
}
