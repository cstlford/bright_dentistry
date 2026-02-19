"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentModal from "./AppointmentModal";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "New Patients", href: "/new-patients" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <Image
              src={scrolled ? "/bright_logo_teal.svg" : "/bright_logo_white.svg"}
              alt="Bright Family Dentistry"
              width={220}
              height={64}
              className="h-14 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled ? "text-gray-700 hover:text-[#237E7B]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setModalOpen(true)}
              className={`group flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                scrolled ? "text-[#237E7B]" : "text-white"
              }`}
            >
              Request Appointment
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#237E7B] group-hover:border-[#237E7B] group-hover:text-white border-current">
                <svg
                  width="14"
                  height="14"
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-[#237E7B]"
                  : scrolled
                  ? "bg-gray-700"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen ? "opacity-0" : scrolled ? "bg-gray-700" : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-[#237E7B]"
                  : scrolled
                  ? "bg-gray-700"
                  : "bg-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-gray-100`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-[#237E7B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setModalOpen(true); setMenuOpen(false); }}
              className="mt-2 text-left text-[#237E7B] font-semibold flex items-center gap-2"
            >
              Request Appointment →
            </button>
          </div>
        </div>
      </header>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
