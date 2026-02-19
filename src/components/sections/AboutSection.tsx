"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "All Ages", label: "Welcome" },

  { value: "4.9★", label: "Average Rating" },
];

export default function AboutSection() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-700 ${
              imgVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Background decoration */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#237E7B]/8 rounded-3xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-[#237E7B]/20" />

            {/* Photo container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-habib.webp"
                alt="Dr. Robina Habib — Bright Family Dentistry"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#124240]/80 to-transparent" />

              {/* Name plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-xl">
                  Dr. Robina Habib
                </p>
                <p className="text-[#4BBFBC] text-sm font-medium mt-0.5">
                  DDS — General & Cosmetic Dentistry
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-5 grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100"
                >
                  <p className="text-[#237E7B] font-bold text-lg leading-tight">
                    {s.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div
            ref={textRef}
            className={`transition-all duration-700 delay-200 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
                Meet Your Dentist
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Dr. Robina <span className="text-[#237E7B]">Habib</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              With over{" "}
              <strong className="text-gray-800">
                15 years of dedicated practice
              </strong>
              , Dr. Habib brings a rare combination of clinical excellence and
              genuine compassion to every patient interaction. Her philosophy is
              simple: every smile deserves attentive, personalized care.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Board-certified and continually advancing her expertise through
              ongoing education, Dr. Habib offers a comprehensive range of
              services — from routine family checkups to complex cosmetic
              transformations. She is proud to serve patients of all
              backgrounds, including Medicaid recipients, ensuring that quality
              dental care is accessible to everyone in the Chattanooga
              community.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Patients consistently describe their experience at Bright Family
              Dentistry as warm, unhurried, and professional — a place where
              dental anxiety is met with patience and understanding.
            </p>

            {/* Signature-style accent */}
            <div className="border-l-4 border-[#237E7B] pl-5 mb-8">
              <p className="text-gray-700 italic text-base leading-relaxed">
                &ldquo;My greatest reward is seeing a patient leave with a smile
                they&rsquo;re proud to share with the world.&rdquo;
              </p>
              <p className="text-[#237E7B] font-semibold text-sm mt-2">
                — Dr. Robina Habib
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[#237E7B] font-semibold"
            >
              Learn more about Dr. Habib
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#237E7B] group-hover:bg-[#237E7B] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
