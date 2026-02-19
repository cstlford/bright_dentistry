"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SERVICES = [
  {
    title:   "Cosmetic Dentistry",
    tagline: "Perfect your smile",
    details: "Veneers, bonding, smile design, and full-mouth restorations that give you the confidence to show every tooth.",
    image:   "/cosmetic.jpeg",
  },
  {
    title:   "Teeth Whitening",
    tagline: "Brilliantly bright results",
    details: "Professional in-office and take-home whitening treatments for a noticeably whiter smile — safely and effectively.",
    image:   "/whitening.jpeg",
  },
  {
    title:   "Family Dentistry",
    tagline: "Care for every generation",
    details: "Preventive checkups, cleanings, sealants, and education for patients of all ages — from first teeth to senior smiles.",
    image:   "/family.jpeg",
  },
  {
    title:   "Emergency Care",
    tagline: "Relief when you need it",
    details: "Toothaches, broken teeth, lost fillings — we prioritize urgent cases and work to get you out of pain fast.",
    image:   "/emergency.jpeg",
  },
  {
    title:   "Dental Implants",
    tagline: "Permanent, natural-looking",
    details: "Replace missing teeth with titanium implants that look, feel, and function just like your natural teeth.",
    image:   "/implants.jpeg",
  },
  {
    title:   "Invisalign",
    tagline: "Straighten discreetly",
    details: "Clear, removable aligners that gradually move your teeth into place — no wires, no brackets, no disruption to your life.",
    image:   "/invisalign.jpeg",
  },
];

export default function ServicesSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#237E7B] text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Services Designed for{" "}
            <span className="text-[#237E7B]">Your Smile</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Hover over any service to learn more, or explore the full{" "}
            <Link href="/services" className="text-[#237E7B] font-semibold hover:underline underline-offset-2">
              list
            </Link>
            .
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[#237E7B] font-semibold text-sm hover:gap-4 transition-all duration-300"
          >
            View all services
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#237E7B] group-hover:bg-[#237E7B] group-hover:text-white transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
    <Link
      href="/services"
      className="service-card group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer block"
    >
      {/* Background photo */}
      <Image
        src={svc.image}
        alt={svc.title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark tint — lifts slightly on hover */}
      <div className="absolute inset-0 bg-[#0D2E2D]/55 transition-opacity duration-500 group-hover:bg-[#0D2E2D]/40" />

      {/* Always-visible title */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <p className="text-[#4BBFBC] text-xs font-semibold uppercase tracking-widest mb-1.5 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
          {svc.tagline}
        </p>
        <h3 className="text-white text-xl font-display font-bold leading-tight transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
          {svc.title}
        </h3>
      </div>

      {/* Hover overlay — slides up */}
      <div className="service-overlay absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center p-6 z-20">
        <p className="text-[#4BBFBC] text-xs font-semibold uppercase tracking-widest mb-2">{svc.tagline}</p>
        <h3 className="text-white text-xl font-display font-bold mb-3">{svc.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{svc.details}</p>
        <div className="mt-4 flex items-center gap-2 text-[#4BBFBC] text-sm font-semibold">
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
        </div>
      </div>
    </Link>
    </div>
  );
}
