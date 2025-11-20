"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function TweedKanvohCollectionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const products = [
    { name: "Veste Tweed Kanvoh Signature", price: "620€", category: "Veste" },
    { name: "Ensemble Tweed Kanvoh Prestige", price: "920€", category: "Ensemble" },
    { name: "Manteau Tweed Kanvoh Royal", price: "1180€", category: "Manteau" },
    { name: "Jupe Tweed Kanvoh Élégance", price: "420€", category: "Jupe" },
    { name: "Robe Tweed Kanvoh Chic", price: "580€", category: "Robe" },
    { name: "Accessoire Tweed Kanvoh", price: "220€", category: "Accessoire" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] bg-gradient-to-br from-[#333333] via-[#D4AF37]/30 to-[#E5E5E5] rounded-xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Collection Tweed Kanvoh
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Le mariage parfait du classique et du moderne
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Le Tissu Tweed Kanvoh
            </h2>
            <div className="space-y-4 text-lg text-[#333333]/80 leading-relaxed">
              <p>
                Le Tweed Kanvoh représente l&apos;alliance parfaite entre le charme
                intemporel du tweed classique et l&apos;innovation du tissu Kanvoh.
              </p>
              <p>
                Cette fusion unique crée un tissu d&apos;exception qui offre la
                structure et la tenue du tweed traditionnel, tout en bénéficiant
                de la souplesse et de l&apos;élégance caractéristiques du Kanvoh.
              </p>
              <p>
                Nos pièces en Tweed Kanvoh sont pensées pour les femmes qui apprécient
                les valeurs intemporelles tout en recherchant une touche de modernité
                et de sophistication.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-br from-[#333333]/20 via-[#D4AF37]/20 to-[#E5E5E5] rounded-xl aspect-square"
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
                <div className="aspect-[3/4] bg-gradient-to-br from-[#333333]/20 via-[#D4AF37]/20 to-[#E5E5E5]"></div>
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

        <motion.div {...fadeInUp} className="bg-[#333333] text-white rounded-xl p-12 shadow-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Créations Sur-Mesure
          </h2>
          <p className="text-xl text-[#F7F7F7] mb-8 max-w-2xl mx-auto">
            La collection Tweed Kanvoh se prête particulièrement bien aux créations
            sur-mesure. Discutons ensemble de votre projet.
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
