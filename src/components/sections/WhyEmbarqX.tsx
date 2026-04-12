import { motion } from "framer-motion";
import { Globe, Users, Layers, Award, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Audience-Led Demand", description: "EmbarqX is designed around communities with strong identity, emotional pull, and the potential to create premium demand beyond generic cruise marketing." },
  { icon: Users, title: "Identity-Driven Experiences", description: "The strongest voyages are built around experiences people identify with, not just attend, creating deeper engagement and stronger long-term value." },
  { icon: Layers, title: "A Platform, Not a One-Off", description: "EmbarqX is structured to turn flagship activations into recurring voyage concepts with broader portfolio potential over time." },
  { icon: Award, title: "Differentiated Premium Positioning", description: "By combining talent, concept, programming, and audience relevance, EmbarqX creates premium voyages that stand apart from standard themed travel offers." },
  { icon: Zap, title: "Multi-Layer Value Creation", description: "Each concept is designed to create value through premium ticketing, partnerships, sponsorship, programming, repeat launches, and broader platform upside." },
  { icon: Shield, title: "Built for the Right Partners", description: "EmbarqX is designed to align the right operators, investors, sponsors, and talent-side collaborators around concepts with lasting strategic value." },
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
          EmbarqX is designed to turn strong concepts into premium voyages with deeper audience resonance, differentiated positioning, broader commercial potential, and a more scalable long-term platform.
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
