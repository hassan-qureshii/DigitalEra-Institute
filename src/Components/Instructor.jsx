import React from "react";
import { FaGraduationCap } from "react-icons/fa";

import Sir_wasif from "../assets/Sir_wasif.png";
import Sir_shafeeq from "../assets/Sir_shafeeq.png";
import Haseeb from "../assets/Haseeb.png";
import Amina from "../assets/Amina.png";
import Osama from "../assets/Osama.png";

const instructors = [
  { id: 1, name: "Haseeb Ahmed", role: "CEO & Co-Founder of Digital Era | Marketing Specialist", img: Haseeb },
  { id: 2, name: "Amina Gulzaar", role: "Founder & MD of Digital Era | Graphic Designer & Video Editor", img: Amina },
  { id: 3, name: "Shafeeq ul rehman", role: "IT Expert", img: Sir_shafeeq },
  { id: 4, name: "Wasif ijaz", role: "SEO, WordPress & E-commerce Expert", img: Sir_wasif },
  { id: 5, name: "Osama Malik", role: "Web Developer & Python Expert", img: Osama },
];

const Instructor = () => {
  const firstRow = instructors.slice(0, 3);
  const secondRow = instructors.slice(3, 5);

  return (
    <div className="w-full my-12 px-6 text-center">
      <div className="w-fit mx-auto mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-b-3xl">
          <FaGraduationCap className="text-white bg-[#023255] p-1 rounded-full" />
          Instructors
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {firstRow.map((inst) => (
          <div
            key={inst.id}
            className="bg-[#072039] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={inst.img}
              alt={inst.name}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-blue-500 mb-3"
            />
            <h2 className="text-lg font-semibold text-white">{inst.name}</h2>
            <p className="text-gray-400 text-sm mt-1 text-center leading-tight">
              {inst.role}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {secondRow.map((inst) => (
          <div
            key={inst.id}
            className="bg-[#072039] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={inst.img}
              alt={inst.name}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-blue-500 mb-3"
            />
            <h2 className="text-lg font-semibold text-white">{inst.name}</h2>
            <p className="text-gray-400 text-sm mt-1 text-center leading-tight">
              {inst.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
