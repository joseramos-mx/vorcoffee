"use client";

import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slug";

type Props = {
  href: string;
  img: string;
  title: string;
  note?: string;
  idOverride?: string; // opcional: permite pasar un id estable desde fuera
};

export default function RecipeThumbBottom({
  href,
  img,
  title,
  note,
  idOverride,
}: Props) {
  // ID determinista e idéntico en SSR/CSR
  const tipId = idOverride ?? `tip-${slugify(title)}`;

  return (
    <li className="group relative hover:scale-110 transition-all duration-300">
      <Link
        href={href}
        className="block focus:outline-none"
        aria-describedby={tipId}
      >
        <Image
          src={img}
          alt={title}
          width={50}
          height={50}
          className="object-cover rounded-full aspect-square"
        />
      </Link>

      {/* Tooltip: debajo y centrado */}
      <div
        id={tipId}
        role="tooltip"
        className="
          pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2
          w-max max-w-[220px]
          rounded-2xl bg-black/80 text-white backdrop-blur-2xl border
          px-3 py-2 shadow-lg
          opacity-0 -translate-y-1 scale-95
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
          group-focus-within:opacity-100 group-focus-within:translate-y-0
          z-50
        "
      >
        <p className="text-xs font-semibold leading-tight">{title}</p>
        {note && <p className="text-[11px] opacity-80">{note}</p>}
        <span
          className="
            absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 rotate-45 "
          aria-hidden="true"
        />
      </div>
    </li>
  );
}
