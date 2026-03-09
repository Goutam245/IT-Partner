import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { services } from "@/data/services";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2, Clock, Shield, DollarSign, Headphones, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

function getIcon(name: string) {
  const Icon = (Icons as Record<string, any>)[name];
  return Icon || Icons.Box;
}

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-40 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Browse all services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = services.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 3);
  const Icon = getIcon(service.icon);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 pb-4 container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-foreground truncate max-w-xs">{service.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs label-font bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-display font-bold leading-tight mb-4">
                  {service.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="label-font">{service.sku}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {service.duration}</span>
                  <span className="label-font">{service.category}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </AnimatedSection>
            </div>

            {/* Pricing Card */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 lg:sticky lg:top-28">
                <div className="text-3xl font-display font-bold mb-1">
                  ${(service.price * quantity).toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{service.priceUnit}</p>

                <div className="mb-4">
                  <label className="text-xs label-font text-muted-foreground block mb-2">Quantity</label>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors">−</button>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 h-10 rounded-lg bg-muted text-center text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors">+</button>
                  </div>
                </div>

                <button className="shimmer-btn gradient-cta text-primary-foreground w-full py-3 rounded-xl font-semibold text-sm mb-3 hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Request This Service
                </button>
                <button className="w-full py-3 rounded-xl font-semibold text-sm border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all mb-3">
                  Schedule a Call
                </button>
                <a href="#" className="flex items-center justify-center gap-2 text-sm text-primary hover:underline">
                  <MessageCircle size={14} /> Chat with an expert
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">What's Included</h2>
              <ul className="space-y-3">
                {[
                  "Initial discovery and requirements gathering",
                  "Architecture design and planning documentation",
                  "Full implementation and configuration",
                  "User acceptance testing (UAT)",
                  "Knowledge transfer and admin training",
                  "Post-implementation support (30 days)",
                  "Detailed project documentation and runbooks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Prerequisites</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Active Microsoft 365 or Azure subscription",
                  "Global Administrator access to your tenant",
                  "Designated project contact on your side",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Icons.AlertCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Deliverables</h2>
              <ul className="space-y-3">
                {[
                  "Fully configured and tested environment",
                  "Admin documentation and best practices guide",
                  "End-user training materials",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Icons.FileCheck size={18} className="text-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              What You <span className="gradient-text">Get</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Fixed Price", desc: "No hidden costs. The price you see is the price you pay. Budget with confidence." },
              { icon: Shield, title: "Money-Back Guarantee", desc: "100% satisfaction guaranteed. If you're not happy, we'll make it right." },
              { icon: Headphones, title: "24/7 Support", desc: "Our helpdesk is always available during and after implementation." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-6 text-center card-hover">
                  <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Related <span className="gradient-text">Services</span>
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {related.map((s) => {
                const RIcon = getIcon(s.icon);
                return (
                  <StaggerItem key={s.id}>
                    <Link to={`/services/${s.id}`} className="glass-card p-6 card-hover block h-full group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <RIcon size={22} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{s.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold">${s.price.toLocaleString()}</span>
                        <span className="text-sm text-primary inline-flex items-center gap-1">Details <ArrowRight size={14} /></span>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Icons.Award, label: "Microsoft Gold Partner" },
              { icon: DollarSign, label: "Fixed Price Guarantee" },
              { icon: Icons.RefreshCw, label: "Money-Back Guarantee" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon size={16} className="text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
