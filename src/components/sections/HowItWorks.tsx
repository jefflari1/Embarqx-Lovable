import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Audience", description: "Start with a defined community whose identity and passion can drive premium demand." },
  { number: "02", title: "Concept", description: "Build around a distinct theme that gives the experience meaning beyond travel." },
  { number: "03", title: "Talent & Programming", description: "Curate the right mix of talent and moments that people deeply connect with." },
  { number: "04", title: "Strategic Partners", description: "Align operators, sponsors, and collaborators to strengthen execution and scale." },
  { number: "05", title: "Experience Design", description: "Hospitality, atmosphere, and storytelling that feel elevated and worthy of premium demand." },
  { number: "06", title: "Platform Value", description: "One sailing becomes recurring voyages, stronger brand equity, and long-term value." },
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
        <p className="font-body text-base md:text-lg text-[#B8C4D1] max-w-3xl mx-auto mt-6 leading-relaxed">
          Six elements aligned into one coherent strategy — from concept to launch.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="gradient-card rounded-xl border border-border p-6 group hover:border-gold/30 transition-all duration-500"
          >
            <span className="font-body text-xs tracking-[0.2em] text-gold/60 mb-3 block">{step.number}</span>
            <h3 className="font-display text-lg font-bold mb-3 text-gradient-gold">{step.title}</h3>
            <p className="font-body text-sm text-[#8D9AA8] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default HowItWorks;
