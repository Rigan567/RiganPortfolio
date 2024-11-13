import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { Github, MoveUpRight } from "lucide-react";

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
              className="w-full h-48 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-48">
                {project.description}
              </p>
              <div className=" flex flex-1 justify-start gap-2 items-center">
                <a
                  href={project.url}
                  target="blank"
                  className="flex gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition duration-300"
                >
                  Live <MoveUpRight />
                </a>
                <a
                  href={project.github}
                  target="blank"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 transition duration-300"
                >
                  <Github />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
