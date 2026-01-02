"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

const navLinks = [
  { name: "Programs", href: "#courses" },
  { name: "Scholarships", href: "#scholarships" },
  { name: "Why Queen's", href: "#why-us" },
  { name: "Alumni", href: "#testimonials" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-2"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Larger White Logo Container */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ">
              <Image
                src="/image.webp"
                alt="Queen's University Logo"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">
                Queen&apos;s University
              </span>
              <span className="text-[#D6000D] font-bold text-[10px] sm:text-xs uppercase tracking-widest mt-0.5">
                Belfast - GIFT City (Gujrat)
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#D6000D] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D6000D] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={openModal}
              className="bg-[#D6000D] hover:bg-[#b0000a] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Check Eligibility
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* --- Mobile Drawer (Right Side) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[60] shadow-2xl lg:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  {/* Logo in sidebar */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center ">
                    <Image
                      src="/image.webp"
                      alt="Queen's University Logo"
                      width={60}
                      height={60}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg text-slate-900">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-50 text-slate-500 hover:text-[#D6000D] rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 hover:text-[#D6000D] transition-all group"
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Sidebar Footer CTA */}
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={() => {
                    openModal();
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#D6000D] text-white py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
                >
                  Check Eligibility
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  © 2025 Queen&apos;s University Belfast
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
