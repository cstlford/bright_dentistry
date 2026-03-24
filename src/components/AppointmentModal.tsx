"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input }    from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TIME_SLOTS = [
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 3pm)",
  "Late Afternoon (3pm – 6pm)",
];

const SERVICES = [
  "General / Checkup",
  "Cosmetic Dentistry",
  "Emergency Care",
  "Family Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontics",
  "Medicaid / Insurance",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setForm({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", service: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        {/* Header stripe */}
        <div className="bg-[#0C145D] px-8 py-6">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-display font-semibold">
              Request an Appointment
            </DialogTitle>
            <DialogDescription className="text-blue-100 mt-1 text-sm leading-relaxed">
              Share your preferred day and time below — a member of our team will reach out to confirm your visit. Scheduling is not guaranteed until confirmed by our staff.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8EBF8] mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#0C145D" />
                  <path d="M9 16l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">Request Received!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Thank you, {form.name}. Our team will contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={reset}
                className="mt-6 text-sm text-[#0C145D] font-semibold hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className="border-gray-200 focus:border-[#0C145D] focus:ring-[#0C145D]/20"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(423) 000-0000"
                    required
                    className="border-gray-200 focus:border-[#0C145D] focus:ring-[#0C145D]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="border-gray-200 focus:border-[#0C145D] focus:ring-[#0C145D]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <Input
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="border-gray-200 focus:border-[#0C145D] focus:ring-[#0C145D]/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:border-[#0C145D] focus:ring-2 focus:ring-[#0C145D]/20"
                  >
                    <option value="">Select time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:border-[#0C145D] focus:ring-2 focus:ring-[#0C145D]/20"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Additional Notes
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us anything we should know…"
                  rows={3}
                  className="border-gray-200 focus:border-[#0C145D] focus:ring-[#0C145D]/20 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please call us at{" "}
                  <a href="tel:4235412777" className="font-semibold hover:underline">
                    (423) 541-2777
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full group flex items-center justify-center gap-3 bg-[#0C145D] hover:bg-[#08103F] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Request
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400">
                Scheduling is not guaranteed until confirmed by a staff member.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
