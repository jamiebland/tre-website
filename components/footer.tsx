import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2A4233] text-[#A8C4AB]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold text-white mb-3">
              TRE<span className="text-[#6B8C6E]">®</span> Bryanston
            </p>
            <p className="text-sm leading-relaxed text-[#A8C4AB]">
              The key to releasing stress and taking control of trauma.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
              Pages
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "What is TRE" },
                { href: "/about", label: "About Us" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/faq-contact", label: "FAQ & Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#A8C4AB] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B8C6E] mb-4">
              Find Us
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#6B8C6E]" />
                <span className="leading-relaxed">
                  Bryanston Corner Office Park,<br />
                  Building B, Ground Floor,<br />
                  18 Ealing Crescent, Bryanston
                </span>
              </div>
              <div className="flex gap-3 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#6B8C6E]" />
                <a
                  href="mailto:bsrjhb@mweb.co.za"
                  className="hover:text-white transition-colors"
                >
                  bsrjhb@mweb.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#3D5E4A] text-xs text-[#6B8C6E] flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} TRE® Bryanston. All rights reserved.</p>
          <p>TRE® is a registered trademark of Trauma Release Exercises.</p>
        </div>
      </div>
    </footer>
  );
}
