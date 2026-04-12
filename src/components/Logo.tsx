import { Link } from "react-router-dom";
import logoSrc from "@/assets/embarqx-logo.png";

interface LogoProps {
  variant?: "navbar" | "footer";
  linked?: boolean;
}

const sizeClasses = {
  navbar: "h-[38px] md:h-[42px]",
  footer: "h-[34px] md:h-[38px]",
};

function Logo({ variant = "navbar", linked = true }: LogoProps) {
  const img = (
    <img
      src={logoSrc}
      alt="EmbarqX logo"
      className={`${sizeClasses[variant]} w-auto object-contain brightness-0 invert`}
      draggable={false}
    />
  );

  if (!linked) return img;

  return (
    <Link to="/" className="inline-flex items-center">
      {img}
    </Link>
  );
}

export default Logo;
