import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openNewsletter, setOpenNewsletter] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-500 hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "text-sky-400 hover:text-sky-300" },
    { icon: Instagram, href: "#", color: "text-pink-500 hover:text-pink-400" },
    { icon: Youtube, href: "#", color: "text-red-500 hover:text-red-400" },
  ];

  const quickLinks = [
    { name: "Models", path: "/models" },
    { name: "Gallery", path: "/gallery" },
    { name: "Customize", path: "/customize" },
    { name: "Technology", href: "#" },
    { name: "Heritage", href: "#" },
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Newsroom", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Dealers", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-red-500/20 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-24">
          
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="text-xl md:text-3xl font-black mb-6 block leading-tight text-yellow-400 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"
            >
              LAMBORGHINI
            </Link>

            <p className="text-gray-400 mb-8">
              Italian excellence since 1963. Born to perform. Engineered to
              dominate.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:scale-110 transition"
                  >
                    <Icon className={`w-6 h-6 ${social.color}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center">
              Quick Links
              <ChevronRight className="ml-2 w-5 h-5" />
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Company</h3>

            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Support</h3>

            <ul className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "+1 (555) 123-Lambo", desc: "24/7 Service" },
                {
                  icon: Mail,
                  label: "info@lamborghini.com",
                  desc: "Sales & Support",
                },
                {
                  icon: MapPin,
                  label: "Sant'Agata Bolognese, Italy",
                  desc: "Headquarters",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <li key={index} className="flex items-start space-x-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="text-white font-semibold">
                        {contact.label}
                      </p>
                      <p className="text-gray-400 text-sm">{contact.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Newsletter */}
            <div className="relative">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Stay Updated
              </h3>

              {openNewsletter && (
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  />

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <button
                onClick={() => setOpenNewsletter(!openNewsletter)}
                className="mt-4 flex items-center justify-center"
              >
                <ChevronDown
                  className={`w-6 h-6 transition ${
                    openNewsletter ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-gray-500">
        © 2024 Automobili Lamborghini S.p.A. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;