import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { button } from "framer-motion/client";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? data.Skills
      : data.Skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>
      <div className="my-10 py-5  flex flex-wrap justify-normal md:flex-nowrap md:justify-start ">
        {["All", "Languages", "Frameworks", "Database", "Tools"].map(
          (category) => (
            <button
              key={category}
              className="bg-slate-400 dark:bg-gray-600 h-2 mx-2 my-2 py-4 px-5 rounded font-semibold text-lg flex items-center pointer transition-colors duration-75 hover:bg-slate-500 dark:hover:bg-gray-700 "
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {filteredData.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotateY: 180 }}
            className=" bg-white dark:bg-gray-800 h-32 flex items-center justify-center rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <div className="text-center">
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl mb-2 flex justify-center items-center p-4"
              >
                <img
                  className=" w-12 h-12 object-contain"
                  src={skill.imgSrc}
                  alt={skill.name}
                />
              </motion.div>
              <h4 className="font-semibold text-md text-center">
                {skill.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
