"use client";
import Image from "next/image";

export default function RememberTimes() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Заголовок */}
      <h2 className="text-2xl md:text-3xl mt-[20vh] mb-[40vh] font-serif">
        We still remember those times...
      </h2>

      {/* Контент */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/remember.png"
            alt="Girl in a wheat field"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>

        <div className="md:w-1/2 text-left space-y-4 text-base md:text-lg leading-relaxed font-light">
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

      {/* === SVG як зображення === */}
      <div className="absolute left-1/2 bottom-[20vh] -translate-x-1/2 w-[85vw] h-auto pointer-events-none z-[-1]">
        <Image
          src="/line.svg"
          alt="Decorative line"
          width={1700}
          height={4000}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* === Текст поверх лінії === */}
      <h2 className="relative z-10 mt-[50vh] text-2xl md:text-3xl font-serif text-center">
        But <br />
        <span className="text-red-700 font-semibold">February 24, 2022...</span>
        <br />
        The world was divided into before and{" "}
        <span className="relative inline-block before-underline">
          after.
        </span>{" "}
      </h2>

    </section>
  );
}
