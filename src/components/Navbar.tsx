import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "The Concept", path: "/concept" },
  { label: "Experiences", path: "/experiences" },
  { label: "Partners", path: "/partners" },
  { label: "Investors", path: "/investors" },
  { label: "Ships & Venues", path: "/ships" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center px-6">
        {/* Left zone: logo */}
        <div className="w-[180px] flex-shrink-0 flex items-center">
          <Logo variant="navbar" />
        </div>

        {/* Center zone: nav links */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-2 font-body font-semibold tracking-wide transition-colors duration-300 rounded-md whitespace-nowrap ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-[#E8E4DC] hover:text-white"
                }`}
                style={{ fontSize: '18px' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right zone: CTA */}
        <div className="hidden lg:flex w-[180px] flex-shrink-0 items-center justify-end">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-body font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-base font-body font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-gold bg-muted"
                      : "text-[#8D9AA8] hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-5 py-3 text-center font-body font-semibold rounded-full bg-primary text-primary-foreground"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
