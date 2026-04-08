import { motion } from "framer-motion";

const PositioningStrip = () => (
  <section className="py-20 border-y border-border">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
          Not a One-Off Event
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          A Platform for Premium Themed Cruise Experiences
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          EmbarqX sits at the intersection of entertainment, hospitality, community,
          and commerce — designing experiences people don't just attend. They identify with.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PositioningStrip;
