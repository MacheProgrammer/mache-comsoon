import type { Metadata } from "next";
import { Geist_Mono, Headland_One, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

const headland = Headland_One({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mache",
  description: "SMAN 5 Yogyakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headland.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="fixed right-4 bottom-4 z-50">
            <ThemeToggle />
          </section>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
