import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/itp-logo.png";

const offices = [
  { region: "USA", flag: "🇺🇸", phone: "+1-855-700-0365", email: "sales@o365hq.com", address: "3422 Old Capitol Trail Ste.679, Wilmington, DE 19808" },
  { region: "Australia", flag: "🇦🇺", phone: "+61 280 016205", email: "salesAPAC@o365hq.com" },
  { region: "United Kingdom", flag: "🇬🇧", phone: "+44 20 8142 5752", email: "admin@itpartner365.com" },
  { region: "Canada", flag: "🇨🇦", phone: "+1-855-700-0365", email: "salesCA@o365hq.com" },
  { region: "European Union", flag: "🇪🇺", email: "salesEU@o365hq.com" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="IT Partner" className="h-10 w-10 rounded-lg" />
              <span className="font-display font-bold text-lg">IT Partner</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We offer a 100% satisfaction guarantee. If you have questions, our knowledgeable staff can help find the best software solution for you.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Questions?</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Contact us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Request a quote</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
            <h4 className="font-display font-bold text-sm mb-4 mt-6">Company Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Return policies</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm mb-4">Regional Offices</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((o) => (
                <div key={o.region} className="text-sm">
                  <p className="font-semibold text-foreground mb-1">{o.flag} {o.region}</p>
                  {o.phone && (
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Phone size={12} /> {o.phone}
                    </p>
                  )}
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Mail size={12} /> {o.email}
                  </p>
                  {o.address && (
                    <p className="text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin size={12} /> <span className="text-xs">{o.address}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2006–2026. All Rights Reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>USA</span><span>Australia</span><span>United Kingdom</span><span>Canada</span><span>European Union</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
