export const PRICE_MAP: Record<string, { priceId: string; name: string }> = {
    'VOR-FLOW-250G': { priceId: 'price_1SKPKb25r9IMP8i8UdblJH6Y', name: '(250gr) VOR Coffee Special' },
  };
  export type CartItem = { sku: keyof typeof PRICE_MAP; qty: number };
  