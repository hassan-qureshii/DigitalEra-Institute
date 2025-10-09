import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaHome,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CopyRight from "./../Components/CopyRight";

const Contact = () => {
  const socialLinks = [
    {
      name: "Facebook",
      color: "hover:text-blue-500",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/digitaleraskill?rdid=PD4URBu6rwikb86i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FRuvEaKgG%2F#",
    },
    {
      name: "Instagram",
      color: "hover:text-pink-500",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/digitalerainstitute/?igsh=MWhnaGJoZXQweHRrcQ%3D%3D#",
    },
    {
      name: "WhatsApp",
      color: "hover:text-green-500",
      icon: <FaWhatsapp />,
      link: "https://whatsapp.com/channel/0029VbAh2iN9mrGiJURCEg2I",
    },
  ];

  // Scroll to top button
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0E15] text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl !font-serif !font-bold mb-4 text-[#0F75B9]">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let’s stay connected! Choose your favorite way to reach us — we’re
            always excited to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {/* Visit Us */}
          <div className="bg-[#ffff] backdrop-blur-lg border border-[#072340] p-6 rounded-2xl shadow-md hover:shadow-[#0F75B9] transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#0F75B9] p-3 rounded-full mr-4">
                <FaHome className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl !font-semibold text-[#0F75B9]">
                Visit Us
              </h3>
            </div>
            <p className="text-black mb-4">
              Step into{" "}
              <span className="text-[#0F75B9] font-medium">Digital Era</span> —
              where innovation inspires education and creativity thrives.
              <br />
              Unlock new skills, master modern technologies, and shape your
              future with hands-on learning experiences.
            </p>
            <p className="text-[#0F75B9] font-medium">
              Misrial Road, Near Nisar Bakers, Rawalpindi
            </p>
          </div>

          {/* WhatsApp Us */}
          <div className="bg-[#ffff] backdrop-blur-lg border border-[#072340] p-6 rounded-2xl shadow-md hover:shadow-green-400/40 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl !font-semibold !text-[#00C951]">
                WhatsApp Us
              </h3>
            </div>
            <p className="text-black mb-4">
              Chat with us instantly on WhatsApp for quick support and guidance.
              Whether you have questions about our courses, training schedules,
              or admissions — our team is always ready to help!
            </p>
            <a
              href="https://wa.me/923701393075"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 font-medium hover:underline break-all"
            >
              +92 370 1393075
            </a>
            <br />
            <a
              href="https://wa.me/923355461282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 font-medium hover:underline break-all"
            >
              +92 335 5461282
            </a>
          </div>

          {/* Email Us */}
          <div className="bg-[#ffff] backdrop-blur-lg border border-[#072340] p-6 rounded-2xl shadow-md hover:shadow-[#0F75B9] transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#0F75B9] p-3 rounded-full mr-4">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F75B9] !font-bold">
                Email Us
              </h3>
            </div>
            <p className="text-black mb-4">
              Send us an email and we’ll get back within 24 hours. Whether you
              need details about our courses, upcoming batches, or personalized
              learning paths — we’re here to guide you toward your goals.
            </p>
            <button
              onClick={() =>
                (window.location.href = "mailto:digitaleradeit@gmail.com")
              }
              className="!text-[#0F75B9] font-medium hover:underline break-all text-left"
            >
              digitaleradeit@gmail.com
            </button>
            <br />
            <button
              onClick={() =>
                (window.location.href = "mailto:ranahaseeb5969@gmail.com")
              }
              className="!text-[#0F75B9] font-medium hover:underline break-all text-left"
            >
              ranahaseeb5969@gmail.com
            </button>
          </div>
        </motion.div>

        {/* Location Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-4 md:px-24 max-w-[1400px] mx-auto">
          {/* Left */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[50%] text-left space-y-6"
          >
            <h1 className="text-3xl md:text-4xl !font-extrabold text-[#0F75B9] tracking-wide">
              Current Location
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm">
              Our institute is located in{" "}
              <span className="text-[#0F75B9] font-semibold">
                Rawalpindi, Pakistan
              </span>
              . This prime location allows us to engage with students,
              professionals, and organizations both locally and internationally.
              We welcome visitors, collaborators, and learners to connect with
              us—whether through online sessions or in-person visits at our
              campus.
            </p>
          </motion.div>

          {/* Right (Map) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[55%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.071256681194!2d73.00271177569735!3d33.603455573329384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM2JzEyLjQiTiA3M8KwMDAnMTkuMCJF!5e0!3m2!1sen!2s!4v1759765720399!5m2!1sen!2s"
              className="w-full h-[250px] md:h-[350px]"
              style={{ border: 0, filter: "invert(0%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </motion.div>
        </section>

        {/* Social Icons */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 px-3 py-4 rounded-l-2xl shadow-lg flex flex-col items-center space-y-5 z-50">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-300 transition-transform transform hover:scale-125 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll to top */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 bg-[#1378BB] hover:bg-[#084282] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}

        {/* Footer */}
        <CopyRight />
      </div>
    </div>
  );
};

export default Contact;
