"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppointmentModal from "@/components/AppointmentModal";

const SERVICES = [
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    tagline: "Perfect your smile",
    image: "/cosmetic.jpeg",
    description:
      "Your smile is one of the first things people notice — and we believe everyone deserves to feel confident showing it off. Our cosmetic services combine artistry with the latest dental technology to craft smiles that look natural, feel comfortable, and last a lifetime.",
    highlights: [
      "Porcelain veneers",
      "Dental bonding & contouring",
      "Smile design & full makeovers",
      "Full-mouth restoration",
      "Gum contouring",
    ],
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "Brilliantly bright results",
    image: "/whitening.jpeg",
    description:
      "Professional whitening achieves results that over-the-counter products simply can't match. Whether you prefer a one-hour in-office treatment or the flexibility of custom take-home trays, we create a plan that brightens your smile safely and effectively — with results you'll notice from day one.",
    highlights: [
      "In-office power whitening",
      "Custom take-home whitening trays",
      "Zoom & KöR whitening options",
      "Safe protocols for sensitive teeth",
      "Touch-up treatments available",
    ],
  },
  {
    id: "family-dentistry",
    title: "Family Dentistry",
    tagline: "Care for every generation",
    image: "/family.jpeg",
    description:
      "We're proud to be a true family practice — treating patients of every age under one roof. From a toddler's first visit to a grandparent's routine cleaning, our team delivers preventive care with patience, education, and genuine warmth. And yes, we proudly accept Medicaid.",
    highlights: [
      "Comprehensive exams & professional cleanings",
      "Digital X-rays with low radiation",
      "Dental sealants & fluoride treatments",
      "Pediatric & senior care",
      "Medicaid accepted",
    ],
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    tagline: "Relief when you need it",
    image: "/emergency.jpeg",
    description:
      "Dental pain and trauma shouldn't have to wait. We prioritize urgent cases and work hard to get you seen as quickly as possible — often the same day. Our goal is simple: get you out of pain and back to your life fast, with the right treatment the first time.",
    highlights: [
      "Same-day emergency appointments",
      "Toothache & abscess relief",
      "Broken or knocked-out teeth",
      "Lost or damaged fillings & crowns",
      "After-hours phone guidance",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    tagline: "Permanent, natural-looking",
    image: "/implants.jpeg",
    description:
      "Missing teeth affect more than your appearance — they impact how you eat, speak, and feel about yourself. Dental implants are the gold standard for tooth replacement, providing a permanent solution that looks, feels, and functions just like a natural tooth for decades to come.",
    highlights: [
      "Single & multiple tooth implants",
      "Implant-supported bridges",
      "Bone grafting when needed",
      "All-on-4 consultations",
      "Lifetime-quality titanium roots",
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign",
    tagline: "Straighten discreetly",
    image: "/invisalign.jpeg",
    description:
      "Achieve a straighter smile without the look and hassle of traditional braces. Invisalign's clear, removable aligners let you eat what you love, maintain easy oral hygiene, and smile confidently throughout treatment — all while your teeth gradually move into their ideal positions.",
    highlights: [
      "Custom-fitted clear aligner sets",
      "Virtually invisible during treatment",
      "No dietary restrictions",
      "Complimentary whitening with treatment",
      "Retainers included after completion",
    ],
  },
];

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-24 bg-[#124240] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#237E7B]/30 blur-3xl" />
          <div className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-[#2FA8A5]/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#4BBFBC]" />
            <span className="text-[#4BBFBC] text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <span className="w-8 h-px bg-[#4BBFBC]" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Our Services
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            From routine cleanings to complete smile transformations, we offer
            comprehensive dental care for every member of your family.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {SERVICES.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 30V80H0Z"
              fill="#F7F9F9"
            />
          </svg>
        </div>
      </section>

      {/* Individual service sections */}
      {SERVICES.map((svc, i) => (
        <ServiceSection
          key={svc.id}
          svc={svc}
          index={i}
          onBooking={() => setModalOpen(true)}
        />
      ))}

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden bg-[#124240]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#237E7B]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#2FA8A5]/15 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#7ED8D5] text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Book Your Visit Today
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Share your preferred day and time — our team will reach out to
            confirm your visit and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 text-white"
            >
              <span className="text-lg font-semibold">
                Request an Appointment
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-white group-hover:bg-white group-hover:text-[#237E7B] transition-all duration-300 group-hover:translate-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9h14M10 3l6 6-6 6" />
                </svg>
              </span>
            </button>
            <span className="text-white/30 hidden sm:block">·</span>
            <a
              href="tel:4235412777"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
            >
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
              (423) 541-2777
            </a>
          </div>
          <p className="mt-6 text-white/40 text-xs">
            Scheduling requests are not guaranteed until confirmed by a staff
            member.
          </p>
        </div>
      </section>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}

function ServiceSection({
  svc,
  index,
  onBooking,
}: {
  svc: (typeof SERVICES)[number];
  index: number;
  onBooking: () => void;
}) {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  const isEven = index % 2 === 0;
  const bg = isEven ? "bg-[#F7F9F9]" : "bg-white";

  return (
    <section id={svc.id} className={`${bg} py-24 lg:py-32 scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            !isEven ? "lg:[&>div:first-child]:order-last" : ""
          }`}
        >
          {/* Text */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : isEven
                ? "opacity-0 -translate-x-10"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
                {svc.tagline}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              {svc.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {svc.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {svc.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8F4F4] flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="#237E7B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1.5 5l2.5 2.5L8.5 2" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={onBooking}
              className="group inline-flex items-center gap-3 text-[#237E7B] font-semibold text-sm hover:gap-4 transition-all duration-300"
            >
              Request Appointment
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#237E7B] group-hover:bg-[#237E7B] group-hover:text-white transition-all duration-300">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </span>
            </button>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 delay-200 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : isEven
                ? "opacity-0 translate-x-10"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute -inset-4 bg-[#E8F4F4] rounded-3xl -z-10 rotate-2" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#237E7B]/15" />
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full border-4 border-[#237E7B]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
