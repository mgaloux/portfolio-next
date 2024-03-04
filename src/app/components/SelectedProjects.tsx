"use client";

import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "./Animations";
import "./Projects.css";
import ExchangePicture from "../../../public/images/projects/charts.jpg";
import MaskottPicture from "../../../public/images/projects/maskott.png";
import ZackNaniPicture from "../../../public/images/projects/zacknani.png";
import Image, { StaticImageData } from "next/image";
import { lilitaOne, poppins } from "../styles/fonts/fonts";

const ProjectDisplay = ({
  href,
  title,
  projectType,
  image,
}: {
  href: string;
  title: string;
  projectType: string;
  image: StaticImageData;
}) => {
  return (
    <div style={lilitaOne.style} className="overflow-hidden relative">
      <Link href={href}>
        <m.li variants={item} className="projects-row bg-black relative">
          <Image
            src={image}
            alt={title}
            className="absolute inset-0 object-cover w-[60%] ml-[40%] h-full z-1 right-0"
          />
          <div
            className="absolute inset-0 object-cover w-[60%] ml-[40%] h-full z-3 right-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))",
            }}
          ></div>
          <h2 className="text-2xl z-2 relative">{title}</h2>
          <p
            style={poppins.style}
            className="border-white border p-2 backdrop-blur-[10px] text-xs rounded"
          >
            {projectType}
          </p>
        </m.li>
      </Link>
    </div>
  );
};

function SelectedProjects() {
  return (
    <section className="my-8 flex flex-col">
      <div className="overflow-hidden flex flex-row justify-between items-center">
        <m.h2
          style={lilitaOne.style}
          className="special-underline py-4"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Latest Projects
        </m.h2>
      </div>
      <m.ul
        variants={container}
        animate="show"
        initial="hidden"
        className="w-full mt-12 flex flex-col gap-4"
      >
        <ProjectDisplay
          title="Decentralized Exchange"
          href="/projects/exchange"
          projectType="🚀 Personal project"
          image={ExchangePicture}
        />
        <ProjectDisplay
          title="Maskott"
          href="/projects/maskott"
          projectType="💼 Professional project"
          image={MaskottPicture}
        />
        <ProjectDisplay
          image={ZackNaniPicture}
          title="Zack Nani Live Extension"
          href="/projects/live-extension"
          projectType="💼 Freelance project"
        />
      </m.ul>
      <Link href="/projects" className="self-end mt-4">
        <p
          style={poppins.style}
          className="border-b border-[#646cff] arrow-animation"
        >
          &nbsp;&nbsp;Discover more projects
        </p>
      </Link>
    </section>
  );
}

export default SelectedProjects;
