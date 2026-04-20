import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  BarChart3,
  Megaphone,
  Video,
  Laptop,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Brain size={30} />,
      title: "Prompt Engineering",
      desc: "Learn how to use AI tools effectively for faster work.",
    },
    {
      icon: <Code2 size={30} />,
      title: "Web Development + AI",
      desc: "Build websites, apps, and digital products for the future.",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Data Analysis",
      desc: "Understand data and make smart business decisions.",
    },
    {
      icon: <Megaphone size={30} />,
      title: "Marketing",
      desc: "Use creativity and AI to grow brands online.",
    },
    {
      icon: <Video size={30} />,
      title: "Video Editing",
      desc: "Create content for YouTube, Instagram, and brands.",
    },
    {
      icon: <Laptop size={30} />,
      title: "Freelancing",
      desc: "Earn independently using in-demand digital skills.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24 px-6 border-t border-gray-800"
    >
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-blue-400 uppercase tracking-widest mb-3">
          Future Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Top Skills for <span className="text-green-500">2026</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Master these skills to stay valuable, relevant, and ahead in the AI
          era.
        </p>

        {/* Cards Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                className="text-blue-500 mb-5 flex justify-center"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
