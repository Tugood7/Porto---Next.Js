"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useApp } from "@/app/context/AppProviders";
import { profile, uiText } from "@/data/portfolio";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, lang, setLang, mounted } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: uiText.nav.home[lang] },
    { href: "/about", label: uiText.nav.about[lang] },
    { href: "/projects", label: uiText.nav.projects[lang] },
    { href: "/blog", label: uiText.nav.blog[lang] },
    { href: "/#contact", label: uiText.nav.contact[lang] },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-zinc-200 transition group-hover:ring-emerald-500 dark:ring-zinc-700">
            <Image
              src="/logo.jpg"
              alt={profile.name}
              width={32}
              height={32}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight">
            {profile.shortName}
            <span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800/90 dark:text-white"
                    : "text-zinc-600 hover:bg-zinc-100/70 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Controls: Language ID/EN + Theme Switcher + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Bilingual Switcher */}
          <div
            className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-100/80 p-0.5 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`rounded-md px-2 py-1 transition-all cursor-pointer ${
                lang === "id"
                  ? "bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
              aria-pressed={lang === "id"}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-md px-2 py-1 transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {mounted ? (
              theme === "dark" ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 md:hidden cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {mobileOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
