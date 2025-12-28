import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import entrance from "@/assets/entrance.jpg";
import food2 from "@/assets/food2.jpg";
import food4 from "@/assets/food4.jpg";
import food8 from "@/assets/food8.jpg";
import foodWings from "@/assets/food-wings.jpg";
import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import interior5 from "@/assets/interior5.jpg";

const allImages = [
  { src: entrance, category: "exterior", alt: "Restaurant entrance" },
  { src: interior3, category: "interior", alt: "Ring lights and bar area" },
  { src: interior2, category: "interior", alt: "Main dining floor" },
  { src: food2, category: "food", alt: "Asian fried rice with drinks" },
  { src: interior1, category: "interior", alt: "Cozy corner with rope lights" },
  { src: food8, category: "food", alt: "Mixed rice bowl with vegetables" },
  { src: interior4, category: "interior", alt: "Modern booth seating" },
  { src: foodWings, category: "food", alt: "Korean fried wings" },
  { src: interior5, category: "interior", alt: "Rustic dining corner" },
  { src: food4, category: "food", alt: "Gulab jamun dessert" },
];

const categories = ["all", "interior", "food", "exterior"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Parkbay Ceylon Restaurant</title>
        <meta
          name="description"
          content="Browse our gallery showcasing Parkbay Ceylon's beautiful interiors, delicious food, and memorable moments at our Colombo restaurant."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={interior2}
              alt="Parkbay Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl font-bold text-foreground"
            >
              Gallery
            </motion.h1>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium tracking-wider uppercase rounded-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image.src)}
                  className="aspect-square overflow-hidden rounded-sm cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground text-sm mt-12"
            >
              More photos coming soon! We're always updating our gallery with the latest moments.
            </motion.p>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground text-3xl"
            >
              ×
            </button>
          </motion.div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
