import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À-propos", href: "/about" },
    { name: "Boutique", href: "/boutique" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const collections = [
    { name: "TùTù", href: "/collections/tutu" },
    { name: "Kanvoh", href: "/collections/kanvoh" },
    { name: "Tweed Kanvoh", href: "/collections/tweed-kanvoh" },
  ];

  const socials = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-[#333333] text-[#F7F7F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">ES</span>
              </div>
              <span className="font-display text-lg">EDI SESSI</span>
            </div>
            <p className="text-sm text-[#E5E5E5]">
              Maison de haute couture
              <br />
              Prêt-à-porter & accessoires
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-[#D4AF37]">Menu Rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-[#D4AF37]">Collections</h3>
            <ul className="space-y-2">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <Link
                    href={collection.href}
                    className="text-sm text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-[#D4AF37]">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-[#F7F7F7] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-[#333333] group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5]/20 pt-8 text-center">
          <p className="text-sm text-[#E5E5E5]">
            © {new Date().getFullYear()} EDI SESSI COUTURE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
