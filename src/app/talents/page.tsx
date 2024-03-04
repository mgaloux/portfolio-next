"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { lilitaOne, poppins } from "@/fonts/fonts";
import "../index.css";

const BlogPreview = ({
  title,
  preview,
  date,
  id,
}: {
  title: string;
  preview?: string;
  date: string;
  id: string;
}) => {
  return (
    <Link
      href={`/blog/${id}`}
      style={poppins.style}
      className="group truncate flex flex-col p-4 border-b border-gray-500 hover:border-[#646cff] bg-black rounded-lg gap-2 w-full"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-wrap truncate group-hover:underline">
          <b>{title}</b>
        </h4>
        <p style={poppins.style} className="text-sm text-gray-600">
          {date}
        </p>
      </div>
      {preview && (
        <div
          style={poppins.style}
          className="poppins flex text-sm text-gray-500"
        >
          <span className="overflow-hidden">{preview}</span>
          <span>...</span>
        </div>
      )}
    </Link>
  );
};

function Blog() {
  return (
    <div>
      <Navbar />
      <main className="w-[100vw] px-[15%] my-32">
        <h1 style={lilitaOne.style}>Talents</h1>
        <p style={poppins.style} className="text-gray-500 my-2">
          Get access to my network of talented developers for your project
        </p>
        <h2 className="my-8 special-underline" style={lilitaOne.style}>
          Profiles
        </h2>
        <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
          {/* Insert cards to introduce talents */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
