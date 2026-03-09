import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/itp-logo.png";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="IT Partner" className="h-10 w-10 rounded-lg" />
          <span className="font-display font-bold text-lg text-foreground">IT Partner</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+18448119871" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone size={14} />
            (844) 811-9871
          </a>
          <Link
            to="/contacts"
            className="shimmer-btn gradient-cta text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-navbar border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.label} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary py-2">
                {l.label}
              </Link>
            ))}
            <Link to="/contacts" className="shimmer-btn gradient-cta text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
