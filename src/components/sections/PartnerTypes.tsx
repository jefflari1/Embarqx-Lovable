import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Megaphone, Users } from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Cruise Operators",
    description: "Expand into differentiated premium concepts, unlock new thematic spaces, and create stronger recurring voyage opportunities without having to originate the full vision internally.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Participate in a platform designed to create value through recurring themed voyages, strategic partnerships, and multiple monetization layers beyond ticket sales.",
  },
  {
    icon: Megaphone,
    title: "Sponsors & Brands",
    description: "Enter premium audience environments where cultural relevance, immersive programming, and identity-driven experiences create stronger activation potential.",
  },
  {
    icon: Users,
    title: "Talent & Strategic Collaborators",
    description: "Translate influence, audience connection, and cultural relevance into premium themed experiences with long-term strategic value.",
  },
];

const PartnerTypes = () => (
  <section className="py-24" style={{ background: 'linear-gradient(180deg, #0D2A47 0%, #1B4266 50%, #0D2A47 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          Partnership Opportunities
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Every seat at this table is designed to win.
        </h2>
        <p className="font-body text-lg text-[#B8C4D1] max-w-3xl mx-auto">
          EmbarqX is designed to create value by aligning the right operators, investors, sponsors, and talent-side collaborators around premium voyage concepts with long-term platform potential.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="gradient-card rounded-xl p-8 border border-border hover:border-gold/20 transition-all duration-500 group flex flex-col"
          >
            <p.icon className="w-8 h-8 text-gold mb-5" />
            <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
            <p className="font-body text-sm text-[#B8C4D1] leading-relaxed flex-1">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          to="/partners"
          className="font-body text-sm font-semibold text-gold hover:text-gold-warm transition-colors"
        >
          Explore the full partnership model →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PartnerTypes;
