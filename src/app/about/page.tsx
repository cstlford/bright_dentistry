"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppointmentModal from "@/components/AppointmentModal";

const MEMBERSHIPS = [
  {
    abbr: "ADA",
    name: "American Dental Association",
    desc: "The largest dental association in the U.S., committed to the advancement of the profession and the public's oral health.",
  },
  {
    abbr: "AGD",
    name: "Academy of General Dentistry",
    desc: "A professional association dedicated to the continuing dental education and excellence of general dentists.",
  },
  {
    abbr: "CADS",
    name: "Chattanooga Area Dental Society",
    desc: "A local component of the Tennessee Dental Association, serving dentists and patients across the greater Chattanooga region.",
  },
];

const INTERESTS: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Traveling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    label: "Creative Writing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    label: "Floral Arrangements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 8 10 8 6a4 4 0 018 0c0 4-4 6-4 6z" />
        <path d="M12 12C12 12 16 10 16 6" />
        <path d="M12 12c0 0-2 4-6 4" />
        <path d="M12 12c0 0 2 4 6 4" />
        <path d="M12 12c0 0-4-2-4-6" />
      </svg>
    ),
  },
  {
    label: "Dress Designing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 2L3 7l3 3v12h12V10l3-3-3-5" />
        <path d="M9 2h6" />
        <path d="M9 2c0 2 1.5 3 3 3s3-1 3-3" />
      </svg>
    ),
  },
  {
    label: "Cricket Captain",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const LANGUAGES = ["English", "Hindi", "Punjabi"];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
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
              Meet Your Dentist
            </span>
            <span className="w-8 h-px bg-[#1967D2]" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Dr. Robina Habib
          </h1>
          <p className="text-[#1967D2] text-lg font-medium tracking-wide">
            DMD &mdash; General &amp; Cosmetic Dentistry
          </p>
          <p className="text-white/55 mt-2 text-base">
            Bright Family Dentistry &middot; Chattanooga, TN
          </p>
        </div>
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

      {/* ── Bio + Photo ────────────────────────────────────── */}
      <BioSection onBooking={() => setModalOpen(true)} />

      {/* ── Credentials ────────────────────────────────────── */}
      <CredentialsSection />

      {/* ── Mission + Community ────────────────────────────── */}
      <MissionSection />

      {/* ── Beyond the Clinic ──────────────────────────────── */}
      <PersonalSection />

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-[#0C145D]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0C145D]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#1455B8]/15 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#7AB8F5] text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Meet Dr. Habib?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Dr. Habib looks forward to meeting you and your family. Request an
            appointment today and take the first step toward a healthier smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 text-white"
            >
              <span className="text-lg font-semibold">
                Request an Appointment
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-white group-hover:bg-white group-hover:text-[#0C145D] transition-all duration-300 group-hover:translate-x-1">
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

/* ─── Bio + Photo ─────────────────────────────────────────── */
function BioSection({ onBooking }: { onBooking: () => void }) {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-700 ${
              imgVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#0C145D]/8 rounded-3xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-[#0C145D]/20" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/robina-habib.PNG"
                alt="Dr. Robina Habib — Bright Family Dentistry"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A2A]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-xl">
                  Dr. Robina Habib
                </p>
                <p className="text-[#1967D2] text-sm font-medium mt-0.5">
                  DMD &mdash; General &amp; Cosmetic Dentistry
                </p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#0C145D]/15" />
          </div>

          {/* Text */}
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
              <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
                About Dr. Habib
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Dedicated to{" "}
              <span className="text-[#0C145D]">Patient-Centered</span> Care
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Dr. Robina Habib is a dedicated and compassionate general dentist
              committed to delivering high-quality, patient-centered care. She
              earned her{" "}
              <strong className="text-gray-800">
                Doctor of Dental Medicine (DMD)
              </strong>{" "}
              from Tufts University School of Dental Medicine in Boston, MA,
              through the Advanced Standing Program in 2021.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              She further enhanced her clinical skills by completing a residency
              in General Dentistry, gaining broad experience in comprehensive
              dental care across a wide range of patient needs and treatment
              modalities.
            </p>

            {/* Education credentials */}
            <div className="space-y-3 mb-8">
              <CredentialRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" />
                  </svg>
                }
                title="Doctor of Dental Medicine (DMD)"
                subtitle="Tufts University School of Dental Medicine · Boston, MA"
                detail="Advanced Standing Program · 2021"
              />
              <CredentialRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
                title="General Dentistry Residency"
                subtitle="Comprehensive clinical training"
                detail="Broad experience across all areas of dental care"
              />
            </div>

            <button
              onClick={onBooking}
              className="group inline-flex items-center gap-3 text-[#0C145D] font-semibold text-sm hover:gap-4 transition-all duration-300"
            >
              Request Appointment
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0C145D] group-hover:bg-[#0C145D] group-hover:text-white transition-all duration-300">
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
        </div>
      </div>
    </section>
  );
}

function CredentialRow({
  icon,
  title,
  subtitle,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8EBF8] flex items-center justify-center text-[#0C145D]">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
        <p className="text-gray-600 text-sm mt-0.5">{subtitle}</p>
        <p className="text-[#0C145D] text-xs font-medium mt-1">{detail}</p>
      </div>
    </div>
  );
}

/* ─── Professional Memberships ────────────────────────────── */
function CredentialsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
              Professional Affiliations
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Active in Her <span className="text-[#0C145D]">Profession</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Dr. Habib maintains active membership in leading dental
            organizations to stay at the forefront of the field.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {MEMBERSHIPS.map((m, i) => (
            <MembershipCard key={m.abbr} membership={m} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipCard({
  membership,
  delay,
}: {
  membership: (typeof MEMBERSHIPS)[number];
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
      <div className="h-full bg-[#F7F9F9] border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-[#0C145D] flex items-center justify-center mb-5">
          <span className="text-white font-bold text-sm tracking-wide">
            {membership.abbr}
          </span>
        </div>
        <h3 className="font-display font-bold text-gray-800 text-lg mb-3 leading-snug">
          {membership.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {membership.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Mission + Community ─────────────────────────────────── */
function MissionSection() {
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission */}
          <div
            ref={quoteRef}
            className={`transition-all duration-700 ${
              quoteVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
                Her Mission
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              A Welcoming Space{" "}
              <span className="text-[#0C145D]">for Every Patient</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With a personal mission to create a welcoming and supportive
              environment, Dr. Habib strives to ensure that every patient feels
              respected, heard, and empowered in their oral health journey.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              She is passionate about helping patients achieve healthy,
              confident smiles through compassionate and comprehensive treatment
              — from the very first appointment to long-term preventive care.
            </p>

            {/* Pull quote */}
            <div className="border-l-4 border-[#0C145D] pl-5 bg-white rounded-r-xl py-5 pr-5 shadow-sm">
              <p className="text-gray-700 italic text-base leading-relaxed">
                &ldquo;My greatest reward is seeing a patient leave with a smile
                they&rsquo;re proud to share with the world.&rdquo;
              </p>
              <p className="text-[#0C145D] font-semibold text-sm mt-3">
                — Dr. Robina Habib
              </p>
            </div>
          </div>

          {/* Community */}
          <div
            ref={listRef}
            className={`transition-all duration-700 delay-200 ${
              listVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="deco-line" />
              <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
                Community Involvement
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Giving Back Beyond the Chair
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dr. Habib&rsquo;s commitment to dentistry extends well beyond the
              clinic. She has volunteered at numerous health seminars and
              community events, and has dedicated time to Sunday School and a
              local library in Connecticut — demonstrating her belief that
              meaningful service starts in the community.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Health Seminars & Community Events",
                  desc: "Volunteered at multiple health education events to promote oral health awareness.",
                },
                {
                  title: "Sunday School Volunteer",
                  desc: "Contributed time and leadership to youth education programs.",
                },
                {
                  title: "Local Library — Connecticut",
                  desc: "Engaged with community members through literacy and educational outreach.",
                },
                {
                  title: "Multilingual Patient Outreach",
                  desc: "Fluent in English, Hindi, and Punjabi — connecting with patients in their preferred language.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#E8EBF8] flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="#0C145D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1.5 5l2.5 2.5L8.5 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Beyond the Clinic ───────────────────────────────────── */
function PersonalSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            headVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="deco-line" />
            <span className="text-[#0C145D] text-sm font-semibold uppercase tracking-widest">
              Beyond the Clinic
            </span>
            <span className="deco-line" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            The Person Behind <span className="text-[#0C145D]">the Smile</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Dr. Habib brings the same creativity, leadership, and curiosity
            outside the office that she brings to patient care.
          </p>
        </div>

        <div
          ref={bodyRef}
          className={`transition-all duration-700 ${
            bodyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Interests grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
            {INTERESTS.map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-6 bg-[#F7F9F9] rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-[#0C145D]">{item.icon}</span>
                <p className="font-semibold text-gray-700 text-sm text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
