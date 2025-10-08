import React, { useRef } from "react";
import Slider from "react-slick";
import { Button, Tooltip } from "antd";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sir_wasif from "../assets/Sir_wasif.png";
import Sir_shafeeq from "../assets/Sir_shafeeq.png";
import Haseeb from "../assets/Haseeb.png";
import Amina from "../assets/Amina.png";
import Osama from "../assets/Osama.png";

// Example instructors data
const instructors = [
  { id: 1, name: "Shafeeq", role: "IT Expert", img: Sir_shafeeq },
   { id: 2, name: "Haseeb", role: "CEO of Digital Era", img: Haseeb },
  { id: 3, name: "Amina Gulzaar", role: "Founder & MD Digital Era | Graphics Designer & Video Editor", img: Amina },
  { id: 4, name: "Wasif", role: "SEO, WordPress & Ecommerce Expert", img: Sir_wasif },
  { id: 5, name: "Osama", role: "Web Developer & Python Expert", img: Osama },
];

const Instructor = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full my-12 px-6 text-center overflow-x-hidden">
      {/* Section Title */}
      <div className="w-60 mx-auto mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-b-4xl">
          <FaGraduationCap className="text-white bg-[#023255] p-1 rounded-full" />
          Instructors
        </h1>
      </div>

      {/* Carousel with Side Buttons */}
      <div className="flex items-center justify-center gap-4 w-full max-w-6xl mx-auto">
        
        {/* Left Button (hidden on mobile) */}
        <div className="hidden md:block">
          <Tooltip title="Previous">
            <Button
              shape="circle"
              icon={<AiOutlineLeft size={20} />}
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-white shadow-md hover:scale-110 transition duration-300 hover:bg-blue-100"
            />
          </Tooltip>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Slider ref={sliderRef} {...settings}>
            {instructors.map((inst) => (
              <div key={inst.id} className="p-3 sm:p-4">
                <div className="relative bg-[#072039] rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300 h-[200px] sm:h-[220px]">

                  {/* Instructor Image */}
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-blue-500 mb-3"
                  />

                  {/* Instructor Info */}
                  <h2 className="text-base sm:text-lg font-semibold text-white">{inst.name}</h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 text-center">{inst.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Button (hidden on mobile) */}
        <div className="hidden md:block">
          <Tooltip title="Next">
            <Button
              shape="circle"
              icon={<AiOutlineRight size={20} />}
              onClick={() => sliderRef.current.slickNext()}
              className="bg-white shadow-md hover:scale-110 transition duration-300 hover:bg-blue-100"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
