import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CustomCursor from "@/app/components/CustomCursor";
import { AppProviders } from "@/app/context/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tu Bagus Dwi Fikri — Software, IT & IoT Engineer",
    template: "%s | Tu Bagus Dwi Fikri",
  },
  description:
    "Portfolio of Tu Bagus Dwi Fikri — Software Engineer, IT Programmer, and IoT Engineer specializing in Internet of Things, Web Development, and Artificial Intelligence.",
  keywords: [
    "Tu Bagus Dwi Fikri",
    "Portfolio",
    "Software Engineer",
    "IoT Engineer",
    "Web Developer",
    "Next.js",
    "ESP32",
    "Arduino",
    "Pekanbaru",
  ],
};

const themeInitScript = `
(function() {
  try {
    var savedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
    var savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'id') {
      document.documentElement.lang = savedLang;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans`}
      >
        <AppProviders>
          <CustomCursor />
          <Header />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
