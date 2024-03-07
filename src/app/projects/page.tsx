"use client";

import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../components/Animations";
import { lilitaOne, poppins } from "@/fonts/fonts";
import "../index.css";

const ProjectItem = ({
  key,
  to,
  title,
}: {
  key: number;
  to: string;
  title: string;
}) => {
  return (
    <div className="overflow-hidden bg-black">
      <Link href={to}>
        <m.li key={key} variants={item} className="p-6 border border-black border-b border-b-white hover:border hover:border-[#646cff] hover:border-b-[#646cff]  transition-border-colors duration-300">
          <div>
            <h2 className="text-2xl">{title}</h2>
          </div>
        </m.li>
      </Link>
    </div>
  );
};

function AllProjects() {
  return (
    <div>
      <main className="w-[100vw] sm:px-[5%] lg:px-[15%] mt-32" style={lilitaOne.style}>
        <div className="overflow-hidden">
          <m.h1
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            All Projects
          </m.h1>
        </div>
        <m.ul
          variants={container}
          animate="show"
          initial="hidden"
          className="my-8"
        >
          <ProjectItem key={1} title="Maskott" to="/projects/maskott" />
          <ProjectItem
            key={2}
            title="Decentralized Exchange"
            to="/projects/exchange"
          />
          <ProjectItem
            key={3}
            title="Zack Nani Live Extension"
            to="/projects/live-extension"
          />
          <ProjectItem
            key={4}
            title="Stream Manager"
            to="/projects/stream-manager"
          />
          <ProjectItem key={5} title="Conity" to="/projects/conity" />
          <ProjectItem key={6} title="Deep-Logic" to="/projects/deep-logic" />
        </m.ul>
      </main>
    </div>
  );
}

export default AllProjects;
