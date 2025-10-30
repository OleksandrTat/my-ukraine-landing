"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className="
        flex items-center gap-3 rounded-full px-3 py-2
        bg-muted/50 backdrop-blur-sm border border-border/40
        transition-colors hover:bg-muted/70
      "
    >
      {/* Іконка залежно від теми */}
      {isDark ? (
        <Moon className="h-4 w-4 text-slate-300" />
      ) : (
        <Sun className="h-4 w-4 text-amber-500" />
      )}

      <Label
        htmlFor="theme-mode"
        className="text-sm font-medium text-foreground select-none"
      >
        {isDark ? "Dark" : "Light"} mode
      </Label>

      <Switch
        id="theme-mode"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="
          data-[state=checked]:bg-slate-700
          data-[state=unchecked]:bg-amber-300
          transition-all duration-300
        "
      />
    </div>
  );
}
