"use client";

import { useState, useEffect } from "react";
import AppointmentModal from "@/components/AppointmentModal";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Full-screen hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#124240]">
        {/* ── Background layer ─────────────────────────────── */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#124240] via-[#1A5C59] to-[#237E7B] opacity-95" />
          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-[#237E7B]/30 blur-3xl" />
          <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full bg-[#2FA8A5]/20 blur-3xl" />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.4) 60px, rgba(255,255,255,0.4) 61px)",
            }}
          />
        </div>

        {/* ── Content ──────────────────────────────────────── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-8 h-px bg-[#4BBFBC]" />
              <span className="text-[#4BBFBC] text-sm font-semibold uppercase tracking-widest">
                Bright Family Dentistry
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display leading-tight">
              <span
                className={`block text-white/80 text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 delay-100 ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                A brighter
              </span>
              <span
                className={`block text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none my-1 transition-all duration-700 delay-200 ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Smile
              </span>
              <span
                className={`block text-4xl md:text-5xl lg:text-6xl font-light text-[#4BBFBC] transition-all duration-700 delay-300 ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                starts here.
              </span>
            </h1>

            {/* Sub-copy */}
            <p
              className={`mt-6 text-white/65 text-lg leading-relaxed max-w-md transition-all duration-700 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Compassionate, comprehensive dental care for every stage of life —
              serving Chattanooga families with warmth and expertise.
            </p>

            {/* CTA row */}
            <div
              className={`mt-10 flex flex-wrap items-center gap-6 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Primary CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="group relative flex items-center gap-3 text-white font-semibold text-base"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Request an Appointment
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/30 group-hover:bg-white group-hover:border-white transition-all duration-300 group-hover:translate-x-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:text-[#237E7B] transition-colors"
                    >
                      <path d="M2 8h12M9 3l5 5-5 5" />
                    </svg>
                  </span>
                </span>
                {/* Bottom line animation */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-[calc(100%-3rem)] transition-all duration-300" />
              </button>

              {/* Phone link */}
              <a
                href="tel:4235412777"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.82 9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.73 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (423) 541-2777
              </a>
            </div>
          </div>

          {/* Right — Decorative visual */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-rotate-slow" />
              <div
                className="absolute inset-4 rounded-full border border-white/5 animate-rotate-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "24s",
                }}
              />

              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4BBFBC]/20 to-transparent" />

                {/* Tooth icon */}
                <svg
                  viewBox="0 0 120 120"
                  className="w-32 h-32 text-white/80 animate-float"
                  fill="none"
                >
                  <path
                    d="M60 15c-8 0-14 4-18 10-3 5-4 8-8 8-10 0-16 8-14 20 1 8 4 16 8 26 3 7 6 14 7 20 1 5 4 7 7 7s6-2 7-7l2-14c0-3 2-5 5-5s5 2 5 5l2 14c1 5 4 7 7 7s6-2 7-7c1-6 4-13 7-20 4-10 7-18 8-26 2-12-4-20-14-20-4 0-5-3-8-8-4-6-10-10-18-10z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(255,255,255,0.08)"
                  />
                  <path
                    d="M48 35c0 0 4-3 12-3s12 3 12 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Floating stat pills */}
              <div
                className="absolute top-6 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-white text-xs font-medium opacity-70">
                  Experience
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  15+ Years
                </p>
              </div>
              <div
                className="absolute bottom-12 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <p className="text-white text-xs font-medium opacity-70">
                  All Ages
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  Welcome
                </p>
              </div>
              <div
                className="absolute bottom-0 right-4 bg-[#4BBFBC]/30 backdrop-blur-md border border-[#4BBFBC]/30 rounded-2xl px-4 py-2.5 animate-float"
                style={{ animationDelay: "0.9s" }}
              >
                <p className="text-white text-xs font-medium opacity-70">
                  Rating
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  ★ 4.9
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ─────────────────────────────── */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
            Explore
          </span>
          <button
            onClick={scrollToWelcome}
            className="flex flex-col items-center gap-1 animate-arrow-bounce"
            aria-label="Scroll down"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* ── Bottom wave ───────────────────────────────────── */}
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

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
