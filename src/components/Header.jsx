import React from "react";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <ShieldCheck size={24} className="text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Saving<span className="text-blue-500">Career</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#hero" className="hover:text-white transition">
            Home
          </a>

          <a href="#risk" className="hover:text-white transition">
            Risks
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#roadmap" className="hover:text-white transition">
            Roadmap
          </a>
          <a href="#footer" className="hover:text-white transition">
            About
          </a>
        </nav>

        {/* Button */}
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
          Start Now
        </button>
      </div>
    </header>
  );
};

export default Header;
