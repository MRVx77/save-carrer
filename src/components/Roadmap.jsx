import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FolderKanban,
  Briefcase,
  Crown,
  ArrowRight,
} from "lucide-react";

const Roadmap = () => {
  const steps = [
    {
      icon: <BookOpen size={30} />,
      title: "Learn Skills",
      desc: "Master AI tools, coding fundamentals, communication, and problem-solving.",
    },
    {
      icon: <FolderKanban size={30} />,
      title: "Build Projects",
      desc: "Create strong portfolio projects that prove your real-world abilities.",
    },
    {
      icon: <Briefcase size={30} />,
      title: "Start Earning",
      desc: "Land internships, freelance clients, jobs, or launch your own service.",
    },
    {
      icon: <Crown size={30} />,
      title: "Lead With AI",
      desc: "Use AI smartly to scale faster, solve bigger problems, and stand out.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 70, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="roadmap"
      className="relative bg-black text-white py-28 px-6 border-t border-gray-800 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-3 text-sm font-semibold">
            Success Plan
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your AI Career{" "}
            <span className="text-transparent bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text">
              Roadmap
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-20 text-lg leading-8">
            A practical step-by-step growth path to stay relevant, earn more,
            and build a future-proof career in the AI era.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -14,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all duration-500 shadow-lg"
            >
              {/* Step Number */}
              <span className="absolute top-5 right-5 text-sm font-bold text-gray-500">
                0{index + 1}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ duration: 0.25 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 text-white shadow-lg"
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-7 mb-6">
                {step.desc}
              </p>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="flex justify-center text-purple-400"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
