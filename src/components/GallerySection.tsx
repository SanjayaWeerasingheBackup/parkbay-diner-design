import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import interior6 from "@/assets/interior6.jpg";
import interior9 from "@/assets/interior9.jpg";
import food3 from "@/assets/food3.jpg";
import food9 from "@/assets/food9.jpg";
import interior7 from "@/assets/interior7.jpg";

const galleryImages = [
  { src: interior9, alt: "Modern dining with ring lights" },
  { src: food3, alt: "Crispy fried chicken" },
  { src: interior6, alt: "Dazzle with Flavor interior" },
  { src: food9, alt: "Stir fried noodles" },
  { src: interior7, alt: "Elegant wall art dining" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display italic text-lg">Fun Shots</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-6 tracking-wide">
            STEP INSIDE
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Experience our thoughtfully designed spaces—from the cozy corners to our modern main dining hall, every detail has been crafted for your comfort.
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden cursor-pointer ${
                index === 0 ? "col-span-2 lg:col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
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
            to="/gallery"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-medium text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
