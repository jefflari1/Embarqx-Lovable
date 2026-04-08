import { motion } from "framer-motion";

const elements = [
  { label: "Audience", color: "text-primary" },
  { label: "Talent", color: "text-gold" },
  { label: "Operator", color: "text-primary" },
  { label: "Sponsor", color: "text-gold" },
  { label: "Destination", color: "text-primary" },
  { label: "Programming", color: "text-gold" },
];

const HowItWorks = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
          The Framework
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          How the Platform Works
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="gradient-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {elements.map((el, i) => (
              <div key={el.label} className="flex items-center gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass px-5 py-3 rounded-lg"
                >
                  <span className={`font-body font-semibold text-sm md:text-base ${el.color}`}>
                    {el.label}
                  </span>
                </motion.div>
                {i < elements.length - 1 && (
                  <span className="text-muted-foreground text-xl font-light">+</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center my-8">
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-gold/50" />
          </div>
          <div className="text-center">
            <div className="inline-block px-8 py-4 rounded-xl border border-primary/30 glow-cyan">
              <p className="font-display text-xl md:text-2xl font-bold text-gradient-cyan">
                Premium Themed Voyage Platform
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
