"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0a0f] to-[#0b0e13] text-gray-300 pt-14 pb-10 mt-40">
      {/* Ukrainian accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-blue-500" />

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Section 1 – Message */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <h2 className="text-white text-2xl font-serif tracking-wide">
            We stand with Ukraine 🇺🇦
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Remembering those who fight for freedom and dignity.  
            Together, we defend peace and humanity.
          </p>
        </div>

        {/* Section 2 – Humanitarian Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Humanitarian Aid
          </h3>
          <ul className="space-y-2 text-sm">
            <FooterLink
              href="https://u24.gov.ua/"
              label="United24 — Official Aid Platform"
            />
            <FooterLink
              href="https://savelife.in.ua/en/"
              label="Come Back Alive Foundation"
            />
            <FooterLink
              href="https://www.un.org/en/ukrainecrisisresponse"
              label="UN Crisis Response"
            />
          </ul>
        </div>

        {/* Section 3 – Information & Fact Checking */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Learn & Verify
          </h3>
          <ul className="space-y-2 text-sm">
            <FooterLink
              href="https://supportukrainenow.org/"
              label="Support Ukraine Now"
            />
            <FooterLink
              href="https://www.stopfake.org/en/"
              label="StopFake — Fact Checking Ukraine"
            />
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 mb-6"></div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Remember Ukraine. Created with ❤️ for truth and peace.
      </p>
    </footer>
  );
}

/* Reusable link component */
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 hover:text-yellow-400 transition-all duration-200"
      >
        <span>{label}</span>
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-200 text-yellow-400"
        />
      </a>
    </li>
  );
}
