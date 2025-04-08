import React from "react";

import { motion } from "framer-motion";

const Experience2 = () => {
  return (
    <motion.section
      id="experience"
      className="p-6 bg-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-slate-800">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Video Editor (Freelancer)</h3>
          <p className="text-slate-600">
            2 Years of experience editing YouTube, Instagram, and short videos
            professionally.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Graphic Designer</h3>
          <p className="text-slate-600">
            Creating eye-catching thumbnails, posters, and digital graphics for
            clients and personal projects.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">
            Marketing Manager – Sundorika Bastralay
          </h3>
          <p className="text-slate-600">
            1.5 years handling sales and customer service at a clothing shop in
            Sahebganj.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">
            Shop Assistant – Manokamna, Rospa Tower
          </h3>
          <p className="text-slate-600">
            Worked for 3 months in retail sales and customer interaction.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Online Seller – Meesho</h3>
          <p className="text-slate-600">
            Currently selling cosmetic products and managing product listings
            and orders online.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience2;
