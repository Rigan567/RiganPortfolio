import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";

export default function Academia() {
  return (
    <section id="academia" className="min-h-screen py-12">
      <h3 className="text-4xl font-bold mb-12 text-center">
        Academic Qualifications
      </h3>
      <div className=" my-10 p-5 min-w-screen flex flex-col justify-center  gap-5 ">
        <motion.div
          className=" bg-white dark:bg-gray-700 p-5 rounded-xl "
          initial={{ opacity: 0, scale: 0.5, translateX: -200 }}
          whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          {data.Research.map((item) => (
            <div
              key={item.title}
              className=" flex flex-col gap-3 py-5 px-2 flex-1"
            >
              <a
                href={item.url}
                target="blank"
                className="font-semibold text-lg mb-5 "
              >
                Research Title:{" "}
                <span className="font-normal tracking-wide text-base text-blue-500 dark:text-blue-200 ">
                  {item.title}
                </span>
              </a>
              <p className="font-semibold text-base">
                Published on:{" "}
                <span className="font-normal tracking-wider text-sm ">
                  {item.Published}
                </span>{" "}
                <span className="font-semibold br text-sm">
                  ({item.date_conference})
                </span>
              </p>
              <p className="font-semibold text-base">
                Published on IEEE:{" "}
                <span className="font-normal text-sm">{item.IEEE}</span>
              </p>
            </div>
          ))}
        </motion.div>
        <div className="flex flex-col flex-1 md:p-4 md:flex-row  md: gap-2 ">
          {data.study.map((item, index) => (
            <motion.div
              key={item.institution}
              className=" rounded-lg p-3 md:p-5 md:py-7 w-35 mb-5 md:mx-auto  bg-white dark:bg-gray-700 flex flex-col gap-2 lg:flex-1 dark:hover:drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.5, translateY: 50 }}
              whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.07 }}
            >
              <h3 className="font-bold">{item.institution}</h3>
              <h4>{item.program}</h4>
              <h5 className="font-semibold rounded-md bg-slate-300 dark:bg-gray-800 w-fit px-2">
                {item.grade}
              </h5>
              <p>{item.years}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
