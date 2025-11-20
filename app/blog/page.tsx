"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function BlogPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const blogPosts = [
    {
      title: "Les tendances de la haute couture 2024",
      date: "15 Novembre 2024",
      category: "Tendances",
      excerpt:
        "Découvrez les nouvelles tendances qui façonnent l'univers de la haute couture en 2024. Entre retour aux classiques et innovations audacieuses, l'année s'annonce riche en inspirations.",
    },
    {
      title: "L'art du TùTù dans la mode contemporaine",
      date: "10 Novembre 2024",
      category: "Matériaux",
      excerpt:
        "Comment le tissu TùTù révolutionne la création de pièces uniques. Explorez l'histoire et les caractéristiques de ce tissu d'exception qui fait la signature d'EDI SESSI.",
    },
    {
      title: "Rencontre avec Eddy Sessi",
      date: "5 Novembre 2024",
      category: "Portrait",
      excerpt:
        "Portrait d'une créatrice passionnée et visionnaire. Découvrez le parcours inspirant d'Eddy Sessi, de ses débuts à la création de sa maison de couture.",
    },
    {
      title: "Comment choisir sa tenue de soirée ?",
      date: "28 Octobre 2024",
      category: "Conseils",
      excerpt:
        "Nos experts vous guident dans le choix de la tenue parfaite pour vos événements spéciaux. De la morphologie aux couleurs, tous nos secrets dévoilés.",
    },
    {
      title: "Le Kanvoh : un tissu d'exception",
      date: "20 Octobre 2024",
      category: "Matériaux",
      excerpt:
        "Plongez dans l'univers du Kanvoh, ce tissu noble qui fait la renommée de notre maison. Découvrez ses propriétés uniques et ses multiples applications.",
    },
    {
      title: "L'importance du sur-mesure",
      date: "12 Octobre 2024",
      category: "Savoir-faire",
      excerpt:
        "Pourquoi opter pour une création sur-mesure ? Explorez les avantages d'une pièce créée spécialement pour vous, de la coupe au choix des tissus.",
    },
    {
      title: "Tweed Kanvoh : l'alliance parfaite",
      date: "5 Octobre 2024",
      category: "Matériaux",
      excerpt:
        "Découvrez comment le mariage du tweed classique et du Kanvoh moderne crée un tissu révolutionnaire pour des créations intemporelles.",
    },
    {
      title: "Entretenir vos pièces de haute couture",
      date: "28 Septembre 2024",
      category: "Conseils",
      excerpt:
        "Tous nos conseils pour préserver la beauté de vos créations EDI SESSI. Du nettoyage au rangement, apprenez les gestes essentiels.",
    },
    {
      title: "La mode responsable chez EDI SESSI",
      date: "20 Septembre 2024",
      category: "Engagement",
      excerpt:
        "Notre engagement pour une mode plus responsable et durable. Découvrez nos initiatives et notre vision de la haute couture éthique.",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6">
            Blog
          </h1>
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto">
            Actualités, conseils et inspirations de la maison EDI SESSI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#E5E5E5] to-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-[#D4AF37] font-medium">{post.category}</p>
                  <p className="text-sm text-[#333333]/60">{post.date}</p>
                </div>
                <h3 className="font-display text-xl font-bold text-[#333333] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#333333]/70 mb-4 line-clamp-3">{post.excerpt}</p>
                <Button href="#" variant="outline">
                  Lire l&apos;article
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeInUp} className="bg-[#333333] text-white rounded-xl p-12 shadow-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Restez Informés
          </h2>
          <p className="text-xl text-[#F7F7F7] mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles,
            conseils et actualités directement dans votre boîte mail.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-xl text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-white hover:text-[#333333] transition-all duration-300"
            >
              S&apos;inscrire
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
