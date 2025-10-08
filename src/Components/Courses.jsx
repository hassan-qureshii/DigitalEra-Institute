import React from "react";
import { FaBookOpen } from "react-icons/fa"; 
import Graphic_designing from "../assets/Graphic_designing.png";
import Web_development from "../assets/Web_development.png";
import Digital_marketing from "../assets/Digital_marketing.png";
import Video_editing from "../assets/Video_editing.png";
import Ecommerce from "../assets/Ecommerce.png";
import Freelancing from "../assets/Freelancing.png";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      title: "Web Development",
      description: "Learn to build modern websites with HTML, CSS, JavaScript, and python.",
      image: Web_development,
    },
    {
      title: "Digital Marketing",
      description: "Master SEO, social media, and paid campaigns to grow businesses online.",
      image: Digital_marketing,
    },
    {
      title: "E-commerce",
      description: "Learn to create and manage online stores with Shopify, WooCommerce & more.",
      image: Ecommerce,
    },
    {
      title: "Graphic Design",
      description: "Create stunning visuals using Photoshop, Illustrator, and Canva.",
      image: Graphic_designing,
    },
    {
      title: "Video Editing",
      description: "Edit videos like a pro with Premiere Pro, After Effects, and CapCut.",
      image: Video_editing,
    },
    {
      title: "Freelancing",
      description: "Build your career on Fiverr, Upwork, and other freelancing platforms.",
      image: Freelancing,
    },
  ];

  return (
    <div className="w-full my-20 px-6">
      {/* Section Heading */}
      <div className="w-72 mx-auto mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-b-4xl">
          <FaBookOpen className="text-white bg-[#023255] p-1 rounded-full" />
          Our Courses
        </h1>
      </div>

     <p className="flex items-center justify-center gap-6 text-gray-700 font-semibold mt-6 mb-12 text-lg">
  <span className="h-[2px] w-20 bg-gradient-to-r from-gray-300 to-gray-500 text-center"></span>
     Discover Our Courses.
  <span className="h-[2px] w-20 bg-gradient-to-r from-gray-500 to-gray-300"></span>
</p>


      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full h-[300px]"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/80 transition"></div>

            {/* Content */}
            <div className="absolute bottom-15 left-0 right-0 text-center px-6">
              <h3 className="text-3xl !font-semibold !font-sans text-[#1176BB] mb-3">{course.title}</h3>
              <p className="text-gray-300  mb-4 text-xl md:text-sm ">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

     <div className="mx-5 md:mx-40 mt-5">
      <h1 className="text-2xl md:text-xl !font-bold font-sans flex items-center gap-2">
        <FaInfoCircle className="text-[#023255]" />
        <Link to="/more-info" className="hover:underline">
          Click for More info
        </Link>
      </h1>
    </div>
    </div>
  );
};

export default Courses;