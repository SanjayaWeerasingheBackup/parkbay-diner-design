import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-lg font-bold">PB</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">PARKBAY</h3>
                <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Ceylon</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Multi Style Cuisine - Where flavors from around the world come together to dazzle your taste buds.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About Us", "Menu", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Colombo, Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+94112345678" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@parkbay.lk" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@parkbay.lk
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Saturday - Sunday</p>
                  <p className="text-muted-foreground">10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Parkbay Ceylon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
