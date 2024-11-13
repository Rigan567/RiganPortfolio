import React from "react";
import rigan from "../assets/rigan.jpeg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Download, Instagram, Facebook, Linkedin, Github } from "lucide-react";
import data from "../assets/data.json";
export default function Home() {
  const [text] = useTypewriter({
    words: [
      "React Developer",
      "MERN Stack Developer",
      "Tech Enthusiast",
      "Problem Solver",
      "A Researcher",
    ],
    loop: 0,
  });

  return (
    <section
      id="home"
      className="min-h-fit flex items-start justify-center mt-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full py-0 "
      >
        <h2 className="flex flex-col justify-center items-center p-4  my-0 min-h-48 md:min-h-20 w-75 relative top   mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          <motion.span
            className="h-32 w-full 
            flex flex-col justify-center items-center
            text-5xl font-bold
            "
            transition={{ duration: 5, repeat: Infinity }}
          >
            {text}
          </motion.span>
          <Cursor cursorStyle="_" />
        </h2>
        <p className="text-xl mb-8">
          Crafting digital experiences with code and creativity
        </p>
        <motion.div
          className="relative w-64 h-64 mx-auto mt-8 "
          // animate={{ rotate: 360 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-1 bg-gradient-to-r from-purple-400 to-pink-500  rounded-full opacity-75 blur-xl"
            animate={{
              scale: [0.9, 1.0, 0.9],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src={rigan}
            alt="Rigan"
            className="rounded-full w-60 h-60 sm:w-64 sm:h-64 left-3 sm:left-0  object-cover relative z-10 hue-rotate-70"
            whileHover={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, -45, 0],
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div className=" mt-12 py-2 flex flex-col justify-center items-center gap-5 ">
          <motion.a
            href="https://www.dropbox.com/scl/fi/8z0f2giqj7mffw20zpc0l/Rigan-Resume.pdf?rlkey=cc6ix0gx49gc3rymje6f4i7p6&st=rs730b8y&dl=0"
            target="blank"
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="md:h-10 md:w-40 flex items-center justify-center  text-white bg-gradient-to-r from-purple-700 to-pink-700 rounded-md p-2 flex gap-2
          dark:hover:from-purple-800 dark:hover:to-pink-800"
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], translateY: [-10, 0, 10] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Download />
            </motion.div>
            Resume
          </motion.a>
          <motion.div className="flex justify-center items-center text-lg gap-3">
            {data.social.map((item, index) => (
              <motion.a
                href={item.url}
                key={item.url}
                target="blank"
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ rotateZ: 30 }}
              >
                {index === 0 ? (
                  <Github className="h-8 w-8 md:h-10 md:w-10" />
                ) : index === 1 ? (
                  <Linkedin className="h-8 w-8  md:h-10 md:w-10" />
                ) : index === 2 ? (
                  <Facebook className="h-8 w-8 md:h-10 md:w-10" />
                ) : (
                  <Instagram className="h-8 w-8 md:h-10 md:w-10" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
