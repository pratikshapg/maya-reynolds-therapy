import { Photo, Section } from "./ui";
import { whoIHelp } from "@/lib/content";
import type { ImageKey } from "@/lib/images";

export default function WhoIHelp() {
  return (
    <Section>
      <h2 className="h-display text-center text-4xl md:text-5xl">
        Who I <span className="accent-word">help</span>
      </h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {whoIHelp.map((item) => (
          <article key={item.title}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <Photo name={item.image as ImageKey} alt={item.alt} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium text-primary">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
