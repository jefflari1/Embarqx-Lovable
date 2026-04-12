import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Audience", description: "We begin with a clearly defined audience whose identity, passion, and community alignment can support stronger emotional demand and premium positioning." },
  { number: "02", title: "Concept", description: "Each voyage starts with a concept built around a distinct theme, cultural energy, or point of connection that gives the experience meaning beyond travel itself." },
  { number: "03", title: "Talent & Programming", description: "The right mix of talent, immersive programming, and curated moments helps transform a strong concept into an experience people deeply connect with and remember." },
  { number: "04", title: "Strategic Partners", description: "Operators, sponsors, collaborators, and other aligned partners help strengthen execution, audience growth, commercial potential, and long-term platform expansion." },
  { number: "05", title: "Premium Experience Design", description: "Hospitality, atmosphere, access, storytelling, and on-board experience design work together to create a voyage that feels elevated, differentiated, and worthy of premium demand." },
  { number: "06", title: "Platform Value", description: "When these elements are aligned, the result is more than a single sailing. It becomes the foundation for recurring voyages, stronger brand equity, and broader long-term value." },
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
          EmbarqX brings together the core elements of a premium themed voyage into one aligned platform, turning strong concepts into experiences with deeper audience connection and broader long-term value.
        </p>
        <p className="font-body text-sm md:text-base text-[#8D9AA8] max-w-3xl mx-auto mt-4 leading-relaxed">
          The strongest voyages are built by aligning the right audience, concept, talent, programming, partners, and experience design into one coherent strategy. EmbarqX is designed to help shape that alignment from concept to launch.
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

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-body text-sm md:text-base text-[#8D9AA8] max-w-3xl mx-auto mt-12 text-center leading-relaxed"
      >
        EmbarqX is built to connect these elements into a platform that can launch strong flagship experiences and grow into a repeatable portfolio over time.
      </motion.p>
    </div>
  </section>
);

export default HowItWorks;
