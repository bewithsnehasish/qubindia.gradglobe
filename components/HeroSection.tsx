"use client";

import { motion, type Variants } from "motion/react";
import { GraduationCap, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const { openModal } = useModal();
  const [imgError, setImgError] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* --- Background --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-multiply" />
      </div>

      <div className="max-w-[93rem] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* --- Left Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start text-left"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white border border-red-100 text-[#D6000D] px-4 py-1.5 rounded-full text-sm font-bold shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6000D]"></span>
            </span>
            <span className="tracking-wide uppercase text-xs">
              Apply for Feb, 2026
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6"
          >
            Queen's University UK,
            <br className="hidden lg:block" />
            Top 200 Ranked, Worldwide. <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
              Now in India
            </span>
            <span className="block text-4xl lg:text-5xl mt-2 text-[#D6000D]">
              - 100% Funded Master&apos;s
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed font-bold"
          >
            Applications for 100% Funded 1-Year Master&apos;s programs in the
            Fintech Domain are closing shortly.
          </motion.h2>

          {/* CTA Button - Shifted Right on Mobile, Left on Desktop */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-end lg:justify-start mb-10"
          >
            <button
              onClick={openModal}
              className="bg-emerald-600/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-1 active:scale-95 flex items-center gap-2 group"
            >
              Check Eligibility
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* --- Right Image --- */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[500px] lg:h-[650px] w-full"
        >
          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 bg-slate-200">
            <img
              src="/hero.jpg"
              alt="Queen's University Campus"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[2s] ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-28 lg:bottom-16 left-6 right-6 lg:left-8 lg:right-8 backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-2xl shadow-xl flex items-center gap-4"
            >
              {/* <div className="bg-[#D6000D] p-3 rounded-xl text-white shadow-lg shadow-red-900/20 shrink-0"> */}
              {/* <GraduationCap className="w-7 h-7" /> */}
              {/*   <Image */}
              {/*     src="/image.webp" */}
              {/*     alt="Queen's University Logo" */}
              {/*     width={80} */}
              {/*     height={80} */}
              {/*     className="w-7 h-7 sm:w-14 sm:h-14 object-contain" */}
              {/*     priority */}
              {/*   /> */}
              {/* </div> */}
              <div className="">
                {imgError ? (
                  <div className="bg-[#D6000D] p-3 rounded-xl text-white shadow-lg shadow-red-900/20 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                ) : (
                  <div className="text-white  shadow-red-900/20 shrink-0">
                    <Image
                      src="/image.webp"
                      alt="Queen's University Logo"
                      width={80}
                      height={80}
                      className="w-7 h-7 sm:w-14 sm:h-14 object-contain"
                      priority
                      onError={() => setImgError(true)}
                    />
                  </div>
                )}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  Russell Group University
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-red-200" />
                  <p className="text-red-50 text-sm font-medium">
                    GIFT City, Gujarat
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Bubbles (Courses) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 left-4 right-4 lg:left-8 lg:right-8"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "MSc Business Analytics",
                  "MSc Finance",
                  "MSc Financial Analytics",
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-lg text-slate-800 text-[11px] md:text-xs font-bold shadow-sm hover:text-[#D6000D] transition-colors cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#D6000D]" />
                    {course}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating Abstract Shapes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-60 z-[-1]"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 z-[-1]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
