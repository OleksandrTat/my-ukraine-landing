"use client";
import Image from "next/image";

export default function RememberTimes() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center overflow-hidden">
      {/* Верхній заголовок */}
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

      {/* === Лінія + текст === */}
      <div className="relative flex flex-col items-center mt-32 w-full">
        {/* Контейнер з позиціонуванням */}
        <div className="relative flex items-center justify-center max-w-6xl w-full">
          {/* SVG */}
          <svg
            viewBox="0 0 1700 4000"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70%] md:w-[60%] h-auto"
          >
            <defs>
              <linearGradient
                id="paint0_linear_88_170"
                x1="0"
                y1="0"
                x2="1700"
                y2="4000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0057B7" />
                <stop offset="1" stopColor="#FFD700" />
              </linearGradient>
            </defs>
            <path
              d="M16.7808 3.56931C16.8307 2.67712 16.5263 1.80054 15.9322 1.13228C15.3381 0.464012 14.5036 0.0588258 13.6116 0.00583101C12.7197 -0.0471638 11.843 0.256346 11.174 0.849567C10.505 1.44279 10.0988 2.27715 10.0427 3.16897C10.0427 3.16897 10.0427 3.16897 10.0427 3.16897C3.12399 114.722 -0.81618 218.289 0.142719 327.836C2.34223 473.795 9.92425 620.113 51.9181 761.953C85.9568 902.519 210.347 1034.21 364.019 1030.81C658.089 1032.5 946.37 911.453 1230.62 998.323C1413.99 1047.8 1588.18 1172.68 1635.01 1361.17C1684.22 1546.53 1636.38 1743.49 1564.42 1919.21C1515.91 2035.78 1453.83 2146.65 1381.6 2250.26C1167.49 2494.05 796.911 2404.49 497.717 2479.42C344.865 2510.24 185.361 2583.54 106.768 2726.62C27.6285 2867.18 22.6267 3032.47 36.2033 3189.92C55.5523 3402.28 120.26 3621.84 274.417 3775.74C351.112 3851.64 449.668 3910.34 558.035 3923.72C558.923 3923.82 559.814 3923.56 560.513 3923C561.211 3922.45 561.66 3921.63 561.76 3920.75C561.859 3919.86 561.602 3918.97 561.045 3918.27C560.488 3917.57 559.676 3917.12 558.789 3917.02C558.789 3917.02 558.789 3917.02 558.789 3917.02C452.74 3903.2 355.76 3844.73 280.698 3769.45C129.731 3616.87 66.7858 3399.62 48.6201 3188.82C35.7962 3032.52 42.1018 2869.54 119.36 2733.86C195.858 2595.99 349.811 2525.35 501.062 2495.19C797.259 2419.97 1165.98 2517.58 1396.22 2260.48C1469.25 2155.9 1531.96 2044.05 1581.05 1926.1C1653.71 1748.31 1702.99 1548.33 1652.02 1356.48C1603.32 1160.92 1421.33 1031.83 1235.21 982.415C944.386 894.768 652.601 1018.31 364.776 1017.29C215.527 1020.43 98.2847 897.448 62.8315 758.574C20.6763 619.055 12.0986 473.21 9.02948 327.722C7.39867 218.48 10.6175 115.044 16.7808 3.56931Z"
              fill="url(#paint0_linear_88_170)"
            />
          </svg>

          {/* Текст */}
          <h2 className="absolute right-[5%] top-[90%] transform -translate-y-1/2 text-2xl md:text-3xl font-serif text-left">
            But <br />
            <span className="text-red-700 font-semibold">February 24, 2022.. </span>
            <br />
            The world was divided into before and after.
          </h2>
        </div>
      </div>
    </section>
  );
}
