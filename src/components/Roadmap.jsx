import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FolderKanban,
  Briefcase,
  Crown,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

const Roadmap = () => {
  const gradientStyle = `
    @keyframes gradient {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }
  `;

  const steps = [
    {
      icon: <BookOpen size={28} />,
      title: "Learn Skills",
      desc: "Master AI tools, coding, communication, and problem-solving.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <FolderKanban size={28} />,
      title: "Build Projects",
      desc: "Create strong portfolio projects that prove real-world ability.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Start Earning",
      desc: "Land internships, freelance clients, jobs, or launch services.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <Crown size={28} />,
      title: "Lead With AI",
      desc: "Use AI smartly to scale faster and dominate your field.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      <style>{gradientStyle}</style>
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <Sparkles className="text-blue-400 w-4 h-4" />
            <p className="text-blue-400 uppercase tracking-[0.35em] text-sm font-medium">
              Success Plan
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI Career{" "}
            <span
              className="text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text bg-size-[200%_auto]"
              style={{
                animation: "gradient 3s linear infinite",
              }}
            >
              Roadmap
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A step-by-step growth path to earn more, stay relevant, and build a
            future-proof career in the AI era.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative bg-black/80 rounded-3xl m-px overflow-hidden">
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 z-20 bg-linear-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Icon with Glow */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-5 shadow-lg shadow-purple-500/25"
                  >
                    <span className="text-white">{step.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm mb-6">
                    {step.desc}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-2 text-purple-400 font-medium cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scrolling Image Strip */}
        <div className="mt-20 overflow-hidden relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-20"></div>

          <div className="flex items-center gap-1">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="flex gap-6 w-max pl-20"
            >
              {[...steps, ...steps].map((item, index) => (
                <div
                  key={index}
                  className="min-w-95 h-70 rounded-3xl overflow-hidden border border-white/10 group relative"
                >
                  <img
                    src={item.image}
                    alt="roadmap"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <button className="group relative px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey{" "}
              <Zap
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
