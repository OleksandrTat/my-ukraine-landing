"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Початкові анімації ===
      gsap.from(".hero-bg", {
        scale: 1.1,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
      });

      gsap.from(".hero-gradient-left", {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".hero-gradient-right", {
        x: 200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      // === Текст і кнопки ===
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-subtext",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.1"
        )
        .from(
          ".hero-buttons button",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.1,
            ease: "power2.out",
          },
          "-=0"
        )
        .to(
          ".hero-buttons button",
          {
            opacity: 1,
            ease: "power2.out",
          },
          "-=0.1"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-black"
    >
      {/* === Фонове зображення === */}
      <Image
        src="/hero-bg.jpg"
        alt="Ukrainian landscape"
        fill
        priority
        className="hero-bg object-cover object-center opacity-70"
      />

      {/* === Темний фільтр === */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-0" />

      {/* === Контент === */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 max-w-3xl flex flex-col items-center">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-lg">
          We remember the <span className="text-yellow-300">light</span> before the darkness
        </h1>

        <p className="hero-subtext mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
          Stories that changed lives forever — and a nation that still stands strong.
        </p>

        <div className="hero-buttons mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 text-sm sm:text-base rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition">
            Learn More
          </button>
          <button className="px-6 py-3 text-sm sm:text-base rounded-full border border-white/60 hover:bg-white/10 text-white font-semibold transition">
            Support Ukraine
          </button>
        </div>
      </div>

      {/* === Декоративні градієнти === */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="hero-gradient-left absolute left-[-20vw] top-[10vh] w-[45vw] h-[60vh] bg-[radial-gradient(circle_at_left,rgba(0,102,255,0.3),transparent_70%)] blur-[100px]" />
        <div className="hero-gradient-right absolute right-[-20vw] bottom-[10vh] w-[45vw] h-[60vh] bg-[radial-gradient(circle_at_right,rgba(255,255,0,0.3),transparent_70%)] blur-[100px]" />
      </div>
    </section>
  );
}
