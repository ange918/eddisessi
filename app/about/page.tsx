"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Award, Users, Target } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous sélectionnons avec soin chaque tissu et chaque détail pour garantir une qualité exceptionnelle.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnel",
      description: "Chaque cliente bénéficie d'un service sur-mesure et de conseils personnalisés.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Nous fusionnons les techniques traditionnelles avec les tendances contemporaines.",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6">
            À Propos
          </h1>
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto">
            L&apos;histoire d&apos;une passion devenue maison de couture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20 rounded-xl aspect-square"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-lg text-[#333333]/80 leading-relaxed">
              <p>
                EDI SESSI COUTURE est née de la passion d&apos;Eddy Sessi pour l&apos;élégance
                et le raffinement. Depuis sa création, notre maison de couture s&apos;est
                imposée comme une référence dans l&apos;univers du prêt-à-porter de luxe.
              </p>
              <p>
                Chaque création porte en elle l&apos;âme et la vision d&apos;une créatrice
                dévouée à l&apos;excellence. Nos pièces racontent une histoire, celle d&apos;un
                savoir-faire transmis avec passion et d&apos;une attention minutieuse portée
                à chaque détail.
              </p>
              <p>
                Nous croyons que la mode est un art qui permet à chacune de révéler
                sa personnalité unique et d&apos;exprimer sa propre élégance.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="mb-20">
          <div className="bg-white rounded-xl p-12 shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-8 text-center">
              La Fondatrice
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20 rounded-xl aspect-[3/4]"></div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#D4AF37] mb-4">
                  Eddy Sessi
                </h3>
                <div className="space-y-4 text-lg text-[#333333]/80 leading-relaxed">
                  <p>
                    Passionnée par la mode depuis son plus jeune âge, Eddy Sessi a
                    développé une expertise unique dans l&apos;art de la haute couture.
                  </p>
                  <p>
                    Son parcours l&apos;a menée à explorer différentes techniques
                    artisanales et à découvrir des tissus d&apos;exception, notamment
                    le TùTù, le Kanvoh et le Tweed Kanvoh qui sont devenus les
                    signatures de sa maison.
                  </p>
                  <p>
                    Aujourd&apos;hui, elle continue d&apos;innover tout en préservant
                    l&apos;héritage des techniques traditionnelles de la couture française.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#333333] mb-12 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#333333] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#333333]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="bg-[#333333] text-white rounded-xl p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l&apos;Univers EDI SESSI
          </h2>
          <p className="text-xl text-[#F7F7F7] mb-8 max-w-2xl mx-auto">
            Découvrez nos collections et laissez-vous séduire par l&apos;élégance
            à la française.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/boutique" variant="primary">
              Découvrir la boutique
            </Button>
            <Button href="/contact" variant="outline">
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
