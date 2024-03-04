import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { ExternalLink, InnerLink, DownloadLink } from "./Links";
import { lilitaOne } from "@/fonts/fonts";

const Category = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="mb-8 flex flex-col">
      <h3 style={lilitaOne.style} className="text-2xl pb-2">
        {label}
      </h3>
      {children}
    </div>
  );
};

function Footer() {
  return (
    <footer
      className="mt-16 mb-0 flex flex-col bg-black px-[15%] py-8 end-0"
      id="contact"
    >
      <div className="flex flex-wrap justify-start gap-32">
        <Category label="Contact">
          <ExternalLink
            label="Github"
            icon={faGithub}
            url="https://github.com/Zequar"
          />
          <ExternalLink
            label="Twitter"
            icon={faTwitter}
            url="https://twitter.com/ZequarDev"
          />
          <ExternalLink
            label="Email"
            icon={faEnvelope}
            url="mailto:hello@mgaloux.dev"
          />
          <ExternalLink
            label="LinkedIn"
            icon={faLinkedin}
            url="https://https://linkedin.com/in/martingaloux"
          />
          <ExternalLink
            label="Calendly"
            icon={faPhone}
            url="https://calendly.com/mgaloux/introducing-meeting"
          />
        </Category>
        <Category label="Services">
          <InnerLink url="/blog" label="Blog" />
          <InnerLink url="/mentoring" label="Mentoring" />
          <InnerLink url="/talents" label="Talent Referral" />
        </Category>
        <Category label="Career">
          <DownloadLink
            label="Download CV"
            filename="Hire me !"
            url="/documents/CV.pdf"
          />
          <InnerLink url="/testimonials" label="Testimonials" />
          <InnerLink url="/certificates" label="Certificates" />
          <InnerLink url="/tech-stack" label="Full Technical Stack" />
        </Category>
      </div>

      <p className="self-center text-gray-600">
        <i>
          Created with 💙 by Martin Galoux. © GLX SERVICES, EST. 2022, All
          rights reserved
        </i>
      </p>
    </footer>
  );
}

export default Footer;
