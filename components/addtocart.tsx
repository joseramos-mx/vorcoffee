'use client';

import { useState } from 'react';
import { useCart } from '@/store/cart';
import type { CartItem } from '@/lib/prices';

type Props = {
  sku: CartItem['sku'];
  defaultQty?: number;
  className?: string;
};

export function AddToCart({ sku, defaultQty = 1, className }: Props) {
  const add = useCart(s => s.add);
  const [qty, setQty] = useState(defaultQty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onAdd = () => {
    setLoading(true);
    // límite sano 1–10
    const safe = Math.max(1, Math.min(qty, 10));
    add(sku, safe);
    setLoading(false);
    setDone(true);
    // feedback breve
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <label className="sr-only" htmlFor={`qty-${sku}`}>Cantidad</label>
      <input
        id={`qty-${sku}`}
        type="number"
        min={1}
        max={10}
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="w-16 rounded border px-2 py-2 text-center"
      />
      <button
        onClick={onAdd}
        disabled={loading}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-60"
        aria-live="polite"
      >
        {loading ? 'Agregando…' : (done ? 'Añadido ✓' : 'Agregar')}
      </button>
    </div>
  );
}
