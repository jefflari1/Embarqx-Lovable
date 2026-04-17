import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ship.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <video
        src="/hero-video.mp4"
        poster={heroImage}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061321]/75 via-[#0D2A47]/55 to-[#061321]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061321]/70 to-transparent" />
      {/* Warm champagne glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#D7C08A]/[0.04] blur-[120px] pointer-events-none" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-6"
        >
          Premium Themed Voyages, Reimagined
        </motion.p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
          Where Themed Worlds{" "}
          <span className="text-gradient-gold italic">Come to Sea.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-[#B8C4D1] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          EmbarqX creates high-impact themed cruise concepts that unite talent,
          community, hospitality, and commercial strategy into premium voyages
          built for long-term platform value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/concept"
            className="px-8 py-4 font-body font-semibold text-base rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all glow-gold"
          >
            See the Vision
          </Link>
          <Link
            to="/partners"
            className="px-8 py-4 font-body font-semibold text-base rounded-full border border-border text-foreground hover:bg-muted transition-all"
          >
            Partner With EmbarqX
          </Link>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "Celebrity-led concepts",
            "Operator-ready partnerships",
            "Sponsor-integrated experiences",
            "Repeatable platform economics",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2 font-body text-sm tracking-wide text-[#B8C4D1]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
