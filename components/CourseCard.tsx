"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

interface CourseCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
  duration: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon: Icon,
  title,
  desc,
  tags,
  duration,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-xl bg-red-600 text-white shadow-md`}>
          <Icon className="w-8 h-8" />
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          High Demand
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#D6000D] transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-slate-50 text-slate-600 px-3 py-1 rounded-md text-sm font-medium border border-slate-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        {/* <span className="flex items-center gap-1 text-[#D6000D] font-bold text-sm group-hover:gap-2 transition-all"> */}
        {/*   Learn More <ArrowRight className="w-4 h-4" /> */}
        {/* </span> */}
      </div>
    </motion.div>
  );
};

export default CourseCard;
