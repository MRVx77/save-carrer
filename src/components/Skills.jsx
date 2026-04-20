import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  BarChart3,
  Megaphone,
  Video,
  Laptop,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Brain size={28} />,
      title: "Prompt Engineering",
      desc: "Learn how to use AI tools effectively for faster work.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500",
      level: 85,
    },
    {
      icon: <Code2 size={28} />,
      title: "Web Development + AI",
      desc: "Build websites, apps, and digital products for the future.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500",
      level: 90,
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Data Analysis",
      desc: "Understand data and make smart business decisions.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500",
      level: 75,
    },
    {
      icon: <Megaphone size={28} />,
      title: "Marketing",
      desc: "Use creativity and AI to grow brands online.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500",
      level: 80,
    },
    {
      icon: <Video size={28} />,
      title: "Video Editing",
      desc: "Create content for YouTube, Instagram, and brands.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500",
      level: 70,
    },
    {
      icon: <Laptop size={28} />,
      title: "Freelancing",
      desc: "Earn independently using in-demand digital skills.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500",
      level: 88,
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/15 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/15 blur-[180px] rounded-full"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
          >
            <Sparkles className="text-blue-400" size={16} />
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">
              Future Skills
            </p>
          </motion.div>

          {/* Small Scrolling Images Section */}
          <div className="mb-10">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                className="flex gap-6 w-max py-2"
              >
                {[...images, ...images].map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="min-w-85 h-65 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img
                      src={img}
                      alt="skill showcase"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Top Skills for{" "}
            <span className="relative">
              <span className="relative z-10 text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,.5)]">
                2026
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-green-500/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Master these skills to stay valuable, relevant, and ahead in the AI
            era.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-linear-to-b from-white/8 to-white/2 border border-white/8 hover:border-white/20 rounded-3xl p-7 overflow-hidden transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
              ></div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    <span className="text-xs font-semibold text-gray-300">
                      {item.level}%
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6 mb-5">
                  {item.desc}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full bg-linear-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
