import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import interior1 from "@/assets/interior1.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={interior1}
                alt="Parkbay Ceylon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-sm hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-primary font-display italic text-lg">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                About Parkbay
              </h2>
            </div>

            <div className="section-divider !mx-0" />

            <p className="text-muted-foreground leading-relaxed">
              Nestled in the vibrant heart of Colombo, Parkbay Ceylon is more than just a restaurant—it's a celebration of global culinary traditions brought together under one roof. Our multi-style cuisine concept invites you on a gastronomic journey that spans continents.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With interiors that blend industrial chic with warm, inviting spaces, and a menu crafted to surprise and delight, we've created a destination where every meal becomes a memorable experience. From the moment you step through our doors, you become part of the Parkbay family.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Menu Items</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Cuisines</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">1000+</span>
                <span className="text-sm text-muted-foreground">Happy Guests</span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm tracking-wide uppercase transition-colors group"
            >
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
