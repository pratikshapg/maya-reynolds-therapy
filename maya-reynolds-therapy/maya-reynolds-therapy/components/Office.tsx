import { Photo, Section } from "./ui";
import { officeDetails, site } from "@/lib/content";

// NEW SECTION (not in the original template): "Our Office"
export default function Office() {
  return (
    <Section id="office" className="bg-secondary/60">
      <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <p className="eyebrow">Our office · Santa Monica, CA</p>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">
            A calm space to <span className="accent-word">exhale</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding,
            with natural light and a comfortable, uncluttered environment. Clients often share that
            the space itself helps them feel more at ease when they arrive.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Prefer to meet from home? I also offer secure telehealth sessions for clients located
            in California.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {officeDetails.map((d) => (
              <li
                key={d}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-primary"
              >
                {d}
              </li>
            ))}
          </ul>

          <address className="mt-8 not-italic">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Find us</p>
            <p className="mt-2 text-foreground">{site.address}</p>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-3">
          <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-3xl">
            <Photo
              name="office1"
              alt="Dr. Reynolds' therapy office in Santa Monica with natural light"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <Photo name="office2" alt="Comfortable seating in the counseling room" />
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <Photo name="office3" alt="A calm, uncluttered corner of the Santa Monica office" />
          </div>
        </div>
      </div>
    </Section>
  );
}
