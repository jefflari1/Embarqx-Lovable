import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import deckImg from "@/assets/deck-nightlife.jpg";
import musicImg from "@/assets/music-voyage.jpg";
import diningImg from "@/assets/dining.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import gamingImg from "@/assets/gaming.jpg";
import theaterImg from "@/assets/theater.jpg";

const images = [
  { src: deckImg, alt: "Arrival & Scale", label: "Arrival & Scale" },
  { src: theaterImg, alt: "Performance & Spectacle", label: "Performance & Spectacle" },
  { src: musicImg, alt: "Nightlife & Social Energy", label: "Nightlife & Social Energy" },
  { src: diningImg, alt: "Dining & Hospitality", label: "Dining & Hospitality" },
  { src: wellnessImg, alt: "Wellness & Reflection", label: "Wellness & Reflection" },
  { src: gamingImg, alt: "VIP & Sponsor Environments", label: "VIP & Sponsor Environments" },
];

const GalleryPreview = () => (
  <section className="relative py-24" style={{ background: 'linear-gradient(180deg, #0D2A47 0%, #143A5C 50%, #0D2A47 100%)' }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
          The Experience
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          A glimpse of what awaits.
        </h2>
        <p className="font-body text-[#B8C4D1] text-base max-w-3xl mx-auto">
          Nightlife, dining, performance, wellness, and elevated connection — voyages as memorable as the communities they bring together.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-lg overflow-hidden group cursor-pointer ${
              i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={640}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 font-body text-xs font-semibold tracking-wide text-white/90">
              {img.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/experiences"
          className="font-body text-sm font-semibold text-gold hover:text-gold-warm transition-colors"
        >
          Explore the full experience portfolio →
        </Link>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
