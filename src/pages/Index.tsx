import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PositioningStrip from "@/components/sections/PositioningStrip";
import WhatWeCreate from "@/components/sections/WhatWeCreate";
import ConceptsCarousel from "@/components/sections/ConceptsCarousel";
import WhyEmbarqX from "@/components/sections/WhyEmbarqX";
import HowItWorks from "@/components/sections/HowItWorks";
import PartnerTypes from "@/components/sections/PartnerTypes";
import ShipsShowcase from "@/components/sections/ShipsShowcase";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <PositioningStrip />
      <WhatWeCreate />
      <ConceptsCarousel />
      <WhyEmbarqX />
      <HowItWorks />
      <PartnerTypes />
      <ShipsShowcase />
      <GalleryPreview />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
