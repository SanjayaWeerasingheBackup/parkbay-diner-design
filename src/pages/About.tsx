import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import interior2 from "@/assets/interior2.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Parkbay Ceylon Restaurant</title>
        <meta
          name="description"
          content="Learn about Parkbay Ceylon's story, our passion for multi-style cuisine, and our commitment to exceptional dining experiences in Colombo."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={interior3}
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
              About Us
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-primary font-display italic text-lg">Our Story</span>
                <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                  ABOUT PARKBAY
                </h2>
                <div className="section-divider" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg prose-invert mx-auto text-center"
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Parkbay Ceylon stands as a testament to culinary innovation in Colombo's vibrant dining scene. Our vision was simple yet ambitious: create a space where the world's most beloved cuisines come together in perfect harmony.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With interiors that blend industrial elegance with warm, inviting touches, every corner of Parkbay tells a story. From the rope-wrapped Edison bulbs that cast a golden glow to the handcrafted wooden tables, we've created an atmosphere that's both sophisticated and welcoming.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our kitchen is led by passionate chefs who believe in the power of quality ingredients and time-honored techniques. Whether you're craving Asian fusion, comfort food classics, or adventurous new flavors, our menu has been designed to take you on a culinary journey you won't forget.
                </p>
              </motion.div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={interior2}
                  alt="Parkbay Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={interior3}
                  alt="Parkbay Dining Area"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={interior4}
                  alt="Parkbay Seating"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
