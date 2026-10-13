import { Button, Photo, Section } from "./ui";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">In-person in Santa Monica &amp; online across California</p>
          <h1 className="h-display mt-5 text-5xl md:text-6xl lg:text-7xl">
            Anxiety &amp; trauma therapy in Santa Monica, CA, to help you{" "}
            <span className="accent-word">feel steady</span> again.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist who helps adults ease
            anxiety, heal from trauma, and recover from burnout, with warm, grounded,
            evidence-based care.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.contactHref}>Book a session</Button>
            <Button href="#services" variant="outline">
              Explore therapy services
            </Button>
          </div>
        </div>

        <div className="relative grid grid-cols-5 gap-4">
          <div className="col-span-3 aspect-[3/4] overflow-hidden rounded-3xl">
            <Photo
              name="heroMain"
              alt="Soft natural light falling across a calm, grounded space"
              priority
            />
          </div>
          <div className="col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
            <Photo name="heroSecondary" alt="Green leaves in gentle morning light" priority />
          </div>
        </div>
      </div>
    </Section>
  );
}
