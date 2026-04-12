import { motion } from "framer-motion";
import { Globe, Users, Layers, Award, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Audience-Led Demand", description: "Built around communities with strong identity and emotional pull — creating premium demand beyond generic cruise marketing." },
  { icon: Users, title: "Identity-Driven Experiences", description: "Voyages people identify with, not just attend — driving deeper engagement and long-term value." },
  { icon: Layers, title: "A Platform, Not a One-Off", description: "Flagship activations become recurring voyage concepts with broader portfolio potential over time." },
  { icon: Award, title: "Differentiated Positioning", description: "Talent, concept, programming, and audience relevance combine to stand apart from standard themed travel." },
  { icon: Zap, title: "Multi-Layer Value", description: "Premium ticketing, partnerships, sponsorship, content, and repeat launches — multiple revenue layers per concept." },
  { icon: Shield, title: "Built for the Right Partners", description: "Operators, investors, sponsors, and collaborators aligned around concepts with lasting strategic value." },
];

const WhyEmbarqX = () => (
  <section className="py-24" style={{ background: 'rgba(245,241,232,0.94)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">
          Strategic Value
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ color: '#0B1E33' }}>
          Why EmbarqX
        </h2>
        <p className="font-body text-base md:text-lg text-[#3A5068] max-w-3xl mx-auto mt-6 leading-relaxed">
          Six reasons the model is built differently — and designed to last.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-xl border border-[#B89B5E]/15 hover:border-[#B89B5E]/30 transition-all duration-500 group bg-white/60"
          >
            <r.icon className="w-8 h-8 text-[#B89B5E] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#0B1E33' }}>{r.title}</h3>
            <p className="font-body text-sm text-[#3A5068] leading-relaxed">
              {r.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyEmbarqX;
