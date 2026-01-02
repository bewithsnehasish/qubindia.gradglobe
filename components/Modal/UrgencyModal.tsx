"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Zap } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const Urgency = () => {
  const { openModal } = useModal();
  const [isExpanded, setIsExpanded] = useState(false);
  const [applied, setApplied] = useState(30000);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate applied count based on time elapsed since campaign start
  useEffect(() => {
    // Hardcoded campaign start: December 31, 2025 at 16:20
    const campaignStart = new Date(2025, 11, 31, 16, 20, 0, 0);

    const calculateApplied = () => {
      const now = new Date();
      const elapsedMs = now.getTime() - campaignStart.getTime();

      if (elapsedMs < 0) {
        return 30000;
      }

      // 100 users per hour = 100/3600 users per second ≈ 0.0277 users/second
      // Or 1 user every 36 seconds
      const elapsedSeconds = Math.floor(elapsedMs / 1000);
      const newUsers = Math.floor(elapsedSeconds / 36);

      return 30000 + newUsers;
    };

    setApplied(calculateApplied());

    // Update every 36 seconds (when a new user should be added)
    const incInterval = setInterval(() => {
      setApplied(calculateApplied());
    }, 36000);

    return () => clearInterval(incInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Campaign end: January 5, 2026 at 23:59:59
    const campaignEnd = new Date(2026, 0, 5, 23, 59, 59, 999);

    const updateCountdown = () => {
      const now = new Date();
      const difference = campaignEnd.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Campaign ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Set initial value
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mini Floating Icon - Always Visible */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => setIsExpanded(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#D6000D] to-[#FF1744] shadow-[0_10px_40px_rgba(214,0,13,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform group"
          >
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:rotate-12 transition-transform" />

            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#D6000D] animate-ping opacity-20"></span>

            {/* Badge with count */}
            <span className="absolute -top-1 -right-1 bg-white text-[#D6000D] text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-lg min-w-[18px] sm:min-w-[20px] text-center">
              {timeLeft.days}d
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: 50, x: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, x: 50, opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.5,
            }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] w-[calc(100%-2rem)] sm:w-full sm:max-w-[380px]"
          >
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
              <div className="p-4 pt-5 sm:p-6 sm:pt-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-50 flex items-center justify-center text-[#D6000D]">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Limited Seats
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Stats Row - Enhanced Applied Count */}
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-50 to-orange-50 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-red-100 w-full">
                    <div
                      className="flex -space-x-1.5 sm:-space-x-2"
                      aria-label="Applied avatars"
                    >
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm"
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={`https://i.pravatar.cc/200?img=${i + 20}`}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-base sm:text-lg font-black text-[#D6000D] leading-none">
                        {applied.toLocaleString()}+
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                        Students Applied
                      </span>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer Grid - Compact for Mobile */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <TimeUnit value={timeLeft.hours} label="Hrs" />
                  <TimeUnit value={timeLeft.minutes} label="Min" />
                  <TimeUnit value={timeLeft.seconds} label="Sec" isUrgent />
                </div>

                {/* Action Button - Compact for Mobile */}
                <button
                  onClick={openModal}
                  className="w-full relative overflow-hidden group/btn bg-[#D6000D] text-white h-11 sm:h-14 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-[15px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(214,0,13,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <span className="flex items-center justify-center gap-2">
                    Check Eligibility
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TimeUnit = ({
  value,
  label,
  isUrgent = false,
}: {
  value: number;
  label: string;
  isUrgent?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`
            w-full py-2 sm:py-3 flex items-center justify-center rounded-xl sm:rounded-2xl font-mono text-base sm:text-xl font-bold transition-all duration-500
            ${
              isUrgent
                ? "bg-red-50 text-[#D6000D] border border-red-100"
                : "bg-slate-50 text-slate-700 border border-slate-100"
            }
        `}
    >
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[8px] sm:text-[9px] text-slate-400 font-bold mt-1 sm:mt-1.5 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

export default Urgency;
