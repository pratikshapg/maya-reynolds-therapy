import type { ReactNode } from "react";
import { images, type ImageKey } from "@/lib/images";

/** Consistent page container + vertical rhythm for every section. */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** Single place images are rendered, so they can be swapped via lib/images.ts. */
export function Photo({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: ImageKey;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={images[name]}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export function Button({
  href,
  children,
  variant = "accent",
}: {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline";
}) {
  const styles =
    variant === "accent"
      ? "bg-accent text-accent-foreground hover:bg-primary"
      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${styles}`}
    >
      {children}
    </a>
  );
}
