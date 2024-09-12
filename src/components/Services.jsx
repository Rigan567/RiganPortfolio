import React from "react";
import { motion } from "framer-motion";
import backend from "../assets/icons/backend.png";
import backend_light from "../assets/icons/backend_light.png";
import redesign from "../assets/icons/redesign.png";
import speed from "../assets/icons/speed.png";

export default function Services({ darkMode, setDarkMode }) {
  const services = [
    {
      light_icon: redesign,
      dark_icon: redesign,
      title: "Frontend Development",
      description:
        "Creating responsive and dynamic websites using modern frameworks and technologies.",
    },
    {
      light_icon: backend_light,
      dark_icon: backend,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
    },
    {
      light_icon: speed,
      dark_icon: speed,
      title: "Performance Optimization",
      description:
        "Improving website speed and efficiency for better user experience.",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
            }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="text-4xl mb-4"
            >
              <img
                src={darkMode ? service.dark_icon : service.light_icon}
                className="w-40 h-40  mx-auto dark:bg-gray-800 dark:color-white"
              />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
