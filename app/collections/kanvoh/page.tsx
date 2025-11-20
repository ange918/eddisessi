"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function KanvohCollectionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const products = [
    { name: "Robe Kanvoh Élite", price: "520€", category: "Robe" },
    { name: "Tailleur Kanvoh Prestige", price: "780€", category: "Ensemble" },
    { name: "Jupe Kanvoh Moderne", price: "350€", category: "Jupe" },
    { name: "Blazer Kanvoh Chic", price: "420€", category: "Veste" },
    { name: "Pantalon Kanvoh Signature", price: "380€", category: "Pantalon" },
    { name: "Accessoire Kanvoh Unique", price: "180€", category: "Accessoire" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] bg-gradient-to-br from-[#D4AF37]/40 to-[#E5E5E5] rounded-xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Collection Kanvoh
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Tissus d&apos;exception pour une allure unique
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-br from-[#D4AF37]/20 to-[#E5E5E5] rounded-xl aspect-square order-2 lg:order-1"
          ></motion.div>

          <motion.div {...fadeInUp} className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Le Tissu Kanvoh
            </h2>
            <div className="space-y-4 text-lg text-[#333333]/80 leading-relaxed">
              <p>
                Le Kanvoh est un tissu noble qui se distingue par sa texture riche
                et son caractère affirmé. Il apporte structure et élégance à chaque
                création.
              </p>
              <p>
                Notre collection Kanvoh s&apos;adresse aux femmes qui recherchent
                des pièces distinctives, capables de les accompagner du bureau aux
                événements les plus prestigieux.
              </p>
              <p>
                Chaque vêtement Kanvoh est une œuvre d&apos;art portant l&apos;empreinte
                du savoir-faire EDI SESSI, alliant modernité et intemporalité.
              </p>
            </div>
          </motion.div>
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
                <div className="aspect-[3/4] bg-gradient-to-br from-[#D4AF37]/20 to-[#E5E5E5]"></div>
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
            Découvrez la Collection Kanvoh
          </h2>
          <p className="text-xl text-[#333333]/70 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dans notre atelier pour voir nos créations et
            discuter de vos envies.
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
