import { motion } from "framer-motion";
import flagshipImg from "@/assets/flagship-ship.jpg";
import theaterImg from "@/assets/theater.jpg";
import diningImg from "@/assets/dining.jpg";

const vessels = [
  {
    title: "Flagship-Class Experiences",
    description: "World-class vessels with 5,000+ guest capacity, featuring multi-deck entertainment complexes, premium dining, and theatrical production spaces.",
    image: flagshipImg,
    specs: ["5,000+ Guests", "20+ Decks", "Full Production Theater"],
  },
  {
    title: "Premium Entertainment Environments",
    description: "Purpose-designed entertainment venues supporting world-class concerts, immersive performances, and multi-format programming.",
    image: theaterImg,
    specs: ["1,500-Seat Theaters", "Nightclub Venues", "VIP Lounges"],
  },
  {
    title: "Modern Social Environments",
    description: "Sophisticated dining, social lounges, and lifestyle spaces designed for premium guest experiences and curated community connection.",
    image: diningImg,
    specs: ["Fine Dining", "Specialty Restaurants", "Premium Bars"],
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
          The Scale of What's Possible
        </h2>
        <p className="font-body text-[#8D9AA8] text-sm max-w-xl mx-auto">
          Examples of the caliber and style of vessel environments that can support premium themed cruise programming.
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
                {v.description}
              </p>
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
