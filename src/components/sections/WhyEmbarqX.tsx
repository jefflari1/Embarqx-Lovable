import { motion } from "framer-motion";
import { Globe, Users, Layers, Award, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Global Reach", description: "Themed voyages that attract international audiences and unlock premium markets worldwide." },
  { icon: Users, title: "Community-Driven", description: "Built-in audience engagement through passion communities that drive demand and repeat participation." },
  { icon: Layers, title: "Platform Model", description: "Scalable IP architecture that transforms each concept into a repeatable, licensable franchise." },
  { icon: Award, title: "Premium Positioning", description: "Every touchpoint designed to signal exclusivity, quality, and strategic sophistication." },
  { icon: Zap, title: "Commercial Engine", description: "Multiple revenue streams — ticketing, sponsorship, media, licensing, merchandise, hospitality." },
  { icon: Shield, title: "Partner-Ready", description: "Structured for operators, sponsors, talent, and investors to participate with clarity and confidence." },
];

const WhyEmbarqX = () => (
  <section className="py-24 border-t border-gold/20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          Strategic Value
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Why EmbarqX
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-xl border border-border hover:border-gold/20 transition-all duration-500 group"
          >
            <r.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-lg font-bold mb-2">{r.title}</h3>
            <p className="font-body text-sm text-[#B8C4D1] leading-relaxed">
              {r.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyEmbarqX;
