"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, Globe2, GraduationCap, Clock, Star } from "lucide-react";

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => springValue.clearListeners();
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const ImpactSection = () => {
  const stats = [
    {
      id: 1,
      value: 95,
      suffix: "%",
      label: "Employment Rate",
      sub: "Graduates employed within 6 months",
    },
    {
      id: 2,
      value: 150,
      suffix: "+",
      label: "Countries",
      sub: "Global alumni network",
    },
    {
      id: 3,
      value: 120,
      suffix: "M",
      label: "Research Income",
      sub: "Driving global innovation",
    },
    {
      id: 4,
      value: 175,
      suffix: "+",
      label: "Years Legacy",
      sub: "Excellence since 1845",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm mb-3 block">
            Our Global Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Impact in Numbers
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Join thousands of successful graduates worldwide who have
            transformed their futures with a Queen&apos;s education.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl text-center group hover:bg-slate-800 transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-bold text-slate-200 text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Big Red Scholarship Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D6000D] to-[#b0000a] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-red-900/50 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <GraduationCap className="w-64 h-64 -rotate-12" />
          </div>

          <div className="text-center md:text-left relative z-10">
            <div className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tight">
              £<Counter value={15} suffix="M+" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Scholarships Awarded Annually
            </h3>
            <p className="text-red-100 max-w-lg text-lg">
              We are committed to supporting talented students from around the
              world with financial aid and merit-based awards.
            </p>
          </div>

          {/* <div className="relative z-10 shrink-0"> */}
          {/*   <button className="bg-white text-[#D6000D] px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200"> */}
          {/*     Explore Scholarships */}
          {/*   </button> */}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
