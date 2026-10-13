import { Photo, Section } from "./ui";
import { site } from "@/lib/content";

export default function Cta() {
  return (
    <Section id="contact">
      <div className="grid items-center overflow-hidden rounded-[2rem] bg-primary text-primary-foreground md:grid-cols-2">
        <div className="p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Start therapy in Santa Monica, CA
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
            Find a therapist who understands the{" "}
            <span className="italic text-secondary">pace of your life</span>.
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/90">
            Reaching out is a meaningful first step. Come into my Santa Monica office or meet by
            secure telehealth from anywhere in California, whichever feels best for you.
          </p>
          <div className="mt-8">
            <a
              href={site.contactHref}
              className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary transition-colors hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Book a session with Dr. Reynolds
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]">
          <Photo
            name="heroSecondary"
            alt="Green leaves in soft light, a welcoming invitation to begin"
          />
        </div>
      </div>
    </Section>
  );
}
