import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Anchor, TrendingUp, Megaphone, Star, Handshake, MessageCircle,
  Mail, Phone, ArrowRight, CheckCircle, Send, Globe, MapPin, User
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const inquiryTypes = [
  { value: "cruise-operator", label: "Cruise Operator", support: "Explore charter alignment, concept fit, and operational potential." },
  { value: "investor", label: "Investor", support: "Discuss platform value, growth trajectory, and strategic alignment." },
  { value: "sponsor-brand", label: "Sponsor / Brand", support: "Explore activation environments and audience-driven brand integration." },
  { value: "talent-representation", label: "Talent / Representation", support: "Discuss concept collaboration, audience relevance, and creative alignment." },
  { value: "strategic-collaborator", label: "Strategic Collaborator", support: "Explore aligned opportunities with lasting platform potential." },
  { value: "general", label: "General Inquiry", support: "Share the nature of your interest and what you'd like to explore." },
];

const audienceCards = [
  { icon: Anchor, title: "Cruise Operators", desc: "Explore concept fit, charter alignment, and long-term premium voyage opportunities." },
  { icon: TrendingUp, title: "Investors", desc: "Discuss platform value, differentiated positioning, and recurring growth potential." },
  { icon: Megaphone, title: "Sponsors & Brands", desc: "Explore premium activation environments, audience alignment, and strategic brand opportunities." },
  { icon: Star, title: "Talent & Representation", desc: "Discuss concept collaboration, audience relevance, and experience-led partnership potential." },
  { icon: Handshake, title: "Strategic Collaborators", desc: "Explore aligned opportunities to help shape premium concepts with long-term value." },
  { icon: MessageCircle, title: "General Inquiry", desc: "For thoughtful outreach that does not fit into one of the categories above." },
];

const steps = [
  { num: "01", title: "Initial review", desc: "Your inquiry is reviewed to understand fit, context, and the type of opportunity being explored." },
  { num: "02", title: "Strategic alignment", desc: "If there is alignment, the next step is a more focused conversation around concept, partnership fit, or platform relevance." },
  { num: "03", title: "Meaningful next steps", desc: "The goal is not a generic response, but the beginning of the right conversation with the right level of strategic clarity." },
];

const scrollToForm = () => {
  document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
};

const Contact = () => {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportLine = inquiryTypes.find(t => t.value === selectedType)?.support;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry received",
        description: "Thank you. EmbarqX will review your inquiry and respond if there is strategic alignment.",
      });
      (e.target as HTMLFormElement).reset();
      setSelectedType("");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden">

        {/* SECTION 1 — HERO */}
        <section
          className="relative pt-36 pb-28 md:pt-44 md:pb-36"
          style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 55% 12%) 50%, hsl(210 50% 17%) 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 20%, hsl(40 40% 55% / 0.06), transparent)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <img src={contactHero} alt="" className="w-full h-full object-cover" width={1920} height={864} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(212 60% 7% / 0.6) 50%, hsl(210 50% 17%) 100%)" }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-5">Strategic Inquiries</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Built for thoughtful introductions and serious opportunities.
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                EmbarqX is designed for the right operators, investors, sponsors, talent-side partners, and strategic collaborators who see the value of premium experiences built with long-term vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToForm} className="font-body text-base px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button asChild variant="outline" size="lg" className="font-body text-base px-8 py-6 rounded-lg border-border text-foreground hover:bg-secondary/40">
                  <Link to="/partners">Partner With EmbarqX</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — HOW TO CONNECT */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(210 50% 17%) 0%, hsl(210 45% 20%) 50%, hsl(210 50% 17%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">How to connect with EmbarqX</h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                If there is a strategic fit, the best next step is a thoughtful conversation. Select the inquiry type that best matches your role so EmbarqX can better understand what you are looking to explore.
              </p>
            </motion.div>
            <motion.div
              className="max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={1}
            >
              <div className="rounded-2xl border border-border p-8 md:p-12" style={{ background: "linear-gradient(160deg, hsl(210 50% 14%) 0%, hsl(210 55% 10%) 100%)" }}>
                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:hello@embarqx.com" className="font-body text-foreground hover:text-primary transition-colors">hello@embarqx.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Phone</p>
                      <a href="tel:18332535254" className="font-body text-foreground hover:text-primary transition-colors">1-833-253-5254</a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    For the strongest alignment, include a short overview of your role, organization, and area of interest.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — WHO THIS IS FOR */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(210 55% 10%) 0%, hsl(212 60% 7%) 50%, hsl(210 55% 10%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
                Built for the right kinds of introductions
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                EmbarqX is designed for partners and collaborators who see the value of differentiated experiences and lasting platform potential.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {audienceCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-500 group cursor-pointer"
                  style={{ background: "linear-gradient(160deg, hsl(210 50% 14%) 0%, hsl(210 55% 10%) 100%)" }}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i * 0.5}
                  onClick={scrollToForm}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — INQUIRY FORM (warm editorial light panel) */}
        <section
          id="inquiry-form"
          className="py-24 md:py-32"
          style={{ background: "rgba(245, 241, 232, 0.94)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div className="text-center max-w-3xl mx-auto mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight" style={{ color: "hsl(212 60% 7%)" }}>
                Tell us what you are looking to explore
              </h2>
              <p className="font-body text-lg mt-4 leading-relaxed" style={{ color: "hsl(210 20% 35%)" }}>
                The more context you share, the more meaningful the conversation can be.
              </p>
            </motion.div>
            <motion.div
              className="max-w-2xl mx-auto"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={1}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Full Name *</Label>
                  <Input
                    required name="name" placeholder="Your full name"
                    className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                  />
                </div>

                {/* Company + Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Company / Organization *</Label>
                    <Input
                      required name="company" placeholder="Your organization"
                      className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Role / Title *</Label>
                    <Input
                      required name="role" placeholder="Your role"
                      className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Email Address *</Label>
                  <Input
                    required type="email" name="email" placeholder="you@company.com"
                    className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Inquiry Type *</Label>
                  <Select required value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] focus:ring-primary">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map(t => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {supportLine && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                      className="font-body text-sm italic" style={{ color: "hsl(40 40% 45%)" }}
                    >
                      {supportLine}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium" style={{ color: "hsl(212 60% 7%)" }}>Message *</Label>
                  <Textarea
                    required name="message" rows={5}
                    placeholder="Share a brief overview of your interest and what you'd like to explore with EmbarqX."
                    className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary resize-none"
                  />
                </div>

                {/* Optional fields */}
                <div className="border-t pt-6" style={{ borderColor: "hsl(210 20% 80%)" }}>
                  <p className="font-body text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(40 40% 45%)" }}>Optional</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label className="font-body text-sm font-medium flex items-center gap-2" style={{ color: "hsl(212 60% 7%)" }}>
                        <Phone className="w-3.5 h-3.5" style={{ color: "hsl(40 40% 55%)" }} /> Phone / WhatsApp
                      </Label>
                      <Input
                        name="phone" placeholder="+1 (555) 000-0000"
                        className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body text-sm font-medium flex items-center gap-2" style={{ color: "hsl(212 60% 7%)" }}>
                        <Globe className="w-3.5 h-3.5" style={{ color: "hsl(40 40% 55%)" }} /> Website
                      </Label>
                      <Input
                        name="website" placeholder="https://yoursite.com"
                        className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body text-sm font-medium flex items-center gap-2" style={{ color: "hsl(212 60% 7%)" }}>
                        <MapPin className="w-3.5 h-3.5" style={{ color: "hsl(40 40% 55%)" }} /> Location
                      </Label>
                      <Input
                        name="location" placeholder="City, Country"
                        className="bg-white border-[hsl(210_20%_80%)] text-[hsl(212_60%_7%)] placeholder:text-[hsl(210_15%_60%)] focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit" size="lg" disabled={isSubmitting}
                  className="w-full font-body text-base py-6 rounded-lg bg-[hsl(212_60%_7%)] text-foreground hover:bg-[hsl(210_55%_12%)] transition-all"
                >
                  {isSubmitting ? "Sending..." : "Start the Conversation"} <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — WHAT HAPPENS NEXT */}
        <section
          className="py-24 md:py-32"
          style={{ background: "linear-gradient(180deg, hsl(210 55% 10%) 0%, hsl(210 50% 14%) 50%, hsl(210 55% 10%) 100%)" }}
        >
          <div className="container mx-auto px-6">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">What happens next</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="rounded-xl border border-border p-8"
                  style={{ background: "linear-gradient(160deg, hsl(210 50% 14%) 0%, hsl(210 55% 10%) 100%)" }}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i * 0.5}
                >
                  <span className="font-display text-3xl font-bold text-primary/40 block mb-4">{step.num}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={2}
            >
              EmbarqX values quality over volume. The strongest conversations happen when there is genuine alignment around concept, partnership potential, and long-term vision.
            </motion.p>
          </div>
        </section>

        {/* SECTION 6 — CLOSING CTA */}
        <section
          className="relative py-28 md:py-36"
          style={{ background: "linear-gradient(180deg, hsl(212 60% 7%) 0%, hsl(210 55% 10%) 50%, hsl(212 60% 5%) 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(40 40% 55% / 0.05), transparent)" }} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div className="text-center max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                The right conversation can shape what comes next
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                EmbarqX is designed for the right partners, investors, operators, brands, and collaborators who believe premium experiences can become much more than one-time moments when they are built with strong concepts and aligned vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToForm} className="font-body text-base px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button asChild variant="outline" size="lg" className="font-body text-base px-8 py-6 rounded-lg border-border text-foreground hover:bg-secondary/40">
                  <Link to="/partners">Partner With EmbarqX</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
