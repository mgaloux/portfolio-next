"use client";

import { motion as m } from "framer-motion";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { lilitaOne, poppins } from "@/fonts/fonts";

export default function Headpage() {
  return (
    <div>
      <section className="pt-32">
        <m.h1
          style={lilitaOne.style}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nice to meet you !
        </m.h1>
        <m.p
          style={poppins.style}
          className="text-2xl font-medium"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm <b>Martin</b>, Full Stack Web3 Developer
        </m.p>
        <m.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <span
            className="text-white border-green-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            🟢 Currently open to work
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Zequar"
            className="arrow-animation text-white border-gray-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" className="pr-1" />{" "}
            Zequar
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ZequarDev"
            className="arrow-animation text-white border-blue-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color="lightblue"
              className="pr-1"
            />{" "}
            ZequarDev
          </a>
          <a
            href="mailto:martin.galoux@epitech.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-red-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="pr-1 text-red-400"
            />{" "}
            hello@mgaloux.dev
          </a>
        </m.div>
      </section>
    </div>
  );
}
