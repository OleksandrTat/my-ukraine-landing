"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* === Фонове зображення === */}
      <Image
        src="/hero-bg.jpg"
        alt="Ukrainian landscape"
        fill
        priority
        className="object-cover object-center opacity-70"
      />

      {/* === Темний фільтр (для кращої контрастності тексту) === */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-0" />

      {/* === Контент === */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 max-w-3xl flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-lg">
          We remember the <span className="text-yellow-300">light</span> before the darkness
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
          Stories that changed lives forever — and a nation that still stands strong.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 text-sm sm:text-base rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition">
            Learn More
          </button>
          <button className="px-6 py-3 text-sm sm:text-base rounded-full border border-white/60 hover:bg-white/10 text-white font-semibold transition">
            Support Ukraine
          </button>
        </div>
      </div>

      {/* === Декоративні градієнти (з боків) === */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Лівий бік */}
        <div className="absolute left-[-20vw] top-[10vh] w-[45vw] h-[60vh] bg-[radial-gradient(circle_at_left,rgba(0,102,255,0.3),transparent_70%)] blur-[100px]" />
        {/* Правий бік */}
        <div className="absolute right-[-20vw] bottom-[10vh] w-[45vw] h-[60vh] bg-[radial-gradient(circle_at_right,rgba(255,255,0,0.3),transparent_70%)] blur-[100px]" />
      </div>
    </section>
  );
}
