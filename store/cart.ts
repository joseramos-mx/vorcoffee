// store/cart.ts
import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '@/lib/prices';

type CartState = {
  items: CartItem[];
  add: (sku: CartItem['sku'], qty?: number) => void;
  remove: (sku: CartItem['sku']) => void;
  clear: () => void;
};

// (opcional) si usas persist, puedes declarar el tuple de middlewares
type WithPersist = [['zustand/persist', unknown]];

// Creador tipado
const cartCreator: StateCreator<CartState, WithPersist> = (set, get) => ({
  items: [],
  add: (sku, qty = 1) => {
    const items = [...get().items];
    const i = items.findIndex(x => x.sku === sku);
    if (i >= 0) items[i].qty += qty;
    else items.push({ sku, qty });
    set({ items });
  },
  remove: (sku) => set({ items: get().items.filter(i => i.sku !== sku) }),
  clear: () => set({ items: [] }),
});

export const useCart = create<CartState>()(
  persist<CartState>(cartCreator, { name: 'vor-cart' })
);
