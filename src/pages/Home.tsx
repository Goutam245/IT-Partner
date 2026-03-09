import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import {
  Shield, Cloud, Server, Lock, Headphones, FileKey,
  ArrowRight, CheckCircle2, Zap, Target, Settings, LifeBuoy,
  Monitor, Globe, Award,
} from "lucide-react";
import { motion } from "framer-motion";

/* ─── Static data ─────────────────────────────────────────── */
const stats = [
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 16, suffix: "", label: "Countries Served" },
  { value: 5625, suffix: "+", label: "Happy Clients" },
  { value: 1160, suffix: "+", label: "Partners Worldwide" },
];

const trustBadges = [
  { icon: Award, text: "Top 1% Microsoft Partner" },
  { icon: Zap, text: "Fixed Price Model" },
  { icon: Monitor, text: "24/7 Support Portal" },
  { icon: Globe, text: "25+ Years Experience" },
];

const processSteps = [
  { icon: Target, title: "Assessment", desc: "We analyze your current IT infrastructure and identify optimization opportunities." },
  { icon: Settings, title: "Migration", desc: "Seamless migration to Microsoft 365 and Azure with zero downtime." },
  { icon: Zap, title: "Implementation", desc: "Deploy and configure solutions tailored to your business needs." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing 24/7 support with dedicated account management." },
];

const serviceCategories = [
  { icon: Server, title: "IT Services", desc: "End-to-end managed IT services for enterprise environments.", link: "/services" },
  { icon: Cloud, title: "Migration", desc: "Cloud migration from any platform to Microsoft 365 and Azure.", link: "/services" },
  { icon: Shield, title: "Security", desc: "Enterprise security solutions including Zero Trust and compliance.", link: "/services" },
  { icon: FileKey, title: "Cloud Subscriptions", desc: "CSP/NCE licensing and subscription management.", link: "/services" },
  { icon: Headphones, title: "Support", desc: "24/7 helpdesk and proactive monitoring for your IT stack.", link: "/services" },
  { icon: Lock, title: "Licensing", desc: "Volume licensing optimization and compliance management.", link: "/services" },
];

const testimonials = [
  {
    photo: "https://i.pravatar.cc/64?img=11",
    name: "Mark Thompson",
    company: "Deloitte",
    quote: "IT Partner handled our entire Microsoft 365 migration flawlessly. Over 2,000 mailboxes moved with zero downtime.",
  },
  {
    photo: "https://i.pravatar.cc/64?img=44",
    name: "Sarah Chen",
    company: "Bosch Engineering",
    quote: "Their Azure expertise saved us 40% on cloud costs while significantly improving our infrastructure security.",
  },
  {
    photo: "https://i.pravatar.cc/64?img=52",
    name: "James Wilson",
    company: "PwC Advisory",
    quote: "Best Microsoft partner we've worked with. Fixed-price model and 24/7 support makes budgeting completely effortless.",
  },
  {
    photo: "https://i.pravatar.cc/64?img=68",
    name: "Emily Rodriguez",
    company: "Siemens Global",
    quote: "From Teams deployment to full Azure migration — delivered everything on time and under budget. Exceptional team.",
  },
  {
    photo: "https://i.pravatar.cc/64?img=76",
    name: "David Kim",
    company: "Samsung Electronics",
    quote: "Complex licensing issues resolved within hours, not days. Their helpdesk team is incredibly responsive and knowledgeable.",
  },
  {
    photo: "https://i.pravatar.cc/64?img=21",
    name: "Anna Mueller",
    company: "EY Consulting",
    quote: "IT Partner's security assessment transformed our approach to Microsoft 365 compliance and data protection completely.",
  },
];

/* ─── Sub-components ──────────────────────────────────────── */
function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2 label-font">{label}</div>
    </div>
  );
}

// ── Logo marquee data ────────────────────────────────────────
const logosRow1: { name: string; svg: React.ReactNode }[] = [
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 23 23" width="26" height="26" aria-hidden>
        <rect x="0" y="0" width="11" height="11" fill="#f25022" />
        <rect x="12" y="0" width="11" height="11" fill="#7fba00" />
        <rect x="0" y="12" width="11" height="11" fill="#00a4ef" />
        <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
      </svg>
    ),
  },
  {
    name: "IBM",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white" aria-hidden>
        <path d="M0 7.5v1h13.5v-1zm2 2v1h9.5v-1zm-2 2v1h13.5v-1zm2 2v1h9.5v-1zm-2 2v1h13.5v-1zM16 7.5v1h8v-1zm1.5 2v1h5v-1zm-1.5 2v1h8v-1zm1.5 2v1h5v-1zm-1.5 2v1h8v-1z" />
      </svg>
    ),
  },
  {
    name: "Adobe",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#FF0000" aria-hidden>
        <path d="M13.966 22.624l-1.69-4.401H8.451l3.258-8.613 4.46 11.688zM6 17.366L1.358 6H5.38l2.933 7.74L6 17.366zM14.421 6h3.994L24 22.624h-4.042z" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#00A1E0" aria-hidden>
        <path d="M10.005 4.08A4.8 4.8 0 0 1 13.8 2.4a4.84 4.84 0 0 1 4.32 2.68 3.6 3.6 0 0 1 1.56-.36 3.72 3.72 0 0 1 3.72 3.72 3.8 3.8 0 0 1-.06.66A3.3 3.3 0 0 1 24 12.3a3.24 3.24 0 0 1-3.24 3.24H3.6A3.6 3.6 0 0 1 0 11.94a3.59 3.59 0 0 1 2.88-3.53 4.2 4.2 0 0 1-.12-.97 4.32 4.32 0 0 1 7.237-3.36z" />
      </svg>
    ),
  },
  {
    name: "Oracle",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#F80000" aria-hidden>
        <path d="M16.412 4.412a7.589 7.589 0 0 1 0 15.176H7.59a7.589 7.589 0 0 1 0-15.176h8.82zm0 2.387H7.59a5.202 5.202 0 0 0 0 10.402h8.82a5.202 5.202 0 1 0 0-10.402z" />
      </svg>
    ),
  },
  {
    name: "SAP",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#0070F2" aria-hidden>
        <path d="M0 0v24h24V0zm15.036 6.667c1.65 0 2.99.47 3.938 1.385l-1.32 1.44c-.65-.607-1.5-.934-2.618-.934-1.943 0-3.33 1.366-3.33 3.442 0 2.098 1.387 3.463 3.33 3.463 1.118 0 1.967-.327 2.618-.934l1.32 1.44c-.947.915-2.288 1.386-3.938 1.386-3.03 0-5.23-2.098-5.23-5.355 0-3.257 2.2-5.333 5.23-5.333z" />
      </svg>
    ),
  },
  {
    name: "Dell",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#007DB8" aria-hidden>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.444 15.306c-1.13 1.13-2.753 1.8-4.628 1.8-3.584 0-6.25-2.5-6.25-5.834 0-3.333 2.666-5.694 6.25-5.694 1.875 0 3.498.695 4.628 1.8l-1.39 1.39c-.75-.806-1.876-1.25-3.238-1.25-2.362 0-4.028 1.666-4.028 3.754 0 2.084 1.666 3.89 4.028 3.89 1.362 0 2.487-.584 3.238-1.39z" />
      </svg>
    ),
  },
  {
    name: "Intel",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#0071C5" aria-hidden>
        <path d="M7.443 4.437v1.378H5.24V4.437zm9.122 0v1.378h-2.204V4.437zM3.037 7.04v9.92H5.24V7.04zm4.406 0v9.92h2.204V7.04zm4.406 0v9.92h2.204V7.04zm4.406 0v9.92h2.203V7.04zM3.037 18.185v1.378H5.24v-1.378zm9.122 0v1.378h2.204v-1.378z" />
      </svg>
    ),
  },
  {
    name: "VMware",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#607078" aria-hidden>
        <path d="M.026 12.37c0-2.255 1.846-3.426 3.78-3.426 1.08 0 1.99.351 2.672.903v-.77h1.49v6.556H6.478v-.748c-.683.55-1.593.879-2.671.879-1.935 0-3.78-1.17-3.78-3.394zm6.452 0c0-1.215-.99-2.138-2.26-2.138-1.253 0-2.26.923-2.26 2.138 0 1.196 1.007 2.12 2.26 2.12 1.27 0 2.26-.924 2.26-2.12z" />
      </svg>
    ),
  },
  {
    name: "Cisco",
    svg: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#1BA0D7" aria-hidden>
        <path d="M11.927 3.317L9.24 8.137h5.374zM5.356 7.26L2.668 12.08H8.04zM18.5 7.26l-2.688 4.82h5.374zM2 11.204L-.688 16.02H4.69zm8.285 0L7.598 16.02h5.373zm8.286 0L15.88 16.02h5.373zm4.143 0L19.826 16.02H24z" />
      </svg>
    ),
  },
];

const logosRow2: { name: string; color: string }[] = [
  { name: "Deloitte",  color: "#86BC25" },
  { name: "Siemens",   color: "#009999" },
  { name: "Samsung",   color: "#1428A0" },
  { name: "PwC",       color: "#D04A02" },
  { name: "EY",        color: "#FFE600" },
  { name: "Accenture", color: "#A100FF" },
  { name: "Bosch",     color: "#EA0016" },
  { name: "HPE",       color: "#01A982" },
  { name: "Lenovo",    color: "#E2231A" },
  { name: "Dropbox",   color: "#0061FF" },
];

/** SVG logo + name card */
function LogoCard({ name, svg }: { name: string; svg: React.ReactNode }) {
  return (
    <div
      className="group shrink-0 flex items-center gap-[10px] rounded-[10px] border px-[22px] py-[14px] cursor-default transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)", whiteSpace: "nowrap" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#00A9E0"; (e.currentTarget as HTMLDivElement).style.background = "rgba(0,169,224,0.08)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)"; }}
    >
      <span className="shrink-0 flex items-center transition-all duration-300 group-hover:scale-110">{svg}</span>
      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 600, letterSpacing: "0.3px" }}>{name}</span>
    </div>
  );
}

/** Text-only brand name card */
function TextLogo({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="shrink-0 flex items-center rounded-[10px] border px-[22px] py-[12px] cursor-default transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", whiteSpace: "nowrap" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = color; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
    >
      <span style={{ color, fontSize: "15px", fontWeight: 700, letterSpacing: "0.5px" }}>{name}</span>
    </div>
  );
}

/** Auto-rotating single-card testimonial carousel */
function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const active = testimonials[activeIndex];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
            Our Happy <span className="gradient-text">Clients</span>
          </h2>
        </AnimatedSection>

        <div
          className="mx-auto max-w-[760px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative rounded-2xl border p-10"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "rgba(0,169,224,0.2)",
              boxShadow: "0 0 40px rgba(0,169,224,0.08)",
            }}
          >
            {/* Client photo — top right */}
            <img
              src={active.photo}
              alt={active.name}
              className="absolute right-8 top-8 h-16 w-16 rounded-full object-cover border-2 border-primary/30"
              loading="lazy"
            />

            {/* Stars */}
            <div className="mb-6 flex gap-1" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg" style={{ color: "#F59E0B" }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="mb-8 max-w-[560px] text-lg italic leading-relaxed text-foreground">
              "{active.quote}"
            </p>

            {/* Divider */}
            <div className="mb-6 h-px w-full bg-border" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full gradient-cta text-sm font-bold text-primary-foreground"
              >
                {active.name[0]}
              </div>
              <div>
                <div className="text-base font-bold text-foreground">{active.name}</div>
                <div className="text-sm text-primary/80">{active.company}</div>
              </div>
            </div>
          </motion.div>

          {/* Dot navigation */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className="h-3 rounded-full transition-all duration-300 ease-in-out"
                style={
                  activeIndex === index
                    ? { width: 32, background: "hsl(var(--primary))" }
                    : { width: 12, background: "transparent", border: "2px solid hsl(var(--muted-foreground) / 0.6)" }
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display font-extrabold leading-[1.1] mb-6">
                Your Trusted{" "}
                <span className="gradient-text">Microsoft Cloud</span>{" "}
                Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                IT services, Microsoft 365, Azure solutions, and cloud migration — all from a Gold Microsoft Partner since 2006.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="shimmer-btn gradient-cta text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contacts"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all inline-flex items-center gap-2"
                >
                  Book a Free Call
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="glass-card p-8 relative">
                <div className="grid grid-cols-3 gap-4">
                  {["Microsoft 365", "Azure", "Teams", "Intune", "SharePoint", "Defender", "Power BI", "Exchange", "Entra ID"].map((app, i) => (
                    <motion.div
                      key={app}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="glass-card p-3 text-center hover:border-primary/30 transition-colors cursor-default"
                    >
                      <div className="w-8 h-8 mx-auto mb-2 rounded-lg gradient-cta flex items-center justify-center">
                        <Cloud size={16} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {trustBadges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon size={16} className="text-primary" />
                <span>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              How We're <span className="gradient-text">Different</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven four-step approach ensures every project is delivered on time, on budget, with measurable results.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="glass-card p-6 card-hover h-full">
                  <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-4">
                    <step.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div className="label-font text-xs text-primary mb-2">Step {i + 1}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Microsoft 365 End-to-End */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-[42px] font-display font-bold mb-6">
                The End-to-End <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                As a Gold Microsoft Partner, we provide comprehensive cloud solutions covering every aspect of your digital transformation — from initial assessment to ongoing support.
              </p>
              <ul className="space-y-4">
                {[
                  "Microsoft 365 deployment and migration",
                  "Azure infrastructure and hybrid cloud",
                  "Security and compliance implementation",
                  "Teams voice and collaboration setup",
                  "Power Platform and business automation",
                  "24/7 managed services and support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 text-center">
                <div className="text-6xl font-display font-bold gradient-text mb-2">M365</div>
                <p className="text-muted-foreground text-sm mb-6">Microsoft 365 Suite</p>
                <div className="grid grid-cols-3 gap-3">
                  {["Exchange", "SharePoint", "Teams", "OneDrive", "Intune", "Defender"].map((p) => (
                    <div key={p} className="bg-muted/50 rounded-lg py-3 px-2 text-xs text-muted-foreground label-font">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              IT Services — <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over 300 enterprise-grade services covering every aspect of Microsoft cloud technology.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <StaggerItem key={cat.title}>
                <Link to={cat.link} className="glass-card p-6 card-hover block h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <cat.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why Choose IT Partner ─────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              Why Choose <span className="gradient-text">IT Partner</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "⚡", title: "Fixed Price Model", desc: "No surprises. Every project has a clear, upfront price — no hidden fees." },
              { emoji: "🔒", title: "Microsoft Gold Partner Since 2006", desc: "18+ years as a certified Microsoft partner with verified expertise." },
              { emoji: "🌍", title: "Global Coverage", desc: "Serving clients in 16+ countries across 5 continents." },
              { emoji: "🎯", title: "End-to-End Solutions", desc: "From assessment to implementation to ongoing support — all in one place." },
              { emoji: "⏱️", title: "24/7 Self-Service Portal", desc: "Manage your services, subscriptions and tickets anytime at support.o365hq.com" },
              { emoji: "💰", title: "100% Satisfaction Guarantee", desc: "Not happy? We'll make it right. Our team stands behind every project." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-6 h-full transition-all duration-300 hover:border-primary/30 group">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Microsoft Certifications Banner ──────────────── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, hsl(222 47% 7%), hsl(220 39% 10%))" }}>
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
              Certified Microsoft Partner Across <span className="gradient-text">Every Solution Area</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Microsoft 365", color: "#D83B01" },
                { name: "Azure", color: "#0078D4" },
                { name: "Dynamics 365", color: "#002050" },
                { name: "Power Platform", color: "#742774" },
                { name: "Security", color: "#E74856" },
                { name: "Teams", color: "#6264A7" },
                { name: "Surface", color: "#0078D4" },
              ].map((badge) => (
                <span
                  key={badge.name}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105"
                  style={{ borderColor: badge.color, background: `${badge.color}15` }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: badge.color }} />
                  {badge.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Logo Marquee ─────────────────────────────────── */}
      <section className="bg-card overflow-hidden py-24">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-row-1 {
            animation: scroll-left 50s linear infinite !important;
            animation-play-state: running !important;
          }
          .marquee-row-2 {
            animation: scroll-right 50s linear infinite !important;
            animation-play-state: running !important;
          }
          .marquee-row-1:hover,
          .marquee-row-2:hover {
            animation-play-state: running !important;
          }
        `}</style>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              Trusted by <span className="gradient-text">5,000+</span> Organizations
            </h2>
          </div>
        </div>

        <div className="space-y-5 overflow-hidden">
          <div className="flex w-max gap-6 marquee-row-1">
            {[...logosRow1, ...logosRow1, ...logosRow1].map((logo, i) => (
              <LogoCard key={`r1-${i}`} name={logo.name} svg={logo.svg} />
            ))}
          </div>
          <div className="flex w-max gap-6 marquee-row-2">
            {[...logosRow2, ...logosRow2, ...logosRow2].map((logo, i) => (
              <TextLogo key={`r2-${i}`} name={logo.name} color={logo.color} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* Gold Partner Banner */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm label-font mb-6">
              <Award size={16} /> Microsoft Gold Partner
            </div>
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              A Gold Microsoft Partner <span className="gradient-text">Since 2006</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Two decades of Microsoft expertise at your service. We hold multiple Gold and Silver competencies across the Microsoft partner ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Gold Cloud Productivity", "Gold Enterprise Mobility", "Silver Datacenter", "Silver Security"].map((badge) => (
                <span key={badge} className="glass-card px-4 py-2 text-xs label-font text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="gradient-cta rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-[42px] font-display font-bold text-primary-foreground mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Get a free consultation with our Microsoft certified experts. No commitment, just honest advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contacts"
                  className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
                >
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
