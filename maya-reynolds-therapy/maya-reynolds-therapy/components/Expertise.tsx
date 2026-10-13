import { Section } from "./ui";
import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
          You deserve a place to be heard.{" "}
          <span className="italic text-secondary">
            Nothing is too heavy to bring into the room.
          </span>
        </h2>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Areas of expertise
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 font-display text-2xl italic md:text-3xl">
          {expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
