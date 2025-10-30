"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GoodTimesSection() {
  return (
    <>
      {/* === Section 1: Carousel + Text === */}
      <section className="relative w-full pb-24 pt-40">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center md:gap-16">
          {/* === Left side: Vertical Carousel === */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-[280px] md:w-[360px]"
            >
              <CarouselContent className="h-[300px] md:h-[380px]">
                {["good-times-1.jpg", "good-times-1.jpg", "good-times-1.jpg"].map(
                  (img, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden rounded-2xl shadow-md">
                        <CardContent className="p-0">
                          <div className="relative w-full h-[300px] md:h-[350px]">
                            <Image
                              src={`/${img}`}
                              alt={`Ukraine moment ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>

              {/* Controls */}
              <CarouselPrevious className="top-[-40px] left-1/2 -translate-x-1/2 rounded-full border border-neutral-300 bg-white/80 hover:bg-neutral-100 shadow-sm" />
              <CarouselNext className="bottom-[-40px] left-1/2 -translate-x-1/2 rounded-full border border-neutral-300 bg-white/80 hover:bg-neutral-100 shadow-sm" />
            </Carousel>
          </div>

          {/* === Right side: Text === */}
          <div className="mt-10 md:mt-0 md:w-[420px] text-center md:text-left">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 font-serif">
              In this land, the wind blows freely. <br />
              Every dawn is a promise.
            </p>
          </div>
        </div>
      </section>

      {/* === Section 2: Peaceful Days Block === */}
      <section className="w-full py-20 flex flex-col items-center text-center">
        <div className="relative w-[90%] max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src="/peaceful-days.png"
              alt="Children in the field"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-8 text-xl md:text-2xl text-neutral-800 font-serif leading-relaxed">
          Simple smiles, peaceful days. <br />
          The beauty of everyday life.
        </p>
      </section>
    </>
  );
}
