import { motion } from "framer-motion";
import { Sparkles, Handshake, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Signature Experiences",
    description:
      "We originate themed voyage concepts designed to bring together audience identity, premium hospitality, curated programming, and unforgettable moments at sea.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "We align the right operators, sponsors, talent-side collaborators, and strategic partners around concepts designed for audience growth, programming strength, and long-term platform expansion.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Cruise IP",
    description:
      "Each concept is designed to become more than a single sailing, creating the foundation for recurring voyages, deeper brand equity, and broader long-term commercial value.",
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
          How EmbarqX Creates Value
        </h2>
        <p className="font-body text-[#B8C4D1] text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          EmbarqX creates value by developing premium voyage concepts that align select audiences, premium experiences, strategic partnerships, and long-term platform potential.
        </p>
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
