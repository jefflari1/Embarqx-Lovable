import { motion } from "framer-motion";
import flagshipImg from "@/assets/flagship-ship.jpg";
import theaterImg from "@/assets/theater.jpg";
import diningImg from "@/assets/dining.jpg";

const vessels = [
  {
    title: "Flagship Entertainment Class",
    description: "These environments support high-capacity programming, premium hospitality layers, nightlife energy, and large-scale brand integration.",
    bestFor: "Large-scale sports, music, and sponsor-driven activations with major audience energy and broad commercial potential.",
    image: flagshipImg,
    specs: ["Main theaters", "Pool decks", "Lounges", "Nightlife venues", "VIP areas"],
  },
  {
    title: "Premium Intimacy Class",
    description: "These environments create stronger intimacy, deeper connection, and more intentional experience design for premium niche audiences.",
    bestFor: "High-touch wellness, personal growth, and curated community experiences where connection and atmosphere matter most.",
    image: theaterImg,
    specs: ["Retreat-style decks", "Intimate lounges", "Wellness areas", "Dining environments"],
  },
  {
    title: "Modern Social Class",
    description: "These environments blend premium design, social movement, curated hospitality, and strong visual atmosphere into highly engaging voyage experiences.",
    bestFor: "Design-forward premium audiences seeking nightlife, culture, dining, and immersive social energy with strong brand integration potential.",
    image: diningImg,
    specs: ["Restaurants", "Rooftop social zones", "Entertainment venues", "Lounges & bars"],
  },
];

const ShipsShowcase = () => (
  <section className="relative py-24" style={{ background: 'linear-gradient(180deg, #061321 0%, #0A1E35 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          Illustrative Vessel Possibilities
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          The scale of what's possible at sea.
        </h2>
        <p className="font-body text-[#B8C4D1] text-base max-w-3xl mx-auto">
          EmbarqX is designed for premium voyage environments capable of supporting immersive programming, differentiated hospitality, and high-value audience experiences at multiple levels of scale.
        </p>
      </motion.div>

      <div className="mt-12 space-y-8">
        {vessels.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
            <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                {v.title}
              </h3>
              <p className="font-body text-[#B8C4D1] leading-relaxed">
                <span className="text-gold font-semibold">Best for: </span>
                {v.bestFor}
              </p>
              <p className="font-body text-[#B8C4D1] leading-relaxed">
                <span className="text-gold font-semibold">Why it works: </span>
                {v.description}
              </p>
              <p className="font-body text-xs tracking-wide uppercase text-[#8D9AA8] mb-1">Key spaces:</p>
              <div className="flex flex-wrap gap-3">
                {v.specs.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 text-xs font-body font-medium tracking-wide rounded-full border border-gold/20 text-[#8D9AA8]"
                  >
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
);

export default ShipsShowcase;
