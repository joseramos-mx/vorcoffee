'use client';
import { useCart } from '@/store/cart';
import { PRICE_MAP } from '@/lib/prices';

export default function CartPage() {
  const { items, remove, clear } = useCart();
  const subtotal = items.reduce((acc, it) => {
    // si quieres, guarda también el precio en PRICE_MAP para calcular aquí
    return acc + it.qty * 1; // placeholder si no guardas precio
  }, 0);

  const checkout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Carrito</h1>
      <ul className="divide-y">
        {items.map(it => (
          <li key={it.sku} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{PRICE_MAP[it.sku].name}</div>
              <div className="text-sm text-gray-600">Cantidad: {it.qty}</div>
            </div>
            <button onClick={() => remove(it.sku)} className="text-red-600">Quitar</button>
          </li>
        ))}
      </ul>

      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* <div>Subtotal: ${subtotal}</div> */}
          <button onClick={checkout} className="w-full px-4 py-2 rounded bg-black text-white">
            Pagar con Stripe
          </button>
          <button onClick={clear} className="w-full px-4 py-2 rounded border">
            Vaciar carrito
          </button>
        </>
      )}
    </main>
  );
}
