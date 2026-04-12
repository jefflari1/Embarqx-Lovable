import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-ship.jpg";

const FinalCTA = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Luxury cruise ship"
        className="w-full h-full object-cover opacity-30"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #061321 0%, #0D2A47 40%, #1B4266 70%, #0D2A47 100%)' }} />
      {/* Warm glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#D7C08A]/[0.07] blur-[120px] pointer-events-none" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-6">
          The Voyage Begins
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Let's Build the Next{" "}
          <span className="italic text-gradient-gold">Iconic Voyage</span>
        </h2>
        <p className="font-body text-lg text-[#B8C4D1] mb-10 leading-relaxed">
          Whether you're an investor, operator, sponsor, talent partner, or
          strategic collaborator — the right conversation starts here.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 font-body font-semibold text-base rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all glow-gold"
          >
            Start a Conversation
          </Link>
          <Link
            to="/investors"
            className="px-8 py-4 font-body font-semibold text-base rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all"
          >
            Investment Overview
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
