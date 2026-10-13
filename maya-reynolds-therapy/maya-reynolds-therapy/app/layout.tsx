import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist offering anxiety, trauma (EMDR) and burnout therapy for adults in Santa Monica, CA, in person or by secure telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica CA",
    "EMDR Santa Monica",
    "burnout therapy",
    "clinical psychologist Santa Monica",
    "telehealth therapy California",
  ],
  openGraph: {
    title: "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
    description:
      "Dr. Maya Reynolds, PsyD helps adults ease anxiety, heal from trauma, and recover from burnout. In person in Santa Monica or online across California.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist offering anxiety, trauma, and burnout therapy for adults in Santa Monica, CA.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: "California",
  medicalSpecialty: "Psychology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
