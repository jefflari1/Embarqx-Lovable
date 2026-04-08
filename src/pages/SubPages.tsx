import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  description: string;
}

const PlaceholderPage = ({ title, subtitle, description }: PlaceholderPageProps) => (
  <>
    <Navbar />
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
            {subtitle}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="mt-12 gradient-card rounded-xl border border-border p-12">
            <p className="font-body text-muted-foreground text-sm">
              This page is under development. Full content coming soon.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </>
);

export const ConceptPage = () => (
  <PlaceholderPage
    title="The Concept"
    subtitle="The Platform"
    description="Discover how EmbarqX creates premium themed cruise concepts that unite culture, celebrity, community, and commerce into scalable voyage experiences."
  />
);

export const ExperiencesPage = () => (
  <PlaceholderPage
    title="Signature Experiences"
    subtitle="Curated Voyages"
    description="Explore the range of premium themed cruise concepts EmbarqX can originate, package, and scale — from music and culture to wellness and gaming."
  />
);

export const PartnersPage = () => (
  <PlaceholderPage
    title="Partners"
    subtitle="Collaborate"
    description="Learn how cruise operators, sponsors, talent partners, and strategic collaborators can participate in the EmbarqX ecosystem."
  />
);

export const InvestorsPage = () => (
  <PlaceholderPage
    title="Investors"
    subtitle="The Opportunity"
    description="A structured, scalable investment opportunity at the intersection of entertainment, hospitality, community, and commerce."
  />
);

export const ShipsPage = () => (
  <PlaceholderPage
    title="Ships & Venues"
    subtitle="Illustrative Possibilities"
    description="Explore the caliber and style of vessel environments designed to support premium themed cruise programming at scale."
  />
);

export const GalleryPage = () => (
  <PlaceholderPage
    title="Gallery"
    subtitle="Visual Stories"
    description="A curated visual preview of the premium atmospheres, venues, and experiences that define the EmbarqX vision."
  />
);

export const AboutPage = () => (
  <PlaceholderPage
    title="About EmbarqX"
    subtitle="Our Story"
    description="The vision, philosophy, and strategic intent behind the world's premier themed cruise experience platform."
  />
);

export const FAQPage = () => (
  <PlaceholderPage
    title="FAQ"
    subtitle="Questions"
    description="Answers to frequently asked questions about EmbarqX, our model, partnerships, and how to get involved."
  />
);

export const ContactPage = () => (
  <PlaceholderPage
    title="Contact"
    subtitle="Start a Conversation"
    description="Whether you're an investor, operator, sponsor, talent partner, or collaborator — let's discuss what's possible."
  />
);
