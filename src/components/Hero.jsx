import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 pt-20"
    >
      {/* Background Glow Effects */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-white/5 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Future Proof Your Career
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            How to Save Your{" "}
            <span className="text-transparent bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text">
              Career
            </span>
            <br />
            in the Era of{" "}
            <span className="text-transparent bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text">
              AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-8">
            AI won’t replace you. People who know how to use AI will. Learn the
            skills that keep you relevant, valuable, and unstoppable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              Get Started <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-4 border border-gray-700 hover:border-white rounded-xl font-semibold transition"
            >
              Learn More
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold text-white">85%</h3>
              <p className="text-gray-500 text-sm">Jobs Changing</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">2026</h3>
              <p className="text-gray-500 text-sm">Best Time to Start</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">∞</h3>
              <p className="text-gray-500 text-sm">Opportunities</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-85 h-85"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-2xl opacity-40"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full h-full rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl">
              <Bot size={70} className="text-blue-400 mb-5" />

              <h2 className="text-5xl font-bold text-center leading-tight">
                AI
                <br />
                Future
              </h2>

              <p className="text-gray-400 text-sm mt-4">Adapt • Learn • Win</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
