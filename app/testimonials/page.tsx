import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lisa",
    quote:
      "When my daughter's dad passed away, she was frozen, trapped in her pain and trauma. In the days that followed, TRE® provided a way of releasing that pain without having to find the words or relive the trauma. Sam brings a presence of being deeply held, acknowledged, and understood that was like a soothing balm to our broken hearts and distraught minds.",
  },
  {
    name: "Ash",
    quote:
      "I was introduced to TRE® a few years ago and used to practice on my own on the odd occasion at home - while I would enjoy it, it never really moved the dial for me. Regular TRE® sessions with Sam have completely transformed that experience: not only have I learnt about TRE® as a practice, but I have gained so many powerful insights about my own body. Sam's gentle, steady and insightful guidance during the sessions created a safe space to explore the physical, mental, and emotional trauma and tension being held in my body. Extraordinarily, each time I tremored with Sam, the experience was entirely different to the time before, but I always felt completely secure in the process. TRE® has become a simple and effective tool in managing my anxiety and creating a space for the release of tension and trauma. Highly, highly recommended!",
  },
  {
    name: "Merle",
    quote:
      "I saw Sam for a BSR (Body Stress Release) session after a long break due to Covid, and through many tears told her about the traumatic loss that I had experienced. She recommended TRE® and I attended a one-on-one session and then various group sessions with her. She creates a gentle and safe environment for one to heal through TRE® and leave feeling more peaceful. I have had a different experience in each session and have never known exactly what trauma I am releasing but I always feel a greater sense of well-being afterwards. I highly recommend the process to assist with a physical release of trauma stored within the body.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
            Testimonials
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#2A4233] leading-[1.1] max-w-2xl">
            Heard from those who have walked this path
          </h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {testimonials.map(({ name, quote }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-[#EDE9DF] p-8 md:p-12 hover:border-[#A8C4AB] hover:shadow-md transition-all duration-300"
            >
              <Quote
                size={28}
                className="text-[#A8C4AB] mb-6"
                strokeWidth={1.5}
              />
              <blockquote className="font-display text-xl md:text-2xl font-light text-[#2A4233] leading-relaxed mb-8">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#6B8C6E]" />
                <p className="text-sm font-semibold uppercase tracking-widest text-[#6B8C6E]">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#EDE9DF] pt-16 mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
              See TRE® in Action
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#2A4233]">
              What We Do
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#EDE9DF] bg-white shadow-sm aspect-video">
            <iframe
              src="https://www.mentaljoe.com"
              title="TRE® – What We Do"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-[#B0A99E] mt-3 text-center">
            Video courtesy of Mental Joe @{" "}
            <a
              href="https://www.mentaljoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B8C6E] underline underline-offset-2 transition-colors"
            >
              mentaljoe.com
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, #2A4233 0%, #4A6B4D 100%)",
            }}
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2">
                Experience it for yourself
              </h2>
              <p className="text-[#A8C4AB] text-sm max-w-md">
                One-on-one, dual, and group sessions available in Bryanston.
              </p>
            </div>
            <Link
              href="/faq-contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F8F6F1] text-[#2A4233] text-sm font-semibold tracking-wide px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Book a Session
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
