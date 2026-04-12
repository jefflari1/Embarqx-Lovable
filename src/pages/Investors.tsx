import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Star,
  Layers,
  TrendingUp,
  Gem,
  Target,
  Sparkles,
  Shield,
  BarChart3,
  Crown,
  Anchor,
  Music,
  Dumbbell,
  Gamepad2,
  Trophy,
  Palette,
} from "lucide-react";

import investorsHero from "@/assets/investors-hero.jpg";
import investorsAudience from "@/assets/investors-audience.jpg";
import investorsPlatform from "@/assets/investors-platform.jpg";
import investorsValue from "@/assets/investors-value.jpg";
import investorsRoadmap from "@/assets/investors-roadmap.jpg";
import investorsClosing from "@/assets/investors-closing.jpg";

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

/* ── Data ── */

const whyNowBlocks = [
  {
    icon: Users,
    title: "Identity-driven demand",
    text: "Audiences respond more strongly to experiences that reflect who they are and what they care about.",
  },
  {
    icon: Gem,
    title: "Premium pricing through differentiation",
    text: "Distinctive themed experiences can command stronger attention and reduce reliance on generic price competition.",
  },
  {
    icon: Layers,
    title: "Commercial upside beyond ticketing",
    text: "Themed voyages can create additional value through sponsors, programming, partnerships, premium access, and repeat concepts.",
  },
];

const platformPillars = [
  {
    icon: Sparkles,
    title: "Flagship concepts",
    text: "High-attention voyage ideas built around strong audience identity and premium programming.",
  },
  {
    icon: Target,
    title: "Strategic alignment",
    text: "The right operators, sponsors, talent-side collaborators, and partners brought together around each concept.",
  },
  {
    icon: TrendingUp,
    title: "Repeatable platform value",
    text: "Each successful concept creates the foundation for future launches, broader brand equity, and expanded commercial potential.",
  },
];

const valueLayers = [
  { label: "Base revenue", text: "Ticketing, premium cabins, and tiered access." },
  { label: "Experience revenue", text: "VIP moments, curated programming, premium hospitality, and exclusive participation." },
  { label: "Commercial partnerships", text: "Sponsorship, branded activations, and aligned collaborations." },
  { label: "Platform expansion", text: "Repeat sailings, broader concept rollout, and stronger audience retention." },
  { label: "Brand equity", text: "Long-term value created through differentiated concepts and recognizable themed experience IP." },
];

const standsApart = [
  { icon: Users, title: "Audience-led demand", text: "EmbarqX is designed around communities with strong identity, emotional pull, and the potential to create premium demand beyond generic cruise marketing." },
  { icon: Star, title: "Identity-driven experiences", text: "The strongest voyages are built around experiences people identify with, not just attend, creating deeper engagement and stronger long-term value." },
  { icon: Layers, title: "A platform, not a one-off", text: "EmbarqX is structured to turn flagship activations into recurring voyage concepts with broader portfolio potential over time." },
  { icon: Gem, title: "Differentiated premium positioning", text: "By combining talent, concept, programming, and audience relevance, EmbarqX creates premium voyages that stand apart from standard themed travel offers." },
  { icon: BarChart3, title: "Multi-layer value creation", text: "Each concept is designed to create value through premium ticketing, partnerships, sponsorship, programming, repeat launches, and broader platform upside." },
  { icon: Shield, title: "Built for the right partners", text: "EmbarqX is designed to align the right operators, investors, sponsors, and talent-side collaborators around concepts with lasting strategic value." },
];

const roadmapSteps = [
  { step: "01", title: "Launch a flagship concept", text: "A high-attention themed voyage built around a strong audience and premium story." },
  { step: "02", title: "Validate demand and partner alignment", text: "Measure audience response, sponsor interest, programming traction, and commercial fit." },
  { step: "03", title: "Expand into recurring experiences", text: "Return with new editions, adjacent communities, or related sub-themes." },
  { step: "04", title: "Build broader platform value", text: "Grow audience loyalty, strengthen partnerships, and create long-term thematic IP." },
];

const portfolioCategories = [
  { label: "Sports Legends at Sea", icon: Trophy },
  { label: "Poker & Gaming Voyages", icon: Gamepad2 },
  { label: "Wellness & Consciousness Voyages", icon: Dumbbell },
  { label: "Music & Culture Voyages", icon: Music },
  { label: "Custom Brand & Private Voyages", icon: Palette },
];

const backingBullets = [
  "a platform, not a one-time activation",
  "premium positioning, not generic inventory",
  "concept-led demand, not commodity selling",
  "long-term expansion potential, not a narrow single-theme model",
];

/* ── Page Component ── */

const Investors = () => {
  const scrollToCTA = () => {
    document.getElementById("investor-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* ─── SECTION 1: HERO ─── */}
        <section className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
          {/* Background image */}
          <img
            src={investorsHero}
            alt="Premium cruise vessel at twilight"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={768}
          />
          {/* Overlay gradients */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsla(212,60%,7%,0.82) 0%, hsla(210,55%,10%,0.7) 40%, hsla(212,60%,7%,0.88) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 60%, hsla(40,40%,55%,0.06) 0%, transparent 80%)",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Investment Opportunity
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
                A premium platform built for repeatable value at sea.
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                EmbarqX is building a premium themed cruise platform designed to turn flagship concepts into recurring experiences with differentiated positioning, multi-layer monetization, and long-term brand potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToCTA}
                  className="px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Discuss the Opportunity
                </button>
                <Link
                  to="/concept"
                  className="px-8 py-3.5 rounded-md border border-border text-foreground font-body font-semibold text-sm tracking-wide hover:bg-muted/40 transition-colors text-center"
                >
                  See the Platform Vision
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 2: WHY NOW — lighter slate-blue ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(210 45% 18%) 0%, hsl(207 42% 22%) 50%, hsl(210 45% 18%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why premium themed travel is becoming more valuable
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Travel is no longer only about destination. The strongest premium experiences are increasingly built around identity, culture, community, and curated access.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-center">
              {/* Cards */}
              <div className="lg:col-span-3 grid md:grid-cols-3 lg:grid-cols-1 gap-6">
                {whyNowBlocks.map((b, i) => (
                  <motion.div
                    key={b.title}
                    {...stagger(i)}
                    className="gradient-card rounded-xl border border-border p-8 hover:border-primary/20 transition-all duration-500"
                  >
                    <b.icon className="w-7 h-7 text-primary mb-4" />
                    <h3 className="font-display text-lg font-bold mb-3 text-foreground">{b.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </motion.div>
                ))}
              </div>
              {/* Image */}
              <motion.div {...fadeUp} className="lg:col-span-2 hidden lg:block">
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img
                    src={investorsAudience}
                    alt="Premium audience enjoying a sunset deck event"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: PLATFORM — deep navy ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 55% 10%) 50%, hsl(212 60% 7%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto items-center">
              {/* Image */}
              <motion.div {...fadeUp}>
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img
                    src={investorsPlatform}
                    alt="Aerial view of premium cruise vessel at sea"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <motion.div {...fadeUp} className="mb-10">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    More than a single sailing. A platform.
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    EmbarqX is not built around one isolated event. It is designed as a premium concept platform capable of launching flagship voyages and expanding into a recurring portfolio of themed experiences over time.
                  </p>
                </motion.div>

                <div className="space-y-5">
                  {platformPillars.map((p, i) => (
                    <motion.div
                      key={p.title}
                      {...stagger(i)}
                      className="flex items-start gap-5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold mb-1.5 text-foreground">{p.title}</h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: VALUE MODEL — warm editorial light panel ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "rgba(245, 241, 232, 0.94)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 !text-[hsl(212,60%,7%)]">
                A multi-layer value model
              </h2>
              <p className="font-body text-lg !text-[hsl(212,25%,35%)] leading-relaxed">
                EmbarqX is designed to create value through more than ticket sales alone.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-start">
              {/* Left: value layers */}
              <div className="space-y-4">
                {valueLayers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    {...stagger(i)}
                    className="bg-white/60 rounded-xl border border-[hsl(40,30%,80%)] p-7 flex items-start gap-5 hover:border-[hsl(40,40%,55%)]/30 transition-all duration-500"
                  >
                    <span className="font-display text-2xl font-bold text-[hsl(40,40%,45%)]/60 mt-0.5 shrink-0 w-8 text-right">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold !text-[hsl(212,60%,7%)] mb-1.5">{layer.label}</h3>
                      <p className="font-body text-sm !text-[hsl(212,25%,35%)] leading-relaxed">{layer.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right: image */}
              <motion.div {...fadeUp} className="hidden lg:block sticky top-32">
                <div className="rounded-xl overflow-hidden border border-[hsl(40,30%,80%)] shadow-lg">
                  <img
                    src={investorsValue}
                    alt="Premium hospitality lounge interior"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={640}
                    height={896}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: WHY EMBARQX STANDS APART — slate-blue surface ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(210 50% 14%) 0%, hsl(207 45% 20%) 50%, hsl(210 50% 14%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Why EmbarqX stands apart
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
              {standsApart.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...stagger(i)}
                  className="gradient-card rounded-xl border border-border p-8 hover:border-primary/20 transition-all duration-500"
                >
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-display text-base font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: ROADMAP — deep navy with depth ─── */}
        <section className="relative py-24 md:py-32 overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(212 58% 9%) 50%, hsl(210 55% 11%) 100%)" }}
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                From flagship concept to recurring platform
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                A strong launch is only the beginning. The real value comes from the ability to turn successful concepts into repeatable premium experiences.
              </p>
            </motion.div>

            {/* Roadmap image banner */}
            <motion.div {...fadeUp} className="max-w-5xl mx-auto mb-14 rounded-xl overflow-hidden border border-border/40">
              <img
                src={investorsRoadmap}
                alt="Cruise ship bow at dawn symbolizing forward momentum"
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
                width={1280}
                height={512}
              />
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
              {roadmapSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  {...stagger(i)}
                  className="gradient-card rounded-xl border border-border p-7 hover:border-primary/20 transition-all duration-500 relative"
                >
                  <span className="font-display text-3xl font-bold text-primary/25 absolute top-5 right-6">
                    {s.step}
                  </span>
                  <h3 className="font-display text-sm font-bold mb-3 text-foreground pr-8">{s.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: PORTFOLIO — lighter slate-blue ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(207 42% 18%) 0%, hsl(210 45% 22%) 50%, hsl(207 42% 18%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                A diversified premium concept portfolio
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                EmbarqX is designed to reduce dependence on a single audience or moment by building across multiple high-engagement thematic lanes.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-10">
              {portfolioCategories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  {...stagger(i)}
                  className="gradient-card rounded-xl border border-border p-6 text-center hover:border-primary/20 transition-all duration-500"
                >
                  <cat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <p className="font-display text-sm font-semibold text-foreground">{cat.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeUp} className="font-body text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              This range supports broader platform resilience, wider audience reach, and multiple paths to premium demand.
            </motion.p>
          </div>
        </section>

        {/* ─── SECTION 8: WHAT THE RIGHT INVESTOR IS BACKING — deep navy ─── */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 55% 10%) 50%, hsl(212 60% 7%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">
                What the right investor is backing
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                An investment in EmbarqX is not simply a bet on a single voyage. It is a bet on a differentiated premium experience platform built to align concept creation, strategic partnerships, audience relevance, and recurring long-term value.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
                {backingBullets.map((b, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 9: INVESTOR CTA — dramatic with closing visual ─── */}
        <section
          id="investor-cta"
          className="relative py-28 md:py-36 overflow-hidden"
        >
          {/* Background image */}
          <img
            src={investorsClosing}
            alt="Twilight ocean horizon with vessel silhouette"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={768}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsla(212,60%,7%,0.8) 0%, hsla(210,50%,14%,0.7) 50%, hsla(212,60%,7%,0.85) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,40%,55%,0.06) 0%, transparent 80%)",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                For investors who see the value of premium experience platforms
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                EmbarqX is designed for investors who understand the long-term opportunity in differentiated, identity-driven travel experiences and the value of building beyond one-time activations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors text-center"
                >
                  Discuss the Opportunity
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-md border border-border text-foreground font-body font-semibold text-sm tracking-wide hover:bg-muted/40 transition-colors text-center"
                >
                  Request a Strategic Conversation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Investors;
