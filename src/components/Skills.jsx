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
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Brain size={28} />,
      title: "Prompt Engineering",
      desc: "Learn how to use AI tools effectively for faster work.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code2 size={28} />,
      title: "Web Development + AI",
      desc: "Build websites, apps, and digital products for the future.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Data Analysis",
      desc: "Understand data and make smart business decisions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Marketing",
      desc: "Use creativity and AI to grow brands online.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Video size={28} />,
      title: "Video Editing",
      desc: "Create content for YouTube, Instagram, and brands.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Laptop size={28} />,
      title: "Freelancing",
      desc: "Earn independently using in-demand digital skills.",
      color: "from-indigo-500 to-blue-500",
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
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" />
            <p className="text-blue-400 uppercase tracking-[0.35em]">
              Future Skills
            </p>
          </div>

          {/* Small Scrolling Images Section */}
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-bold mb-8">Skills in Action</h3>
          </div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="flex gap-6 w-max"
            >
              {[...images, ...images].map((img, index) => (
                <div
                  key={index}
                  className="min-w-65 h-42.5 rounded-3xl overflow-hidden border border-white/10 shadow-xl"
                >
                  <img
                    src={img}
                    alt="skill"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Top Skills for{" "}
            <span className="text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,.6)]">
              2026
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Master these skills to stay valuable, relevant, and ahead in the AI
            era.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition duration-500`}
              ></div>

              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-7">{item.desc}</p>

              <div
                className={`mt-6 h-1 w-0 group-hover:w-full bg-linear-to-r ${item.color} rounded-full transition-all duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
