"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FaithSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-32">
      {/* === 1. Перший блок === */}
      <div className="relative w-full max-w-4xl mx-auto mb-40">
        {/* Сітка зображень */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
          <div className="relative row-span-2 rounded-xl overflow-hidden">
            <Image src="/faith1.jpg" alt="Faith left image" fill className="object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/faith2.jpg" alt="Faith top right" fill className="object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/faith3.jpg" alt="Faith bottom right" fill className="object-cover" />
          </div>
        </div>

        {/* Білий блок поверх */}
        <div className="absolute left-[40%] inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white shadow-lg rounded-tl-xl rounded-bl-xl px-10 py-6 text-lg font-serif text-center leading-snug max-w-xl">
            It’s hard for us, but we keep going — and what helps us is...
          </div>
        </div>
      </div>

      {/* === 2. Другий блок === */}
      <div className="relative w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-32">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[250px] rounded-xl overflow-hidden">
            <Image src="/faith4.jpg" alt="People 1" fill className="object-cover" />
          </div>
          <div className="relative h-[250px] rounded-xl overflow-hidden">
            <Image src="/faith5.png" alt="People 2" fill className="object-cover" />
          </div>
          <div className="relative col-span-2 h-[260px] rounded-xl overflow-hidden">
            <Image src="/faith6.png" alt="People 3" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left px-2">
          <h3 className="text-2xl font-serif">People</h3>
          <p className="text-neutral-700">There are people who never stay aside.</p>
          <p className="text-neutral-700">
            They give their time, strength, and hearts to help others.
          </p>
          <p className="text-neutral-700">
            Because of these people, hope keeps living even in the hardest times.
          </p>
        </div>
      </div>

      {/* === 3. Текст перед картками === */}
      <div className="text-center space-y-4 mb-12 max-w-2xl">
        <h2 className="text-2xl font-serif">
          And <span className="font-bold">YOU</span> also can help Ukraine
        </h2>
        <p className="text-neutral-700">
          Even a small action can mean a lot.<br />
          Whether you choose to speak up, donate, or simply care — it all makes a difference.
        </p>
        <p className="text-neutral-700">The choice is yours.</p>
      </div>

      {/* === 4. Картки (shadcn/ui Card) === */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* Donate */}
        <Card className="w-[260px] text-center">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Donate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600">
              Your support saves lives.<br />
              Every donation helps provide food, medicine, and protection to those who need it most.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full bg-black text-white hover:bg-neutral-800">
              <Link href="https://u24.gov.ua/" target="_blank">
                United24
              </Link>
            </Button>
            <Button asChild className="w-full bg-black text-white hover:bg-neutral-800">
              <Link href="https://www.comebackalive.in.ua/" target="_blank">
                Come Back Alive
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Share */}
        <Card className="w-[260px] text-center">
          <CardHeader>
            <CardTitle className="font-serif text-lg">Share</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-600">
              Spread the truth.<br />
              By sharing information, you give Ukraine a stronger voice.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-black text-white hover:bg-neutral-800">Share</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
