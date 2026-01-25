"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-13 w-13 items-center justify-center rounded-4xl bg-gray-200 p-3 transition-all duration-300 ease-in-out hover:scale-105 max-md:h-10 max-md:w-10 max-md:p-2 dark:bg-gray-800"
    >
      {theme === "dark" ? <CiDark size={50} /> : <CiLight size={50} />}
    </button>
  );
}
