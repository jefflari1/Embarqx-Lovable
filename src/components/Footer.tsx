import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "The Concept", path: "/concept" },
      { label: "Experiences", path: "/experiences" },
      { label: "Ships & Venues", path: "/ships" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  {
    title: "Collaborate",
    links: [
      { label: "Partners", path: "/partners" },
      { label: "Investors", path: "/investors" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "FAQ", path: "/faq" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-gold/20 bg-navy-deep">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Logo variant="footer" />
          <p className="text-[#8D9AA8] text-sm leading-relaxed max-w-xs">
            Premium themed cruise concepts that unite culture, celebrity, community,
            entertainment, luxury, and destination into unforgettable voyages built for scale.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4">
              {group.title}
            </h4>
            <div className="flex flex-col gap-2">
              {group.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#8D9AA8] text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#8D9AA8] text-xs">
          © {new Date().getFullYear()} EmbarqX. All rights reserved.
        </p>
        <p className="text-[#8D9AA8] text-xs">
          Premium Themed Cruise Experiences
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
