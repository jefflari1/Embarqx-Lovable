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
    title: "Sports Legends at Sea",
    description: "Centered around iconic athletes, immersive fan engagement, and curated access, these voyages are designed to create premium experiences that blend entertainment, community, and high-value sponsorship potential.",
    audience: "Global sports fans, athlete-driven communities, and premium travelers seeking immersive access and shared passion at sea.",
    opportunity: "Create premium sports experiences that combine immersive fan engagement, sponsorship potential, and strong emotional demand around iconic athletes and shared passion.",
    image: theaterImg,
  },
  {
    title: "Poker & Gaming Voyages",
    description: "Built around tournament-driven experiences, premium social gaming environments, competition, and premium hospitality, these voyages create immersive settings where gaming, entertainment, and community come together in a distinctive experience at sea.",
    audience: "Gaming communities, competitive players, and premium travelers drawn to tournament-driven experiences, social energy, and elevated hospitality.",
    opportunity: "Unlock differentiated demand through tournament-driven experiences, premium social gaming, and sponsor-ready environments with strong community appeal.",
    image: gamingImg,
  },
  {
    title: "Wellness & Consciousness Voyages",
    description: "Designed around mindfulness, personal growth, spirituality, and transformative programming, these voyages create premium environments for reflection, deeper connection, and elevated experience.",
    audience: "Travelers seeking mindfulness, personal growth, spirituality, and premium environments for reflection, renewal, and deeper connection.",
    opportunity: "Build voyages centered on reflection, personal growth, spirituality, and premium hospitality, creating differentiated experiences with strong audience affinity and platform potential.",
    image: wellnessImg,
  },
  {
    title: "Music & Culture Voyages",
    description: "Built around artists, cultural energy, and community-driven programming, these voyages create premium experiences that feel immersive, social, and highly resonant for the audiences they serve.",
    audience: "Music-driven audiences, culturally connected communities, and travelers drawn to premium shared experiences.",
    opportunity: "Build premium music and culture experiences that generate emotional demand, attract sponsorship interest, and create broader commercial value through programming and repeat audience appeal.",
    image: musicImg,
  },
  {
    title: "Custom Brand & Private Voyages",
    description: "These concepts are built for brands, sponsors, private groups, and invitation-only communities seeking custom voyages with premium hospitality, distinctive programming, and a more exclusive experience.",
    audience: "Brands, sponsors, private groups, and invitation-only communities seeking custom voyages that combine exclusivity, premium programming, and high-touch hospitality.",
    opportunity: "Unlock opportunities for branded activations, private community experiences, and sponsor-led voyages through custom programming, exclusivity, and premium hospitality.",
    image: deckImg,
  },
];
const ConceptsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % concepts.length);
  const prev = () => setCurrent((c) => (c - 1 + concepts.length) % concepts.length);
  const concept = concepts[current];

  return (
    <section className="py-24 overflow-hidden border-t border-gold/20" style={{ background: 'linear-gradient(180deg, #0D2A47 0%, #143A5C 50%, #0D2A47 100%)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
            Experience Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Signature Concepts
          </h2>
          <p className="font-body text-[#B8C4D1] text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            Each concept is built around a specific audience, a clear identity, and programming that turns a voyage into something people deeply connect with.
          </p>
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
                <p className="font-body text-[#B8C4D1] text-lg leading-relaxed">
                  {concept.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
                      Target Audience
                    </span>
                    <p className="font-body text-sm text-[#8D9AA8] mt-1">
                      {concept.audience}
                    </p>
                  </div>
                  <div>
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
                      Opportunity
                    </span>
                    <p className="font-body text-sm text-[#8D9AA8] mt-1">
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
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
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
                    i === current ? "bg-gold w-6" : "bg-border"
                  }`}
                  aria-label={`Go to concept ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
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
