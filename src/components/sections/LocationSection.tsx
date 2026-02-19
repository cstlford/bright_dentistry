"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppointmentModal from "@/components/AppointmentModal";

const HOURS = [
  { day: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 1:00 PM" },
  { day: "Saturday – Sunday", time: "Closed" },
];

export default function LocationSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 bg-[#F7F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
                Find Us
              </span>
              <span className="deco-line" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Visit Our <span className="text-[#237E7B]">Chattanooga</span>{" "}
              Office
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Info */}
            <div
              ref={leftRef}
              className={`transition-all duration-700 ${
                leftVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Address card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-5">
                <h3 className="text-[#237E7B] font-semibold text-xs uppercase tracking-widest mb-4">
                  Location
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8F4F4] flex items-center justify-center text-[#237E7B]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="w-5 h-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-base">
                      Bright Family Dentistry
                    </p>
                    <p className="text-gray-500 text-sm mt-1">1421 Armor St.</p>
                    <p className="text-gray-500 text-sm">
                      Chattanooga, TN 37412
                    </p>
                    <a
                      href="https://maps.google.com/?q=1421+Armor+St+Chattanooga+TN+37412"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[#237E7B] text-xs font-semibold hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-5">
                <h3 className="text-[#237E7B] font-semibold text-xs uppercase tracking-widest mb-4">
                  Contact
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8F4F4] flex items-center justify-center text-[#237E7B]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.85a19.5 19.5 0 01-5.1-5.1 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 10.91A16 16 0 0016.09 17l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">
                      Call or text us
                    </p>
                    <a
                      href="tel:4235412777"
                      className="text-gray-800 font-bold text-lg hover:text-[#237E7B] transition-colors"
                    >
                      (423) 541-2777
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-7">
                <h3 className="text-[#237E7B] font-semibold text-xs uppercase tracking-widest mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600 text-sm">{h.day}</span>
                      <span
                        className={`text-sm font-medium ${
                          h.time === "Closed"
                            ? "text-gray-400"
                            : "text-gray-800"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="group w-full flex items-center justify-center gap-3 bg-[#237E7B] hover:bg-[#1A5C59] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-[#237E7B]/25 hover:shadow-xl hover:shadow-[#237E7B]/30 hover:-translate-y-0.5"
              >
                Request an Appointment
                <span className="group-hover:translate-x-1 transition-transform duration-200 text-lg">
                  →
                </span>
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                Scheduling requests confirmed by phone — not guaranteed until
                staff reach out.
              </p>
            </div>

            {/* Right — Map */}
            <div
              ref={rightRef}
              className={`transition-all duration-700 delay-200 ${
                rightVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[520px] relative">
                <iframe
                  title="Bright Family Dentistry Location"
                  src="https://maps.google.com/maps?q=1421+Armor+St,+Chattanooga,+TN+37412&output=embed&z=15"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                {/* Map overlay label */}
                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2.5 shadow-md border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#237E7B] animate-pulse" />
                  <span className="text-gray-700 text-xs font-semibold">
                    Bright Family Dentistry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
