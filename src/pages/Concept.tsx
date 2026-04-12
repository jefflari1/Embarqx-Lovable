import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Sparkles,
  Star,
  Handshake,
  Gem,
  Layers,
  Rocket,
  TrendingUp,
  Target,
  Shield,
  Crown,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/concept-hero.jpg";
import audienceImg from "@/assets/concept-audience.jpg";
import platformImg from "@/assets/concept-platform.jpg";
import valueImg from "@/assets/concept-value.jpg";
import roadmapImg from "@/assets/concept-roadmap.jpg";
import closingImg from "@/assets/concept-closing.jpg";

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

const platformBlocks = [
  { icon: Rocket, title: "Flagship activation", text: "A strong concept begins with a high-attention voyage built around a clear audience, thematic identity, and premium experience story." },
  { icon: Layers, title: "Recurring platform logic", text: "Each successful concept creates the opportunity to return with new editions, adjacent communities, and broader partnership pathways." },
  { icon: TrendingUp, title: "Long-term value creation", text: "The goal is not only to launch one memorable voyage, but to build stronger audience loyalty, differentiated positioning, and lasting brand equity over time." },
];

const howBlocks = [
  { icon: Users, title: "Audience", text: "We begin with a clearly defined audience whose identity, passion, and community alignment can support stronger emotional demand and premium positioning." },
  { icon: Sparkles, title: "Concept", text: "Each voyage starts with a concept built around a distinct theme, cultural energy, or point of connection that gives the experience meaning beyond travel itself." },
  { icon: Star, title: "Talent & Programming", text: "The right mix of talent, immersive programming, and curated moments helps transform a strong concept into an experience people deeply connect with and remember." },
  { icon: Handshake, title: "Strategic Partners", text: "Operators, sponsors, collaborators, and other aligned partners help strengthen execution, audience growth, commercial potential, and long-term platform expansion." },
  { icon: Gem, title: "Premium Experience Design", text: "Hospitality, atmosphere, access, storytelling, and on-board experience design work together to create a voyage that feels elevated, differentiated, and worthy of premium demand." },
  { icon: Crown, title: "Platform Value", text: "When these elements are aligned, the result is more than a single sailing. It becomes the foundation for recurring voyages, stronger brand equity, and broader long-term value." },
];

const valueLayers = [
  { label: "Premium demand", text: "Distinctive concepts create stronger audience pull and more differentiated premium positioning." },
  { label: "Experience value", text: "Programming, access, and curated hospitality create deeper engagement and higher-value participation." },
  { label: "Partnership value", text: "Operators, sponsors, and aligned collaborators create broader reach, stronger execution, and expanded commercial pathways." },
  { label: "Recurring platform growth", text: "Successful concepts can return in new editions, reach adjacent audiences, and support broader portfolio development." },
  { label: "Brand equity", text: "Over time, differentiated concepts can create recognizable themed experience value that extends beyond a single voyage." },
];

const modelBlocks = [
  { icon: Users, title: "Audience-led demand", text: "EmbarqX is designed around communities with strong identity, emotional pull, and premium demand potential." },
  { icon: Star, title: "Identity-driven experiences", text: "The strongest voyages are built around experiences people identify with, not just attend." },
  { icon: Layers, title: "Platform, not one-off", text: "Each concept is structured with recurring value and future expansion in mind." },
  { icon: Target, title: "Differentiated premium positioning", text: "EmbarqX is designed to stand apart from generic themed travel through stronger concept clarity and premium experience design." },
  { icon: Gem, title: "Multi-layer value creation", text: "Value is created through more than base ticketing, including partnerships, programming, repeat launches, and broader brand potential." },
  { icon: Shield, title: "Built for the right partners", text: "The model is designed to align the right operators, investors, sponsors, and collaborators around lasting strategic value." },
];

const roadmapSteps = [
  { num: "01", title: "Launch a flagship concept", text: "A high-attention themed voyage with clear audience alignment and premium story." },
  { num: "02", title: "Validate demand", text: "Measure audience response, partner alignment, sponsor interest, and programming traction." },
  { num: "03", title: "Expand the concept", text: "Return with future editions, adjacent communities, and broader thematic possibilities." },
  { num: "04", title: "Build platform value", text: "Strengthen loyalty, expand reach, deepen partnerships, and create lasting long-term concept equity." },
];

/* ── Component ── */

const Concept = () => (
  <>
    <Navbar />
    <main className="min-h-screen">

      {/* ─── SECTION 1: HERO ─── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 50% 14%) 60%, hsl(207 40% 20%) 100%)' }}
      >
        <img
          src={heroImg}
          alt="Premium cruise at sea"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-[hsl(207_40%_22%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.06),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              The Concept
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              More than a voyage. A premium platform at sea.
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              EmbarqX is building a premium themed cruise platform designed to turn strong concepts, aligned partnerships, and audience-driven experiences into recurring long-term value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                See the Experience Portfolio
              </Link>
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

      {/* ─── SECTION 2: WHY EMBARQX EXISTS ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, hsl(207 40% 22%) 0%, hsl(210 45% 20%) 50%, hsl(210 50% 17%) 100%)' }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                Why EmbarqX exists
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                The strongest premium travel experiences are no longer built around destination alone. They are increasingly shaped by identity, culture, community, access, and the quality of the experience itself.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Yet too many voyage ideas remain isolated activations rather than the foundation for something bigger. EmbarqX was created to build a more intentional model, one where strong concepts, premium hospitality, curated programming, and the right partnerships can come together as part of a platform designed to grow over time.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                This is not about creating a single memorable sailing. It is about building a premium experience platform capable of launching differentiated voyages with stronger audience resonance, broader commercial potential, and lasting platform value.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={audienceImg}
                  alt="Premium audience and community"
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

      {/* ─── SECTION 3: MORE THAN A ONE-OFF SAILING ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(212 60% 9%) 40%, hsl(210 55% 11%) 100%)' }}
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              More than a one-off sailing
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              EmbarqX is not designed around isolated activations. It is built as a platform capable of launching flagship concepts and growing them into recurring premium experiences over time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {platformBlocks.map((b, i) => (
              <motion.div
                key={b.title}
                {...stagger(i)}
                className="gradient-card rounded-xl border border-border p-8"
              >
                <b.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-lg font-semibold mb-3">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="max-w-4xl mx-auto rounded-2xl overflow-hidden glow-gold">
            <img
              src={platformImg}
              alt="Premium vessel at twilight"
              loading="lazy"
              className="w-full aspect-[21/9] object-cover"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: HOW THE PLATFORM COMES TOGETHER (LIGHT PANEL) ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: 'rgba(245, 241, 232, 0.94)' }}
      >
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold !text-[hsl(212,60%,7%)]">
              How the platform comes together
            </h2>
            <p className="font-body text-lg text-[hsl(212,25%,35%)] leading-relaxed mt-6">
              EmbarqX brings together the core elements of a premium themed voyage into one aligned platform, transforming concepts into experiences with deeper audience connection and broader long-term value.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {howBlocks.map((b, i) => (
              <motion.div
                key={b.title}
                {...stagger(i)}
                className="bg-white/60 rounded-xl border border-[hsl(40,30%,80%)] p-8"
              >
                <b.icon className="w-8 h-8 text-[hsl(40,40%,45%)] mb-5" />
                <h3 className="font-display text-lg font-semibold !text-[hsl(212,60%,7%)] mb-3">{b.title}</h3>
                <p className="font-body text-sm text-[hsl(212,25%,35%)] leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="font-body text-center text-[hsl(212,25%,35%)] text-lg leading-relaxed max-w-3xl mx-auto italic">
            EmbarqX is built to connect these elements into a platform that can launch strong flagship experiences and grow into a repeatable portfolio over time.
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 5: HOW VALUE IS CREATED ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(210 50% 14%) 50%, hsl(210 55% 11%) 100%)' }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                How value is created
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                EmbarqX is designed to create value through more than ticket sales alone.
              </p>

              <div className="space-y-4">
                {valueLayers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    {...stagger(i)}
                    className="gradient-card rounded-xl border border-border p-6 flex items-start gap-6"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                      <span className="font-display text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold mb-1">{layer.label}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{layer.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="sticky top-32">
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={valueImg}
                  alt="Premium cruise lounge experience"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHY THE MODEL IS DIFFERENT ─── */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(207 45% 18%) 50%, hsl(210 50% 17%) 100%)' }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.04),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Why the model is different
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              What makes EmbarqX distinct is its ability to align audience, concept, partnerships, and premium experience design into a platform built for more than one event.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modelBlocks.map((b, i) => (
              <motion.div
                key={b.title}
                {...stagger(i)}
                className="gradient-card rounded-xl border border-border p-8"
              >
                <b.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-base font-semibold mb-3">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: FROM FLAGSHIP TO PLATFORM ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(212 58% 9%) 50%, hsl(210 55% 10%) 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={roadmapImg} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_50%_17%)] via-transparent to-[hsl(210_55%_10%)]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              From flagship concept to long-term platform
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A strong launch is only the beginning. The broader opportunity comes from turning successful concepts into repeatable premium experiences.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.num}
                {...stagger(i)}
                className="relative"
              >
                <div className="gradient-card rounded-xl border border-border p-8 h-full">
                  <span className="font-display text-3xl font-bold text-primary/30 mb-4 block">{step.num}</span>
                  <h3 className="font-display text-base font-semibold mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
                {i < roadmapSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary/30 -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CLOSING CTA ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, hsl(210 55% 10%) 0%, hsl(212 58% 10%) 40%, hsl(212 60% 7%) 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <img src={closingImg} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              The right concept can become much more than a single voyage
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              EmbarqX is designed to transform differentiated premium concepts into recurring experiences with stronger audience connection, broader commercial potential, and long-term platform value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                See the Experience Portfolio
              </Link>
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

export default Concept;
