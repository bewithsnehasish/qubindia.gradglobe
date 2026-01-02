"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Building2, Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "MSc Robotics & AI, 2023",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2687&auto=format&fit=crop",
    quote:
      "The Robotics program at Queen's opened doors I never imagined. I received a 75% scholarship and the hands-on projects were invaluable.",
    company: "Google DeepMind",
    location: "Silicon Valley",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "MSc Data Analytics, 2022",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2592&auto=format&fit=crop",
    quote:
      "Queen's gave me a 100% scholarship based on my academic record. The faculty support was exceptional throughout my journey.",
    company: "McKinsey & Company",
    location: "London, UK",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "MBA Management, 2023",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    quote:
      "With a 60% scholarship, I could focus on learning without financial stress. The networking opportunities were true game-changers.",
    company: "Amazon Leadership",
    location: "Seattle, WA",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* UNIFIED HEADER STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm mb-3 block">
            Student Voices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Success Stories from <br className="hidden md:block" /> Our Alumni
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hear from students who transformed their careers and are now leading
            innovation at global companies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-red-50 transition-colors duration-500 -z-0" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-slate-100">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {student.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {student.role}
                  </p>
                  <div className="flex gap-0.5 mt-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-slate-600 leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                &quot;{student.quote}&quot;
              </blockquote>

              <div className="pt-6 border-t border-slate-100 mt-auto relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#D6000D] group-hover:text-white transition-colors duration-300">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Now working at
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        {student.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
