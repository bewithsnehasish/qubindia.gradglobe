"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is the minimum eligibility for 100% scholarship?",
    answer:
      "To be eligible for the 100% merit-based scholarship, applicants typically need a first-class undergraduate degree (60% or above) from a recognized university, a strong statement of purpose, and a proven track record of academic excellence. Specific criteria may vary by program.",
  },
  {
    id: 2,
    question: "What happens after I accept my offer?",
    answer:
      "Once you accept your offer, you should aim to meet any outstanding conditions of your offer and pay the required deposit by the deadline stated in the offer letter. You will receive information on how to complete online registration, set up your Queen's IT account and prepare for arrival. We will also share more detail about your welcome and induction programme.",
  },
  {
    id: 3,
    question: "Is there a welcome and induction programme for my intake?",
    answer: (
      <>
        Yes. There will be a structured welcome and induction period for your
        cohort, including programme briefings, campus tours, introductions to
        key staff and sessions on using Queen's systems. There will also be
        activities to help you get to know other students.
      </>
    ),
  },
  {
    id: 4,
    question: "Do I have to make any security deposit? Where and why?",
    answer:
      "Yes. All refundable security fees need to be paid directly to the Queen's University Belfast accounts for confirming your seat. This deposit secures your place on your chosen programme.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header - Perfectly aligned with other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#D6000D]" />
            <span className="text-[#D6000D] font-bold uppercase tracking-widest text-sm">
              Common Queries
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to the most common questions about admissions,
            scholarships, and student life.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#D6000D] bg-red-50/10 shadow-lg ring-1 ring-red-100" : "border-slate-200 bg-white hover:border-slate-300"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? "text-[#D6000D]" : "text-slate-800"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-[#D6000D] text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
