"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const categories = ["Tous", "TùTù", "Kanvoh", "Tweed Kanvoh", "Accessoires"];

  const products = [
    { name: "Robe TùTù Élégance", price: "450€", category: "TùTù" },
    { name: "Ensemble Kanvoh Prestige", price: "680€", category: "Kanvoh" },
    { name: "Veste Tweed Signature", price: "520€", category: "Tweed Kanvoh" },
    { name: "Accessoire Couture", price: "180€", category: "Accessoires" },
    { name: "Manteau TùTù Royal", price: "890€", category: "TùTù" },
    { name: "Tailleur Kanvoh Prestige", price: "780€", category: "Kanvoh" },
    { name: "Ensemble Tweed Kanvoh Prestige", price: "920€", category: "Tweed Kanvoh" },
    { name: "Sac à Main Luxe", price: "320€", category: "Accessoires" },
    { name: "Jupe TùTù Sophistication", price: "320€", category: "TùTù" },
    { name: "Blazer Kanvoh Chic", price: "420€", category: "Kanvoh" },
    { name: "Manteau Tweed Kanvoh Royal", price: "1180€", category: "Tweed Kanvoh" },
    { name: "Foulard Signature", price: "120€", category: "Accessoires" },
  ];

  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6">
            Boutique
          </h1>
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto">
            Découvrez toutes nos créations de haute couture
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#D4AF37] text-white shadow-lg scale-105"
                    : "bg-white text-[#333333] hover:bg-[#E5E5E5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20"></div>
              <div className="p-6">
                <p className="text-sm text-[#D4AF37] mb-2">{product.category}</p>
                <h3 className="font-display text-xl font-bold text-[#333333] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold text-lg mb-4">{product.price}</p>
                <button className="w-full bg-[#333333] text-white py-2 rounded-lg hover:bg-[#D4AF37] transition-colors duration-300">
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div {...fadeInUp} className="text-center py-20">
            <p className="text-xl text-[#333333]/70">
              Aucun produit dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}

        <motion.div {...fadeInUp} className="mt-20 bg-white rounded-xl p-12 shadow-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            Création Sur-Mesure
          </h2>
          <p className="text-xl text-[#333333]/70 mb-8 max-w-2xl mx-auto">
            Vous ne trouvez pas exactement ce que vous cherchez? Nous créons des
            pièces uniques adaptées à vos envies et votre morphologie.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#333333] transition-all duration-300 hover:scale-105"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </main>
  );
}
