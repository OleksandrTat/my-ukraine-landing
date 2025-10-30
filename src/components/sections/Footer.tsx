"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-24 mt-40 relative overflow-hidden">
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-10">
        {/* --- Call to action --- */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            Stand with Ukraine
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Every small action matters. Whether it’s a word of truth, a donation,
            or a shared story — together, we keep hope alive.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6"
            >
              <Link href="https://u24.gov.ua" target="_blank">
                Donate
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neutral-600 text-neutral-200 hover:bg-neutral-800"
            >
              <Link href="#stories">Read Stories</Link>
            </Button>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-px bg-neutral-800 my-12" />

        {/* --- Navigation and credits --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <nav className="flex gap-6 text-neutral-400">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#people" className="hover:text-white transition-colors">
              People
            </Link>
            <Link href="#help" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Together for Ukraine. Made with hope 🇺🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
