"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
        {/* Título */}
        <div className="px-4">
          <h1 className="
              text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
              leading-tight md:leading-none
              p-2 md:p-4 text-center mix-blend-exclusion
            ">
            <span className="font-serif italic">Rumbo</span> decidido.
          </h1>
        </div>

        {/* Pills */}
        <div
          className="
            mt-4 md:mt-6
            flex flex-col md:flex-row items-center justify-center
            gap-3 sm:gap-4 md:gap-5
            px-4
          "
        >
          {/* === PILL 1: rectángulo redondeado + círculo con imagen que NO desplaza === */}
          <div className="relative rounded-full bg-neutral-900 pr-20 sm:pr-24 md:pr-28">
            {/* pr-* reserva espacio visual para el círculo derecho */}
            <div className="flex items-center">
              <button className="text-right py-2 px-4 sm:px-5 uppercase font-bold shadow-2xl">
                <p className="text-xs sm:text-sm">
                  CONSIGUE <br /> TU PASE{" "}
                  <span className="font-serif italic font-medium text-[12px] sm:text-[16px]">
                    VOR
                  </span>
                </p>
                <p className="font-medium text-[9px] opacity-90">
                  COMPRA AHORA
                </p>
              </button>
            </div>

            {/* CÍRCULO + PACKAGING: fuera del flujo, sobre el borde derecho */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div
                className="
                  relative
                  p-7 sm:p-9 md:p-11
                  rounded-full bg-neutral-950 ring-1 ring-white/20
                  overflow-visible
                "
              >
                <div
                  className="
                    absolute left-1/2 top-1/2 -translate-y-[60%] -translate-x-[50%]
                    rotate-[-8deg]
                    w-14 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28
                    hover:rotate-3 transition-all duration-300
                  "
                >
                  <Image
                    src="/pack.png"
                    alt="VOR"
                    fill
                    className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,.45)] pointer-events-none select-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === PILL 2 ===================================================== */}
          <div className="bg-orange-600 rounded-full">
            <div className="flex flex-row items-center">
              <button className="text-right py-1 px-4 sm:px-5 pr-3 sm:pr-4 uppercase font-bold shadow-2xl">
                <p className="text-xs sm:text-sm">
                  Explora <br /> nuestra{" "}
                  <span className="font-serif italic font-medium text-[12px] sm:text-[16px]">
                    vibra
                  </span>
                </p>
                <p className="font-medium text-[9px] opacity-95">
                  Aqui no termina
                </p>
              </button>
              <button
                className="
                  p-5 sm:p-6 md:p-8
                  border rounded-full bg-orange-700
                  hover:scale-110 transition duration-300
                "
                aria-label="Ir a vibra"
              >
                <ArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
