import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, Waves, Star, TrendingUp, Play, ArrowRight } from "lucide-react";

import heroImg from "@/assets/ships-hero.jpg";
import deckImg from "@/assets/ships-deck.jpg";
import theaterImg from "@/assets/ships-theater.jpg";
import loungeImg from "@/assets/ships-lounge.jpg";
import diningImg from "@/assets/ships-dining.jpg";
import suiteImg from "@/assets/ships-suite.jpg";
import spaImg from "@/assets/ships-spa.jpg";
import casinoImg from "@/assets/ships-casino.jpg";
import adventureImg from "@/assets/ships-adventure.jpg";
import socialImg from "@/assets/ships-social.jpg";
import intimateImg from "@/assets/ships-intimate.jpg";
import flagshipImg from "@/assets/ships-flagship.jpg";
import closingImg from "@/assets/ships-closing.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const environmentClasses = [
  {
    title: "Flagship Entertainment Class",
    bestFor: "Large-scale sports, music, and sponsor-driven activations with major audience energy and broad commercial potential.",
    whyItWorks: "These environments support high-capacity programming, premium hospitality layers, nightlife energy, spectacle, and large-scale brand integration.",
    spaces: ["Main theaters", "Pool decks", "Lounges", "Nightlife venues", "VIP areas", "Large social zones"],
    images: [flagshipImg, deckImg, theaterImg],
  },
  {
    title: "Premium Intimacy Class",
    bestFor: "High-touch wellness, personal growth, and curated community experiences where connection and atmosphere matter most.",
    whyItWorks: "These environments create stronger intimacy, deeper connection, and more intentional experience design for premium niche audiences.",
    spaces: ["Retreat-style decks", "Intimate lounges", "Wellness areas", "Dining environments", "Smaller gathering spaces"],
    images: [intimateImg, spaImg, diningImg],
  },
  {
    title: "Modern Social Class",
    bestFor: "Design-forward premium audiences seeking nightlife, culture, dining, and immersive social energy with strong brand integration potential.",
    whyItWorks: "These environments blend premium design, social movement, curated hospitality, and strong visual atmosphere into highly engaging voyage experiences.",
    spaces: ["Restaurants", "Rooftop social zones", "Entertainment venues", "Lounges", "Bars", "Flexible activation areas"],
    images: [socialImg, loungeImg, casinoImg],
  },
];

const onboardSpaces = [
  { title: "Main theaters & performance venues", purpose: "Ideal for headline programming, immersive shows, speaker sessions, performances, and major anchor moments.", image: theaterImg },
  { title: "Pool decks & open-air gathering zones", purpose: "Perfect for large social energy, brand activations, celebrations, daytime programming, and premium shared atmosphere.", image: deckImg },
  { title: "Lounges & nightlife spaces", purpose: "Support nightlife, curated social energy, music, premium hospitality, and high-attention sponsor moments.", image: loungeImg },
  { title: "Dining environments", purpose: "Create refined hospitality experiences, cultural dining moments, curated gatherings, and premium guest touchpoints.", image: diningImg },
  { title: "Suites, rooms & premium accommodations", purpose: "Strengthen the perception of exclusivity, premium access, and elevated guest value across the voyage.", image: suiteImg },
  { title: "Wellness & retreat spaces", purpose: "Support reflection, mindfulness, personal growth, restoration, and high-touch premium calm.", image: spaImg },
  { title: "Entertainment & experiential zones", purpose: "Useful for select concepts that benefit from spectacle, movement, and broad experiential range within a premium context.", image: adventureImg },
  { title: "Casino-style & gaming environments", purpose: "Important for gaming, tournament, and high-energy social concepts where competition, hospitality, and immersive atmosphere matter.", image: casinoImg },
];

const conceptMappings = [
  { concept: "Sports Legends at Sea", fit: "Flagship entertainment environments", why: "They support high-energy fan engagement, premium hospitality, sponsor presence, and larger audience moments." },
  { concept: "Poker & Gaming Voyages", fit: "Modern social and hospitality-led environments", why: "They benefit from premium lounges, casino-style settings, social gaming atmospheres, and sponsor-ready competition spaces." },
  { concept: "Wellness & Consciousness Voyages", fit: "Premium intimacy environments", why: "They require calm, reflection, intentionality, and premium spaces that support deeper connection." },
  { concept: "Music & Culture Voyages", fit: "Flagship entertainment or modern social environments", why: "They thrive in spaces that support performance, nightlife, communal energy, and premium social interaction." },
  { concept: "Custom Brand & Private Voyages", fit: "Depends on audience size, hospitality goals, and exclusivity needs", why: "These experiences are shaped by the brand, partner, or private-group vision and require tailored environment selection." },
];

const vesselPossibilities = [
  { title: "Scale and spectacle", description: "Premium large-format environments suited to flagship concepts, major audience energy, and broad activation opportunities.", image: flagshipImg },
  { title: "Design and intimacy", description: "Refined environments that support deeper connection, curated hospitality, and more intentional concept execution.", image: intimateImg },
  { title: "Social and experiential versatility", description: "Spaces that blend dining, nightlife, entertainment, movement, and premium gathering into flexible experience layers.", image: socialImg },
];

const platformValues = [
  { icon: Star, title: "Stronger premium positioning", description: "The right environment elevates perception and supports more differentiated guest experiences." },
  { icon: Anchor, title: "Better audience fit", description: "Different themes and communities require different levels of intimacy, energy, and hospitality design." },
  { icon: TrendingUp, title: "Broader commercial value", description: "Well-matched spaces create better conditions for sponsor integration, premium participation, and repeat potential." },
  { icon: Waves, title: "Stronger repeatability", description: "When concept and environment align well, the experience becomes easier to refine, relaunch, and grow over time." },
];

const Ships = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* SECTION 1: HERO */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 45% 14%) 100%)" }}
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 80%, hsl(40 40% 55% / 0.07) 0%, transparent 60%)" }}
            />
          </div>

          {/* Video placeholder */}
          <div className="absolute inset-0 overflow-hidden">
            <img src={heroImg} alt="Premium vessel at sea" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(212,60%,7%)/0.6] via-transparent to-[hsl(212,60%,7%)/0.8]" />
          </div>

          {/* Play button overlay for video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[hsl(40,40%,70%)/0.4] flex items-center justify-center opacity-40">
              <Play className="w-8 h-8 text-[#B89B5E] ml-1" />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fade} custom={0} className="max-w-3xl mx-auto">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-[#B89B5E] mb-5">
                Ships & Venues
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#F3EEE4] mb-6 leading-[1.1]">
                The environments that shape premium experiences at sea.
              </h1>
              <p className="font-body text-lg md:text-xl text-[#B8C4D1] leading-relaxed max-w-2xl mx-auto mb-10">
                EmbarqX™ is designed for premium voyage environments that can support immersive programming, differentiated hospitality, and audience experiences at multiple levels of scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#B89B5E] hover:bg-[#A08A50] text-[#061321] font-body font-semibold tracking-wide px-8 py-6 text-base">
                  <Link to="/experiences">Explore the Concepts</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#B89B5E]/30 text-[#F3EEE4] hover:bg-[#B89B5E]/10 font-body tracking-wide px-8 py-6 text-base">
                  <Link to="/partners">Partner With EmbarqX™</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: WHY THE ENVIRONMENT MATTERS */}
        <section style={{ background: "linear-gradient(180deg, hsl(210 45% 14%) 0%, hsl(210 42% 18%) 100%)" }} className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}>
                <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">The Setting</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-6">Why the environment matters</h2>
                <p className="font-body text-[#B8C4D1] leading-relaxed mb-4">
                  A premium voyage is shaped by more than its theme. The physical environment influences intimacy, energy, programming possibilities, hospitality level, sponsor integration, and the overall emotional feel of the experience.
                </p>
                <p className="font-body text-[#B8C4D1] leading-relaxed">
                  That is why EmbarqX™ thinks carefully about vessel environments and onboard spaces. The right setting can strengthen audience fit, elevate perceived value, and create a more differentiated premium experience from the very first impression.
                </p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0.2}>
                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                  <img src={deckImg} alt="Premium vessel deck environment" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THREE CLASSES */}
        <section style={{ background: "linear-gradient(180deg, hsl(212 55% 10%) 0%, hsl(212 50% 13%) 100%)" }} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Experience Environments</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-4">Three classes of experience environment</h2>
              <p className="font-body text-[#B8C4D1] max-w-3xl mx-auto">
                Different concepts thrive in different environments. EmbarqX™ is designed to work across multiple levels of scale, as long as the setting supports the right audience, atmosphere, and hospitality experience.
              </p>
            </motion.div>

            <div className="space-y-20">
              {environmentClasses.map((ec, i) => (
                <motion.div
                  key={ec.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i * 0.1}
                  className="space-y-6"
                >
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F3EEE4]">{ec.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ec.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden aspect-[16/10]">
                        <img src={img} alt={`${ec.title} environment ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6" style={{ background: "hsl(212 50% 12% / 0.8)", border: "1px solid hsl(40 40% 55% / 0.12)" }}>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-[#B89B5E] mb-2">Best for</p>
                      <p className="font-body text-[#B8C4D1] leading-relaxed">{ec.bestFor}</p>
                    </div>
                    <div className="rounded-xl p-6" style={{ background: "hsl(212 50% 12% / 0.8)", border: "1px solid hsl(40 40% 55% / 0.12)" }}>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-[#B89B5E] mb-2">Why it works</p>
                      <p className="font-body text-[#B8C4D1] leading-relaxed">{ec.whyItWorks}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-[#8D9AA8] mb-3">Key spaces</p>
                    <div className="flex flex-wrap gap-2">
                      {ec.spaces.map((s) => (
                        <span key={s} className="px-4 py-2 text-xs font-body font-medium tracking-wide rounded-full border border-[hsl(40,40%,55%,0.2)] text-[#B8C4D1]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SPACES THAT DEFINE – WARM EDITORIAL LIGHT PANEL */}
        <section style={{ background: "rgba(245, 241, 232, 0.94)" }} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Onboard Spaces</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0D2A47] mb-4">The spaces that define the experience</h2>
              <p className="font-body text-[#3A4A5A] max-w-3xl mx-auto">
                The success of a premium voyage often comes down to the quality, flexibility, and emotional atmosphere of the spaces where people gather, celebrate, connect, and participate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onboardSpaces.map((space, i) => (
                <motion.div
                  key={space.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i * 0.08}
                  className="rounded-xl overflow-hidden bg-white shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={space.image} alt={space.title} className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-base font-bold text-[#0D2A47] mb-2">{space.title}</h4>
                    <p className="font-body text-sm text-[#3A4A5A] leading-relaxed">{space.purpose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MATCHING CONCEPTS TO ENVIRONMENTS */}
        <section style={{ background: "linear-gradient(180deg, hsl(210 48% 12%) 0%, hsl(212 52% 15%) 100%)" }} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Strategic Fit</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-4">Matching concepts to the right environments</h2>
              <p className="font-body text-[#B8C4D1] max-w-3xl mx-auto">
                A concept becomes stronger when the physical setting supports its audience, programming, and emotional tone. EmbarqX™ is designed to think strategically about that fit.
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {conceptMappings.map((cm, i) => (
                <motion.div
                  key={cm.concept}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i * 0.1}
                  className="rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start"
                  style={{ background: "hsl(212 50% 10% / 0.7)", border: "1px solid hsl(40 40% 55% / 0.1)" }}
                >
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#F3EEE4] mb-1">{cm.concept}</h4>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-[#B89B5E]">{cm.fit}</p>
                  </div>
                  <p className="font-body text-[#B8C4D1] leading-relaxed">{cm.why}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: ILLUSTRATIVE VESSEL POSSIBILITIES */}
        <section style={{ background: "linear-gradient(180deg, hsl(210 42% 17%) 0%, hsl(210 45% 20%) 100%)" }} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Illustrative Possibilities</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-4">Illustrative vessel possibilities</h2>
              <p className="font-body text-[#B8C4D1] max-w-3xl mx-auto">
                The examples on this page are intended to show the scale and caliber of environment EmbarqX™ is built for. They are illustrative, not confirmations of specific vessels or partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vesselPossibilities.map((vp, i) => (
                <motion.div
                  key={vp.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i * 0.12}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "hsl(212 50% 12% / 0.6)", border: "1px solid hsl(40 40% 55% / 0.1)" }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={vp.image} alt={vp.title} className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-xl font-bold text-[#F3EEE4] mb-3">{vp.title}</h4>
                    <p className="font-body text-[#B8C4D1] leading-relaxed text-sm">{vp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="font-body text-sm italic text-[#8D9AA8] text-center mt-10"
            >
              The right vessel is not only a logistics decision. It is part of the concept itself.
            </motion.p>
          </div>
        </section>

        {/* SECTION 7: WHY THIS MATTERS */}
        <section style={{ background: "linear-gradient(180deg, hsl(212 55% 10%) 0%, hsl(212 58% 8%) 100%)" }} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Platform Value</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-4">Why this matters to the platform</h2>
              <p className="font-body text-[#B8C4D1] max-w-3xl mx-auto">
                The right vessel environment does more than host the experience. It helps shape premium perception, audience fit, programming quality, sponsor value, and the long-term strength of the concept.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {platformValues.map((pv, i) => (
                <motion.div
                  key={pv.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  custom={i * 0.1}
                  className="rounded-xl p-6 text-center"
                  style={{ background: "hsl(212 50% 12% / 0.7)", border: "1px solid hsl(40 40% 55% / 0.1)" }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(40 40% 55% / 0.12)" }}>
                    <pv.icon className="w-5 h-5 text-[#B89B5E]" />
                  </div>
                  <h4 className="font-display text-base font-bold text-[#F3EEE4] mb-2">{pv.title}</h4>
                  <p className="font-body text-sm text-[#B8C4D1] leading-relaxed">{pv.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: CLOSING CTA */}
        <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(212 58% 8%) 0%, hsl(212 60% 6%) 100%)" }}>
          <div className="absolute inset-0">
            <img src={closingImg} alt="Vessel at twilight" className="w-full h-full object-cover opacity-15" loading="lazy" width={1920} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(212,60%,6%)] via-[hsl(212,60%,6%)/0.7] to-transparent" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(40 40% 55% / 0.06) 0%, transparent 50%)" }} />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="max-w-2xl mx-auto">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[#B89B5E] mb-4">Next Steps</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F3EEE4] mb-6">
                The right environment can elevate the entire concept
              </h2>
              <p className="font-body text-[#B8C4D1] leading-relaxed mb-10 max-w-xl mx-auto">
                EmbarqX™ is designed for premium voyage settings where concept, audience, hospitality, and programming can come together at the highest level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#B89B5E] hover:bg-[#A08A50] text-[#061321] font-body font-semibold tracking-wide px-8 py-6 text-base">
                  <Link to="/contact">Discuss Strategic Fit</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#B89B5E]/30 text-[#F3EEE4] hover:bg-[#B89B5E]/10 font-body tracking-wide px-8 py-6 text-base group">
                  <Link to="/experiences">
                    Explore the Concepts
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Ships;
