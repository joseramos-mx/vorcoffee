import Link from "next/link";

export default function GridButtons() {
  const items = [
    { href: "/docs",  label: "Get a Demo" },
    { href: "/start", label: "npx create-payload-app" },
    { href: "/api",   label: "Explore the API" },
  ];

  return (
    <section className="relative grid-shell mx-auto max-w-5xl px-4 py-10 text-white">
      {/* Título queda por encima del grid */}
      <h2 className="relative z-10 mb-6 text-4xl font-semibold">
        The backend to build the modern web.
      </h2>

      <div className="relative z-10 grid gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="btn-grid rounded-2xl border border-white/10 px-4 py-4
                       hover:border-white/30 transition-colors"
          >
            <div className="roll">
              <div className="roll-inner">
                <span className="block text-sm font-medium tracking-wide">{it.label}</span>
                <span className="block text-sm font-medium tracking-wide">{it.label}</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-white/60">
              Open-source • Headless • TypeScript
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
