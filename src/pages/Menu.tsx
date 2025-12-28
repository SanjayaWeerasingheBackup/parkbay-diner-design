import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import food2 from "@/assets/food2.jpg";
import food4 from "@/assets/food4.jpg";
import food8 from "@/assets/food8.jpg";
import foodWings from "@/assets/food-wings.jpg";

const menuItems = {
  starters: [
    { name: "Korean Fried Wings", description: "Crispy wings glazed with sweet & spicy gochujang sauce, sesame seeds", price: "1,200" },
    { name: "Spring Rolls", description: "Vegetable spring rolls with sweet chili dipping sauce", price: "650" },
    { name: "Soup of the Day", description: "Chef's daily soup creation, served with crusty bread", price: "550" },
  ],
  mains: [
    { name: "Mixed Rice Bowl", description: "Stir-fried vegetables, crispy chicken, fried egg, special sauce", price: "1,800" },
    { name: "Seafood Fried Rice", description: "Wok-tossed rice with prawns, squid, and Asian vegetables", price: "1,650" },
    { name: "Kottu Roti", description: "Sri Lankan classic with chopped roti, vegetables, and your choice of protein", price: "1,200" },
    { name: "Grilled Fish", description: "Fresh catch of the day, grilled with herbs and lemon butter", price: "2,400" },
  ],
  desserts: [
    { name: "Gulab Jamun", description: "Warm milk dumplings in cardamom syrup, served with vanilla ice cream", price: "650" },
    { name: "Chocolate Brownie", description: "Rich chocolate brownie with chocolate drizzle and whipped cream", price: "750" },
    { name: "Fresh Fruit Bowl", description: "Seasonal fresh fruits with honey drizzle", price: "550" },
  ],
  drinks: [
    { name: "Fresh Lime Soda", description: "Refreshing lime with sparkling or still water", price: "350" },
    { name: "Mojito Mocktail", description: "Fresh mint, lime, and soda with a hint of sweetness", price: "550" },
    { name: "Fresh Juices", description: "Orange, pineapple, watermelon, or mixed fruit", price: "450" },
  ],
};

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Parkbay Ceylon Restaurant</title>
        <meta
          name="description"
          content="Explore Parkbay Ceylon's diverse menu featuring multi-style cuisine. From Asian fusion to local favorites, discover dishes that dazzle with flavor."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={food8}
              alt="Parkbay Signature Dish"
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
              Our Menu
            </motion.h1>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Featured Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[food2, foodWings, food4, food8].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-sm"
                >
                  <img
                    src={img}
                    alt="Menu item"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Menu Sections */}
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Starters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Starters</h2>
                <div className="section-divider mb-8" />
                <div className="space-y-6">
                  {menuItems.starters.map((item) => (
                    <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-primary font-display font-semibold ml-4">LKR {item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mains */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Main Courses</h2>
                <div className="section-divider mb-8" />
                <div className="space-y-6">
                  {menuItems.mains.map((item) => (
                    <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-primary font-display font-semibold ml-4">LKR {item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Desserts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Desserts</h2>
                <div className="section-divider mb-8" />
                <div className="space-y-6">
                  {menuItems.desserts.map((item) => (
                    <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-primary font-display font-semibold ml-4">LKR {item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Drinks */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Beverages</h2>
                <div className="section-divider mb-8" />
                <div className="space-y-6">
                  {menuItems.drinks.map((item) => (
                    <div key={item.name} className="flex justify-between items-start border-b border-border pb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-primary font-display font-semibold ml-4">LKR {item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground text-sm mt-16"
            >
              * Prices are in Sri Lankan Rupees. All prices are subject to service charge and applicable taxes.
            </motion.p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Menu;
