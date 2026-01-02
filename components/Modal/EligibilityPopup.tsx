"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const EligibilityPopup = () => {
  const { isOpen, closeModal } = useModal();

  // Load the NPF Widget Script whenever the modal opens (original logic)
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="bg-white w-full max-w-[500px] max-h-[90vh] rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative z-50 border border-slate-100"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex items-start justify-between shrink-0">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Check Your <br className="sm:hidden" />
                  <span className="text-[#D6000D]">Eligibility</span>
                </h3>
              </div>

              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Area for Form */}
            <div className="flex-1 overflow-y-auto p-8 pt-2 scrollbar-hide">
              <div
                className="npf_wgts min-h-[400px]"
                data-height="400px"
                data-w="ea19c9476de871d2d031723fff9cb2d7"
              />
            </div>

            {/* Footer Trust Signal */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Your information is 100% secure.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EligibilityPopup;
