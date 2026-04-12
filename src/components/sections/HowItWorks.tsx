import { motion } from "framer-motion";

const elements = [
  { label: "Audience", color: "text-gold" },
  { label: "Talent", color: "text-gold-warm" },
  { label: "Operator", color: "text-gold" },
  { label: "Sponsor", color: "text-gold-warm" },
  { label: "Destination", color: "text-gold" },
  { label: "Programming", color: "text-gold-warm" },
];

const HowItWorks = () => (
  <section className="py-24" style={{ background: 'linear-gradient(180deg, #071A2E 0%, #0D2A47 50%, #071A2E 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
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
                  <span className="text-[#8D9AA8] text-xl font-light">+</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center my-8">
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-gold-soft/50" />
          </div>
          <div className="text-center">
            <div className="inline-block px-8 py-4 rounded-xl border border-gold/30 glow-gold">
              <p className="font-display text-xl md:text-2xl font-bold text-gradient-gold">
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
