import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import entranceImage from "@/assets/entrance.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={entranceImage}
          alt="Parkbay Ceylon Restaurant Entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-display italic text-xl md:text-2xl mb-6"
        >
          "Dazzle with Flavor"
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-wider mb-2"
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,0.5)"
          }}
        >
          PARK<span className="text-primary">BAY</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <span className="text-foreground/90 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
            Multi Style Cuisine
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-foreground/80 text-lg md:text-xl tracking-wide mb-12"
        >
          Open Daily • Colombo, Sri Lanka
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="inline-flex items-center justify-center min-w-[180px] px-8 py-4 border-2 border-foreground text-foreground font-medium text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-w-[180px] px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Reserve Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
