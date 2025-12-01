import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaArrowUp,
  FaUser,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import CopyRight from "../Components/CopyRight";

const Footer = () => {
  const quickLinks = [
    { text: "About", icon: FaUser },
    { text: "Services", icon: FaCogs },
    { text: "Contact", icon: FaEnvelope },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      color: "hover:bg-[#1877F2]",
      link: "https://www.facebook.com/digitaleraskill?rdid=PD4URBu6rwikb86i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FRuvEaKgG%2F#",
    },
    {
      icon: FaWhatsapp,
      color: "hover:bg-[#21C063]",
      link: "https://whatsapp.com/channel/0029VbAh2iN9mrGiJURCEg2I",
    },
    {
      icon: FaInstagram,
      color: "hover:bg-[#E501A0]",
      link: "https://www.instagram.com/digitalerainstitute/?igsh=MWhnaGJoZXQweHRrcQ%3D%3D#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#072039] text-gray-200 pt-12 pb-6 relative transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_15%_35%_25%] gap-8 animate-fade-in">

        <div className="group">
          <h1 className='text-2xl md:text-3xl text-[#1177BB] !font-semibold !font-sans'>Digital Era</h1>
          <p className="text-gray-400 text-sm mt-2 transition-colors duration-300 group-hover:text-gray-300">
            Empowering students with modern tech skills to excel in their careers.
          </p>
        </div>

        <div>
          <h3 className='text-xl text-[#1177BB] !font-semibold !font-sans'>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ text, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-2 transition duration-200 hover:translate-x-1">
                <Icon className="w-4 h-4 text-[#1174B6]" />
                <Link
                  to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-[#084282] transition duration-200 hover:translate-x-1 inline-block"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1 md:col-span-2">
          <h3 className='text-xl text-[#1177BB] !font-semibold !font-sans'>Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 transition duration-200 hover:translate-x-1">
              <Mail className="w-4 h-4 text-[#1174B6] transition-colors duration-200 group-hover:text-[#084282]" />
              <span>
                Email:{" "}
                <a
                  href="mailto:digitaleradeit@gmail.com"
                  className="hover:underline relative z-10"
                >
                  digitaleradeit@gmail.com
                </a>{" "}
                |{" "}
                <a
                  href="mailto:ranahaseeb5969@gmail.com"
                  className="hover:underline relative z-10"
                >
                  ranahaseeb5969@gmail.com
                </a>
              </span>
            </li>

            <li className="flex items-center gap-2 transition duration-200 hover:translate-x-1">
              <Phone className="w-4 h-4 text-[#1174B6] transition-colors duration-200 group-hover:text-[#084282]" />
              <span>
                Phone:{" "}
                <a
                  href="tel:03701393075"
                  className="hover:underline relative z-10"
                >
                  0370-1393075
                </a>{" "}
                |{" "}
                <a
                  href="tel:03355461282"
                  className="hover:underline relative z-10"
                >
                  0335-5461282
                </a>
              </span>
            </li>

            <li className="flex items-center gap-2 transition duration-200 hover:translate-x-1">
              <MapPin className="w-4 h-4 text-[#1174B6] transition-colors duration-200 group-hover:text-[#084282]" />
              <span>Location: Rawalpindi, Pakistan</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl text-[#1177BB] !font-semibold !font-sans'>Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, color, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 flex items-center justify-center bg-white/10 rounded-full transition transform hover:scale-110 ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-[#1378BB] hover:bg-[#084282] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <CopyRight />
    </footer>
  );
};

export default Footer;
