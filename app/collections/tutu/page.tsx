"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function TutuCollectionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const products = [
    { name: "Robe TùTù Élégance", price: "450€", category: "Robe" },
    { name: "Ensemble TùTù Prestige", price: "680€", category: "Ensemble" },
    { name: "Jupe TùTù Sophistication", price: "320€", category: "Jupe" },
    { name: "Chemisier TùTù Chic", price: "280€", category: "Haut" },
    { name: "Manteau TùTù Royal", price: "890€", category: "Manteau" },
    { name: "Accessoire TùTù Luxe", price: "150€", category: "Accessoire" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/30 rounded-xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Collection TùTù
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Élégance intemporelle et sophistication
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Le Tissu TùTù
            </h2>
            <div className="space-y-4 text-lg text-[#333333]/80 leading-relaxed">
              <p>
                Le TùTù est un tissu d&apos;exception qui incarne l&apos;essence même de
                l&apos;élégance. Sa texture délicate et son tombé parfait en font le
                choix privilégié pour les créations les plus sophistiquées.
              </p>
              <p>
                Chaque pièce de notre collection TùTù est conçue pour sublimer la
                silhouette et mettre en valeur la féminité avec raffinement et délicatesse.
              </p>
              <p>
                Ce tissu unique permet de créer des vêtements qui allient confort,
                élégance et durabilité, pour une garde-robe intemporelle.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20 rounded-xl aspect-square"
          ></motion.div>
        </div>

        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-12 text-center">
            La Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20"></div>
                <div className="p-6">
                  <p className="text-sm text-[#D4AF37] mb-2">{product.category}</p>
                  <h3 className="font-display text-xl font-bold text-[#333333] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-white rounded-xl p-12 shadow-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            Intéressé par la Collection TùTù?
          </h2>
          <p className="text-xl text-[#333333]/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir l&apos;intégralité de la collection ou pour
            un projet sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Prendre rendez-vous
            </Button>
            <Button href="/boutique" variant="outline">
              Toutes les collections
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
