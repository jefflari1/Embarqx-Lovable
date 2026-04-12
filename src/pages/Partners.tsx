import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Megaphone, Users } from "lucide-react";

const partnerBlocks = [
  {
    icon: Building2,
    title: "Cruise Operators",
    description:
      "Partner on differentiated voyage concepts that bring stronger audience identity, elevated programming, and a path toward recurring premium experiences, while opening access to new thematic spaces and customer segments they may not currently reach without having to originate the full vision internally.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description:
      "Participate in a premium experience platform designed to create value through recurring themed voyages, strategic partnerships, and multiple monetization layers beyond ticket sales.",
  },
  {
    icon: Megaphone,
    title: "Sponsors & Brands",
    description:
      "Participate in premium voyage environments where audience identity, immersive programming, and cultural relevance create deeper brand connection and stronger activation potential.",
  },
  {
    icon: Users,
    title: "Talent & Strategic Collaborators",
    description:
      "Join a platform designed to translate influence, audience connection, and cultural relevance into premium themed experiences with long-term potential.",
  },
];

const Partners = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section
          className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #061321 0%, #0D2A47 50%, #1B4266 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 70%, hsla(40,40%,55%,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-5">
                Built for the Right Partners
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                Partnerships That Create Long-Term Value at Sea
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5">
                EmbarqX is built to align the right operators, investors,
                sponsors, and talent-side collaborators around premium voyage
                concepts with long-term strategic value.
              </p>
              <p className="font-body text-base text-muted-foreground/90 leading-relaxed mb-10">
                By bringing together the right mix of partners, EmbarqX is
                positioned to create differentiated voyages that carry stronger
                audience identity, greater cultural relevance, and broader
                commercial potential over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors text-center"
                >
                  Discuss Strategic Partnership
                </Link>
                <Link
                  to="/concept"
                  className="px-8 py-3.5 rounded-md border border-border text-foreground font-body font-semibold text-sm tracking-wide hover:bg-muted/40 transition-colors text-center"
                >
                  See the Vision
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content — Warm editorial light panel */}
        <section
          className="py-24 md:py-32"
          style={{ background: "rgba(245, 241, 232, 0.94)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 !text-[hsl(212,60%,7%)]">
                Built for the Right Partners
              </h2>
              <p className="font-body text-lg text-[hsl(212,25%,35%)] leading-relaxed mb-5">
                EmbarqX is designed to work with the right operators, investors,
                sponsors, and talent-side partners who see the opportunity to
                create premium experiences with lasting commercial potential.
              </p>
              <p className="font-body text-base text-[hsl(212,25%,35%)]/90 leading-relaxed">
                The strongest themed voyages are not built in isolation. They are
                built by aligning execution, audience, talent, programming, and
                commercial strategy into one coherent platform. That is where
                EmbarqX creates value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {partnerBlocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="bg-white/60 rounded-xl border border-[hsl(40,30%,80%)] p-10 hover:border-[hsl(40,40%,55%)]/30 transition-all duration-500"
                >
                  <block.icon className="w-8 h-8 text-[hsl(40,40%,45%)] mb-5" />
                  <h3 className="font-display text-xl font-bold mb-4 !text-[hsl(212,60%,7%)]">
                    {block.title}
                  </h3>
                  <p className="font-body text-sm text-[hsl(212,25%,35%)] leading-relaxed">
                    {block.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="partners-cta"
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0D2A47 0%, #1B4266 50%, #0D2A47 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,40%,55%,0.05) 0%, transparent 70%)",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Create Something with Lasting Strategic Value
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                The right partnership can turn a strong concept into a recurring
                platform with deeper audience connection, broader commercial
                potential, and long-term value.
              </p>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Discuss Strategic Partnership
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;
