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
      // Анімація першого заголовка
      gsap.from(".remember-title", {
        scrollTrigger: {
          trigger: ".remember-title",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Анімація зображення
      gsap.from(".remember-img", {
        scrollTrigger: {
          trigger: ".remember-img",
          start: "top 85%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Анімація тексту поруч
      gsap.from(".remember-text p", {
        scrollTrigger: {
          trigger: ".remember-text",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.25,
      });

      // Анімація фінального заголовка (February 24)
      gsap.from(".remember-end", {
        scrollTrigger: {
          trigger: ".remember-end",
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-24 px-6 text-center"
    >
      {/* Заголовок */}
      <h2 className="remember-title text-2xl md:text-3xl mt-[20vh] mb-[40vh] font-serif">
        We still remember those times...
      </h2>

      {/* Контент */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        <div className="relative remember-img w-full md:w-1/2 aspect-[3/4] rounded-3xl shadow-lg">
          <Image
            src="/remember.png"
            alt="Girl in a wheat field"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover img-hover-tilt rounded-3xl"
            priority
          />
        </div>

        <div className="remember-text md:w-1/2 text-left space-y-4 text-base md:text-lg leading-relaxed font-light">
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

      {/* Фінальний текст */}
      <h2 className="remember-end relative z-10 mt-[50vh] text-2xl md:text-3xl font-serif text-center">
        But <br />
        <span className="text-red-700 font-semibold">February 24, 2022...</span>
        <br />
        The world was divided into before and{" "}
        <span className="relative inline-block before-underline">
          after.
        </span>
      </h2>
    </section>
  );
}
