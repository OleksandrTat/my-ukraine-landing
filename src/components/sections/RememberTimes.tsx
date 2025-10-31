"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RememberTimes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".remember-title", {
        scrollTrigger: { trigger: ".remember-title", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".remember-img", {
        scrollTrigger: { trigger: ".remember-img", start: "top 85%" },
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".remember-text p", {
        scrollTrigger: { trigger: ".remember-text", start: "top 90%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
      });

      gsap.from(".remember-end", {
        scrollTrigger: { trigger: ".remember-end", start: "top 85%" },
        y: 80,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-48 px-8 text-center overflow-hidden"
    >
      {/* === Заголовок === */}
      <h2 className="remember-title text-3xl md:text-5xl font-serif mt-[10vh] mb-[40vh] leading-tight tracking-tight">
        We still remember those times...
      </h2>

      {/* === Контент === */}
      <div className="flex flex-col md:flex-row items-center gap-20 max-w-7xl mx-auto">
        {/* Фото */}
        <div className="relative remember-img w-full md:w-1/2 aspect-[3/4] rounded-[2rem] shadow-2xl">
          <Image
            src="/remember.png"
            alt="Girl in a wheat field"
            fill
            className="object-cover rounded-[2rem] img-hover-tilt"
            priority
          />
        </div>

        {/* Текст */}
        <div className="remember-text md:w-1/2 text-left space-y-8 text-lg md:text-2xl leading-relaxed font-light text-foreground">
          <p>Times when everything seemed simple and sincere.</p>
          <p>
            When smiles were a daily miracle, and faith in goodness was an
            integral part of every heart.
          </p>
          <p>
            It is these memories that give us the strength to move forward,
            creating a future full of light and hope.
          </p>
        </div>
      </div>


      {/* === Фінальний текст === */}
      <h2 className="remember-end relative z-10 mt-[45vh] text-3xl md:text-5xl font-serif leading-tight tracking-tight">
        But <br />
        <span className="text-red-700 font-semibold">February 24, 2022...</span>
        <br />
        The world was divided into before and{" "}
        <span className="relative text-red-600 font-semibold">after.</span>
      </h2>
    </section>
  );
}
