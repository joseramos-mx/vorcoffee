"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, Coffee, QrCode, ArrowUpRight } from "@phosphor-icons/react";
import { CartPill } from "./cartbadge";
import RecipeThumb from "./recipethumb";

// 👇 Clerk (client) — estos se usan en client components sin problema
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* NAV FIJA */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between p-4 bg-gradient-to-t from-black/0 to-black/80">
        {/* Logo */}
        <div className="rounded-full w-30 px-5 py-3 fill-white bg-neutral-950/40 border backdrop-blur-2xl hover:rotate-10 transition-all duration-300">
          {/* …tu SVG igual… */}
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 477.66 143.95"
          >
            <path
              className="cls-1"
              d="M403.28,0c-26.3,0-45.5,6.58-57.58,19.73V6.93c0-1.95-.98-2.93-2.93-2.93h-34.66c-1.96,0-2.93.98-2.93,2.93v14.89c-.72-.66-1.45-1.32-2.21-1.96C287.24,6.62,265.25,0,236.99,0c-19.31,0-35.65,3-49.05,8.95l.64-1.22c.53-.89.49-1.77-.13-2.67-.62-.89-1.47-1.33-2.53-1.33h-41.85c-1.6,0-2.93,1.07-4,3.2l-43.99,93.3h-1.33L48.89,6.66c-1.07-1.95-2.4-2.93-4-2.93H2.77c-.89,0-1.64.4-2.27,1.2-.62.8-.67,1.65-.13,2.53l67.45,129.83c.89,1.96,2.13,2.93,3.73,2.93h45.59c1.42,0,2.67-.97,3.73-2.93l27.15-51.95c2.64,15.49,9.98,28.42,22.06,38.76,15.46,13.24,37.76,19.86,66.91,19.86,27.55,0,49.36-6.75,65.45-20.26.94-.79,1.86-1.6,2.74-2.42v16.28c0,1.96.97,2.93,2.93,2.93h35.19c1.95,0,2.93-.97,2.93-2.93v-49.58c0-17.24,4.35-29.9,13.06-37.99,8.71-8.08,20.79-12.13,36.25-12.13,25.95,0,38.92,11.55,38.92,34.66v1.6c0,1.96.97,2.93,2.93,2.93h37.32c1.95,0,2.93-.97,2.93-2.93v-6.4c0-45.14-24.79-67.71-74.38-67.71Z"
            />
          </svg>
        </div>

        {/* Menú central (desktop) */}
        <div className="hidden md:block">
          <ul className="flex gap-4 flex-row justify-center items-center text-white text-sm">
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <Link href="/">Inicio</Link>
            </li>
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <Link href="/">Nosotros</Link>
            </li>
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <Link href="/productos">Productos</Link>
            </li>
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <Link href="/recetas">Recetas</Link>
            </li>
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <Link href="/equipamiento">Equipo</Link>
            </li>
            <li className="transition-all duration-300 hover:text-orange-700 hover:-translate-y-1 p-3">
              <CartPill />
            </li>
          </ul>
        </div>

        {/* Recetas + CTA (desktop) */}
        <div className="hidden md:block">
          <ul className="flex gap-4 flex-row justify-center items-center">
            <RecipeThumb
              href="/recetas/pour-over"
              img="/receta1.jpg"
              title="V60 Pour Over"
              note="18 g • 288 g • 2:30 min"
            />
            <RecipeThumb
              href="/recetas/moka"
              img="/moka.webp"
              title="Moka Italiana"
              note="18 g • 288 g • 2:30 min"
            />
            <li className="hover:scale-110 transition-all duration-300 hover:bg-orange-700 hover:text-white rounded-full p-3 border hover:border-orange-700">
              <Link href="/recetas">
                <ArrowUpRight size={24} className="text-white" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Botonera derecha (desktop) + Auth */}
        <div className="flex gap-3 flex-row justify-center items-center">
          {/* Menú (móvil) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden bg-black/40 backdrop-blur-2xl border text-white px-2 py-4 rounded-full hover:bg-orange-700 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Abrir menú"
          >
            <List size={24} />
          </button>

          {/* Botonera decorativa (desktop) */}
          <button className="hidden md:inline-flex bg-black/40 backdrop-blur-2xl border text-white px-2 py-4 rounded-full hover:bg-orange-700 hover:text-white hover:scale-110 transition-all duration-300">
            <List size={24} />
          </button>
          <button className="hidden md:inline-flex bg-black/40 backdrop-blur-2xl border text-white px-2 py-4 rounded-full hover:bg-orange-700 hover:text-white hover:scale-110 transition-all duration-300">
            <QrCode size={24} />
          </button>
          <button className="hidden md:inline-flex bg-black/40 backdrop-blur-2xl border text-white px-2 py-4 rounded-full hover:bg-orange-700 hover:text-white hover:scale-110 transition-all duration-300">
            <Coffee size={24} />
          </button>

          {/* ---------- AUTH (DESKTOP) ---------- */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="hidden md:inline-flex rounded-full text-sm h-10 px-4 border text-white hover:bg-white/10 transition">
                Iniciar sesión
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="hidden md:inline-flex rounded-full text-sm h-10 px-4 bg-black text-white border border-white/20 hover:bg-white/10 hover:text-white transition">
                Crear cuenta
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "ring-1 ring-white/40" } }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>

      {/* OVERLAY FULLSCREEN (móvil) */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            {/* Logo pequeño */}
            <div className="rounded-full w-30 px-5 py-3 fill-white bg-neutral-950/40 border backdrop-blur-2xl">
              {/* …tu SVG igual con className="w-20 h-6" si quieres… */}
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 477.66 143.95"
                className="w-20 h-6"
              >
                <path
                  className="cls-1"
                  d="M403.28,0c-26.3,0-45.5,6.58-57.58,19.73V6.93c0-1.95-.98-2.93-2.93-2.93h-34.66c-1.96,0-2.93.98-2.93,2.93v14.89c-.72-.66-1.45-1.32-2.21-1.96C287.24,6.62,265.25,0,236.99,0c-19.31,0-35.65,3-49.05,8.95l.64-1.22c.53-.89.49-1.77-.13-2.67-.62-.89-1.47-1.33-2.53-1.33h-41.85c-1.6,0-2.93,1.07-4,3.2l-43.99,93.3h-1.33L48.89,6.66c-1.07-1.95-2.4-2.93-4-2.93H2.77c-.89,0-1.64.4-2.27,1.2-.62.8-.67,1.65-.13,2.53l67.45,129.83c.89,1.96,2.13,2.93,3.73,2.93h45.59c1.42,0,2.67-.97,3.73-2.93l27.15-51.95c2.64,15.49,9.98,28.42,22.06,38.76,15.46,13.24,37.76,19.86,66.91,19.86,27.55,0,49.36-6.75,65.45-20.26.94-.79,1.86-1.6,2.74-2.42v16.28c0,1.96.97,2.93,2.93,2.93h35.19c1.95,0,2.93-.97,2.93-2.93v-49.58c0-17.24,4.35-29.9,13.06-37.99,8.71-8.08,20.79-12.13,36.25-12.13,25.95,0,38.92,11.55,38.92,34.66v1.6c0,1.96.97,2.93,2.93,2.93h37.32c1.95,0,2.93-.97,2.93-2.93v-6.4c0-45.14-24.79-67.71-74.38-67.71Z"
                />
              </svg>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="bg-black/40 border text-white px-3 py-3 rounded-full"
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-20 px-6">
            {/* Links principales */}
            <ul className="space-y-2 text-white text-lg">
              <li className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
              </li>
              <li className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Link href="/" onClick={() => setOpen(false)}>Nosotros</Link>
              </li>
              <li className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Link href="/productos" onClick={() => setOpen(false)}>Productos</Link>
              </li>
              <li className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Link href="/recetas" onClick={() => setOpen(false)}>Recetas</Link>
              </li>
              <li className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <Link href="/equipamiento" onClick={() => setOpen(false)}>Equipo</Link>
              </li>
              <li className="p-3">
                <CartPill />
              </li>
            </ul>

            {/* Recetas (scroll horizontal) */}
            <div className="mt-6">
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                <RecipeThumb
                  href="/recetas/pour-over"
                  img="/receta1.jpg"
                  title="V60 Pour Over"
                  note="18 g • 288 g • 2:30 min"
                />
                <RecipeThumb
                  href="/recetas/moka"
                  img="/moka.webp"
                  title="Moka Italiana"
                  note="18 g • 288 g • 2:30 min"
                />
                <Link
                  href="/recetas"
                  onClick={() => setOpen(false)}
                  className="shrink-0 hover:scale-110 transition-all duration-300 hover:bg-orange-700 hover:text-white rounded-full p-3 border hover:border-orange-700"
                >
                  <ArrowUpRight size={24} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Botonera final */}
            <div className="mt-8 flex gap-4">
              <button className="bg-black/40 backdrop-blur-2xl border text-white px-4 py-4 rounded-full">
                <List size={24} />
              </button>
              <button className="bg-black/40 backdrop-blur-2xl border text-white px-4 py-4 rounded-full">
                <QrCode size={24} />
              </button>
              <button className="bg-black/40 backdrop-blur-2xl border text-white px-4 py-4 rounded-full">
                <Coffee size={24} />
              </button>
            </div>

            {/* ---------- AUTH (MÓVIL EN OVERLAY) ---------- */}
            <div className="mt-8 flex gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-xl text-base h-12 px-4 border text-white bg-white/5 hover:bg-white/10 transition">
                    Iniciar sesión
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="inline-flex h-12 px-4 items-center justify-center rounded-xl
               text-base font-medium bg-black text-white border border-white/20
               hover:bg-white/10 hover:text-white transition">
                    Crear cuenta
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="flex-1">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
