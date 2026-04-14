import { Link } from "react-router-dom";
import logoSrc from "@/assets/embarqx-logo.png";

interface LogoProps {
  variant?: "navbar" | "footer";
  linked?: boolean;
}

const sizeClasses = {
  navbar: "h-[90px] md:h-[110px]",
  footer: "h-[50px] md:h-[60px]",
};

function Logo({ variant = "navbar", linked = true }: LogoProps) {
  const img = (
    <img
      src={logoSrc}
      alt="EmbarqX logo"
      className={`${sizeClasses[variant]} w-auto object-contain`}
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
