import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Award, Users, Globe, Handshake } from "lucide-react";

/* ── Timeline ──────────────────────────────────────────────── */
const timeline = [
  { year: "2006", label: "Founded", sub: "Delaware" },
  { year: "2010", label: "Microsoft", sub: "Gold Badge" },
  { year: "2015", label: "Expanded", sub: "to Europe" },
  { year: "2020", label: "5,000+", sub: "Clients" },
  { year: "2024", label: "16 Countries", sub: "Worldwide" },
];

/* ── Offices ───────────────────────────────────────────────── */
const offices = [
  { flag: "🇺🇸", region: "USA", sub: "Wilmington, Delaware (HQ)" },
  { flag: "🇦🇺", region: "Australia", sub: "NSW, Cameron Park" },
  { flag: "🇬🇧", region: "UK", sub: "London, Trafalgar Square" },
  { flag: "🇨🇦", region: "Canada", sub: "Vancouver, BC" },
  { flag: "🇪🇺", region: "EU", sub: "Tallinn, Estonia" },
];

const certBadges = [
  "Microsoft Gold Partner",
  "Microsoft 365",
  "Azure",
  "Dynamics 365",
  "Power Platform",
  "Security",
  "Teams",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── A) Hero ──────────────────────────────────────── */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-xs label-font text-primary tracking-widest uppercase mb-4">About Us</span>
              <h1 className="text-4xl md:text-[52px] font-display font-extrabold leading-[1.1] mb-6">
                The Microsoft Partner You Can Trust{" "}
                <span className="gradient-text">Since 2006</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                For over 18 years, IT Partner has helped 5,000+ organizations across 16 countries modernize their Microsoft infrastructure — on time, on budget, and with a 100% satisfaction guarantee.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-cta mb-6">
                  <span className="text-primary-foreground font-display font-extrabold text-sm leading-tight">EST.<br />2006</span>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {[
                    { val: "18+", label: "Years" },
                    { val: "5,000+", label: "Clients" },
                    { val: "16", label: "Countries" },
                    { val: "1,160", label: "Partners" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-display font-bold gradient-text">{s.val}</div>
                      <div className="text-xs text-muted-foreground label-font mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── B) Our Story Timeline ────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between max-w-4xl mx-auto">
              {/* connecting line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-primary/20" />

              {timeline.map((t) => (
                <div key={t.year} className="relative text-center flex-1 mb-8 md:mb-0">
                  <div className="relative z-10 w-12 h-12 rounded-full gradient-cta flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-xs">{t.year}</span>
                  </div>
                  <div className="font-display font-bold text-sm">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.sub}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── C) Mission Vision Values ─────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="glass-card p-8 h-full card-hover text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-display font-bold text-lg mb-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Make enterprise Microsoft technology accessible and affordable for every business, regardless of size or industry.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-8 h-full card-hover text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="font-display font-bold text-lg mb-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be the world's most trusted Microsoft partner — known for transparency, expertise, and client-first service.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-8 h-full card-hover text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-display font-bold text-lg mb-3">Our Values</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {["Transparency", "Expertise", "Client-First", "Fixed Pricing", "Accountability", "Innovation"].map((v) => (
                    <span key={v} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{v}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── D) Leadership Team ───────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                name: "IT Partner Leadership",
                title: "Executive Team",
                desc: "Certified Microsoft experts with 15+ years average experience.",
              },
              {
                icon: Users,
                name: "Engineering Team",
                title: "Microsoft Certified Engineers",
                desc: "MCSE, Azure, M365 certified professionals handling every implementation.",
              },
              {
                icon: Handshake,
                name: "Support Team",
                title: "24/7 Helpdesk Specialists",
                desc: "Dedicated support staff available Mon–Fri 8am–5pm Eastern.",
              },
            ].map((card) => (
              <StaggerItem key={card.name}>
                <div className="glass-card p-8 text-center card-hover h-full">
                  <div className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4">
                    <card.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-base">{card.name}</h3>
                  <p className="text-xs text-primary mt-1 mb-3">{card.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── E) Global Presence ───────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold">
              Serving Clients in <span className="gradient-text">16 Countries</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {offices.map((o) => (
              <StaggerItem key={o.region}>
                <div
                  className="rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "hsl(217 33% 12%)", borderTop: "3px solid hsl(196 100% 44%)" }}
                >
                  <div className="text-2xl mb-2">{o.flag}</div>
                  <div className="font-display font-bold text-sm">{o.region}</div>
                  <div className="text-xs text-muted-foreground mt-1">{o.sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── F) Certifications ────────────────────────────── */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-8">
              Microsoft Certified Across{" "}
              <span className="gradient-text">Every Solution Area</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {certBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/60"
                >
                  <Globe size={14} className="text-primary" />
                  {b}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
