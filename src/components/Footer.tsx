import Link from "next/link";
import Image from "next/image";

const LINKS = {
  services: [
    { label: "Cosmetic Dentistry", href: "/services" },
    { label: "Emergency Care", href: "/services" },
    { label: "Family Dentistry", href: "/services" },
    { label: "Dental Implants", href: "/services" },
    { label: "Teeth Whitening", href: "/services" },
    { label: "Orthodontics", href: "/services" },
  ],
  practice: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "New Patients", href: "/new-patients" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D2E2D] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Image
              src="/bright_logo_white.svg"
              alt="Bright Family Dentistry"
              width={220}
              height={64}
              className="h-16 w-auto mb-5"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Compassionate dental care for the whole family in Chattanooga, TN.
              Serving cosmetic, emergency, family &amp; Medicaid patients.
            </p>
            {/* Accepting badge */}
            <div className="inline-flex items-center gap-2 bg-[#237E7B]/20 border border-[#237E7B]/30 rounded-full px-4 py-2 text-xs text-[#4BBFBC] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4BBFBC] animate-pulse" />
              Accepting New Patients
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {LINKS.services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice col */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Practice
            </h4>
            <ul className="space-y-3">
              {LINKS.practice.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="w-4 h-4 text-[#237E7B] mt-0.5 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-white/65 text-sm leading-relaxed">
                  1421 Armor St.
                  <br />
                  Chattanooga, TN 37412
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="w-4 h-4 text-[#237E7B] flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.85a19.5 19.5 0 01-5.1-5.1 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 10.91A16 16 0 0016.09 17l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:4235412777"
                  className="text-white/65 hover:text-white text-sm transition-colors"
                >
                  (423) 541-2777
                </a>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/40 text-xs font-medium mb-2">Hours</p>
                <p className="text-white/55 text-xs leading-relaxed">
                  Mon–Thu: 8am – 5pm
                  <br />
                  Friday: 8am – 1pm
                  <br />
                  Sat–Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Bright Family Dentistry · All rights
            reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
