"use client";

import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion as m } from "framer-motion";
import "../index.css";
import Footer from "../components/Footer";
import { lilitaOne, poppins } from "@/fonts/fonts";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <Navbar />
      <main className="w-[100vw] px-[15%] my-32">
        <h1 style={lilitaOne.style}>Let's connect !</h1>
        <p style={poppins.style} className="text-gray-500 my-2">
          Whether you need me to build your project, want to access my network
          of talented developers, or just chat about tech, I'm all ears to new
          connections !
        </p>
        <h2 className="my-8 special-underline" style={lilitaOne.style}>
          Socials Links
        </h2>
        <m.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <a
            href="https://linkedin.com/in/martingaloux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white arrow-animation border-blue-500 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="pr-1 text-blue-500"
            />{" "}
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Zequar"
            className="arrow-animation text-white border-gray-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" className="pr-1" />{" "}
            Github
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
            Twitter • X
          </a>
          <a
            href="mailto:martin.galoux@epitech.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white arrow-animation border-red-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="pr-1 text-red-400"
            />{" "}
            hello@mgaloux.dev
          </a>
          <a
            href="https://calendly.com/mgaloux/introducing-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white arrow-animation border-orange-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
          >
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              className="pr-1 text-orange-400"
            />{" "}
            Book a call
          </a>
        </m.div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
