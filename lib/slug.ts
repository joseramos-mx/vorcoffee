// lib/slug.ts
export function slugify(input: string) {
    return input
      .normalize("NFD")                   // separa acentos
      .replace(/[\u0300-\u036f]/g, "")    // quita diacríticos
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")        // todo lo demás -> guión
      .replace(/(^-|-$)/g, "");           // trim de guiones
  }
  