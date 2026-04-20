import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Briefcase,
  Clock,
  TrendingDown,
  Play,
  Sparkles,
} from "lucide-react";

const Risk = () => {
  const risks = [
    {
      icon: <Bot size={28} />,
      title: "Automation Rising",
      desc: "AI replaces repetitive work faster than ever.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Job Competition",
      desc: "Skilled workers using AI create stronger competition.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <Clock size={28} />,
      title: "Old Skills Expiring",
      desc: "Traditional skills lose value if not upgraded.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: <TrendingDown size={28} />,
      title: "Slow Growth",
      desc: "Ignoring AI may reduce income and opportunities.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section
      id="risk"
      className="relative  text-white py-28 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/20 blur-[140px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 tracking-[0.4em] uppercase mb-4">
            Career Warning
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Why Careers Are at{" "}
            <span className="text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,.6)]">
              Risk
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI is changing everything. Adapt now or get left behind.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {risks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <div className="text-blue-400 mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Risk;
