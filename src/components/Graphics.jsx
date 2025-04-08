import React from "react";
import { motion } from "framer-motion";

const Graphics = () => {
  return (
    <motion.section
      id="graphics"
      className="p-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-slate-800">
        My Graphic Designs
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={`/graphic${num}.jpg`}
            alt={`Graphic ${num}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Graphics;
