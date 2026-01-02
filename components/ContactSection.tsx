"use client";

import { motion, type Variants } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Headset,
  CalendarCheck,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

// --- Data ---
const contactMethods = [
  {
    icon: Phone,
    title: "Call Admissions",
    info: "+91 9876644336",
    sub: "Mon-Fri, 9am - 5pm GMT",
    color: "bg-slate-900",
    hoverBorder: "group-hover:border-slate-900",
  },
  {
    icon: Mail,
    title: "Email Support",
    info: "info@gradglobe.com",
    sub: "Response within 24 hours",
    color: "bg-[#D6000D]",
    hoverBorder: "group-hover:border-[#D6000D]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    info: "Chat with Team",
    sub: "Instant replies",
    color: "bg-[#25D366]",
    hoverBorder: "group-hover:border-[#25D366]",
  },
];

const ContactSection = () => {
  const { openModal } = useModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-16 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-2 bg-red-50 rounded-lg">
                <Headset className="w-5 h-5 text-[#D6000D]" />
              </div>
              <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm">
                We are here to help
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Get in Touch
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Have questions about your application, scholarships, or life at
              Queen&apos;s? Our dedicated admissions team is ready to assist
              you.
            </p>
          </motion.div>

          {/* Cards Grid - Thinner Version */}
          <div className="grid md:grid-cols-3 gap-4 w-full mb-16 px-4">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href="#"
                whileHover={{ y: -4 }}
                className={`group relative bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-4 text-left ${method.hoverBorder}`}
              >
                <div
                  className={`${method.color} w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <method.icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {method.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5 truncate">
                    {method.info}
                  </p>
                </div>

                <div className="text-slate-200 group-hover:text-slate-400 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Centered CTA Button */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                Prefer a Callback?
              </h4>
              <p className="text-slate-500 text-sm">
                Fill out the form and we'll reach out to you.
              </p>
            </div>

            <button
              onClick={openModal}
              className="bg-[#D6000D] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b0000a] transition-all shadow-xl shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-1 active:scale-95 flex items-center gap-2 group whitespace-nowrap"
            >
              <CalendarCheck className="w-5 h-5" />
              Request Information
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
