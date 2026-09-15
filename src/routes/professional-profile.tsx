import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/professional-profile")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Avionics Engineer Profile — Yallaling" },
      { name: "description", content: "Meet Yallaling, an avionics embedded software engineer in Bengaluru working with C, Ada, DO-178C, V&V, LDRA and Polyspace." },
      { name: "keywords", content: "avionics engineer, embedded software engineer, DO-178C engineer, V&V engineer, aerospace software engineer" },
      { property: "og:title", content: "Avionics Engineer Profile — Yallaling" },
      { property: "og:description", content: "Professional avionics profile focused on embedded development, DO-178C, and V&V." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/professional-profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/professional-profile" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yallaling",
        jobTitle: "Avionics - Embedded Software Engineer",
        address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
        sameAs: ["https://www.linkedin.com/in/yallaling03/", "https://github.com/Sensationa", "https://www.codechef.com/users/yallaling143"],
        knowsAbout: ["Avionics Software", "Embedded Software", "DO-178C", "Verification and Validation", "C", "C++", "Embedded C", "Ada", "LDRA", "Polyspace"],
      }),
    }],
  }),
  component: ProfessionalProfile,
});

const focusAreas = [
  "Embedded software development for avionics and aerospace applications",
  "DO-178C software development and verification practices",
  "Verification & Validation, static analysis, and code verification",
  "Software quality, safety, reliability, and system performance collaboration",
];

function ProfessionalProfile() {
  return <main className="min-h-screen px-5 py-8 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6" aria-label="Profile navigation">
        <Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Portfolio</Link></Button>
        <Button variant="signal" asChild><a href="https://www.linkedin.com/in/yallaling03/" target="_blank" rel="noreferrer"><Linkedin /> Open LinkedIn <ArrowUpRight /></a></Button>
      </nav>

      <header className="grid gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <p className="technical-label text-xs text-primary">Professional profile</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">Yallaling</h1>
          <p className="mt-4 font-display text-xl text-primary md:text-3xl">Avionics — Embedded Software Engineer</p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">B.E. Computer Science and Engineering graduate with professional experience in aerospace and defence software development. Skilled in C, C++, Embedded C, and Ada, with experience in avionics software development, Verification & Validation, and DO-178C processes.</p>
        </div>
        <aside className="panel signal-border rounded-md p-7">
          <p className="technical-label text-xs text-muted-foreground">Current position</p>
          <BriefcaseBusiness className="mt-6 size-8 text-primary" />
          <h2 className="mt-4 font-display text-xl font-semibold">TECLEVER SOLUTIONS PVT. LTD.</h2>
          <p className="mt-2 text-sm text-primary">Apr 2026 — Present</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Bengaluru, Karnataka, India</div>
        </aside>
      </header>

      <section className="grid gap-6 border-y border-border py-14 lg:grid-cols-2">
        <article className="panel rounded-md p-7">
          <p className="technical-label text-xs text-primary">Engineering focus</p>
          <h2 className="mt-4 font-display text-3xl font-semibold">Safety-critical software</h2>
          <ul className="mt-7 space-y-4">{focusAreas.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
        </article>
        <article className="panel signal-border rounded-md p-7">
          <p className="technical-label text-xs text-primary">Professional project</p>
          <ShieldCheck className="mt-6 size-8 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-semibold">LRLACM-02</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Contributing to embedded software development and V&V for an aerospace and defence application using C, Embedded C, and Ada. Applying DO-178C practices and using LDRA and Polyspace for static analysis, code verification, and software quality activities.</p>
        </article>
      </section>

      <section className="py-14">
        <p className="technical-label text-xs text-primary">Core expertise</p>
        <div className="mt-6 flex flex-wrap gap-3">{["C", "C++", "Embedded C", "Ada", "Avionics Software", "Safety-Critical Software", "DO-178C", "V&V", "LDRA", "Polyspace"].map((item) => <span key={item} className="rounded-sm border border-primary/30 bg-primary/5 px-3 py-2 font-display text-sm text-primary">{item}</span>)}</div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-border py-10">
        <div><p className="font-display text-xl font-semibold">Connect professionally</p><p className="mt-1 text-sm text-muted-foreground">Avionics, embedded systems, aerospace and defence software opportunities.</p></div>
        <div className="flex flex-wrap gap-3"><Button variant="console" asChild><a href="mailto:ybhsathkhed@gmail.com"><Mail /> Email</a></Button><Button variant="signal" asChild><a href="https://www.linkedin.com/in/yallaling03/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button></div>
      </footer>
    </div>
  </main>;
}