import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Parkbay Ceylon | Multi Style Cuisine Restaurant in Colombo</title>
        <meta
          name="description"
          content="Experience exceptional multi-style cuisine at Parkbay Ceylon, Colombo's premier restaurant. Discover flavors from around the world in an elegant, modern setting."
        />
        <meta
          name="keywords"
          content="Parkbay, Ceylon, restaurant, Colombo, Sri Lanka, multi-style cuisine, dining, food"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
