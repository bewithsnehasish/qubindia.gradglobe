"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, LineChart, Briefcase } from "lucide-react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      icon: BarChart3,
      title: "MSc Financial Analytics",
      desc: "Master the technologies shaping automation, AI, and intelligent systems. Build Financial Models and develop algorithms.",
      tags: ["Statistics", "Automation", "Stock Analysis"],
      duration: "1 Year",
      color: "bg-blue-600",
    },
    {
      icon: LineChart,
      title: "MSc Business Analytics",
      desc: "Transform raw data into actionable insights. Learn advanced statistical methods and predictive modeling to drive decisions.",
      tags: ["Big Data", "Power BI", "Business Strategy"],
      duration: "1 Year",
      color: "bg-indigo-600",
    },
    {
      icon: Briefcase,
      title: "Management",
      desc: "Develop leadership skills and strategic thinking. Master business operations, finance, marketing, and organizational behavior.",
      tags: ["Leadership", "Strategy", "Innovation"],
      duration: "1 Year",
      color: "bg-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-slate-50 to bg-white relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* UNIFIED HEADER STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm mb-3 block">
            Future-Ready Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            High-Demand Courses for <br className="hidden md:block" />{" "}
            Tomorrow&apos;s Leaders
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Choose from programs designed to meet the evolving demands of the
            global job market with practical, hands-on learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
