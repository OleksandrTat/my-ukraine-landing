import { ThemeSwitch } from "@/components/ui/theme-switch";
import Hero from "@/components/sections/Hero";
import GoodTimesSection from "@/components/sections/GoodTimesSection";
import RememberTimes from "@/components/sections/RememberTimes";
import BeforeAfterSection from "@/components/sections/War";
import FaithSection from "@/components/sections/Faith";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <main>
      <header className="fixed top-4 right-6 z-50">
        <ThemeSwitch />
      </header>
      <Hero />
      <GoodTimesSection />
      <RememberTimes />
      <BeforeAfterSection />
      <FaithSection />
      <Footer />
    </main>
  );
}
