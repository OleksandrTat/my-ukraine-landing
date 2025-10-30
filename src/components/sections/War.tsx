"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BeforeAfterSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-32">
      {/* === Радіальні градієнти тільки по боках, рівномірно === */}
<div className="absolute h-full inset-0 pointer-events-none z-0">
  {/* Ліва сторона */}
  <div className="absolute left-[-20vw] top-[0vh] w-[50vw] h-[125vh] bg-[radial-gradient(circle_at_left,rgba(255,0,0,0.4),transparent_70%)] blur-[100px]" />
  <div className="absolute left-[-18vw] top-[35%] w-[50vw] h-[55vh] bg-[radial-gradient(circle_at_left,rgba(255,60,60,0.35),transparent_75%)] blur-[120px]" />
  <div className="absolute left-[-15vw] top-[70%] w-[50vw] h-[95vh] bg-[radial-gradient(circle_at_left,rgba(255,0,0,0.4),transparent_70%)] blur-[100px]" />
  <div className="absolute left-[-17vw] top-[105%] w-[50vw] h-[35vh] bg-[radial-gradient(circle_at_left,rgba(255,80,80,0.35),transparent_75%)] blur-[110px]" />

  {/* Права сторона */}
  <div className="absolute right-[-20vw] top-[10%] w-[50vw] h-[75vh] bg-[radial-gradient(circle_at_right,rgba(255,0,0,0.4),transparent_70%)] blur-[100px]" />
  <div className="absolute right-[-18vw] top-[45%] w-[50vw] h-[105vh] bg-[radial-gradient(circle_at_right,rgba(255,60,60,0.35),transparent_75%)] blur-[120px]" />
  <div className="absolute right-[-15vw] top-[80%] w-[50vw] h-[75vh] bg-[radial-gradient(circle_at_right,rgba(255,0,0,0.4),transparent_70%)] blur-[100px]" />
  <div className="absolute right-[-17vw] top-[115%] w-[50vw] h-[45vh] bg-[radial-gradient(circle_at_right,rgba(255,80,80,0.35),transparent_75%)] blur-[110px]" />
</div>





      {/* === 1. Вступний блок === */}
      <div className="relative z-10 flex justify-center items-center w-full max-w-5xl mx-auto h-[500px]">
        <div className="relative w-[60%] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/explosion1.jpg"
            alt="Explosion in Kyiv"
            width={900}
            height={600}
            className="object-cover w-full h-auto"
          />
          <div className="absolute top-4 left-4 text-white text-sm md:text-base p-3 rounded-md max-w-[70%] leading-snug bg-black/40 backdrop-blur-sm">
            <strong>5:00 a.m.</strong> We woke up to light, but it was too bright to be dawn.
          </div>
        </div>

        <div className="absolute right-[5%] -top-8 w-[28%] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/explosion2.png"
            alt="Explosion close-up"
            width={500}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* === 2. Заголовок === */}
      <h2 className="relative z-10 mt-32 mb-7 text-2xl md:text-3xl font-serif text-center">
        The line that divides before and{" "}
        <span>
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
      <div className="relative z-10 w-full mb-20 max-w-6xl px-4 sm:px-8 overflow-visible">
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
                  className="pl-6 sm:pl-10 basis-[85%] sm:basis-[60%] lg:basis-[45%] flex justify-center transition-transform duration-500"
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

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-10 h-10" />
        </Carousel>
      </div>

      {/* === 4. Новий блок === */}
      <div className="relative z-10 mt-50 w-full max-w-4xl flex flex-col gap-10">
        {/* Елемент 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/child-home.png"
            alt="Destroyed home"
            width={350}
            height={250}
            className="rounded-xl shadow-lg object-cover"
          />
          <p className="text-xl md:text-2xl font-serif text-black/80 max-w-sm">
            “My <span className="text-red-700">home</span>...”
          </p>
        </div>

        {/* Елемент 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
          <Image
            src="/toy-bench.png"
            alt="Lost toy"
            width={350}
            height={250}
            className="rounded-xl shadow-lg object-cover"
          />
          <p className="text-xl md:text-2xl font-serif text-black/80 max-w-sm text-right">
            “I lose my <span className="text-red-700">toy</span>”
          </p>
        </div>

        {/* Елемент 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/waiting-girl.png"
            alt="Waiting girl"
            width={350}
            height={250}
            className="rounded-xl shadow-lg object-cover"
          />
          <p className="text-xl md:text-2xl font-serif text-black/80 max-w-sm text-center">
            “Mom, when <br/>
            will <span className="text-red-700">dad</span> come<br/> 
            back?”
          </p>
        </div>
      </div>
    </section>
  );
}
