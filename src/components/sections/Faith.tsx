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

  // 🆕 функція для кнопки "Share"
  const handleShare = async () => {
    const shareData = {
      title: "Help Ukraine",
      text: "Stand with Ukraine 🇺🇦 — learn how you can help.",
      url: typeof window !== "undefined" ? window.location.href : "https://example.com",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } else {
        // fallback
        const el = document.createElement("textarea");
        el.value = shareData.url;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert("Link copied!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // виправлені класи photos-left
      gsap.from(".phodtos-left img:nth-child(odd)", {
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

      gsap.from(".phodtos-left img:nth-child(even)", {
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
          <div className="bg-card shadow-lg rounded-tl-xl rounded-bl-xl px-12 py-8 text-2xl font-serif text-center leading-snug max-w-xl">
            It’s hard for us, but we keep going — and what helps us is...
          </div>
        </div>

        <div className="sm:hidden mt-6 text-center text-lg font-serif text-foreground">
          It’s hard for us, but we keep going — and what helps us is...
        </div>
      </div>

      {/* === Другий блок === */}
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

        <div className="space-y-5 text-center md:text-left px-2">
          <h3 className="text-4xl sm:text-5xl font-serif">People</h3>
          <p className="text-foreground text-xl sm:text-2xl">There are people who never stay aside.</p>
          <p className="text-foreground text-lg sm:text-xl">
            They give their time, strength, and hearts to help others.
          </p>
          <p className="text-foreground text-lg sm:text-xl">
            Because of these people, hope keeps living even in the hardest times.
          </p>
        </div>
      </div>

      {/* === Текст перед картками === */}
      <div className="fade-up text-center space-y-5 mt-10 mb-10 sm:mb-12 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-serif">
          And <span className="font-bold">YOU</span> also can help Ukraine
        </h2>
        <p className="text-foreground text-lg sm:text-xl">
          Even a small action can mean a lot.<br />
          Whether you choose to speak up, donate, or simply care — it all makes a difference.
        </p>
        <p className="text-foreground text-lg sm:text-xl">The choice is yours.</p>
      </div>

      {/* === Картки === */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full mt-10">
        {[
          {
            title: "Donate",
            text: (
              <>
                Your support saves lives.<br />
                Every donation helps provide food, medicine, and protection to those who need it most.
              </>
            ),
            buttons: [
              { label: "United24", href: "https://u24.gov.ua/" },
              { label: "Come Back Alive", href: "https://www.comebackalive.in.ua/" },
            ],
          },
          {
            title: "Share",
            text: (
              <>
                Spread the truth.<br />
                By sharing information, you give Ukraine a stronger voice.
              </>
            ),
            buttons: [{ label: "Share", onClick: handleShare }],
          },
        ].map((card, i) => (
          <Card
            key={i}
            className="card-anim relative w-full sm:w-[300px] text-center border border-border/40 bg-gradient-to-b from-background to-background/80 shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/50 group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-accent blur-2xl transition-opacity duration-500 pointer-events-none" />
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed">{card.text}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 mt-auto">
              {card.buttons.map((btn, j) =>
                "href" in btn ? (
                  <Button
                    asChild
                    key={j}
                    className={`w-full rounded-xl font-medium transition-all ${
                      j === 0
                        ? "bg-accent text-white hover:bg-accent/90 shadow-md"
                        : "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    <Link href={btn.href} target={btn.href.startsWith("http") ? "_blank" : "_self"}>
                      {btn.label}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    key={j}
                    onClick={btn.onClick}
                    className="w-full rounded-xl font-medium bg-accent text-white hover:bg-accent/90 shadow-md transition-all"
                  >
                    {btn.label}
                  </Button>
                )
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

    </section>
  );
}
