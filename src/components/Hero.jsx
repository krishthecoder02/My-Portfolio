import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/krishna1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-gray-300 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pb-8 mt-4 text-6xl font-thin tracking-tight lg:text-8xl"
            >
              Krishna Kumar
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-pink-800 via-slate-100 to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Video Editor And Content Creater
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              src={profilePic}
              alt="Krishna Profile Pic"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
