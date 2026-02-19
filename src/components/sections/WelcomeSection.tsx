"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a7 7 0 017 7c0 4-3 7-7 10-4-3-7-6-7-10a7 7 0 017-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Cosmetic",
    desc: "Veneers, whitening, smile design",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Emergency",
    desc: "Same-day urgent dental care",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Family",
    desc: "Care from toddlers to seniors",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      </svg>
    ),
    label: "Medicaid",
    desc: "Proudly accepting Medicaid patients",
  },
];

export default function WelcomeSection() {
  const { ref: textRef,  isVisible: textVisible  } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="welcome" className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
                Our Practice
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Welcome to{" "}
              <span className="text-[#237E7B]">Bright Family</span>{" "}
              Dentistry
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We believe great oral health is the foundation of overall wellness. At
              Bright Family Dentistry, our doors are open to{" "}
              <strong className="text-gray-800">every member of your family</strong> —
              from your little ones&apos; first checkup to complete smile transformations.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="flex-shrink-0 text-[#237E7B] mt-0.5">{p.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{p.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accepting note */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2FA8A5] animate-pulse" />
              Now accepting new patients &amp; Medicaid
            </div>
          </div>

          {/* Image side */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 delay-200 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-6 bg-[#E8F4F4] rounded-3xl -z-10 rotate-2" />

            {/* Placeholder image frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#2FA8A5] to-[#124240] shadow-2xl">
              {/* Decorative overlay pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Content placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 opacity-40">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-sm opacity-50 font-medium">Office Photo</p>
              </div>

              {/* Accent card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#237E7B] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Patient-Centered Care</p>
                    <p className="text-white/60 text-xs">Your comfort is our priority</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small accent shape */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#237E7B]/15" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 border-[#237E7B]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
