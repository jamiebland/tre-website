import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Globe, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sam",
  description:
    "Meet Sam — a Body Stress Release Practitioner with 28 years of experience who discovered TRE® and now offers sessions in Bryanston, Johannesburg.",
  alternates: { canonical: "https://trebryanston.com/about" },
  openGraph: {
    title: "About Sam | TRE Bryanston",
    description:
      "Meet Sam — a Body Stress Release Practitioner with 28 years of experience who discovered TRE® and now offers sessions in Bryanston, Johannesburg.",
    url: "https://trebryanston.com/about",
  },
};

const traumaTypes = [
  {
    icon: Users,
    title: "Individual Trauma",
    body: "Personal experiences such as assault, loss of a loved one, accidents, and events that leave an individual feeling helpless or overwhelmed.",
  },
  {
    icon: Globe,
    title: "Collective Trauma",
    body: "Shared experiences affecting communities — pandemics, wars, natural disasters, and systemic injustices such as racism.",
  },
  {
    icon: GitBranch,
    title: "Generational Trauma",
    body: "Patterns passed down through generations — domestic violence, substance abuse, neglect, and poverty that shape inherited stress responses.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-6">
              About Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-[#2A4233] leading-[1.1] mb-6">
              My name is Sam
            </h1>
            <div className="space-y-4 text-[#7A756D] text-base leading-relaxed">
              <p>
                I was born in Kenya, and my family moved to South Africa when I
                was 7. Johannesburg has been home ever since.
              </p>
              <p>Like many, my childhood had its challenges and trauma.</p>
              <p>
                Early on, I made a decision not to let my past define me. At 23,
                I embarked on a journey of healing and self-discovery, and over
                30 years later, that journey continues.
              </p>
              <p>
                With over 28 years of experience in the healthcare sector as a
                Body Stress Release Practitioner, I discovered TRE® 9 years
                ago. From the moment I experienced it, I knew I wanted to add
                this powerful modality to my practice.
              </p>
              <p className="text-[#2A4233] font-medium">
                TRE® has transformed me in ways that are hard to put into words,
                and I&apos;m thrilled to now share its benefits with others.
              </p>
            </div>
            <Link
              href="/faq-contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#2A4233] hover:bg-[#4A6B4D] text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[#A8C4AB]/40" />
              <div className="absolute -inset-8 rounded-full border border-[#A8C4AB]/20" />
              <Image
                src="/sam-profile-2.jpg"
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

      {/* About TRE / Dr Bercelli */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#EDE9DF] p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0">
              <Image
                src="/david-berceli.jpg"
                alt="Dr. David Bercelli"
                width={180}
                height={180}
                className="rounded-2xl object-cover shadow-md"
              />
              <p className="text-xs text-[#B0A99E] text-center mt-2">Dr. David Bercelli</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
                The Science Behind TRE®
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2A4233] mb-5 leading-tight">
                Developed by Dr. David Bercelli
              </h2>
              <p className="text-[#7A756D] leading-relaxed max-w-2xl">
                Dr. David Bercelli developed TRE® to help trauma victims and those
                with PTSD release built-up negative emotions physically. The
                practice now serves broader stress-release purposes — offering
                anyone a pathway back to calm and resilience through the body&apos;s
                own natural mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is trauma */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-[#EDE9DF] pt-16 pb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E]">
                Understanding Trauma
              </p>
            </div>
          </div>

          <div className="mt-8 mb-12">
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#2A4233] leading-tight max-w-3xl">
              &ldquo;Trauma is a stuck or frozen response to any situation where
              a person feels helpless and overwhelmed.&rdquo;
            </blockquote>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {traumaTypes.map(({ icon: Icon, title, body }) => (
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
        </div>
      </section>
    </>
  );
}
