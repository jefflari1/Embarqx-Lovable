import * as React from "react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/embarqx-logo.png";

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navbar" | "footer";
  linked?: boolean;
}

const sizeClasses = {
  navbar: "h-[38px] md:h-[42px]",
  footer: "h-[34px] md:h-[38px]",
};

const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
  ({ variant = "navbar", linked = true, className = "", ...props }, ref) => {
    const img = (
      <span ref={ref} className={`inline-flex items-center ${className}`.trim()} {...props}>
        <img
          src={logoSrc}
          alt="EmbarqX logo"
          className={`${sizeClasses[variant]} w-auto object-contain brightness-0 invert`}
          draggable={false}
        />
      </span>
    );

    if (!linked) return img;

    return <Link to="/">{img}</Link>;
  },
);

Logo.displayName = "Logo";

export default Logo;
