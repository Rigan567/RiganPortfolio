import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";

export default function Works() {
  return (
    <section id="works" className="min-h-screen py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">My Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <motion.img
              src={project.imgSrc}
              alt={`Project ${project.title}`}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
