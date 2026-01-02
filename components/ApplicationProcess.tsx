"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  ClipboardCheck,
  MousePointerClick,
  FileText,
  Award,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Check Eligibility",
    description:
      "Use our smart calculator to verify your scholarship qualifications instantly.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Choose Program",
    description:
      "Explore our range of future-ready courses tailored to your career goals.",
    icon: MousePointerClick,
  },
  {
    id: 3,
    title: "Submit Application",
    description:
      "Complete the streamlined online form and upload your documents securely.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Receive Offer",
    description:
      "Get your admission decision and scholarship offer within 1-2 weeks.",
    icon: Award,
  },
];

const StepCard = ({
  step,
  isActive,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      animate={{
        y: isActive ? -12 : 0,
        scale: isActive ? 1.02 : 1,
      }}
      className={`
        relative flex flex-col p-6 rounded-2xl border transition-all duration-500 h-full w-full
        ${
          isActive
            ? "bg-white border-[#D6000D] shadow-2xl shadow-red-500/10 ring-1 ring-red-100"
            : "bg-white border-slate-100 shadow-md hover:border-slate-300"
        }
      `}
    >
      {/* Step Number Badge */}
      <div className="flex justify-between items-start mb-5">
        <div
          className={`
          w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-sm transition-colors duration-500
          ${isActive ? "bg-[#D6000D] text-white" : "bg-slate-900 text-white"}
        `}
        >
          {step.id}
        </div>
        <div
          className={`p-2.5 rounded-full transition-colors duration-500 ${
            isActive ? "bg-red-50 text-[#D6000D]" : "bg-slate-50 text-slate-400"
          }`}
        >
          <step.icon className="w-5 h-5" />
        </div>
      </div>

      <h3
        className={`text-lg font-bold mb-3 transition-colors duration-500 ${
          isActive ? "text-[#D6000D]" : "text-slate-900"
        }`}
      >
        {step.title}
      </h3>

      <p className="text-slate-500 leading-relaxed text-sm flex-grow">
        {step.description}
      </p>

      <div className="mt-6 pt-4 border-t border-slate-50">
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 2, ease: "linear" }} // timed to match the interval
            className="h-full bg-[#D6000D]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ApplicationProcess() {
  const targetRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={targetRef}
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white rounded-[100%] blur-3xl opacity-60 -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-[#D6000D]" />
            <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm">
              Simple Process
            </span>
            <div className="h-[2px] w-8 bg-[#D6000D]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Start Your Journey in <br /> 4 Easy Steps
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We&apos;ve streamlined our admissions process to be as transparent
            and efficient as possible.
          </p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-[3rem] left-0 w-full px-16 z-0">
            <div className="h-1 w-full bg-slate-200 rounded-full" />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <StepCard
                  step={step}
                  index={index}
                  isActive={index === activeStep}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW (Vertical Timeline) --- */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-slate-200 rounded-full" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <div
                  className={`
                    absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold border-4 border-slate-50 z-10 shadow-lg transition-colors duration-500
                    ${index === activeStep ? "bg-[#D6000D] text-white scale-110" : "bg-white text-slate-900"}
                `}
                >
                  {step.id}
                </div>

                {/* Content */}
                <StepCard
                  step={step}
                  index={index}
                  isActive={index === activeStep}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
