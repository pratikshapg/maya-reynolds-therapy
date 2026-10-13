import { Section } from "./ui";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <Section id="faqs">
      <div className="mx-auto max-w-3xl">
        <h2 className="h-display text-center text-4xl md:text-5xl">
          Questions about therapy in <span className="accent-word">Santa Monica</span>
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between gap-6">
                <h3 className="font-display text-2xl font-medium text-primary">{f.q}</h3>
                <span
                  aria-hidden
                  className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xl text-accent transition-transform"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
