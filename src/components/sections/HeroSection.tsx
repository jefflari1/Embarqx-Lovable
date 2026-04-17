import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#061321]">
    {/* Background */}
    <div className="absolute inset-0">
      <video
        src="/hero-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="w-full h-full object-cover"
      />
      {/* Light base overlay — desktop ~22%, mobile ~32% for readability */}
      <div className="absolute inset-0 bg-[#061321]/30 md:bg-[#061321]/20" />
      {/* Subtle bottom fade behind text area only */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061321]/60 via-[#061321]/10 to-transparent" />
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
          EmbarqX™ creates high-impact themed cruise concepts that unite talent,
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
          className="mt-12 flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-6 xl:gap-x-10 gap-y-3"
        >
          {[
            "Celebrity-led concepts",
            "Operator-ready partnerships",
            "Sponsor-integrated experiences",
            "Repeatable platform economics",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2 font-body text-sm font-medium tracking-wide text-[#D5DEE8] lg:whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
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
