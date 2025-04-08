import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center pt-32 pb-20 bg-gradient-to-r from-cyan-700 to-blue-800 text-white"
    >
      <img
        src="/krishna.png"
        alt="Krishna Mandal"
        className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-md"
      />
      <h1 className="text-5xl font-bold mb-3">Hi, I'm Krishna Mandal</h1>
      <p className="text-xl">Professional Video Editor & Graphic Designer</p>
    </motion.section>
  );
};

export default Hero2;
