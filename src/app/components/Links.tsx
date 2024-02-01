import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { poppins } from "../styles/fonts/fonts";

export const ExternalLink = ({
  label,
  url,
  icon,
}: {
  label: string;
  url: string;
  icon?: IconProp;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-sm"
    >
      {icon && <FontAwesomeIcon icon={icon} size="lg" className="pr-2" />}
      {label}
    </a>
  );
};

export const InnerLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link href={url} className="text-sm hover:underline">
      {label}
    </Link>
  );
};

export const DownloadLink = ({
  label,
  filename,
  url,
}: {
  label: string;
  filename: string;
  url: string;
}) => {
  return (
    <a
    style={poppins.style}
      href={url}
      download={filename}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline poppins text-sm"
    >
      {label}
    </a>
  );
};
