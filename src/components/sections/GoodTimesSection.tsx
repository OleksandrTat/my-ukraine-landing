"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function GoodTimesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Анімація каруселі ===
      gsap.from(".good-carousel", {
        scrollTrigger: {
          trigger: ".good-carousel",
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // === Анімація тексту поруч ===
      gsap.from(".good-text", {
        scrollTrigger: {
          trigger: ".good-text",
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // === Анімація другого блоку (Peaceful Days) ===
      gsap.from(".peaceful-image", {
        scrollTrigger: {
          trigger: ".peaceful-image",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".peaceful-text", {
        scrollTrigger: {
          trigger: ".peaceful-text",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* === Section 1: Carousel + Text === */}
      <section className="relative w-full pb-24 pt-40 overflow-hidden scale-[1.1] md:scale-[1.15] origin-center">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center md:gap-16">
          {/* === Left side: Vertical Carousel === */}
          <div className="relative good-carousel">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-[280px] md:w-[360px]"
            >
              <CarouselContent className="h-[300px] md:h-[380px]">
                {["good-times-2.jpg", "good-times-5.jpg", "good-times-4.jpg"].map(
                  (img, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden rounded-2xl shadow-md border-0">
                        <CardContent className="p-0">
                          <div className="relative w-full h-[300px] md:h-[350px]">
                            <Image
                              src={`/${img}`}
                              alt={`Ukraine moment ${index + 1}`}
                              fill
                              className="object-cover img-hover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>

              <CarouselPrevious className="top-[-40px] left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 hover:bg-card shadow-sm" />
              <CarouselNext className="bottom-[-40px] left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 hover:bg-card shadow-sm" />
            </Carousel>
          </div>

          {/* === Right side: Text === */}
          <div className="good-text mt-12 md:mt-0 md:w-[480px] text-center md:text-left">
            <p className="text-2xl md:text-[1.8rem] font-light leading-relaxed text-foreground font-serif">
              In this land, the wind blows freely. <br />
              Every dawn is a promise.
            </p>
          </div>
        </div>
      </section>

      {/* === Section 2: Peaceful Days Block === */}
      <section className="w-full py-24 flex flex-col items-center text-center overflow-hidden">
        <div className="relative w-[90%] max-w-4xl peaceful-image">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/peaceful-days.png"
              alt="Children in the field"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="peaceful-text mt-8 text-2xl md:text-[1.8rem] text-foreground font-serif leading-relaxed">
          Simple smiles, peaceful days. <br />
          The beauty of everyday life.
        </p>
      </section>
    </div>
  );
}
