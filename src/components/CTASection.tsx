import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-display italic text-lg">Visit Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Ready for a Memorable Dining Experience?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's an intimate dinner, a family gathering, or a celebration with friends, Parkbay Ceylon offers the perfect setting. Reserve your table today and let us take care of the rest.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Reservations</h4>
                  <p className="text-muted-foreground text-sm">+94 11 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Opening Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm"
            >
              Reserve Your Table
            </Link>
          </motion.div>

          {/* Right - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-[4/3] bg-muted rounded-sm overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989147!2d79.78616563020824!3d6.921836946909088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1703700000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parkbay Ceylon Location"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
