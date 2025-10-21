"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section>
        <div className="h-screen flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
      <div>
        <h1 className="text-white text-9xl p-4 text-center mix-blend-exclusion">
          <span className="font-serif italic">Rumbo</span> decidido.
        </h1>
      </div>

      <div className="flex flex-row gap-4">
{/* === PILL 1: rectángulo redondeado + círculo con imagen que NO desplaza === */}
<div className="relative rounded-full bg-neutral-900 pr-24"> 
  {/* pr-24 reserva espacio para el círculo pegado a la derecha */}
  <div className="flex items-center">
    <button className="text-right py-2 px-5 uppercase font-bold shadow-2xl">
      <p>CONSIGUE <br /> TU PASE <span className="font-serif italic font-medium text-[16px]">VOR</span></p>
      <p className="font-medium text-[9px]">COMPRA AHORA</p>
    </button>
  </div>

  {/* CÍRCULO + PACKAGING: fuera del flujo, sobre el borde derecho */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    <div className="relative p-11 rounded-full bg-neutral-950 ring-1 ring-white/20 overflow-visible">
      <div className="absolute left-1/2 top-1/2 -translate-y-[60%] -translate-x-[50%] rotate-[-8deg] w-20 h-28 hover:rotate-3 transition-all duration-300">
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
            <button className="text-right py-1 px-5 pr-4 uppercase font-bold shadow-2xl">
              <p>
                Explora <br /> nuestra{" "}
                <span className="font-serif italic font-medium text-[16px]">vibra</span>
              </p>
              <p className="font-medium text-[9px]">Aqui no termina</p>
            </button>
            <button className="p-8 border rounded-full bg-orange-700 hover:scale-110 transition duration-300">
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
