import { Photo, Section } from "./ui";
import { services } from "@/lib/content";
import type { ImageKey } from "@/lib/images";

export default function Services() {
  return (
    <Section id="services" className="bg-secondary/60">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Therapy services in Santa Monica, CA</p>
        <h2 className="h-display mt-4 text-4xl md:text-5xl">
          Honoring where you&apos;ve been, <span className="accent-word">shaping</span> where
          you&apos;re headed.
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Photo name={s.image as ImageKey} alt={s.alt} />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-2xl font-medium text-primary">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
              <a
                href={s.href}
                className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                Learn more
                <span className="sr-only"> about {s.title}</span> →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
