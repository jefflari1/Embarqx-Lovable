import { motion } from "framer-motion";

const pillars = [
  {
    title: "A Platform, Not a Single Event",
    description:
      "EmbarqX is designed to move beyond one-time activations and build a recurring ecosystem of premium themed voyages.",
  },
  {
    title: "Designed for Identity-Driven Demand",
    description:
      "From sports and music to wellness, entertainment, and personal growth, each concept is built to connect with a specific audience that sees the voyage as part of its identity.",
  },
  {
    title: "Designed for Long-Term Value",
    description:
      "Each sailing is meant to create more than ticket revenue, opening the door to repeat launches, partnerships, sponsorship, content, and brand equity over time.",
  },
];

const VisionSection = () => (
  <section id="vision" className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #0A1E35 0%, #0D2A47 50%, #0A1E35 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
          The Platform
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          The Vision Behind EmbarqX
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
          EmbarqX is a premium themed cruise platform — turning culture-led concepts into a repeatable portfolio of flagship voyages at sea.
        </p>
        <p className="font-body text-base text-muted-foreground/90 leading-relaxed">
          When premium travel is rooted in identity, community, and unforgettable programming, it creates something far more powerful — emotional demand, commercial differentiation, and lasting brand value.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="gradient-card rounded-xl border border-border p-8"
          >
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
              {pillar.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
