import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mb-2 flex items-center justify-between p-3 ">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="https://www.linkedin.com/in/krishna-coder-mandal-76a0b9258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            src={logo}
            alt="logo"
            className="mx-2 w-10"
          />
        </a>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/krishna-coder-mandal-76a0b9258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaLinkedin />
          </motion.div>
        </a>
        <a
          href="https://x.com/KrishTheCoderr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.dev
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaSquareXTwitter />
          </motion.dev>
        </a>
        <a
          href="https://www.instagram.com/krish.the.coder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.dev
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaInstagram />
          </motion.dev>
        </a>
        <a
          href="https://www.youtube.com/@KrishTheCoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.dev
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaYoutube />
          </motion.dev>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

//https://www.instagram.com/krish.the.coder/
