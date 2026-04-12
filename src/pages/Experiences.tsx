import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Sparkles,
  Handshake,
  Repeat,
  Trophy,
  Dices,
  Flower2,
  Music,
  Crown,
  Globe,
  Layers,
  Shield,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/experiences-hero.jpg";
import sportsImg from "@/assets/experiences-sports.jpg";
import pokerImg from "@/assets/experiences-poker.jpg";
import wellnessImg from "@/assets/experiences-wellness.jpg";
import musicImg from "@/assets/experiences-music.jpg";
import privateImg from "@/assets/experiences-private.jpg";

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

const portfolioBullets = [
  { icon: Users, label: "Audience-led relevance" },
  { icon: Sparkles, label: "Premium programming" },
  { icon: Handshake, label: "Strategic partnership potential" },
  { icon: Repeat, label: "Repeatable platform value" },
];

interface ConceptSection {
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  opportunity: string;
  includes: string[];
  whyMatters: string;
  image: string;
  icon: React.ElementType;
  reverse?: boolean;
}

const concepts: ConceptSection[] = [
  {
    eyebrow: "FLAGSHIP CONCEPT",
    title: "Sports Legends at Sea",
    description:
      "Centered around iconic athletes, immersive fan engagement, and curated access, these voyages are designed to create premium experiences that blend entertainment, community, and high-value sponsorship potential.",
    audience:
      "Global sports fans, athlete-driven communities, and premium travelers seeking immersive access and shared passion at sea.",
    opportunity:
      "Create premium sports experiences that combine immersive fan engagement, sponsorship potential, and strong emotional demand around iconic athletes and shared passion.",
    includes: [
      "Athlete appearances and storytelling sessions",
      "Immersive fan engagement and curated access",
      "Premium hospitality and VIP experiences",
      "Sponsor-ready activations and branded moments",
    ],
    whyMatters:
      "Sports concepts offer strong flagship potential because they combine recognizable personalities, passionate audiences, sponsor appeal, and premium live-experience energy in a format that can expand into recurring themed voyages.",
    image: sportsImg,
    icon: Trophy,
  },
  {
    eyebrow: "NICHE PREMIUM COMMUNITY",
    title: "Poker & Gaming Voyages",
    description:
      "Built around tournament-driven experiences, premium social gaming environments, competition, and premium hospitality, these voyages create immersive settings where gaming, entertainment, and community come together in a distinctive experience at sea.",
    audience:
      "Gaming communities, competitive players, and premium travelers drawn to tournament-driven experiences, social energy, and elevated hospitality.",
    opportunity:
      "Unlock differentiated demand through tournament-driven experiences, premium social gaming, and sponsor-ready environments with strong community appeal.",
    includes: [
      "Tournament-driven programming",
      "Premium social gaming lounges",
      "Hospitality-led networking and community moments",
      "Sponsor integration and branded competitions",
    ],
    whyMatters:
      "Gaming concepts can create highly engaged niche demand by combining competition, community, repeat participation, and sponsor-friendly environments in a format that feels social, immersive, and commercially attractive.",
    image: pokerImg,
    icon: Dices,
    reverse: true,
  },
  {
    eyebrow: "TRANSFORMATIONAL PREMIUM EXPERIENCE",
    title: "Wellness & Consciousness Voyages",
    description:
      "Designed around mindfulness, personal growth, spirituality, and transformative programming, these voyages create premium environments for reflection, deeper connection, and elevated experience.",
    audience:
      "Travelers seeking mindfulness, personal growth, spirituality, and premium environments for reflection, renewal, and deeper connection.",
    opportunity:
      "Build voyages centered on reflection, personal growth, spirituality, and premium hospitality, creating differentiated experiences with strong audience affinity and platform potential.",
    includes: [
      "Mindfulness and reflection programming",
      "Personal growth and transformational sessions",
      "Spirituality and deeper connection experiences",
      "Premium hospitality designed for renewal and intentionality",
    ],
    whyMatters:
      "Wellness and consciousness concepts expand EmbarqX beyond entertainment into high-value transformational travel, attracting audiences seeking meaning, connection, and elevated environments that can support recurring premium experiences.",
    image: wellnessImg,
    icon: Flower2,
  },
  {
    eyebrow: "CULTURAL ENERGY AND COMMUNITY",
    title: "Music & Culture Voyages",
    description:
      "Built around artists, cultural energy, and community-driven programming, these voyages create premium experiences that feel immersive, social, and highly resonant for the audiences they serve.",
    audience:
      "Music-driven audiences, culturally connected communities, and travelers drawn to premium shared experiences.",
    opportunity:
      "Build premium music and culture experiences that generate emotional demand, attract sponsorship interest, and create broader commercial value through programming and repeat audience appeal.",
    includes: [
      "Artist-led moments and performances",
      "Culturally rooted programming and community experiences",
      "Nightlife and premium social energy",
      "Sponsor-friendly activations and branded collaborations",
    ],
    whyMatters:
      "Music and culture concepts combine emotional relevance, audience identity, premium social energy, and strong sponsor appeal, making them powerful vehicles for memorable experiences and broader platform reach.",
    image: musicImg,
    icon: Music,
    reverse: true,
  },
  {
    eyebrow: "CURATED PRIVATE AND BRANDED EXPERIENCES",
    title: "Custom Brand & Private Voyages",
    description:
      "These concepts are built for brands, sponsors, private groups, and invitation-only communities seeking custom voyages with premium hospitality, distinctive programming, and a more exclusive experience.",
    audience:
      "Brands, sponsors, private groups, and invitation-only communities seeking custom voyages that combine exclusivity, premium programming, and high-touch hospitality.",
    opportunity:
      "Unlock opportunities for branded activations, private community experiences, and sponsor-led voyages through custom programming, exclusivity, and premium hospitality.",
    includes: [
      "Branded activations and sponsor-led experiences",
      "Invitation-only community programming",
      "Custom hospitality and curated access",
      "Premium private-group or partner-driven voyage design",
    ],
    whyMatters:
      "Custom brand and private voyages expand EmbarqX beyond public themed sailings by creating flexible premium formats for sponsors, brands, private groups, and strategic collaborators seeking exclusivity and tailored experience design.",
    image: privateImg,
    icon: Crown,
  },
];

const portfolioStrength = [
  {
    icon: Globe,
    title: "Broader audience reach",
    text: "Different concepts allow EmbarqX to engage multiple high-affinity communities instead of depending on a single market.",
  },
  {
    icon: Layers,
    title: "Greater commercial flexibility",
    text: "Different themes create multiple sponsorship, programming, and partnership formats.",
  },
  {
    icon: Shield,
    title: "Stronger platform resilience",
    text: "A broader concept mix reduces dependence on one trend, one audience, or one activation.",
  },
  {
    icon: TrendingUp,
    title: "More room to scale",
    text: "Each successful concept can become the basis for repeat launches, adjacent experiences, and stronger long-term brand value.",
  },
];

/* ── Component ── */

const Experiences = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 50% 14%) 60%, hsl(207 40% 20%) 100%)' }}>
        <img
          src={heroImg}
          alt="Premium cruise atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-[hsl(207_40%_20%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.06),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              Signature Experiences
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Premium concepts designed to become unforgettable voyages.
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              EmbarqX builds themed voyage concepts around strong audience identity, curated programming, and premium experience design — creating experiences that feel emotionally resonant, commercially differentiated, and scalable over time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#closing-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Discuss a Concept
              </a>
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

      {/* ─── SECTION 2: PORTFOLIO INTRO ─── */}
      <section className="relative py-24 md:py-32" style={{ background: 'linear-gradient(180deg, hsl(207 40% 20%) 0%, hsl(210 45% 22%) 50%, hsl(210 50% 17%) 100%)' }}>
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              A portfolio designed for premium demand
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Each EmbarqX concept is built around a distinct audience, a clear thematic identity, and the kind of programming that turns a voyage into something people deeply connect with.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Rather than depending on a single idea or one narrow audience, EmbarqX is designed as a diversified concept platform with multiple thematic lanes capable of attracting strong emotional demand and broader long-term value.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {portfolioBullets.map((b, i) => (
              <motion.div
                key={b.label}
                {...stagger(i)}
                className="gradient-card rounded-xl border border-border p-6 text-center"
              >
                <b.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-body text-sm font-semibold text-foreground">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTIONS 3-7: CONCEPT DEEP-DIVES ─── */}
      {concepts.map((c, idx) => (
        <section
          key={c.title}
          className={`py-24 md:py-32 ${idx % 2 === 0 ? "bg-navy-deep" : "bg-section-alt"}`}
        >
          <div className="container mx-auto px-6">
            {/* Eyebrow + Title */}
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                {c.eyebrow}
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <c.icon className="w-8 h-8 text-primary hidden md:block" />
                <h2 className="font-display text-3xl md:text-5xl font-bold">{c.title}</h2>
              </div>
            </motion.div>

            {/* Image + Description */}
            <div
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${
                c.reverse ? "md:[direction:rtl]" : ""
              }`}
            >
              <motion.div
                {...fadeUp}
                className={c.reverse ? "md:[direction:ltr]" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden glow-gold">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                className={`space-y-6 ${c.reverse ? "md:[direction:ltr]" : ""}`}
              >
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <div className="gradient-card rounded-xl border border-border p-6 space-y-4">
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
                      Target Audience
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {c.audience}
                    </p>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
                      Opportunity
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {c.opportunity}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* What this experience can include + Why it matters */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div {...fadeUp}>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-6">
                  What this experience can include
                </h3>
                <ul className="space-y-4">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeUp}>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-6">
                  Why it matters to the platform
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {c.whyMatters}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── SECTION 8: WHY THE PORTFOLIO MATTERS ─── */}
      <section className="py-24 md:py-32 bg-navy-deep">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Why this portfolio creates platform strength
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A diversified concept portfolio creates more resilience, more partnership pathways, and more ways to generate premium demand over time.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolioStrength.map((block, i) => (
              <motion.div
                key={block.title}
                {...stagger(i)}
                className="gradient-card rounded-xl border border-border p-8"
              >
                <block.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-lg font-semibold mb-3">{block.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CLOSING CTA ─── */}
      <section
        id="closing-cta"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(210_55%_12%)] to-background" />
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              The right concept can become much more than a single voyage
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              EmbarqX is designed to turn differentiated premium concepts into experiences with stronger audience connection, broader commercial potential, and long-term platform value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@embarqx.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Discuss a Concept
              </a>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-body font-semibold tracking-wide hover:bg-muted/40 transition-colors"
              >
                Partner With EmbarqX
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Experiences;
