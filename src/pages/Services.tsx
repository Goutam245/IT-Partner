import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { services, categories } from "@/data/services";
import { Search, Clock, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

const ITEMS_PER_PAGE = 9;

function getIcon(name: string) {
  const Icon = (Icons as Record<string, any>)[name];
  return Icon || Icons.Box;
}

const tagColors: Record<string, string> = {
  Security: "bg-red-500/10 text-red-400",
  Migration: "bg-blue-500/10 text-blue-400",
  Azure: "bg-sky-500/10 text-sky-400",
  Intune: "bg-purple-500/10 text-purple-400",
  Email: "bg-amber-500/10 text-amber-400",
  Teams: "bg-indigo-500/10 text-indigo-400",
  Licensing: "bg-emerald-500/10 text-emerald-400",
  Infrastructure: "bg-orange-500/10 text-orange-400",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-primary/10 text-primary";
}

export default function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCat = category === "All" || s.category === category;
      const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm label-font mb-6">
              300+ Services Available
            </div>
            <h1 className="text-4xl md:text-[56px] font-display font-extrabold mb-4">
              IT Services by <span className="gradient-text">IT Partner</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse our complete catalog of enterprise-grade Microsoft cloud services — from migration and security to licensing and support.
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 glass-navbar py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setPage(1); }}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "gradient-cta text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-sm text-muted-foreground mb-6">
            Showing {paginated.length} of {filtered.length} services
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <StaggerItem key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="glass-card p-6 card-hover block h-full group flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {service.duration}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base mb-1 group-hover:text-primary transition-colors leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground label-font mb-3">{service.sku}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-xs label-font ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-lg font-display font-bold">${service.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground ml-1">{service.priceUnit}</span>
                      </div>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No services found matching your criteria.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPage(i + 1); window.scrollTo({ top: 400, behavior: "smooth" }); }}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    page === i + 1
                      ? "gradient-cta text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
