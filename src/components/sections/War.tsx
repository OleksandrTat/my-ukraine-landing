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
      // 1️⃣ Анімація вступного блоку
      gsap.from(".intro-block", {
        scrollTrigger: {
          trigger: ".intro-block",
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2️⃣ Заголовок “before / after”
      gsap.from(".beforeafter-title", {
        scrollTrigger: {
          trigger: ".beforeafter-title",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 3️⃣ Карусель (з масштабуванням)
      gsap.from(".beforeafter-carousel", {
        scrollTrigger: {
          trigger: ".beforeafter-carousel",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 4️⃣ Три елементи (діти / будинок / дівчинка)
      gsap.utils.toArray<HTMLElement>(".emotion-block").forEach((block, i) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
          },
          x: i % 2 === 0 ? -100 : 100,
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
      className="relative flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* === Радіальні градієнти === */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Ліві */}
        <div className="absolute left-[-25vw] top-[5vh] w-[50vw] h-[40vh] bg-[radial-gradient(circle_at_left,rgba(255,0,0,0.35),transparent_70%)] blur-[90px]" />
        <div className="absolute left-[-20vw] bottom-[20vh] w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_left_bottom,rgba(255,80,80,0.25),transparent_70%)] blur-[100px]" />
        <div className="absolute left-[-10vw] top-[60vh] w-[35vw] h-[35vh] bg-[radial-gradient(circle_at_left,rgba(255,60,60,0.3),transparent_75%)] blur-[100px]" />
        {/* Праві */}
        <div className="absolute right-[-25vw] top-[10vh] w-[50vw] h-[40vh] bg-[radial-gradient(circle_at_right,rgba(255,0,0,0.35),transparent_70%)] blur-[90px]" />
        <div className="absolute right-[-15vw] bottom-[15vh] w-[45vw] h-[45vh] bg-[radial-gradient(circle_at_right_bottom,rgba(255,80,80,0.25),transparent_70%)] blur-[100px]" />
        <div className="absolute right-[-10vw] top-[55vh] w-[35vw] h-[35vh] bg-[radial-gradient(circle_at_right,rgba(255,60,60,0.3),transparent_75%)] blur-[100px]" />
      </div>

      {/* === 1. Вступний блок === */}
      <div className="intro-block relative z-10 flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mx-auto gap-8 md:gap-12">
        <div className="relative w-[90%] md:w-[60%] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/explosion1.jpg"
            alt="Explosion in Kyiv"
            width={900}
            height={600}
            className="object-cover w-full h-auto"
          />
          <div className="absolute top-4 left-4 text-white text-xs sm:text-sm md:text-base p-3 rounded-md max-w-[75%] leading-snug bg-black/40 backdrop-blur-sm">
            <strong>5:00 a.m.</strong> We woke up to light, but it was too bright to be dawn.
          </div>
        </div>
      </div>

      {/* === 2. Заголовок === */}
      <h2 className="beforeafter-title relative z-10 mt-16 md:mt-32 mb-6 md:mb-10 text-2xl md:text-3xl font-serif text-center">
        The line that divides before{" "}
        <span className="hidden md:inline">
          <Image
            src="/devide-line.svg"
            alt="Divider line"
            width={70}
            height={10}
            className="inline-block -mx-5"
          />
        </span>{" "}
        after
      </h2>

      {/* === 3. Карусель === */}
      <div className="beforeafter-carousel relative z-10 w-full mb-20 max-w-6xl px-4 sm:px-8 overflow-visible">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
          }}
          className="w-full select-none"
        >
          <CarouselContent className="flex -ml-6 sm:-ml-10">
            {["/beforeafter1.png", "/beforeafter2.png", "/beforeafter3.png"].map(
              (src, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 sm:pl-10 basis-[90%] sm:basis-[65%] lg:basis-[45%] flex justify-center transition-transform duration-500"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl">
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

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-9 h-9 sm:w-10 sm:h-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-9 h-9 sm:w-10 sm:h-10" />
        </Carousel>
      </div>

      {/* === 4. Емоційні блоки === */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-12 md:gap-16 px-4 mt-10">
        <div className="emotion-block flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <Image
            src="/child-home.png"
            alt="Destroyed home"
            width={350}
            height={250}
            className="rounded-xl img-hover-gray shadow-lg object-cover w-[80%] sm:w-[60%] md:w-[350px]"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center md:text-left">
            “My <span className="text-red-700">home</span>...”
          </p>
        </div>

        <div className="emotion-block flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-10">
          <Image
            src="/toy-bench.png"
            alt="Lost toy"
            width={350}
            height={250}
            className="rounded-xl shadow-lg img-hover-gray object-cover w-[80%] sm:w-[60%] md:w-[350px]"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center md:text-right">
            “I lost my <span className="text-red-700">toy</span>”
          </p>
        </div>

        <div className="emotion-block flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <Image
            src="/waiting-girl.png"
            alt="Waiting girl"
            width={350}
            height={250}
            className="rounded-xl img-hover-gray shadow-lg object-cover w-[80%] sm:w-[60%] md:w-[350px]"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-sm text-center">
            “Mom, when <br />
            will <span className="text-red-700">dad</span> come<br /> back?”
          </p>
        </div>
      </div>
    </section>
  );
}
