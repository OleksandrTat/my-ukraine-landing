"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Intro block
      gsap.from(".intro-block", {
        scrollTrigger: { trigger: ".intro-block", start: "top 85%" },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2️⃣ Title
      gsap.from(".beforeafter-title", {
        scrollTrigger: { trigger: ".beforeafter-title", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 3️⃣ Carousel
      gsap.from(".beforeafter-carousel", {
        scrollTrigger: { trigger: ".beforeafter-carousel", start: "top 85%" },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });

      // 4️⃣ Emotion blocks
      gsap.utils.toArray<HTMLElement>(".emotion-block").forEach((block, i) => {
        gsap.from(block, {
          scrollTrigger: { trigger: block, start: "top 90%" },
          x: i % 2 === 0 ? -120 : 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-24 md:py-40 overflow-hidden"
    >
      {/* === РАДІАЛЬНІ ГРАДІЄНТИ (фон) === */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-25vw] top-[5vh] w-[50vw] h-[45vh] bg-[radial-gradient(circle_at_left,rgba(255,0,0,0.35),transparent_70%)] blur-[100px]" />
        <div className="absolute left-[-15vw] bottom-[20vh] w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_left_bottom,rgba(255,80,80,0.25),transparent_70%)] blur-[120px]" />
        <div className="absolute right-[-25vw] top-[10vh] w-[50vw] h-[45vh] bg-[radial-gradient(circle_at_right,rgba(255,0,0,0.35),transparent_70%)] blur-[100px]" />
        <div className="absolute right-[-15vw] bottom-[15vh] w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_right_bottom,rgba(255,80,80,0.25),transparent_70%)] blur-[120px]" />
      </div>

      {/* === 1️⃣ ВСТУПНИЙ БЛОК === */}
      <div className="intro-block relative z-10 flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mx-auto gap-10 md:gap-16">
        <div className="relative w-[95%] md:w-[65%] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/explosion1.jpg"
            alt="Explosion in Kyiv"
            width={1000}
            height={700}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-sm text-white text-sm md:text-base lg:text-lg p-4 rounded-md max-w-[75%] leading-snug shadow-lg">
            <strong>5:00 a.m.</strong> We woke up to light, but it was too bright to be dawn.
          </div>
        </div>
      </div>

      {/* === 2️⃣ ЗАГОЛОВОК === */}
      <h2 className="beforeafter-title relative z-10 mt-20 md:mt-32 mb-8 text-3xl md:text-4xl font-serif text-center tracking-tight leading-snug">
        The line that divides before{" "}
        <span className="relative inline-block align-middle mx-4">
          <Image
            src="/devide-line.svg"
            alt="Divider line"
            width={80}
            height={12}
            className="inline-block align-middle"
          />
        </span>{" "}
        after
      </h2>

      {/* === 3️⃣ КАРУСЕЛЬ (не чіпаю) === */}
      <div className="beforeafter-carousel relative z-10 w-full mb-24 max-w-6xl px-4 sm:px-8 overflow-visible">
        <Carousel
          opts={{ align: "center", loop: true, dragFree: true }}
          className="w-full select-none"
        >
          <CarouselContent className="flex -ml-6 sm:-ml-10">
            {["/beforeafter1.png", "/beforeafter2.png", "/beforeafter3.png"].map(
              (src, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 sm:pl-10 basis-[90%] sm:basis-[65%] lg:basis-[45%] flex justify-center transition-all duration-500"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,0,0,0.3)] transition-shadow duration-500">
                    <Image
                      src={src}
                      alt={`Before and after ${i + 1}`}
                      width={600}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10" />
        </Carousel>
      </div>

      {/* === 4️⃣ ЕМОЦІЙНІ БЛОКИ === */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-16 md:gap-20 px-6 mt-10">
        <div className="emotion-block flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          <Image
            src="/child-home.png"
            alt="Destroyed home"
            width={400}
            height={280}
            className="rounded-2xl object-cover shadow-xl w-[80%] sm:w-[60%] md:w-[400px] img-hover-gray"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center md:text-left">
            “My <span className="text-red-700">home</span>...”
          </p>
        </div>

        <div className="emotion-block flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-14">
          <Image
            src="/toy-bench.png"
            alt="Lost toy"
            width={400}
            height={280}
            className="rounded-2xl object-cover shadow-xl w-[80%] sm:w-[60%] md:w-[400px] img-hover-gray" 
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center md:text-right">
            “I lost my <span className="text-red-700">toy</span>”
          </p>
        </div>

        <div className="emotion-block flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          <Image
            src="/waiting-girl.png"
            alt="Waiting girl"
            width={400}
            height={280}
            className="rounded-2xl object-cover shadow-xl w-[80%] sm:w-[60%] md:w-[400px] img-hover-gray"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center">
            “Mom, when <br /> will <span className="text-red-700">dad</span>{" "}
            come <br /> back?”
          </p>
        </div>
      </div>
    </section>
  );
}
