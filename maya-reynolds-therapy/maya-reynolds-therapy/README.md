# Dr. Maya Reynolds, PsyD: Therapy Website (Draft)

Next.js (App Router) + Tailwind CSS v4. Cloned from the Conejo Valley Family Counseling homepage layout, redesigned with a new theme, copy, and an added "Our Office" section based on Dr. Maya Reynolds' profile.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Deploy

Push to a public GitHub repo, then import it on [Vercel](https://vercel.com/new) (framework auto-detected, no settings needed).

## Where things live

| What | File |
| --- | --- |
| Colors / theme tokens | `app/globals.css` (`:root` block) |
| All copy (services, FAQs, etc.) | `lib/content.ts` |
| Images | `lib/images.ts` + `public/images/` |
| Section order | `app/page.tsx` |
| SEO metadata + structured data | `app/layout.tsx` |

## Before submitting: things to swap

1. **Images.** `public/images/*.svg` are placeholders. Replace them with real photos:
   - Maya's portrait, and the 3 office photos (from the Drive folder in her profile) are required.
   - Add the files to `public/images/` and update the paths in `lib/images.ts`.
2. **Contact link.** `contactHref` in `lib/content.ts` is `#contact`. The profile has no email or phone, so point it at a booking link or `mailto:` if you have one.
3. **Alt text.** Update alt text in `lib/content.ts` and the components to match the real photos.

## Theme

| Role | Color | Hex |
| --- | --- | --- |
| Primary | Deep sage green | `#2F4A43` |
| Secondary | Warm sand | `#E9DFCF` |
| Accent | Terracotta clay | `#A9553A` |
| Background | Soft cream | `#F7F2EA` |

Text/background pairs were chosen for at least WCAG AA contrast (4.5:1).
