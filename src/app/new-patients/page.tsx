"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppointmentModal from "@/components/AppointmentModal";

const WHAT_TO_EXPECT = [
  {
    step: "01",
    title: "Warm Welcome",
    desc: "Our front desk team will greet you, get you checked in, and walk you through any remaining paperwork. We want you to feel at home from the moment you walk in.",
  },
  {
    step: "02",
    title: "Comprehensive Exam",
    desc: "Dr. Habib will perform a thorough examination of your teeth, gums, and oral tissues. Digital X-rays may be taken to give us a complete picture of your oral health.",
  },
  {
    step: "03",
    title: "Professional Cleaning",
    desc: "Our hygienist will remove plaque and tartar buildup, polish your teeth, and provide personalized tips for maintaining your smile at home.",
  },
  {
    step: "04",
    title: "Your Treatment Plan",
    desc: "Dr. Habib will sit down with you to discuss her findings, answer your questions, and outline any recommended next steps — with no pressure, ever.",
  },
];

const WHAT_TO_BRING = [
  {
    title: "Photo ID",
    desc: "A valid government-issued photo ID such as a driver's license or passport.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M16 10a2 2 0 11-4 0 2 2 0 014 0z" />
        <path d="M6 10h2M6 14h2" />
      </svg>
    ),
  },
  {
    title: "Insurance Card",
    desc: "Your dental insurance card if applicable. We'll verify your benefits before your appointment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Medical History",
    desc: "A list of any current medications, allergies, and relevant medical conditions you'd like us to know about.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Previous Dental Records",
    desc: "Any recent X-rays or records from a previous dentist, if available. Not required, but helpful.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Payment Method",
    desc: "We accept cash, credit/debit cards. Payment plans may be available — just ask.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Arrive 10 Minutes Early",
    desc: "A little extra time helps us get you settled and ensures your appointment starts on schedule.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function NewPatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-[#050A2A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#0C145D]/30 blur-3xl" />
          <div className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-[#1455B8]/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1967D2]" />
            <span className="text-[#1967D2] text-sm font-semibold uppercase tracking-widest">
              New Patients
            </span>
            <span className="w-8 h-px bg-[#1967D2]" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            We&rsquo;re Glad You&rsquo;re Here
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
            Your first visit sets the foundation for a lifetime of healthy
            smiles. Here&rsquo;s everything you need to know before you arrive.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 30V80H0Z" fill="#F7F9F9" />
          </svg>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────────── */}
      <WhatToExpectSection />

      {/* ── What to Bring ────────────────────────────────────── */}
      <WhatToBringSection />

      {/* ── Insurance ────────────────────────────────────────── */}
      <InsuranceSection onContact={() => setModalOpen(true)} />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-[#0C145D]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0C145D]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#1455B8]/15 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#7AB8F5] text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Book Your First Visit
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We&rsquo;re now accepting new patients and Medicaid. Request an
            appointment and our team will be in touch to confirm your visit.
          </p>
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
            <a href="tel:4235412777" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.85a19.5 19.5 0 01-5.1-5.1 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 10.91A16 16 0 0016.09 17l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (423) 541-2777
            </a>
          </div>
          <p className="mt-6 text-white/40 text-xs">
            Scheduling requests are not guaranteed until confirmed by a staff member.
          </p>
        </div>
      </section>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}

/* ─── What to Expect ──────────────────────────────────────── */
function WhatToExpectSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
              Your First Visit
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            What to <span className="text-[#0C145D]">Expect</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            We keep things simple, comfortable, and unhurried. Here&rsquo;s how
            your first appointment typically flows.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#0C145D]/40 via-[#0C145D]/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {WHAT_TO_EXPECT.map((item, i) => (
              <StepCard key={item.step} item={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  item,
  delay,
}: {
  item: (typeof WHAT_TO_EXPECT)[number];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-6 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0C145D] to-[#08103F] flex items-center justify-center shadow-md">
          <span className="text-white font-display font-bold text-lg">{item.step}</span>
        </div>
        <div className="pt-1">
          <h3 className="font-display font-bold text-gray-800 text-xl mb-2">{item.title}</h3>
          <p className="text-gray-500 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── What to Bring ───────────────────────────────────────── */
function WhatToBringSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
              Be Prepared
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            What to <span className="text-[#0C145D]">Bring</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Having a few things ready will help your first visit go smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {WHAT_TO_BRING.map((item, i) => (
            <BringCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BringCard({
  item,
  delay,
}: {
  item: (typeof WHAT_TO_BRING)[number];
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 p-6 bg-[#F7F9F9] rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8EBF8] flex items-center justify-center text-[#0C145D] mt-0.5">
          {item.icon}
        </span>
        <div>
          <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Insurance ───────────────────────────────────────────── */
function InsuranceSection({ onContact }: { onContact: () => void }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#0C145D] via-[#1967D2] to-[#0C145D]" />

            <div className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#E8EBF8] flex items-center justify-center text-[#0C145D]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="deco-line" />
                    <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
                      Insurance & Payment
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-5">
                    Questions About Coverage?
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    We work with a range of dental insurance plans and are proud
                    to accept{" "}
                    <strong className="text-gray-800">Medicaid</strong>. Every
                    plan is different, and our team is happy to help you
                    understand your benefits before your appointment.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Not sure if we accept your insurance? Give us a call or send
                    us a message — we&rsquo;ll look it up for you and make sure
                    there are no surprises on the day of your visit.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:4235412777"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0C145D] text-white font-semibold text-sm hover:bg-[#08103F] transition-colors duration-200"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.85a19.5 19.5 0 01-5.1-5.1 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 10.91A16 16 0 0016.09 17l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      Call Us
                    </a>
                    <button
                      onClick={onContact}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#0C145D] text-[#0C145D] font-semibold text-sm hover:bg-[#0C145D] hover:text-white transition-all duration-200"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Request Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
