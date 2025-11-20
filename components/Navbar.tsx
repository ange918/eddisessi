"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.collections-dropdown')) {
        setIsCollectionsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const collections = [
    { name: "TùTù", href: "/collections/tutu" },
    { name: "Kanvoh", href: "/collections/kanvoh" },
    { name: "Tweed Kanvoh", href: "/collections/tweed-kanvoh" },
  ];

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À-propos", href: "/about" },
    { name: "Collections", href: "#", hasDropdown: true },
    { name: "Boutique", href: "/boutique" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F7F7] shadow-md py-3"
          : "bg-[#F7F7F7]/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">ES</span>
            </div>
            <span className="font-display text-xl text-[#333333] hidden sm:block">
              EDI SESSI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div className="collections-dropdown">
                    <button
                      className="flex items-center space-x-1 text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                      onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                      aria-expanded={isCollectionsOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isCollectionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden"
                        >
                          {collections.map((collection) => (
                            <Link
                              key={collection.name}
                              href={collection.href}
                              className="block px-4 py-3 text-[#333333] hover:text-[#D4AF37] hover:bg-[#F7F7F7] transition-colors duration-300"
                              onClick={() => setIsCollectionsOpen(false)}
                            >
                              {collection.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#333333] hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            className="md:hidden text-[#333333] hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E5E5E5]"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="collections-dropdown">
                      <button
                        className="w-full text-left flex items-center justify-between text-[#333333] hover:text-[#D4AF37] transition-colors py-2"
                        onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                      >
                        <span className="font-medium">{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isCollectionsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isCollectionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 mt-2"
                          >
                            {collections.map((collection) => (
                              <Link
                                key={collection.name}
                                href={collection.href}
                                className="block text-[#333333] hover:text-[#D4AF37] transition-colors py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {collection.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-[#333333] hover:text-[#D4AF37] transition-colors py-2 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
