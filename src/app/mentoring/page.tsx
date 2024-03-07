"use client";

import { lilitaOne, poppins } from "@/fonts/fonts";
import "../index.css";

function Mentoring() {
  return (
    <div className="h-lvh">
      <main className="w-[100vw] px-[15%] my-32">
        <h1 style={lilitaOne.style}>Mentoring</h1>
        <p style={poppins.style} className="text-gray-500 my-2">
          Sign up free mentoring today to obtain free mentoring sessions about
          tech job interviews, frontend, blockchain, & more !
        </p>
        <h2 className="my-8 special-underline" style={lilitaOne.style}>
          Perks
        </h2>
        <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
          {/* Insert perks */}
        </div>
      </main>
    </div>
  );
}

export default Mentoring;
