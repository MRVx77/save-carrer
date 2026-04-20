import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FolderKanban,
  Briefcase,
  Crown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Roadmap = () => {
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
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-blue-400" />
            <p className="text-blue-400 uppercase tracking-[0.35em]">
              Success Plan
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI Career{" "}
            <span className="text-transparent bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text">
              Roadmap
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-md">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-5 shadow-lg"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

                <p className="text-gray-400 leading-7 text-sm mb-6">
                  {step.desc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all duration-300">
                  Explore <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scrolling Image Strip */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...steps, ...steps].map((item, index) => (
              <div
                key={index}
                className="min-w-70 h-45 rounded-3xl overflow-hidden border border-white/10"
              >
                <img
                  src={item.image}
                  alt="roadmap"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
