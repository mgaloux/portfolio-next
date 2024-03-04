"use client";

import { motion as m } from "framer-motion";
import {
  IconDefinition,
  faNodeJs,
  faDocker,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLogo from "@/images/technos/NextLogo.png";
import TailwindLogo from "@/images/technos/TailwindLogo.png";
import EtherLogo from "@/images/technos/EtherLogo.png";
import SolidityLogo from "@/images/technos/SolidityLogo.png";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { lilitaOne, poppins } from "@/fonts/fonts";

const Badge = ({
  text,
  img,
  icon,
  colorGradient,
  label,
}: {
  text?: string;
  img?: StaticImageData;
  icon?: IconDefinition;
  colorGradient: [string, string];
  label?: string;
}) => {
  const gradientColors = colorGradient;

  const gradientStyle = {
    background: `linear-gradient(45deg, ${gradientColors.join(",")})`,
  };

  return (
    <li className="flex flex-col items-center gap-2">
      <div
        className="rounded-full w-24 h-24 flex items-center justify-center"
        style={gradientStyle}
      >
        <div className="rounded-xl w-14 h-14 flex items-center justify-center bg-black bg-opacity-30">
          {text ? (
            <p style={poppins.style} className="font-bold text-2xl text-white">
              {text}
            </p>
          ) : img ? (
            <Image alt="logo" className="p-3" src={img} />
          ) : icon ? (
            <FontAwesomeIcon icon={icon} size="2x" />
          ) : (
            <></>
          )}
        </div>
      </div>
      {label && (
        <p style={poppins.style} className="text-sm">
          {label}
        </p>
      )}
    </li>
  );
};

const BadgeGrouping = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="bg-black py-6 px-4 rounded-2xl mt-8">
      <p style={poppins.style} className="text-xl font-bold pb-4 text-center">
        {label}
      </p>
      <ul className="flex flox-row gap-4 justify-center">{children}</ul>
    </div>
  );
};

function TechnoBadges() {
  return (
    <section className="my-8 flex flex-col">
      <m.h2
        style={lilitaOne.style}
        className="special-underline py-4"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Favorite Toolkit
      </m.h2>
      <div className="flex flex-wrap w-full gap-4">
        <BadgeGrouping label="Frontend">
          <Badge
            label="Next.js"
            img={NextLogo}
            colorGradient={["#000000", "#a1a3bb"]}
          />
          <Badge
            label="TailwindCSS"
            img={TailwindLogo}
            colorGradient={["#24A2B8", "#0ab970"]}
          />
        </BadgeGrouping>
        <BadgeGrouping label="Smart Contracts">
          <Badge
            label="Solidity"
            img={SolidityLogo}
            colorGradient={["#000000", "#a1a3bb"]}
          />
          <Badge
            label="Ethereum"
            img={EtherLogo}
            colorGradient={["#677eda", "#9BAADE"]}
          />
        </BadgeGrouping>
        <BadgeGrouping label="Backend">
          <Badge
            label="Node.js"
            icon={faNodeJs}
            colorGradient={["#78B360", "#38771c"]}
          />
          <Badge
            label="SQL"
            text="SQL"
            colorGradient={["#066d89", "#36dff8"]}
          />
        </BadgeGrouping>
        <BadgeGrouping label="CI/CD">
          <Badge
            label="Docker"
            icon={faDocker}
            colorGradient={["#099CEC", "#008BBB"]}
          />
        </BadgeGrouping>
        <BadgeGrouping label="Design">
          <Badge
            label="Figma"
            icon={faFigma}
            colorGradient={["#F24E1E", "#FF7262"]}
          />
        </BadgeGrouping>
      </div>
      <a
        href="/documents/CV.pdf"
        download={"Hire me !"}
        target="_blank"
        rel="noopener noreferrer"
        className="self-end mt-4 "
      >
        <p
          style={poppins.style}
          className="border-b border-[#646cff] arrow-animation"
        >
          &nbsp;&nbsp;Download CV
        </p>
      </a>
    </section>
  );
}

export default TechnoBadges;
