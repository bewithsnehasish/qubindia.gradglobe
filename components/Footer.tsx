"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 py-16 border-t border-slate-900 overflow-hidden">
      {/* --- Background Noise --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP SECTION: Split Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-slate-900">
          {/* LEFT: Strong Brand Identity */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-red-900/20">
                <Image
                  src="/image.webp"
                  alt="Queen's University Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <h3 className="text-white font-bold text-lg tracking-tight">
                  Queen&apos;s University
                </h3>
                <span className="text-[#D6000D] text-xs font-bold uppercase tracking-widest">
                  Belfast
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Shaping the world through innovative research and global
              leadership since 1845.
            </p>
          </div>

          {/* RIGHT: Contact Grid */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#D6000D]" />
                <span>Campus</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                GIFT City Campus,
                <br />
                Gandhinagar, Gujarat
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                <Mail className="w-4 h-4 text-[#D6000D]" />
                <span>Admissions</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <a
                  href="mailto:india.admissions@qub.ac.uk"
                  className="text-slate-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  india.admissions@qub.ac.uk
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="tel:+442890975088"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  +44 28 9097 5088
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Queen&apos;s University Belfast.
          </p>
          <p className="opacity-50">Russell Group Institution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
