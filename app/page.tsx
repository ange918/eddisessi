"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Sparkles, Scissors, Heart } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const collections = [
    {
      name: "TùTù",
      description: "Élégance intemporelle et sophistication",
      href: "/collections/tutu",
    },
    {
      name: "Kanvoh",
      description: "Tissus d'exception pour une allure unique",
      href: "/collections/kanvoh",
    },
    {
      name: "Tweed Kanvoh",
      description: "Le mariage parfait du classique et du moderne",
      href: "/collections/tweed-kanvoh",
    },
  ];

  const products = [
    { name: "Robe TùTù Élégance", price: "450€" },
    { name: "Ensemble Kanvoh Prestige", price: "680€" },
    { name: "Veste Tweed Signature", price: "520€" },
    { name: "Accessoire Couture", price: "180€" },
  ];

  const blogPosts = [
    {
      title: "Les tendances de la haute couture 2024",
      date: "15 Novembre 2024",
      excerpt: "Découvrez les nouvelles tendances qui façonnent l'univers de la haute couture...",
    },
    {
      title: "L'art du TùTù dans la mode contemporaine",
      date: "10 Novembre 2024",
      excerpt: "Comment le tissu TùTù révolutionne la création de pièces uniques...",
    },
    {
      title: "Rencontre avec Eddy Sessi",
      date: "5 Novembre 2024",
      excerpt: "Portrait d'une créatrice passionnée et visionnaire...",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333] to-[#1a1a1a]">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] mb-6"
          >
            EDDY SESSI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#F7F7F7] text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Prêt-à-porter & accessoires, Maison de haute couture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button href="/about" variant="primary">
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#D4AF37]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              L&apos;Excellence de la Haute Couture
            </h2>
            <p className="text-lg text-[#333333]/80 leading-relaxed">
              EDI SESSI COUTURE incarne l&apos;élégance et le raffinement. Chaque création
              est pensée avec passion et réalisée avec une attention minutieuse aux
              détails. Notre maison de couture allie tradition artisanale et modernité
              pour vous offrir des pièces uniques et intemporelles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Qualité Exceptionnelle",
                description: "Des tissus soigneusement sélectionnés pour leur excellence",
              },
              {
                icon: Scissors,
                title: "Création Sur-mesure",
                description: "Chaque pièce est unique et adaptée à votre personnalité",
              },
              {
                icon: Heart,
                title: "Passion & Savoir-faire",
                description: "Un héritage artisanal transmis avec dévouement",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#333333] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#333333]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Nos Tissus Signature
            </h2>
            <p className="text-lg text-[#333333]/70">
              Découvrez nos collections exclusives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-3xl font-bold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm mb-4">{collection.description}</p>
                    <Button href={collection.href} variant="primary">
                      Découvrir
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Boutique
            </h2>
            <p className="text-lg text-[#333333]/70">Nos dernières créations</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20"></div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#333333] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button href="/boutique" variant="outline">
              Voir toute la collection
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Blog
            </h2>
            <p className="text-lg text-[#333333]/70">Actualités et inspirations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20"></div>
                <div className="p-6">
                  <p className="text-sm text-[#D4AF37] mb-2">{post.date}</p>
                  <h3 className="font-display text-xl font-bold text-[#333333] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[#333333]/70 mb-4">{post.excerpt}</p>
                  <Button href="/blog" variant="outline">
                    Lire la suite
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Contactez-nous
              </h2>
              <p className="text-[#F7F7F7] mb-8">
                Une question ? Un projet sur-mesure ? Notre équipe est à votre écoute.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl text-[#D4AF37] mb-2">Adresse</h3>
                  <p className="text-[#E5E5E5]">123 Avenue de la Mode, Paris 75001</p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#D4AF37] mb-2">Téléphone</h3>
                  <p className="text-[#E5E5E5]">+33 1 23 45 67 89</p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-[#D4AF37] mb-2">Email</h3>
                  <p className="text-[#E5E5E5]">contact@edisessi.com</p>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Formulaire de contact
                </Button>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-[#E5E5E5] rounded-xl h-[400px] flex items-center justify-center"
            >
              <p className="text-[#333333] font-display text-xl">Carte Google Maps</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
