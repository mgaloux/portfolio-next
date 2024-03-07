import Link from "next/link";
import Image from "next/image";
import { poppins } from "../styles/fonts/fonts";

const LogoBackHomeButton = () => {
  return (
    <Link href="/#home">
      <Image
        priority={true}
        className="hover:scale-110"
        width={32}
        height={32}
        src="/images/logo.svg"
        alt="salope"
      />
    </Link>
  );
};

const NavbarLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link href={url} className="transition-colors hover:text-white">
      {label}
    </Link>
  );
};

const Links = () => {
  return (
    <div className="" style={poppins.style}>
      <div className="flex flex-row text-sm text-[#888] gap-8 items-center">
        <NavbarLink label="Projects" url="/projects"/>
        <NavbarLink label="Mentoring" url="/mentoring"/>
        <NavbarLink label="Blog" url="/blog"/>
        <NavbarLink label="Contact" url="/contact"/>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-black bg-opacity-80 border-b border-gray-700 w-screen px-[15%] flex justify-between items-center h-16 fixed top-0 z-20">
      <LogoBackHomeButton />
      <Links />
    </header>
  );
};

export default Navbar;
