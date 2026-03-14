"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "What is TRE" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq-contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1]/90 backdrop-blur-sm border-b border-[#EDE9DF]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-[#2A4233] tracking-wide hover:text-[#4A6B4D] transition-colors"
        >
          TRE<span className="text-[#6B8C6E]">®</span> Bryanston
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    active ? "text-[#2A4233]" : "text-[#7A756D] hover:text-[#2A4233]"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#6B8C6E] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#2A4233] p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F8F6F1] border-t border-[#EDE9DF] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium tracking-wide block py-1 ${
                      active ? "text-[#2A4233]" : "text-[#7A756D]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
