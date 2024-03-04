"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion as m } from "framer-motion";
import { container, item } from "../components/Animations";
import { lilitaOne, poppins } from "@/fonts/fonts";
import "./Projects.css";
import "../index.css";
import Footer from "../components/Footer";

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
        <m.li key={key} variants={item} className="projects-row">
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
      <Navbar />
      <main className="w-[100vw] px-[15%] my-32" style={lilitaOne.style}>
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
          className="project-list"
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
      <Footer />
    </div>
  );
}

export default AllProjects;
