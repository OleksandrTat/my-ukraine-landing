"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* === Layer 1: Background === */}
      <Image
        src="/hero-bg.jpg"
        alt="Kyiv skyline"
        fill
        priority
        className="object-cover object-center"
      />

      {/* === Layer 2: Text === */}
      <div className="absolute top-[12%] left-[4%] z-[10] text-white">
        <p className="text-xl md:text-2xl font-serif text-white mb-2 tracking-wide">
          Two sides of
        </p>
        <h1 className="text-[4rem] md:text-[7rem] font-extrabold font-serif leading-none drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
          UKRAINE
        </h1>
      </div>

      {/* === Layer 3: Statue overlay (transparent PNG) === */}
      <div className="absolute inset-0 z-[20] pointer-events-none select-none">
        <Image
          src="/hero-statu.png"
          alt="Motherland Monument overlay"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* === Layer 4: Blue-yellow stripe === */}
      <div className="absolute bottom-0 left-0 w-full h-[8px] flex z-[30]">
        <div className="bg-[#0057B7] w-1/2 h-full"></div>
        <div className="bg-[#FFD700] w-1/2 h-full"></div>
      </div>
    </section>
  );
}
