import { Button, Photo, Section } from "./ui";

export default function HowIWork() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-3xl">
          <Photo
            name="howIWork"
            alt="Warm light and soft textures suggesting a collaborative, grounded space"
          />
        </div>
        <div>
          <p className="eyebrow">How I work</p>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">
            Warm, collaborative, and <span className="accent-word">grounded</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Sessions are structured enough to feel supportive, while leaving space for reflection
            and depth. I integrate evidence-based methods such as cognitive-behavioral therapy
            (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I believe therapy works best when you feel respected, understood, and actively involved.
            My goal is not only symptom relief, but helping you build insight, resilience, and a
            stronger relationship with yourself over time.
          </p>
          <div className="mt-8">
            <Button href="#about" variant="outline">
              Learn more about Maya
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
