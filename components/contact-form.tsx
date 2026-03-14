"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#D8D3C8] bg-white px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#B0A99E] focus:outline-none focus:ring-2 focus:ring-[#6B8C6E] focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#7A756D] mb-2">
            Full Name <span className="text-[#6B8C6E]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#7A756D] mb-2">
            Email <span className="text-[#6B8C6E]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#7A756D] mb-2">
          Phone Number <span className="text-[#6B8C6E]">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+27 ..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#7A756D] mb-2">
          Message <span className="text-[#6B8C6E]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about what you're looking for..."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 rounded-lg bg-[#EAF2EB] border border-[#A8C4AB] px-4 py-3 text-sm text-[#2A4233]">
          <CheckCircle2 size={18} className="text-[#4A6B4D] shrink-0" />
          <p>
            Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0" />
          <p>Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-[#2A4233] hover:bg-[#4A6B4D] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold tracking-wide px-8 py-3.5 rounded-lg transition-colors duration-200"
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
