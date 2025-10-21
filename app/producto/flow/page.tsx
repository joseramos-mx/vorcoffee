import { AddToCart } from '@/components/addtocart';

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">VOR FLOW — 250 g</h1>
      <p>$229 MXN</p>
      <AddToCart sku="VOR-FLOW-250G" />
      <a href="/carrito" className="underline">Ver carrito</a>
    </main>
  );
}
