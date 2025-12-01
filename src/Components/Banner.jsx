import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const stats = [
  { number: 1000, label: "Students Enrollled ", suffix: "+" },
  { number: 900, label: "Satisfied Clients", suffix: "+" },
  { number: 20, label: "Team Members", suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 4,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplay(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl font-bold text-white drop-shadow-lg"
    >
      {display}
      {suffix}
    </motion.span>
  );
};

const Banner = () => {
  return (
    <div className="w-full py-16">
      <div className="flex items-center justify-center gap-6 mb-12">
        <span className="h-[2px] w-20 bg-gradient-to-r from-gray-500 to-gray-300"></span>
        <h1 className="text-[#072039] font-bold text-2xl md:text-3xl">
          Our Success
        </h1>
        <span className="h-[2px] w-20 bg-gradient-to-r from-gray-500 to-gray-300"></span>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center bg-gradient-to-r from-[#0a2f56] via-[#072039] to-[#0a2f56] py-12 px-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6"
          >
            <Counter value={item.number} suffix={item.suffix} />

            <span className="text-gray-200 text-sm md:text-base mt-2 font-medium">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;