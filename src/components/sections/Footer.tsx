"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Плавна поява футера
      gsap.from(".footer-fade", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.25,
      });

      // Анімація кольорової лінії
      gsap.from(".ukraine-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-black via-[#0a0a0f] to-[#0b0e13] text-gray-300 pt-14 pb-10 mt-40 overflow-hidden"
    >
      {/* Ukrainian accent line */}
      <div className="ukraine-line h-1 w-full bg-gradient-to-r from-yellow-400 to-blue-500 origin-left" />

      <div className="footer-fade max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <div className="footer-fade border-t border-gray-800 mt-12 mb-6"></div>

      {/* Copyright */}
      <p className="footer-fade text-center text-xs text-gray-500">
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
