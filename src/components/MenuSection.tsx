import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import food2 from "@/assets/food2.jpg";
import food4 from "@/assets/food4.jpg";
import food8 from "@/assets/food8.jpg";
import foodWings from "@/assets/food-wings.jpg";

const menuCategories = [
  {
    name: "Asian Fusion",
    image: food2,
    description: "Bold flavors from across the continent",
  },
  {
    name: "Desserts",
    image: food4,
    description: "Sweet endings to remember",
  },
  {
    name: "Signature Mains",
    image: food8,
    description: "Chef's special creations",
  },
  {
    name: "Appetizers",
    image: foodWings,
    description: "Perfect starters for sharing",
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display italic text-lg">Our Offerings</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Explore Our Menu
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer card-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-foreground/70 text-sm">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-medium text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
