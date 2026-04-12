import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Sparkles,
  Handshake,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/about-hero.jpg";
import originsImg from "@/assets/about-origins.jpg";
import visionImg from "@/assets/about-vision.jpg";
import partnersImg from "@/assets/about-partners.jpg";
import ambitionImg from "@/assets/about-ambition.jpg";
import closingImg from "@/assets/about-closing.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.6, delay: i * 0.1 },
});

const beliefs = [
  { icon: Users, title: "Audience matters first", text: "The strongest voyages are built around clear audience identity and emotional relevance, not generic appeal." },
  { icon: Sparkles, title: "Experience drives value", text: "Premium hospitality, programming, atmosphere, and access all shape how people remember and value the voyage." },
  { icon: Handshake, title: "Partnerships shape scale", text: "The right operators, sponsors, collaborators, and talent-side relationships create stronger execution and broader long-term opportunity." },
  { icon: TrendingUp, title: "Concepts should compound", text: "A strong launch should not end as a one-time event. It should become the basis for recurring growth, deeper loyalty, and broader platform value." },
];

const partnerLenses = [
  "Selective alignment",
  "Premium execution",
  "Long-term value creation",
  "Platform-minded growth",
];

const About = () => (
  <>
    <Navbar />
    <main className="min-h-screen">

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Refined ocean horizon with vessel silhouette at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={768}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsla(212,60%,7%,0.78) 0%, hsla(210,55%,10%,0.6) 40%, hsla(207,40%,22%,0.85) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.06),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              About EmbarqX
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Building a premium platform for experiences that matter at sea.
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              EmbarqX was created to move beyond one-off cruise concepts and build a premium themed voyage platform where audience identity, curated experience design, and aligned partnerships can create lasting long-term value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Partner With EmbarqX
              </Link>
              <Link
                to="/concept"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-body font-semibold tracking-wide hover:bg-muted/40 transition-colors"
              >
                See the Platform Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: WHY EMBARQX WAS CREATED — lighter slate-blue ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "linear-gradient(180deg, hsl(207 40% 22%) 0%, hsl(210 45% 20%) 50%, hsl(210 50% 17%) 100%)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                Why EmbarqX was created
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                The strongest premium travel experiences are increasingly shaped by identity, culture, community, access, and the quality of the experience itself. Yet too many voyage concepts remain isolated activations rather than the foundation for something bigger.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                EmbarqX was created to build a more intentional model — one where strong concepts, premium hospitality, curated programming, and the right partnerships can come together as part of a platform designed to grow over time.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                This is not about creating a single memorable sailing. It is about building a premium experience company capable of launching differentiated voyages with stronger audience resonance, broader commercial potential, and long-term platform value.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={originsImg}
                  alt="Premium cruise deck at dusk"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE FOUNDER VISION — deep navy ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(212 60% 9%) 40%, hsl(210 55% 11%) 100%)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={visionImg}
                  alt="Ship bridge at twilight with panoramic ocean view"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                The founder vision
              </h2>
              <p className="font-body text-base text-primary italic mb-8">
                EmbarqX is rooted in the belief that the most valuable premium experiences are built where concept, culture, partnership, and execution align.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                The vision behind EmbarqX is not to become another generic cruise brand. It is to create a platform that originates distinctive voyage concepts, aligns the right partners around them, and turns strong ideas into experiences with repeatable long-term value.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                That means thinking beyond transactions and beyond one-time events. It means building with intention — choosing the right concepts, selecting the right partners, and designing experiences that people do not just attend, but identify with.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                At its core, EmbarqX is about creating a more strategic and elevated model for themed travel — one where premium experiences can become lasting platform assets rather than isolated moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT EMBARQX BELIEVES (LIGHT PANEL) ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "rgba(245, 241, 232, 0.94)" }}
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold !text-[hsl(212,60%,7%)]">
              What EmbarqX believes
            </h2>
            <p className="font-body text-lg text-[hsl(212,25%,35%)] leading-relaxed mt-4">
              The platform is built around a few core ideas that shape every concept, partnership, and experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                {...stagger(i)}
                className="bg-white/60 rounded-xl border border-[hsl(40,30%,80%)] p-8 hover:border-[hsl(40,40%,55%)]/30 transition-all duration-500"
              >
                <b.icon className="w-8 h-8 text-[hsl(40,40%,45%)] mb-5" />
                <h3 className="font-display text-lg font-semibold !text-[hsl(212,60%,7%)] mb-3">{b.title}</h3>
                <p className="font-body text-sm text-[hsl(212,25%,35%)] leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HOW EMBARQX THINKS ABOUT PARTNERSHIPS — slate-blue ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "linear-gradient(180deg, hsl(210 50% 14%) 0%, hsl(207 45% 20%) 50%, hsl(210 50% 14%) 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.04),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                How EmbarqX thinks about partnerships
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                EmbarqX is not designed for every possible partner. It is designed for the right ones — operators, investors, sponsors, and talent-side collaborators who understand the value of building differentiated premium experiences with long-term potential.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                The best partnerships are not purely transactional. They are aligned around concept quality, audience relevance, premium execution, and the opportunity to create something that can grow beyond a single activation.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                That is why EmbarqX places so much importance on strategic fit, selective alignment, and building with partners who see both the creative and commercial value of a premium platform approach.
              </p>

              <div className="flex flex-wrap gap-3">
                {partnerLenses.map((lens) => (
                  <span
                    key={lens}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-card border border-border font-body text-sm text-foreground"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary" />
                    {lens}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={partnersImg}
                  alt="Strategic partnership on premium vessel deck"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: THE LONG-TERM AMBITION — deep navy ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(207 45% 18%) 50%, hsl(210 50% 17%) 100%)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                The long-term ambition
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                The ambition behind EmbarqX is to build more than a single concept or narrow category. It is to create a premium themed voyage platform with the ability to launch, refine, and expand differentiated experiences across multiple high-engagement audiences over time.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                That includes flagship activations, recurring themed voyages, broader partner ecosystems, and stronger long-term brand value built around concepts that resonate deeply with the communities they serve.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                The ultimate goal is to create a company that sits at the intersection of premium travel, culture, audience affinity, and strategic platform building — a company that turns strong ideas into experiences with lasting significance and value.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={ambitionImg}
                  alt="Aerial view of cruise ship sailing toward sunset"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING CTA ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={closingImg}
          alt="Twilight ocean with vessel silhouette and warm glow"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={768}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsla(212,60%,7%,0.82) 0%, hsla(210,50%,14%,0.7) 50%, hsla(212,60%,7%,0.88) 100%)",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.07),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Build something with lasting value
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              EmbarqX is designed for the right partners, collaborators, and investors who believe premium experiences can become much more than one-time moments when they are built with strong concepts, aligned partnerships, and long-term vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Partner With EmbarqX
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-body font-semibold tracking-wide hover:bg-muted/40 transition-colors"
              >
                Discuss a Strategic Opportunity
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
