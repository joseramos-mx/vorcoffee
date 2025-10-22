// components/anatomy.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

/* ---------- Types ---------- */
type Chip = {
  label: string;
  x: number; // 0–100 (% left)
  y: number; // 0–100 (% top)
  color?: string;
};

type Spec = {
  label: string;
  value: string;
  hint?: string;
};

type SpecGroup = {
  heading: string;
  items: Spec[];
};

type AnatomyProps = {
  beanSrc?: string;
  ctaHref?: string;
  ctaLabel?: string;
  chips?: Chip[];
  specTitle?: string;
  specGroups?: SpecGroup[];
};

/* ---------- Component ---------- */
export default function Anatomy({
  beanSrc = "/grano.png", // Asegúrate de que esta imagen exista en tu carpeta /public
  ctaHref = "/tienda",
  ctaLabel = "Ordenar ahora",
  chips,
  specTitle = "", // El título "Ficha rápida" no está en la imagen, así que lo omitimos por defecto
  specGroups,
}: AnatomyProps) {
  /* Chips por defecto (Ajustados para coincidir con la imagen) */
  const defaultChips: Chip[] = [
    { label: "Floral", x: 18, y: 22, color: "#f59e0b" }, // Naranja
    { label: "Cuerpo medio", x: 45, y: 10, color: "#d1d5db" }, // Gris
    { label: "Cacao", x: 62, y: 18, color: "#b97836" }, // Café
    { label: "Acidez brillante", x: 74, y: 48, color: "#3b82f6" }, // Azul
    { label: "Dulzor", x: 28, y: 78, color: "#fcd34d" }, // Amarillo
    { label: "Caramelo", x: 15, y: 48, color: "#e39a4c" }, // Naranja claro
    { label: "Frutos rojos", x: 60, y: 78, color: "#ef4444" }, // Rojo
  ];
  const pills = useMemo(() => chips ?? defaultChips, [chips]);

  /* Tabla por defecto (Ajustada para coincidir 1:1 con la imagen) */
  const defaultSpecs: SpecGroup[] = [
    {
      heading: "Origen",
      items: [
        { label: "País", value: "México" },

      ],
    },
    {
      heading: "Perfil",
      items: [
        { label: "Cuerpo", value: "Completo" },

      ],
    },
    {
      heading: "Notas",
      items: [
        { label: "Primarias", value: "Cacao" },

      ],
    },
    {
      heading: "Proceso",
      items: [
        { label: "Beneficio", value: "Lavado" },

      ],
    },
    {
      heading: "Tueste",
      items: [
        { label: "Nivel", value: "Medio" },

      ],
    },
  ];
  const groups = useMemo(() => specGroups ?? defaultSpecs, [specGroups]);

  return (
    // Contenedor principal: Ocupa la pantalla y apila verticalmente
    <section
      className="
        relative mx-auto max-w-7xl px-6 py-12 md:py-20 text-white
        min-h-screen flex flex-col justify-center
      "
    >
      {/* Zona superior: lienzo + CTA 
        Quitamos 'flex-1' para eliminar el espacio extra
      */}
      <div className="grid items-center gap-16 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px]">
        {/* Lienzo del grano y chips */}
        <div>
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[21/12]">
            {/* Grano centrado */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <Image
                  src={beanSrc}
                  alt="Grano de café"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Chips flotantes */}
            {pills.map((c, i) => (
              <div
                key={`${c.label}-${i}`}
                className="absolute will-change-transform"
                style={{
                  left: `${c.x}%`,
                  top: `${c.y}%`,
                  // Aplicamos la animación 'float' definida en tailwind.config.js
                  animation: `float ${6 + i % 4}s ease-in-out ${
                    (i % 5) * 0.4
                  }s infinite`,
                }}
              >
                {/* Estilo del chip (glassmorphism oscuro como en la imagen) */}
                <span className="inline-flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-xs md:text-sm 
                                text-white 
                               ring-1 ring-white/10 backdrop-blur-md 
                               transition-transform hover:scale-105">
                  {c.color && (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                  )}
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA derecha (sticky) */}
        <div className="relative">
          {/* Hacemos sticky el contenido del CTA */}
          <div className="sticky top-24">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Listo para probarlo
            </h3>
            <p className="mt-3 text-white/70 max-w-xs text-base md:text-lg">
              Seleccionado por origen y tostado con precisión. Diseñado para
              tazas consistentes.
            </p>
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full 
                         bg-orange-600 hover:bg-orange-500 
                         text-white px-6 py-3 font-semibold transition-all
                         transform hover:scale-105"
            >
              {ctaLabel}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mini tabla
        Añadimos un 'mt-16' o 'mt-24' para separarlo de la sección de arriba
      */}
      <div className="mt-20 md:mt-24 lg:mt-32">
        {specTitle && (
          <h4 className="mb-3 text-xs tracking-widest uppercase text-white/70">
            {specTitle}
          </h4>
        )}

        {/* Contenedor de la tabla (coincide con el diseño de la imagen) */}
        <div className="rounded-lg overflow-hidden border border-white/10  backdrop-blur-md">
          {/* Borde superior naranja */}
          
          
          {/* Grid de 5 columnas en desktop, 1 en móvil */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10">
            {groups.map((g, gi) => (
              <div
                key={g.heading + gi}
                className=" p-4 md:p-5 flex flex-col gap-4" // Más gap
              >
                {/* Encabezado de columna con punto naranja */}
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-widest uppercase text-white/60">
                    {g.heading}
                  </p>
                  <span className="ml-3 inline-block h-2.5 w-2.5 rounded-full bg-orange-600" />
                </div>
                
                {/* Lista de specs */}
                <ul className="space-y-2.5"> {/* Más espacio entre items */}
                  {g.items.map((it, ii) => (
                    <li
                      key={it.label + ii}
                      // Quitamos el borde horizontal para que coincida con la imagen
                      className="flex items-start justify-between gap-4"
                    >
                      <span className="text-sm text-white/70 whitespace-nowrap">{it.label}</span>
                      <span className="text-sm md:text-base text-white font-medium text-right">
                        {it.value}
                        {it.hint && (
                          <span className="block text-[11px] font-normal text-white/60">
                            {it.hint}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Borde inferior naranja (no se ve en la foto, pero es simétrico) */}
          
        </div>
      </div>
    </section>
  );
}