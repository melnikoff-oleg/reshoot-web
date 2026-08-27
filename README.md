# ReShoot.Start landing page

A conversion-focused rebuild of the public ReShoot.Start course page. It is a
static Next.js application designed for Vercel, with the original products,
prices, media, testimonials, legal operator details, and existing login-based
purchase handoff preserved.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm test
npm audit
```

`npm test` runs the content/conversion contract tests and a full typed Next.js
production build. All public routes are statically prerendered.

## Checkout handoff

By default, Basic and Premium buttons continue to the existing ReShoot login
flow. After processor approval and checkout testing, direct hosted checkout URLs
can be supplied through:

```bash
NEXT_PUBLIC_BASIC_CHECKOUT_URL=https://...
NEXT_PUBLIC_PREMIUM_CHECKOUT_URL=https://...
```

Copy `.env.example` to `.env.local` for local use, or add the variables in the
Vercel project settings. Do not commit live secrets; hosted checkout URLs are
public values, while Stripe secret keys must never be exposed with a
`NEXT_PUBLIC_` prefix.

## Key files

- `app/page.tsx` — landing-page structure and conversion flow
- `app/interactive.tsx` — age gate, consent notice, testimonials, FAQ, mobile CTA
- `lib/site-content.mjs` — products, curriculum, proof, testimonials, FAQ, URLs
- `app/*-policy/page.tsx` and `app/terms-and-conditions/page.tsx` — legal pages
- `research/summary.md` — audience, content, budget, offer, and compliance findings
- `tests/` — product, pricing, proof, safety, and legal regression contracts

## Vercel

Import the directory as a Next.js project. The standard commands are already
configured (`next build` and `next start`); no database or server-only runtime
variables are required for the landing page.
