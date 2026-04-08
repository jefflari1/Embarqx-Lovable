import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import musicImg from "@/assets/music-voyage.jpg";
import gamingImg from "@/assets/gaming.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import theaterImg from "@/assets/theater.jpg";
import deckImg from "@/assets/deck-nightlife.jpg";

const concepts = [
  {
    title: "Music & Culture Voyages",
    description: "Immersive multi-day music experiences featuring world-class artists, cultural programming, and premium nightlife — all set against the backdrop of the open ocean.",
    audience: "Music enthusiasts, culture seekers, premium lifestyle audiences",
    opportunity: "Sponsorship, talent partnerships, media rights, exclusive memberships",
    image: musicImg,
  },
  {
    title: "Poker & Gaming Voyages",
    description: "High-stakes poker tournaments and premium gaming environments at sea, blending competitive excitement with luxury hospitality and VIP entertainment.",
    audience: "High-net-worth players, gaming enthusiasts, luxury seekers",
    opportunity: "Gaming partnerships, VIP memberships, broadcast & media",
    image: gamingImg,
  },
  {
    title: "Wellness & Consciousness Voyages",
    description: "Transformative journeys combining world-renowned wellness practitioners, holistic programming, and serene ocean environments for deep restoration.",
    audience: "Wellness-focused professionals, mindfulness communities",
    opportunity: "Wellness brands, retreat partnerships, premium lifestyle sponsors",
    image: wellnessImg,
  },
  {
    title: "Sports Icon Voyages",
    description: "Premium voyages anchored by legendary athletes and sporting icons, combining meet-and-greet experiences, sporting clinics, and luxury entertainment.",
    audience: "Sports fans, collectors, corporate hospitality buyers",
    opportunity: "Athlete partnerships, sports media, brand activations",
    image: theaterImg,
  },
  {
    title: "Brand-Led Private Charters",
    description: "Fully bespoke private charter concepts designed for luxury brands, corporate experiences, and exclusive communities seeking unmatched exclusivity at sea.",
    audience: "Luxury brands, corporate leadership, exclusive communities",
    opportunity: "Full charter revenue, brand licensing, co-creation",
    image: deckImg,
  },
];

const ConceptsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % concepts.length);
  const prev = () => setCurrent((c) => (c - 1 + concepts.length) % concepts.length);
  const concept = concepts[current];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
            Signature Concepts
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Voyages Designed to Captivate
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                <img
                  src={concept.image}
                  alt={concept.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  {concept.title}
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {concept.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">
                      Target Audience
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {concept.audience}
                    </p>
                  </div>
                  <div>
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
                      Opportunity
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {concept.opportunity}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous concept"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {concepts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to concept ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next concept"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptsCarousel;
