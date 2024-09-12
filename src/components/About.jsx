import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center"
      >
        <h3 className="text-4xl font-bold mb-8">About Me</h3>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a Computer Science & Engineering graduate with an IEEE
          publication to my name. I have a strong foundation in web development
          and am proficient in JavaScript, the MERN stack, and Python. My
          experience spans machine learning projects and web applications, with
          a focus on creating efficient and scalable solutions. I am passionate
          about continuously learning and exploring new advancements in
          technology and the world. I'm a passionate full-stack developer with a
          keen eye for design and a love for creating seamless user experiences.
          With expertise in both front-end and back-end technologies, I bring
          ideas to life through clean, efficient, and scalable code.
        </motion.p>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          When I'm not coding, you can find me exploring new technologies,
          unfolded history, contributing to open-source projects, or enjoying a
          good cup of coffee while solving complex algorithmic challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}
