"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FaithSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === Анімація для блоків зверху вниз ===
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // === Легке з’явлення карток ===
      gsap.utils.toArray(".card-anim").forEach((el: any, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          delay: i * 0.15,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // === Фото в другому блоці — з різних сторін ===
      gsap.from(".photos-left img:nth-child(odd)", {
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".photos-left",
          start: "top 85%",
        },
      });

      gsap.from(".photos-left img:nth-child(even)", {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".photos-left",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center justify-center py-20 sm:py-32 px-4">
      {/* === 1. Перший блок === */}
      <div className="fade-up relative w-full max-w-4xl mx-auto mb-24 sm:mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-4 h-auto sm:h-[500px]">
          <div className="relative sm:row-span-2 rounded-xl overflow-hidden h-[40vh] sm:h-auto">
            <Image src="/faith1.jpg" alt="Faith left image" fill className="object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden h-[40vh] sm:h-auto">
            <Image src="/faith2.jpg" alt="Faith top right" fill className="object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden h-[40vh] sm:h-auto">
            <Image src="/faith3.jpg" alt="Faith bottom right" fill className="object-cover" />
          </div>
        </div>

        <div className="absolute hidden sm:flex left-[40%] inset-0 items-center justify-center pointer-events-none">
          <div className="bg-card shadow-lg rounded-tl-xl rounded-bl-xl px-10 py-6 text-lg font-serif text-center leading-snug max-w-xl">
            It’s hard for us, but we keep going — and what helps us is...
          </div>
        </div>

        <div className="sm:hidden mt-6 text-center text-base font-serif text-foreground">
          It’s hard for us, but we keep going — and what helps us is...
        </div>
      </div>

      {/* === 2. Другий блок === */}
      <div className="fade-up relative w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-24">
        <div className="photos-left grid grid-cols-2 gap-4">
          <div className="relative h-[35vh] sm:h-[250px] rounded-xl overflow-hidden">
            <Image src="/faith4.jpg" alt="People 1" fill className="object-cover img-hover" />
          </div>
          <div className="relative h-[35vh] sm:h-[250px] rounded-xl overflow-hidden">
            <Image src="/faith5.png" alt="People 2" fill className="object-cover img-hover" />
          </div>
          <div className="relative col-span-2 h-[40vh] sm:h-[260px] rounded-xl overflow-hidden">
            <Image src="/faith6.png" alt="People 3" fill className="object-cover img-hover" />
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left px-2">
          <h3 className="text-xl sm:text-2xl font-serif">People</h3>
          <p className="text-foreground text-sm sm:text-base">There are people who never stay aside.</p>
          <p className="text-foreground text-sm sm:text-base">
            They give their time, strength, and hearts to help others.
          </p>
          <p className="text-foreground text-sm sm:text-base">
            Because of these people, hope keeps living even in the hardest times.
          </p>
        </div>
      </div>

      {/* === 3. Текст перед картками === */}
      <div className="fade-up text-center space-y-4 mb-10 sm:mb-12 max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-serif">
          And <span className="font-bold">YOU</span> also can help Ukraine
        </h2>
        <p className="text-foreground text-sm sm:text-base">
          Even a small action can mean a lot.<br />
          Whether you choose to speak up, donate, or simply care — it all makes a difference.
        </p>
        <p className="text-foreground text-sm sm:text-base">The choice is yours.</p>
      </div>

      {/* === 4. Картки === */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        <Card className="card-anim w-full sm:w-[260px] text-center">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Donate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Your support saves lives.<br />
              Every donation helps provide food, medicine, and protection to those who need it most.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full bg-background text-foreground hover:bg-neutral-800">
              <Link href="https://u24.gov.ua/" target="_blank">United24</Link>
            </Button>
            <Button asChild className="w-full bg-accent text-foreground hover:bg-neutral-800">
              <Link href="https://www.comebackalive.in.ua/" target="_blank">Come Back Alive</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-anim w-full sm:w-[260px] text-center">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Share</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Spread the truth.<br />
              By sharing information, you give Ukraine a stronger voice.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-accent text-foreground hover:bg-neutral-800">Share</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
