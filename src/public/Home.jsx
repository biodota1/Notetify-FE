import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[50%] m-auto flex flex-col gap-y-4">
        <h1 className="text-5xl text-slate-100 font-bold">
          Experience the future of note-taking with our innovative platform.
        </h1>
        <h2 className="text-xl text-slate-200 front bold">
          From capturing quick thoughts to detailed plans, keep your ideas
          organized, searchable, and ready to turn into action.
        </h2>
        <Link
          to="/register"
          className="btn w-36 text-lg text-slate-100 font-bold my-5 ml-auto mr-32 bg-slate-800 bg-transparent border-teal-900 border-4 hover:bg-teal-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
