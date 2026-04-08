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
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
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
          <span className="italic text-gradient-cyan">Iconic Voyage</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
          Whether you're an investor, operator, sponsor, talent partner, or
          strategic collaborator — we'd love to start a conversation about
          what's possible.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 font-body font-semibold text-base rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all glow-cyan"
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
