import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import interior2 from "@/assets/interior2.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import interior5 from "@/assets/interior5.jpg";

const galleryImages = [
  { src: interior2, alt: "Parkbay Interior - Modern seating area" },
  { src: interior3, alt: "Parkbay Interior - Ring lights and dining area" },
  { src: interior4, alt: "Parkbay Interior - Cozy booth seating" },
  { src: interior5, alt: "Parkbay Interior - Rustic corner" },
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
          <span className="text-primary font-display italic text-lg">Our Space</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Step Inside
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Experience our thoughtfully designed spaces—from the cozy rope-lit corners to our modern main dining hall, every detail has been crafted for your comfort.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-sm cursor-pointer transition-all duration-500 ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
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
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm tracking-wide uppercase transition-colors group"
          >
            View Full Gallery
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
