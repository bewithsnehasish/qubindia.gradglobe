"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import {
  Building2,
  GraduationCap,
  Wallet,
  Landmark,
  ShieldCheck,
  Globe2,
  CalendarClock,
  ArrowRight,
  BookOpenCheck,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

// --- Data ---
const features = [
  {
    id: 1,
    title: "UK Prestige",
    desc: "9th Oldest University in the UK (Founded 1845).",
    icon: Building2,
    color: "bg-blue-50 text-blue-700",
  },
  {
    id: 2,
    title: "Global Degree",
    desc: "Degree Awarded directly by Queen's University Belfast, UK.",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    title: "100% Scholarship",
    desc: "Full tuition waiver available for merit students.",
    icon: Wallet,
    color: "bg-amber-50 text-amber-700",
  },
  {
    id: 4,
    title: "GIFT City",
    desc: "Study in the heart of India's Global Financial Hub.",
    icon: Landmark,
    color: "bg-purple-50 text-purple-700",
  },
];

const trustBadges = [
  { icon: ShieldCheck, text: "Member of Russell Group" },
  { icon: Globe2, text: "Top 200 World University" },
  { icon: CalendarClock, text: "Apply for Feb 2026 Intake" },
];

const ScholarshipSection = () => {
  const { openModal } = useModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT COLUMN: Headline, Context & Trust Bar --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-white border border-red-100 shadow-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-800 w-fit mb-6"
              >
                <BookOpenCheck className="w-4 h-4 text-[#D6000D]" />
                <span>Excellence Rewarded</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
              >
                Unlock Your Potential with <br />
                <span className="text-[#D6000D]">100% Scholarship</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 leading-relaxed"
              >
                Join a legacy of innovation. Secure your future with full
                tuition waivers available for high-achieving students applying
                for our upcoming intake.
              </motion.p>
            </div>

            {/* Trust / Authority Bar */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="space-y-4">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 pb-4 last:pb-0 border-b last:border-0 border-slate-100"
                  >
                    <div className="p-2 bg-slate-50 text-slate-700 rounded-lg">
                      <badge.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <button
                onClick={openModal}
                className="flex items-center gap-2 text-[#D6000D] font-bold text-lg hover:gap-3 transition-all group"
              >
                Check Eligibility Criteria
                <ArrowRight className="w-5 h-5 group-hover:text-red-700" />
              </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: 2x2 Grid of Key Points --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 hover:border-red-100 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  {/* <h3 className="text-xl font-bold text-slate-900 mb-2"> */}
                  {/*   {feature.title} */}
                  {/* </h3> */}
                  <p className="text-lg text-slate-600 font-semibold leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative note below grid */}
            <motion.p
              variants={itemVariants}
              className="text-center text-xs text-slate-400 mt-6 font-medium"
            >
              *Scholarship seats are limited and strictly merit-based.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
