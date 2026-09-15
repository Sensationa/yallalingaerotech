import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, CheckCircle2, Radar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/aerospace-defence-software")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Aerospace & Defence Software Engineer | Yallaling" },
    { name: "description", content: "Avionics and defence software expertise in embedded C, Ada, DO-178C, V&V, static analysis, LDRA and Polyspace from engineer Yallaling." },
    { property: "og:title", content: "Aerospace & Defence Software Engineer | Yallaling" },
    { property: "og:description", content: "Embedded avionics, DO-178C, V&V, LDRA, and Polyspace experience for aerospace and defence software." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/aerospace-defence-software" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/aerospace-defence-software" }] }),
  component: AerospacePage,
});

const disciplines = [
  ["Embedded avionics development", "C, Embedded C, and Ada applied to avionics and aerospace software development and validation."],
  ["DO-178C practices", "Software development and verification practices supporting safety-critical avionics software quality."],
  ["Verification & Validation", "Software requirements, verification, validation, testing, static analysis, and code verification activities."],
  ["Analysis toolchain", "LDRA and Polyspace for C/C++ and Ada, supported by AdaMulti and Understand experience."],
];

function AerospacePage() {
  return <main className="min-h-screen px-5 py-8 lg:px-8"><div className="mx-auto max-w-6xl">
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6"><Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Portfolio</Link></Button><Button variant="console" asChild><Link to="/blog"><BookOpen /> Technical blog</Link></Button></nav>
    <header className="py-16 md:py-24"><div className="flex items-center gap-3 text-primary"><Radar className="size-6" /><p className="technical-label text-xs">Aerospace & defence software</p></div><h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-tight md:text-7xl">Avionics engineering built around <span className="text-primary">verification.</span></h1><p className="mt-7 max-w-4xl text-lg leading-8 text-muted-foreground">I am an Avionics — Embedded Software Engineer in Bengaluru with professional aerospace and defence experience. My work combines embedded development in C, Embedded C, and Ada with DO-178C practices, Verification & Validation, static analysis, and code verification.</p></header>
    <section className="grid gap-5 border-y border-border py-14 md:grid-cols-2">{disciplines.map(([title, text], index) => <article key={title} className={`panel rounded-md p-7 ${index === 1 ? "signal-border" : ""}`}><span className="technical-label text-[10px] text-primary">Capability 0{index + 1}</span><h2 className="mt-4 font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-muted-foreground">{text}</p></article>)}</section>
    <section className="grid gap-8 py-14 lg:grid-cols-[1fr_0.85fr]"><div><p className="technical-label text-xs text-primary">Professional application</p><h2 className="mt-4 font-display text-3xl font-semibold">LRLACM-02 avionics software</h2><p className="mt-5 leading-8 text-muted-foreground">At TECLEVER SOLUTIONS PVT. LTD., I contribute to LRLACM-02 through embedded software development and V&V activities. The work includes DO-178C development and verification practices, static analysis, code verification, debugging, and software validation using LDRA and Polyspace.</p></div><aside className="panel signal-border rounded-md p-7"><ShieldCheck className="size-7 text-primary" /><h2 className="mt-4 font-display text-2xl font-semibold">Recruiter snapshot</h2><ul className="mt-5 space-y-3">{["Avionics embedded software engineer", "Aerospace and defence experience", "C, C++, Embedded C, and Ada", "DO-178C and V&V knowledge", "LDRA and Polyspace experience"].map((x) => <li key={x} className="flex gap-3 text-sm text-muted-foreground"><CheckCircle2 className="size-4 shrink-0 text-primary" />{x}</li>)}</ul><Button className="mt-7" variant="signal" asChild><Link to="/resume">View avionics resume</Link></Button></aside></section>
  </div></main>;
}