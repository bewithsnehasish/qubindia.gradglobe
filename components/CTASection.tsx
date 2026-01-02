"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Calculator, Phone, ShieldCheck, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#D6000D] to-[#b0000a] z-0" />

      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-900/40"
        >
          <Rocket className="w-10 h-10 text-[#D6000D] animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
        >
          Ready to Transform <br /> Your Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Apply now and discover how much scholarship you&apos;re eligible for.
          Your journey to excellence starts here.
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
