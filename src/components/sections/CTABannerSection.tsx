"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppointmentModal from "@/components/AppointmentModal";

export default function CTABannerSection() {
  const [modalOpen, setModalOpen]   = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/teal_plant.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority={false}
          />
          {/* Dark teal overlay so text stays legible */}
          <div className="absolute inset-0 bg-[#0C145D]/80" />
        </div>

        <div
          ref={ref}
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#7AB8F5] text-sm font-semibold uppercase tracking-widest mb-4">
            Take the First Step
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Share your preferred day and time — our team will reach out to confirm
            your visit and answer any questions.
          </p>

          {/* CTA — arrow style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 text-white"
            >
              <span className="text-lg font-semibold">Request an Appointment</span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-white group-hover:bg-white group-hover:text-[#0C145D] transition-all duration-300 group-hover:translate-x-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9h14M10 3l6 6-6 6" />
                </svg>
              </span>
            </button>

            <span className="text-white/30 hidden sm:block">·</span>

            <a
              href="tel:4235412777"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.85a19.5 19.5 0 01-5.1-5.1 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 10.91A16 16 0 0016.09 17l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (423) 541-2777
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-white/40 text-xs">
            Scheduling requests are not guaranteed until confirmed by a staff member.
          </p>
        </div>
      </section>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
