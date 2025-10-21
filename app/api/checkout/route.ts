import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRICE_MAP } from '@/lib/prices';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { items } = await req.json() as { items: { sku: keyof typeof PRICE_MAP; qty: number }[] };

  const line_items = items.map(({ sku, qty }) => {
    const ref = PRICE_MAP[sku];
    if (!ref) throw new Error('Invalid SKU');
    return { price: ref.priceId, quantity: Math.max(1, Math.min(qty, 10)) };
  });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    billing_address_collection: 'required',
    shipping_address_collection: { allowed_countries: ['MX', 'US', 'CA'] },
    success_url: `${process.env.SITE_URL}/checkout/success?sid={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.SITE_URL}/carrito`
  });

  return NextResponse.json({ url: session.url });
}
