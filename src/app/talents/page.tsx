"use client";

import Link from "next/link";
import { lilitaOne, poppins } from "@/fonts/fonts";
import "../index.css";

function Talents() {
  return (
    <div>
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
    </div>
  );
}

export default Talents;
