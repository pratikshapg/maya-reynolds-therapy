import { Button, Photo, Section } from "./ui";
import { site } from "@/lib/content";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl">
            <Photo name="portrait" alt="Portrait of Dr. Maya Reynolds, PsyD" />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">About Dr. Maya Reynolds, PsyD</p>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">
            A licensed clinical psychologist for{" "}
            <span className="accent-word">overwhelmed, high-achieving</span> adults.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering
              therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects
              of past experiences. Many of the people I work with are high-achieving, thoughtful,
              and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally
              on edge.
            </p>
            <p>
              My work often focuses on anxiety, panic, trauma, and burnout. Trauma work is an
              important part of my practice. I support adults with single-incident trauma as well as
              more complex, long-standing patterns, always paced carefully with an emphasis on
              safety and stabilization.
            </p>
            <p>
              If you want a therapist who combines practical tools with depth-oriented work, and who
              understands the realities of living and working in a fast-paced environment, I may be
              a good fit.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-primary">
            {["CBT", "EMDR", "Mindfulness-based practices", "Body-oriented techniques"].map((m) => (
              <li key={m} className="rounded-full border border-border bg-surface px-4 py-2">
                {m}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={site.contactHref}>Work with Dr. Reynolds</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
