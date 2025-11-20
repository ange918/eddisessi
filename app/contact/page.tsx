"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Avenue de la Mode\nParis 75001, France",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@edisessi.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 10h-19h\nSam: 10h-18h",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-6">
            Contact
          </h1>
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto">
            Une question ? Un projet sur-mesure ? Notre équipe est à votre écoute
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl font-bold text-[#333333] mb-8">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#333333] font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[#333333] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#333333] font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#333333] font-medium mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="sur-mesure">Création sur-mesure</option>
                  <option value="rendez-vous">Prendre rendez-vous</option>
                  <option value="collection">Question sur une collection</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#333333] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all resize-none"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#333333] transition-all duration-300 hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl font-bold text-[#333333] mb-8">
              Nos coordonnées
            </h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#333333] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-[#333333]/70 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#E5E5E5] rounded-xl h-[400px] flex items-center justify-center">
              <p className="text-[#333333] font-display text-xl">Carte Google Maps</p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="bg-white rounded-xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#D4AF37] mb-3">
                Rendez-vous
              </h3>
              <p className="text-[#333333]/70">
                Prenez rendez-vous dans notre atelier pour découvrir nos créations
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#D4AF37] mb-3">
                Sur-mesure
              </h3>
              <p className="text-[#333333]/70">
                Discutons de votre projet et créons ensemble la pièce de vos rêves
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#D4AF37] mb-3">
                Conseils
              </h3>
              <p className="text-[#333333]/70">
                Nos experts vous accompagnent dans le choix de vos créations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
