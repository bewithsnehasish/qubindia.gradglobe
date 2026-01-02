"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users2,
  Microscope,
  Briefcase,
  Crown,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Trophy,
    title: "Top 200 Global University",
    description:
      "Consistently ranked among the world's top universities with a reputation for research excellence and academic prestige.",
    theme: "dark",
  },
  {
    id: 2,
    icon: Users2,
    title: "25,000+ Global Students",
    description:
      "Join a diverse community from over 150 countries and build a worldwide network that lasts a lifetime.",
    theme: "light",
  },
  {
    id: 3,
    icon: Microscope,
    title: "World-Class Research",
    description:
      "Access cutting-edge facilities and collaborate with leading researchers in your field to drive global impact.",
    theme: "light",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Outstanding Career Prospects",
    description:
      "95% of graduates are in work or further study within 6 months of graduation, launching careers at top firms.",
    theme: "light",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* UNIFIED HEADER STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Crown className="w-5 h-5 text-[#D6000D]" />
            <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm">
              Excellence in Education
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose Queen&apos;s <br className="hidden md:block" />{" "}
            University Belfast?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Join a prestigious Russell Group institution with a legacy of
            academic excellence, innovation, and global impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                group relative p-8 rounded-3xl transition-all duration-300 flex flex-col h-full
                ${
                  feature.theme === "dark"
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-800"
                    : "bg-white text-slate-900  shadow-lg hover:shadow-xl hover:border-slate-200 border-2 border-red-600/20"
                }
              `}
            >
              <div
                className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110
                ${feature.theme === "dark" ? "bg-white/10 text-white" : "bg-red-50 text-[#D6000D]"}
              `}
              >
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <h3
                className={`text-xl font-bold mb-4 ${feature.theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                {feature.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-8 flex-grow ${feature.theme === "dark" ? "text-slate-300" : "text-slate-500"}`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
