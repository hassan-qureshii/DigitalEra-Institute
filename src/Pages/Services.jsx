import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import CopyRight from "../Components/CopyRight";
import "antd/dist/reset.css";
import { FaArrowUp } from "react-icons/fa";

const { Meta } = Card;

const Services = () => {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Learn to build modern, responsive, and dynamic websites using HTML, CSS, JavaScript and the Python Development. Ideal for beginners and professionals.",
    },
    {
      title: "Graphic Designing",
      description:
        "Master Adobe Photoshop, Illustrator, and Canva to create stunning visuals, posters, and brand identities.",
    },
    {
      title: "Digital Marketing",
      description:
        "Explore SEO, social media, Meta Ads, Google Ads, and analytics to grow online presence and reach your ideal audience.",
    },
    {
      title: "E-Commerce Management",
      description:
        "Learn to manage online stores using Shopify, Amazon, and Daraz — integrate digital marketing to drive real results.",
    },
  ];

  // Framer motion variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
    hover: { scale: 1.05, rotate: 1, y: -10, boxShadow: "0px 20px 40px rgba(15, 117, 185, 0.5)" },
  };

  return (
    <div className="bg-[#0C0E15] min-h-screen flex flex-col items-center py-16 px-4">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl !font-bold text-[#0F75B9] mb-4 text-center"
      >
        Our Educational Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-white max-w-2xl text-center mb-12 leading-relaxed"
      >
        At <span className="text-[#0F75B9] !font-semibold">Digital Era</span>, we
        help students unlock their digital potential with interactive, hands-on
        learning in the latest skills and technologies.
      </motion.p>

      {/* Interactive Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="w-full"
          >
            <Card
              hoverable
              className="bg-[#072340] rounded-2xl border-none shadow-md flex flex-col justify-between h-full transition-all duration-300"
              bodyStyle={{ textAlign: "center", padding: "40px 30px" }}
            >
              <Meta
                title={
                  <span className="text-2xl !font-extrabold !font-serif text-[#0F75B9]">
                    {service.title}
                  </span>
                }
                description={
                  <p className="text-[#0C0E15] mt-3 text-xl md:text-sm !font-bold leading-relaxed">
                    {service.description}
                  </p>
                }
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* 👇 Scroll to Top Button */}

                <button
                  onClick={scrollToTop}
                  className="fixed right-6 bottom-6 bg-[#1378BB] hover:bg-[#084282] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 z-50"
                  aria-label="Scroll to top"
                >
                  <FaArrowUp />
                </button>

      {/* Footer */}
      <div className="mt-20 w-full">
        <CopyRight />
      </div>
    </div>
  );
};

export default Services;
