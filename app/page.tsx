import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves, Brain, Heart } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "TRE® is simple",
    body: "TRE® is a process of releasing tension through shaking and/or tremoring in a safe, controlled environment.",
  },
  {
    icon: Brain,
    title: "TRE® relaxes the body",
    body: "Through the release of tension the nervous system comes back into a state of balance. TRE® creates a 'letting go' of old tension patterns which in turn allows more inner peace and less anxiety.",
  },
  {
    icon: Heart,
    title: "TRE® is easy",
    body: "TRE® gently guides the nervous system back to balance, easing tension and encouraging a sense of calm and well-being.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(107,140,110,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-6">
              Trauma Release Exercises
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#2A4233] leading-[1.1] mb-6">
              The key to releasing stress and taking control of trauma
            </h1>
            <p className="text-[#7A756D] text-lg leading-relaxed mb-8 max-w-md">
              Trauma is when we experience very stressful, frightening or
              distressing events that are difficult to cope with or out of our
              control. It could be one incident, or an ongoing event that
              happens over a long period of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/faq-contact"
                className="inline-flex items-center gap-2 bg-[#2A4233] hover:bg-[#4A6B4D] text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                Book a Session
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#D8D3C8] hover:border-[#6B8C6E] text-[#2A4233] text-sm font-semibold tracking-wide px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[#A8C4AB]/40" />
              <div className="absolute -inset-8 rounded-full border border-[#A8C4AB]/20" />
              <Image
                src="/sam.png"
                alt="Sam – TRE Bryanston"
                width={340}
                height={340}
                className="rounded-full object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-[#EDE9DF] pt-16 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E]">
            Why TRE®
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-[#EDE9DF] hover:border-[#A8C4AB] hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF2EB] flex items-center justify-center mb-6">
                <Icon size={20} className="text-[#4A6B4D]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#2A4233] mb-3">
                {title}
              </h3>
              <p className="text-[#7A756D] text-sm leading-relaxed">{body}</p>
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
              src="https://www.youtube.com/embed/xmn1BucNrzA"
              title="TRE® – What We Do"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

      {/* CTA Banner */}
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
                Ready to begin your healing journey?
              </h2>
              <p className="text-[#A8C4AB] text-sm max-w-md">
                Sessions are available one-on-one, in pairs, and in groups.
                Bryanston, Johannesburg.
              </p>
            </div>
            <Link
              href="/faq-contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F8F6F1] text-[#2A4233] text-sm font-semibold tracking-wide px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
