import React from "react";
import { motion } from "framer-motion";
import { Bot, Briefcase, Clock, TrendingDown } from "lucide-react";

const Risk = () => {
  const risks = [
    {
      icon: <Bot size={32} />,
      title: "Automation Rising",
      desc: "AI can now handle repetitive tasks faster and cheaper than humans.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Job Competition",
      desc: "More skilled workers using AI means stronger competition in every field.",
    },
    {
      icon: <Clock size={32} />,
      title: "Old Skills Expiring",
      desc: "Traditional skills lose value if they don’t evolve with technology.",
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Slow Growth",
      desc: "Professionals who ignore AI may face fewer opportunities and lower income.",
    },
  ];

  return (
    <section
      id="risk"
      className="bg-black text-white py-24 px-6 border-t border-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-blue-400 uppercase tracking-widest mb-3">
          Career Warning
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Careers Are at <span className="text-red-500">Risk</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          The workplace is changing fast. Those who adapt win. Those who stay
          the same may struggle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-500 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Risk;
