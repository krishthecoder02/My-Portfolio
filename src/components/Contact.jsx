import Reacr from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="p-6 bg-slate-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-slate-800">Contact Me</h2>
      <div className="max-w-md mx-auto space-y-4 text-center">
        <p className="text-lg">You can message me directly via:</p>
        <div className="space-y-2">
          <a
            href="mailto:kkmandal2030@gmail.com"
            className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            📧 Email Me
          </a>
          <a
            href="https://wa.me/919572375004"
            target="_blank"
            className="block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
          >
            💬 Message on WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
