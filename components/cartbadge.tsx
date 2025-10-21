// components/CartPill.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '@/store/cart';

export function CartPill() {
  const items = useCart(s => s.items);
  const count = items.reduce((n, i) => n + i.qty, 0);
  const display = count > 9 ? '9+' : String(count);   // ← tope visual

  return (
    <Link href="/carrito" className="inline-flex items-center gap-2">
      <ShoppingCart size={18} />
      {count > 0 && (
        <span
          className="inline-flex items-center justify-center
                     h-5 min-w-[22px] px-2 rounded-full
                     bg-orange-600 text-white text-xs font-bold tabular-nums"
          aria-label={`Carrito: ${count} artículo(s)`}
          title={`${count} artículo(s)`} /* hint visual */
        >
          {display}
        </span>
      )}
    </Link>
  );
}
