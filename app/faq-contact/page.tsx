import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ & Contact",
  description:
    "Frequently asked questions about TRE® and how to book a session with Sam in Bryanston. One-on-one, dual, and group sessions available.",
  alternates: { canonical: "https://trebryanston.com/faq-contact" },
  openGraph: {
    title: "FAQ & Contact | TRE Bryanston",
    description:
      "Frequently asked questions about TRE® and how to book a session with Sam in Bryanston. One-on-one, dual, and group sessions available.",
    url: "https://trebryanston.com/faq-contact",
  },
};

const faqs = [
  {
    q: "What is the cost per session?",
    a: (
      <>
        <ul className="space-y-1">
          <li>One-on-one session (1 hour) — <strong>R900</strong></li>
          <li>Dual session (1 hour) — <strong>R550 per person</strong></li>
          <li>Group session, max 4 people (1 hour) — <strong>R400 per person</strong></li>
          <li>Groups bigger than 4 people (1 hour) — <strong>R300 per person</strong></li>
        </ul>
      </>
    ),
  },
  {
    q: "How does TRE® work?",
    a: "Through simple exercises, which includes actions like moving on one leg, or squatting against a wall, muscles in the legs are fatigued to a point of self-induced tremors.",
  },
  {
    q: "What does TRE® feel like?",
    a: "TRE® is an unusual experience of shaking and tremoring as you lie in a rested position. You may experience lightness, tingling, fatigue, or enhanced energy afterward.",
  },
  {
    q: "What happens in a session?",
    a: "Initial sessions last one to ninety minutes. You are guided into doing simple exercises while lying on a mat and placing your legs in different relaxed positions to allow the tremors to start.",
  },
  {
    q: "What are the benefits of TRE®?",
    a: (
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
        {[
          "Releases unhealthy tension and blockages",
          "Reduces PTSD symptoms",
          "Relieves stress and lowers anxiety",
          "Improves sleep quality",
          "Lessens physical pain",
          "Releases deeply held trauma",
          "Builds resilience",
          "Increases flexibility",
          "Reduces overwhelm and anxiety",
        ].map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B8C6E] shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: "Who is TRE® for?",
    a: "TRE® is for anyone from age 12 to 90 years of age who are stressed, overwhelmed, emotionally blocked or flooded, or in physical pain.",
  },
];

export default function FaqContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
            FAQ & Contact
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#2A4233] leading-[1.1] max-w-2xl">
            Questions & getting in touch
          </h1>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#EDE9DF] pt-12 mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E]">
              Frequently Asked Questions
            </p>
          </div>
          <div className="divide-y divide-[#EDE9DF]">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[#2A4233] mb-3">
                  {q}
                </h3>
                <div className="text-[#7A756D] text-sm leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#EDE9DF] pt-12 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#2A4233]">
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-3">
                  Location
                </p>
                <div className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#6B8C6E]"
                  />
                  <p className="text-sm text-[#7A756D] leading-relaxed">
                    Bryanston Corner Office Park,
                    <br />
                    Building B, Ground Floor,
                    <br />
                    18 Ealing Crescent, Bryanston
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-3">
                  Email
                </p>
                <div className="flex gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#6B8C6E]" />
                  <a
                    href="mailto:bsrjhb@mweb.co.za"
                    className="text-sm text-[#2A4233] hover:text-[#4A6B4D] transition-colors"
                  >
                    bsrjhb@mweb.co.za
                  </a>
                </div>
              </div>
              <div className="bg-[#EAF2EB] rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4A6B4D] mb-2">
                  Session Pricing
                </p>
                <ul className="text-sm text-[#2A4233] space-y-1">
                  <li>One-on-one — R900</li>
                  <li>Dual — R550 / person</li>
                  <li>Group (≤4) — R400 / person</li>
                  <li>Group (4+) — R300 / person</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 bg-white rounded-2xl border border-[#EDE9DF] p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
