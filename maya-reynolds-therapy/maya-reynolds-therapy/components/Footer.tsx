import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-medium text-primary">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Anxiety, trauma, and burnout therapy for adults, in Santa Monica, CA and by secure
            telehealth across California.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Navigate</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-foreground hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Office</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground">{site.address}</p>
          <p className="mt-3 text-sm text-muted">In person &amp; telehealth (California)</p>
        </address>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Website draft.
      </div>
    </footer>
  );
}
