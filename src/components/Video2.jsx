import React from "react";
import { motion } from "framer-motion";

const Video2 = () => {
  return (
    <motion.section
      id="videos"
      className="p-6 bg-slate-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-slate-800 text-center">
        My Video Edits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          const isLandscape = index < 3; // First 3 = Landscape

          return (
            <div
              key={num}
              className={`rounded-2xl border-4 shadow-lg overflow-hidden ${
                isLandscape
                  ? "aspect-video border-blue-400"
                  : "aspect-[9/16] border-pink-400 scale-90 sm:scale-95"
              }`}
            >
              <video
                controls
                className="w-full h-full object-cover"
                poster={`/video${num}.jpg`}
              >
                <source src={`/video${num}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Video2;
