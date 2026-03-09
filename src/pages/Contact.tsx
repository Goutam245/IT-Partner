import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Globe, Package, Wrench, Monitor } from "lucide-react";
import { toast } from "sonner";

const officeCards = [
  {
    flag: "🇺🇸",
    region: "United States (Headquarters)",
    phone: "+1-855-700-0365 (Toll Free)",
    email: "sales@o365hq.com",
    address: "3422 Old Capitol Trail Ste.679\nWilmington, DE 19808",
    hours: "Mon–Fri: 8am–5pm Eastern",
  },
  {
    flag: "🎧",
    region: "Helpdesk Support",
    phone: "+1-800-438-0365",
    email: "support@o365hq.com",
    address: "",
    hours: "Mon–Fri: 8am–5pm Eastern",
    link: "https://support.o365hq.com",
  },
  {
    flag: "🇦🇺",
    region: "Australia",
    phone: "+61-280-019205 (Toll Free)",
    email: "salesAPAC@o365hq.com",
    address: "3 Burrell Place, Cameron Park\n2285, NSW",
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    phone: "+44-20-8142-5752",
    email: "aimq@itpartner365.com",
    address: "1 Northumberland Ave, Trafalgar\nSquare, London, WC2N 5BW",
  },
  {
    flag: "🇨🇦",
    region: "Canada",
    phone: "+1-855-700-0365 (Toll Free)",
    email: "salesCA@o365hq.com",
    address: "422 Richards Street, St 170\nVancouver, BC V6B 2Z4",
  },
  {
    flag: "🇪🇺",
    region: "European Union",
    email: "salesEU@o365hq.com",
    address: "Harju maakond, Kesklinna linnaosa\nAhti tn 12, 10151 Tallinn, Estonia",
  },
];

const coverageCards = [
  { icon: Globe, emoji: "🌐", title: "Microsoft Cloud Subscriptions (CSP/NCE)", desc: "USA, Canada, EU, Australia" },
  { icon: Package, emoji: "📦", title: "Microsoft Volume Licensing", desc: "Global" },
  { icon: Wrench, emoji: "🛠️", title: "Onsite Services", desc: "USA, Australia, UK, Canada" },
  { icon: Monitor, emoji: "💻", title: "Remote Services", desc: "Worldwide" },
];

const subjects = ["General", "Sales", "Support", "Partnership"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "General", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", company: "", subject: "General", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-[56px] font-display font-extrabold mb-4">
              Let's Build Something <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
              Reach our team via call, email, or Microsoft Teams — we respond within 2 hours during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+18557000365"
                className="shimmer-btn gradient-cta text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                📞 Call Now
              </a>
              <a
                href="mailto:sales@o365hq.com"
                className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all inline-flex items-center gap-2"
              >
                📧 Send Email
              </a>
              <a
                href="https://teams.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all inline-flex items-center gap-2"
              >
                💬 Chat on Teams
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Column: Form + Office Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div
                className="rounded-[20px] p-10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,169,224,0.15)",
                }}
              >
                <h2 className="text-2xl font-display font-bold mb-2">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" placeholder="Full Name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="email" placeholder="Work Email" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel" placeholder="Phone"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <input
                      type="text" placeholder="Company Name"
                      value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <select
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Your message" required rows={5}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="shimmer-btn gradient-cta text-primary-foreground w-full py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    Send Message →
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    🔒 Your data is secure. We never share your information.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Office Cards */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {officeCards.map((office) => (
                  <div
                    key={office.region}
                    className="rounded-xl p-5 transition-all duration-300 hover:translate-x-1"
                    style={{
                      background: "hsl(217 33% 12%)",
                      borderLeft: "3px solid hsl(196 100% 44%)",
                    }}
                  >
                    <h3 className="font-display font-bold text-base mb-3">
                      {office.flag} {office.region}
                    </h3>
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      {office.phone && (
                        <p className="flex items-center gap-2">
                          <Phone size={13} className="text-primary shrink-0" /> {office.phone}
                        </p>
                      )}
                      <p className="flex items-center gap-2">
                        <Mail size={13} className="text-primary shrink-0" /> {office.email}
                      </p>
                      {office.address && (
                        <p className="flex items-start gap-2">
                          <MapPin size={13} className="text-primary shrink-0 mt-0.5" />
                          <span className="whitespace-pre-line">{office.address}</span>
                        </p>
                      )}
                      {office.hours && (
                        <p className="flex items-center gap-2">
                          <Clock size={13} className="text-primary shrink-0" /> {office.hours}
                        </p>
                      )}
                      {office.link && (
                        <p className="flex items-center gap-2">
                          <Globe size={13} className="text-primary shrink-0" />
                          <a href={office.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {office.link}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              Find Our <span className="gradient-text">US Office</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5!2d-75.5936!3d39.7447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3422+Old+Capitol+Trail%2C+Wilmington%2C+DE+19808!5e0!3m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "16px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              title="IT Partner US Office Location"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-[42px] font-display font-bold mb-4">
              Our <span className="gradient-text">Global Coverage</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {coverageCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="glass-card p-6 card-hover h-full">
                  <div className="text-2xl mb-3">{card.emoji}</div>
                  <h3 className="font-display font-bold text-base mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
