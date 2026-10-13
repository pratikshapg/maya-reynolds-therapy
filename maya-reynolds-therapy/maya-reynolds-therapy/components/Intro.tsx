import { Photo, Section } from "./ui";

export default function Intro() {
  return (
    <Section className="bg-secondary/60">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h-display text-4xl md:text-5xl">
          You look like you&apos;re handling it all.{" "}
          <span className="accent-word">Inside, you may be exhausted.</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Many of the adults I see in Santa Monica appear &ldquo;functional&rdquo; on the outside
          while quietly struggling with constant worry, tension in the body, difficulty sleeping,
          or a feeling of always bracing for something to go wrong.
        </p>
      </div>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl">
          <Photo name="intro" alt="A quiet path with soft light, suggesting rest and reflection" />
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          That experience is real, and it deserves care. Therapy with me is a place to slow down,
          make sense of what you&apos;re carrying, and understand both the emotional and the
          physical sides of stress, so you can feel more at ease in your mind and in your body.
        </p>
      </div>
    </Section>
  );
}
