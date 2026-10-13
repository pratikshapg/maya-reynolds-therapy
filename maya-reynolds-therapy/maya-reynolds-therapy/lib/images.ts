// Central image map. Placeholders are SVGs in /public/images.
// To use real photos: drop the files into /public/images and change the paths below
// (e.g. "/images/office-1.jpg"). Maya's portrait and the three office photos
// (from her profile's Drive folder) are the most important to swap.
export const images = {
  portrait: "/images/maya-portrait.svg",
  heroMain: "/images/hero-main.svg",
  heroSecondary: "/images/hero-secondary.svg",
  intro: "/images/intro-nature.svg",
  whoProfessionals: "/images/who-professionals.svg",
  whoCreatives: "/images/who-creatives.svg",
  whoPast: "/images/who-past.svg",
  howIWork: "/images/how-i-work.svg",
  serviceAnxiety: "/images/service-anxiety.svg",
  serviceTrauma: "/images/service-trauma.svg",
  serviceBurnout: "/images/service-burnout.svg",
  office1: "/images/office-1.svg",
  office2: "/images/office-2.svg",
  office3: "/images/office-3.svg",
} as const;

export type ImageKey = keyof typeof images;
