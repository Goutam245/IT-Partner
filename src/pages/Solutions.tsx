import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ArrowRight, Search, ClipboardList, Settings, Headphones } from "lucide-react";

/* ── Solution Cards ────────────────────────────────────────── */
const solutionCards = [
  {
    emoji: "☁️",
    title: "Cloud Migration",
    problem: "Struggling with legacy on-premise systems?",
    bullets: ["Office 365 & Exchange migration", "Azure infrastructure setup", "Zero-downtime deployment"],
    cta: "Explore Migration",
  },
  {
    emoji: "🔐",
    title: "Security & Compliance",
    problem: "Worried about data breaches and compliance?",
    bullets: ["Microsoft Defender deployment", "Azure AD & Intune setup", "ISO 27001 compliance readiness"],
    cta: "Explore Security",
  },
  {
    emoji: "💼",
    title: "Modern Workplace",
    problem: "Remote teams struggling to collaborate?",
    bullets: ["Microsoft 365 full deployment", "Teams & SharePoint setup", "End-user training & adoption"],
    cta: "Explore Modern Work",
  },
  {
    emoji: "📊",
    title: "Data & AI",
    problem: "Drowning in data with no insights?",
    bullets: ["Power BI dashboards", "Azure AI & ML solutions", "Dynamics 365 integration"],
    cta: "Explore Data & AI",
  },
  {
    emoji: "🖥️",
    title: "Infrastructure",
    problem: "Outdated servers slowing you down?",
    bullets: ["Azure Virtual Desktop", "Windows Server migration", "Hybrid AD management"],
    cta: "Explore Infrastructure",
  },
  {
    emoji: "🎧",
    title: "Managed Support",
    problem: "No in-house IT team to manage systems?",
    bullets: ["24/7 helpdesk portal", "Proactive monitoring", "Monthly health reports"],
    cta: "Explore Support",
  },
];

/* ── Process Steps ─────────────────────────────────────────── */
const steps = [
  { icon: Search, num: "1", emoji: "🔍", title: "Assessment", desc: "We audit your current environment and identify gaps." },
  { icon: ClipboardList, num: "2", emoji: "📋", title: "Planning", desc: "Custom roadmap tailored to your business goals." },
  { icon: Settings, num: "3", emoji: "⚙️", title: "Implementation", desc: "Hands-on deployment by certified engineers." },
  { icon: Headphones, num: "4", emoji: "🎧", title: "Support", desc: "Ongoing helpdesk, monitoring, and optimization." },
];

/* ── Industries ────────────────────────────────────────────── */
const industries: Record<string, { pain: string; solution: string; products: string; stat: string }> = {
  Healthcare: {
    pain: "HIPAA compliance, secure patient data, remote care infrastructure.",
    solution: "Microsoft 365 with Azure compliance controls, Teams for telehealth, Intune for device management.",
    products: "Azure, Microsoft 365, Intune, Teams",
    stat: "99.9% uptime across all healthcare deployments",
  },
  Finance: {
    pain: "Regulatory compliance, data protection, secure communications.",
    solution: "Azure Information Protection, Microsoft Defender for Office 365, encrypted Teams channels.",
    products: "Azure AD, Defender, Purview, Teams",
    stat: "Zero data breaches across financial clients",
  },
  Education: {
    pain: "Remote learning platforms, student data security, collaboration tools.",
    solution: "Microsoft 365 Education, Teams classrooms, SharePoint student portals.",
    products: "Microsoft 365 Education, Teams, SharePoint, Intune",
    stat: "50,000+ student accounts deployed",
  },
  Manufacturing: {
    pain: "OT/IT convergence, supply chain visibility, factory floor connectivity.",
    solution: "Azure IoT Hub, Power BI dashboards, Dynamics 365 Supply Chain Management.",
    products: "Azure IoT, Power BI, Dynamics 365",
    stat: "30% improvement in operational visibility",
  },
  Legal: {
    pain: "Document management, eDiscovery, client confidentiality.",
    solution: "SharePoint DMS, Microsoft Purview eDiscovery, Azure Information Protection.",
    products: "SharePoint, Purview, Azure IP",
    stat: "95% faster eDiscovery processing",
  },
};

/* ── Case Studies ──────────────────────────────────────────── */
const caseStudies = [
  { result: "2,000 mailboxes migrated", detail: "Zero downtime Exchange to Microsoft 365 migration", client: "Deloitte" },
  { result: "40% reduction in cloud costs", detail: "Azure infrastructure optimization and right-sizing", client: "Bosch Engineering" },
  { result: "Full M365 in 3 weeks", detail: "Complete Microsoft 365 deployment for 500+ users", client: "PwC Advisory" },
];

const industryKeys = Object.keys(industries);

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(industryKeys[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── A) Hero ──────────────────────────────────────── */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <span className="inline-block text-xs label-font text-primary tracking-widest uppercase mb-4">Our Solutions</span>
            <h1 className="text-4xl md:text-[52px] font-display font-extrabold leading-[1.1] mb-6 max-w-2xl">
              Enterprise IT Solutions Built{" "}
              <span className="gradient-text">Around Your Business</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
              From cloud migration to security hardening — we solve your toughest Microsoft technology challenges with fixed pricing and certified engineers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="shimmer-btn gradient-cta text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Explore All Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contacts"
                className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── B) Solution Category Cards ───────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCards.map((s) => (
              <StaggerItem key={s.title}>
                <div className="glass-card p-7 h-full card-hover group flex flex-col">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-primary/80 italic mb-4">{s.problem}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {s.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── C) How It Works ──────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Our Proven <span className="gradient-text">4-Step Process</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-6 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-primary/15" />
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="glass-card p-6 card-hover h-full text-center relative">
                  <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-primary-foreground font-bold text-sm">{step.num}</span>
                  </div>
                  <div className="text-2xl mb-2">{step.emoji}</div>
                  <h3 className="font-display font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── D) Industry Solutions ─────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Solutions For <span className="gradient-text">Your Industry</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === key
                    ? "gradient-cta text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <AnimatedSection>
            <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
              <h3 className="font-display font-bold text-xl mb-6 text-primary">{activeTab}</h3>
              <div className="space-y-5">
                <div>
                  <div className="text-xs label-font text-muted-foreground mb-1 uppercase tracking-wider">Pain Points</div>
                  <p className="text-sm text-foreground">{industries[activeTab].pain}</p>
                </div>
                <div>
                  <div className="text-xs label-font text-muted-foreground mb-1 uppercase tracking-wider">Our Solution</div>
                  <p className="text-sm text-foreground">{industries[activeTab].solution}</p>
                </div>
                <div>
                  <div className="text-xs label-font text-muted-foreground mb-1 uppercase tracking-wider">Products Used</div>
                  <p className="text-sm text-primary">{industries[activeTab].products}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="text-sm font-semibold gradient-text">{industries[activeTab].stat}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── E) Proven Results ─────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Proven <span className="gradient-text">Results</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((c) => (
              <StaggerItem key={c.client}>
                <div className="glass-card p-8 text-center card-hover h-full">
                  <div className="text-2xl font-display font-bold gradient-text mb-2">{c.result}</div>
                  <p className="text-sm text-muted-foreground mb-4">{c.detail}</p>
                  <div className="text-xs label-font text-foreground">{c.client}</div>
                  <div className="mt-2 text-yellow-400 text-sm">★★★★★</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── F) CTA Banner ────────────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="gradient-cta rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-[42px] font-display font-bold text-primary-foreground mb-4">
                Not Sure Which Solution Fits Your Business?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Our experts will assess your environment for free and recommend the right path forward.
              </p>
              <Link
                to="/contacts"
                className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
              >
                Book a Free Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
