import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/concept-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "General",
    items: [
      { q: "What is EmbarqX?", a: "EmbarqX is a premium themed cruise platform designed to create differentiated voyage concepts that bring together audience identity, curated programming, premium hospitality, and aligned partnerships. The goal is to build experiences with stronger emotional demand and long-term platform value." },
      { q: "Is EmbarqX a cruise line?", a: "No. EmbarqX is not a cruise line. It is a concept and platform company designed to originate premium themed voyage experiences and align the right operators, partners, sponsors, and collaborators around them." },
      { q: "Is EmbarqX focused on a single event or a broader platform?", a: "EmbarqX is built as a broader platform. While strong flagship activations matter, the long-term goal is to create recurring premium experiences that can expand into a portfolio of differentiated voyage concepts over time." },
      { q: "What makes EmbarqX different from a typical charter concept?", a: "EmbarqX is designed to go beyond one-time activations by combining audience-led concepts, premium experience design, strategic partnerships, and long-term platform thinking. It is not just about launching a cruise. It is about building recurring value around differentiated experiences." },
      { q: "What types of experiences does EmbarqX develop?", a: "The platform includes premium themed voyage concepts such as Sports Legends at Sea, Poker & Gaming Voyages, Wellness & Consciousness Voyages, Music & Culture Voyages, and Custom Brand & Private Voyages." },
    ],
  },
  {
    title: "Partnerships & Operators",
    items: [
      { q: "Does EmbarqX work with cruise operators and charter partners?", a: "Yes. EmbarqX is designed to work with the right cruise operators and charter partners who want to create differentiated premium voyage experiences with stronger long-term potential." },
      { q: "What does EmbarqX bring to an operator relationship?", a: "EmbarqX brings concept origination, platform thinking, audience-led positioning, premium experience direction, and strategic alignment around themes, partnerships, and growth potential." },
      { q: "What does the operator typically bring?", a: "The operator typically brings execution capability, charter expertise, logistics, on-board delivery, infrastructure, and operational alignment needed to bring the concept to life at a high level." },
      { q: "Why would an operator want to work with EmbarqX?", a: "Because EmbarqX can help open access to new thematic spaces, new customer segments, stronger audience identity, premium positioning, and recurring voyage opportunities without requiring the operator to originate the entire vision internally." },
      { q: "Is EmbarqX looking for every possible partner?", a: "No. EmbarqX is built for the right partners — those who understand the value of differentiated premium experiences, strategic alignment, and long-term platform potential." },
    ],
  },
  {
    title: "Brands, Sponsors & Talent",
    items: [
      { q: "Can brands sponsor an EmbarqX voyage?", a: "Yes. EmbarqX concepts are designed to create premium sponsor-ready environments where brands can integrate through curated activations, audience alignment, and meaningful participation rather than generic placement." },
      { q: "What makes sponsorship attractive in this model?", a: "These experiences are designed around audience identity, immersive programming, and premium participation, which can create stronger brand resonance and more distinctive activation opportunities." },
      { q: "Does EmbarqX work with celebrities, athletes, creators, or talent-side teams?", a: "Yes. EmbarqX is designed to collaborate with the right talent-side partners, athletes, creators, and cultural voices whose influence and audience connection can become part of a premium themed experience." },
      { q: "How does EmbarqX think about talent participation?", a: "Not as a simple appearance, but as part of a larger concept where identity, access, programming, and audience experience come together in a more meaningful way." },
      { q: "Can EmbarqX support custom brand or private-group experiences?", a: "Yes. EmbarqX can support custom premium voyages for brands, sponsors, private groups, invitation-only communities, and other strategic collaborators seeking a more curated and exclusive experience." },
    ],
  },
  {
    title: "Investors & Platform Value",
    items: [
      { q: "Can investors participate in EmbarqX at the platform level?", a: "EmbarqX is designed as a platform opportunity, not simply a single voyage concept. The right investor conversations can explore broader long-term value creation around recurring premium experiences, partnerships, and concept-led growth." },
      { q: "Is this an investment in one concept only?", a: "No. The broader vision is to build a diversified premium concept platform that can launch strong flagship experiences while expanding across multiple thematic lanes over time." },
      { q: "How is value created beyond ticket sales?", a: "Value can be created through premium positioning, curated programming, VIP experiences, sponsorship, strategic partnerships, repeat launches, and broader long-term brand equity around differentiated concepts." },
      { q: "Why is recurring value important to the model?", a: "Recurring value is what separates a one-time activation from a stronger platform. EmbarqX is designed to turn successful concepts into repeatable experiences with deeper audience connection and broader commercial potential." },
      { q: "What kind of investor is the best fit for EmbarqX?", a: "The strongest fit is an investor who understands differentiated premium experiences, audience-led demand, aligned partnerships, and the long-term value of building a platform rather than chasing a one-time activation." },
    ],
  },
  {
    title: "Concepts, Vessels & Timing",
    items: [
      { q: "Are the vessel examples on the site confirmed?", a: "No. Vessel examples are illustrative unless explicitly stated otherwise. They are intended to show the scale and type of premium environments that can support the EmbarqX experience model." },
      { q: "Why show vessel examples if nothing is confirmed?", a: "Because the type of environment matters. Different concepts require different scales, atmospheres, and hospitality settings, and the site is designed to communicate the caliber of experience EmbarqX is built for." },
      { q: "Are the concepts on the site final?", a: "They are platform-ready concept lanes, not necessarily final locked activations. EmbarqX is designed to evolve strong concepts into launch-ready experiences through the right partnerships and strategic alignment." },
      { q: "Can EmbarqX create a concept around a specific audience or community?", a: "Yes. The platform is built to develop concepts around clear audience identity, thematic relevance, and premium experience design, including custom or partner-led opportunities when the fit is right." },
      { q: "How early is EmbarqX in its journey?", a: "EmbarqX is in the stage of defining the brand, platform narrative, experience portfolio, and strategic partnership pathway with the goal of building a strong premium foundation for future execution and growth." },
    ],
  },
  {
    title: "Working Together",
    items: [
      { q: "Who should reach out to EmbarqX?", a: "The best fit includes cruise operators, investors, sponsors, brands, private groups, talent representatives, and strategic collaborators who see the long-term value of premium themed experiences." },
      { q: "What should a first conversation with EmbarqX be about?", a: "A first conversation should focus on strategic fit, concept alignment, partnership potential, and whether there is a shared vision for building something with long-term value." },
      { q: "Is EmbarqX open to custom concepts?", a: "Yes, when the concept aligns with the platform's premium direction, audience logic, and long-term potential." },
      { q: "Does EmbarqX only work in one category?", a: "No. EmbarqX is designed to operate across multiple premium thematic lanes, which is part of what gives the platform greater resilience and broader opportunity over time." },
      { q: "What happens after an initial conversation?", a: "If the alignment is strong, the next step would typically involve refining the concept fit, partnership structure, strategic priorities, and pathway to a more serious working discussion." },
    ],
  },
];

/* Background per section index */
const sectionBgs: Record<number, { style: React.CSSProperties; isLight?: boolean }> = {
  0: { style: { background: 'linear-gradient(180deg, hsl(207 40% 22%) 0%, hsl(210 45% 20%) 50%, hsl(210 50% 17%) 100%)' } },
  1: { style: { background: 'linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(212 60% 9%) 40%, hsl(210 55% 11%) 100%)' } },
  2: { style: { background: 'rgba(245, 241, 232, 0.94)' }, isLight: true },
  3: { style: { background: 'linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(210 50% 14%) 50%, hsl(210 55% 11%) 100%)' } },
  4: { style: { background: 'linear-gradient(180deg, hsl(210 55% 11%) 0%, hsl(207 45% 18%) 50%, hsl(210 50% 17%) 100%)' } },
  5: { style: { background: 'linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(212 58% 9%) 50%, hsl(210 55% 10%) 100%)' } },
};

const FAQ = () => (
  <>
    <Navbar />
    <main className="min-h-screen">

      {/* ─── SECTION 1: HERO ─── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 50% 14%) 60%, hsl(207 40% 20%) 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-[hsl(207_40%_22%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.06),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              Frequently Asked Questions
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Clarity for the right conversations.
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              EmbarqX is designed to bring together premium concepts, aligned partnerships, and long-term platform thinking. These answers are here to clarify what EmbarqX is, how it works, and how the right partners can engage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Partner With EmbarqX
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-body font-semibold tracking-wide hover:bg-muted/40 transition-colors"
              >
                Discuss a Strategic Opportunity
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTIONS 2-7: FAQ CATEGORIES ─── */}
      {faqSections.map((section, sIdx) => {
        const bg = sectionBgs[sIdx];
        const isLight = bg?.isLight;

        return (
          <section
            key={section.title}
            className="relative py-20 md:py-28"
            style={bg?.style}
          >
            <div className="container mx-auto px-6">
              <motion.div {...fadeUp} className="max-w-3xl mx-auto">
                <h2 className={`font-display text-2xl md:text-4xl font-bold mb-10 ${isLight ? '!text-[hsl(212,60%,7%)]' : ''}`}>
                  {section.title}
                </h2>

                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`${sIdx}-${qIdx}`}
                      className={`rounded-xl border px-6 ${
                        isLight
                          ? 'bg-white/60 border-[hsl(40,30%,80%)]'
                          : 'gradient-card border-border'
                      }`}
                    >
                      <AccordionTrigger
                        className={`font-body text-base font-semibold text-left py-5 hover:no-underline ${
                          isLight ? '!text-[hsl(212,60%,7%)]' : 'text-foreground'
                        }`}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent
                        className={`font-body text-sm leading-relaxed pb-5 ${
                          isLight ? 'text-[hsl(212,25%,35%)]' : 'text-muted-foreground'
                        }`}
                      >
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ─── SECTION 8: CLOSING CTA ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, hsl(210 55% 10%) 0%, hsl(212 58% 10%) 40%, hsl(212 60% 7%) 100%)' }}
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse,hsl(40_40%_55%/0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Still have a question?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              The best next step is a thoughtful conversation. EmbarqX is designed for the right partners, collaborators, and investors who are looking to build premium experiences with long-term strategic value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Discuss a Strategic Opportunity
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-body font-semibold tracking-wide hover:bg-muted/40 transition-colors"
              >
                Partner With EmbarqX
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default FAQ;
