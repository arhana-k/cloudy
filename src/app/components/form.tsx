import { createPost } from "@/actions/action";
import React from "react";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto v-8 gap-2 my-12">
      <input 
          type="text"
          name="title"
          placeholder="what's the title?"
          className="border rounded px-3 h-full text-zinc-800 "
          required
      />
  <textarea
  name = "body"
  placeholder="spill your heart out!"
  className="border rounded px-3 py-1 text-zinc-800"
  rows={5}
  required
  />

  <button className="h-10 bg-blue-400 px-5 rounded text-white">Submit</button>
    </form>
  );
}