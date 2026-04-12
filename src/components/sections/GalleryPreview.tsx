import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import deckImg from "@/assets/deck-nightlife.jpg";
import musicImg from "@/assets/music-voyage.jpg";
import diningImg from "@/assets/dining.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import gamingImg from "@/assets/gaming.jpg";
import theaterImg from "@/assets/theater.jpg";

const images = [
  { src: deckImg, alt: "Premium deck lounge atmosphere" },
  { src: musicImg, alt: "Live music performance at sea" },
  { src: diningImg, alt: "Fine dining experience" },
  { src: wellnessImg, alt: "Wellness and spa environment" },
  { src: gamingImg, alt: "Premium gaming venue" },
  { src: theaterImg, alt: "Theater and entertainment" },
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
          Atmosphere
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          A Glimpse of What Awaits
        </h2>
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
            <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="font-body text-sm font-semibold text-gold hover:text-gold-warm transition-colors"
        >
          View Full Gallery →
        </Link>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
