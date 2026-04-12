import { motion } from "framer-motion";
import { Sparkles, Handshake, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Signature Experiences",
    description:
      "Curated, emotionally rich themed voyages that merge culture, celebrity, entertainment, and luxury into immersive multi-day experiences at sea.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Collaborative frameworks connecting cruise operators, talent partners, sponsors, and brands into cohesive commercial ecosystems around each voyage.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Cruise IP",
    description:
      "A repeatable platform model that transforms themed cruise concepts into franchisable intellectual property — designed from day one to scale.",
  },
];

const WhatWeCreate = () => (
  <section className="py-24" style={{ background: 'linear-gradient(180deg, #061321 0%, #0A1E35 50%, #061321 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          The Platform
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          What We Create
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="gradient-card rounded-xl p-8 border border-border hover:border-gold/20 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:glow-gold transition-shadow duration-500">
              <pillar.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-[#B8C4D1] leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeCreate;
