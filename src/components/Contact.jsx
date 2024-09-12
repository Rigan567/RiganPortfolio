import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        timestamp: new Date(),
      });
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Contact Me</h3>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-500 text-center">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-500 text-center">
              An error occurred. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
