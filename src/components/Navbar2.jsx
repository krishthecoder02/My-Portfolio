import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-slate-900 text-white shadow-lg">
      <div className="text-xl font-bold">Krishna's Edits</div>
      <div className="hidden md:flex space-x-6">
        {["Videos", "Graphics", "Experience", "Contact Me"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="hover:text-blue-400 transition"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 text-xl">
        <a
          href="https://www.instagram.com/krish.the.coder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@KrishTheCoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-coder-mandal-76a0b9258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar2;
