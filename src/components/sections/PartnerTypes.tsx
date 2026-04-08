import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Star, Megaphone, TrendingUp, Users } from "lucide-react";

const partners = [
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Participate in a scalable themed cruise platform with multiple revenue streams and franchise potential.",
    cta: "Explore Investment",
    link: "/investors",
  },
  {
    icon: Building2,
    title: "Cruise Operators",
    description: "Access premium themed programming that drives demand, elevates brand perception, and fills cabins at premium rates.",
    cta: "Operator Partnerships",
    link: "/partners",
  },
  {
    icon: Megaphone,
    title: "Sponsors & Brands",
    description: "Reach captive, high-value audiences through immersive brand activations in an unforgettable environment.",
    cta: "Sponsorship Opportunities",
    link: "/partners",
  },
  {
    icon: Star,
    title: "Celebrity & Talent Partners",
    description: "Create signature voyages that deepen fan connection, generate new revenue, and build lasting brand equity at sea.",
    cta: "Talent Collaborations",
    link: "/partners",
  },
  {
    icon: Users,
    title: "Strategic Collaborators",
    description: "Join the EmbarqX ecosystem to co-create, distribute, or enhance premium themed cruise experiences worldwide.",
    cta: "Collaborate With Us",
    link: "/contact",
  },
];

const PartnerTypes = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          Who We Work With
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Built for Strategic Partners
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`gradient-card rounded-xl p-8 border border-border hover:border-gold/30 transition-all duration-500 group flex flex-col ${
              i >= 3 ? "lg:col-span-1" : ""
            }`}
          >
            <p.icon className="w-8 h-8 text-gold mb-5" />
            <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
              {p.description}
            </p>
            <Link
              to={p.link}
              className="font-body text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
            >
              {p.cta} →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerTypes;
