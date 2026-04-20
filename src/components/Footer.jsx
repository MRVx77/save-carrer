import React from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Career<span className="text-blue-500">AI</span>
            </h2>

            <p className="text-gray-400 leading-7 max-w-sm">
              Helping people future-proof their careers by learning the right
              skills in the era of Artificial Intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#risk" className="hover:text-white transition">
                  Risks
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#roadmap" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Connect</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-black border border-gray-800 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-black border border-gray-800 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-black border border-gray-800 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 CareerAI. All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            Back to Top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
