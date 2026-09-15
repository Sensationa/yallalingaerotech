import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/career")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Avionics Engineering Career — Yallaling" },
    { name: "description", content: "Yallaling’s career timeline in avionics embedded software and full-stack development, with dates, responsibilities, DO-178C, V&V and tools." },
    { property: "og:title", content: "Avionics Engineering Career — Yallaling" },
    { property: "og:description", content: "Career timeline covering embedded avionics, DO-178C, V&V, and software development." },
    { property: "og:type", content: "profile" }, { property: "og:url", content: "/career" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/career" }] }),
  component: CareerPage,
});

const timeline = [
  { date: "Apr 2026 — Present", role: "Avionics — Embedded Software Engineer", company: "TECLEVER SOLUTIONS PVT. LTD.", current: true, tech: ["C", "Embedded C", "Ada", "DO-178C", "V&V", "LDRA", "Polyspace"], responsibilities: ["Develop and validate embedded software for avionics and aerospace applications.", "Contribute to LRLACM-02 through embedded software development and Verification & Validation activities.", "Apply DO-178C development and verification practices for safety-critical avionics software.", "Use LDRA and Polyspace for static analysis, code verification, and software quality activities.", "Collaborate with cross-functional teams to support quality, safety, reliability, and system performance."] },
  { date: "Feb 2025 — May 2025", role: "Full Stack Web Development Intern", company: "Webbers Labs Technologies", current: false, tech: ["Java", "HTML", "CSS", "JavaScript", "SQL"], responsibilities: ["Developed and maintained full-stack features and integrated backend APIs.", "Built and improved UI pages and reduced UI issues by approximately 30% through bug resolution.", "Enhanced responsive design for better user experience.", "Collaborated in deployment cycles."] },
];

function CareerPage() {
  return <main className="min-h-screen px-5 py-8 lg:px-8"><div className="mx-auto max-w-5xl">
    <nav className="border-b border-border pb-6"><Button variant="ghost" asChild><Link to="/resume"><ArrowLeft /> Resume</Link></Button></nav>
    <header className="py-16 md:py-24"><p className="technical-label text-xs text-primary">Career timeline</p><h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold md:text-7xl">From software foundations to <span className="text-primary">avionics assurance.</span></h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">A complete view of my professional experience, responsibilities, and technologies across embedded avionics and full-stack software development.</p></header>
    <section className="relative space-y-8 border-t border-border py-14 before:absolute before:bottom-20 before:left-[19px] before:top-20 before:w-px before:bg-border md:before:left-[31px]">
      {timeline.map((item) => <article key={item.company} className="relative grid gap-6 pl-14 md:grid-cols-[220px_1fr] md:pl-20"><span className={`absolute left-3 top-2 size-4 rounded-full border-2 md:left-6 ${item.current ? "border-primary bg-primary shadow-signal" : "border-muted-foreground bg-background"}`} /><div><p className="font-display text-sm text-primary">{item.date}</p>{item.current && <span className="mt-3 inline-block rounded-sm border border-primary/30 bg-primary/10 px-2 py-1 font-display text-[10px] text-primary">CURRENT</span>}</div><div className={`panel rounded-md p-6 md:p-8 ${item.current ? "signal-border" : ""}`}><Cpu className="size-6 text-primary" /><h2 className="mt-4 font-display text-2xl font-semibold">{item.role}</h2><p className="mt-1 text-sm text-primary">{item.company}</p><ul className="mt-6 space-y-3">{item.responsibilities.map((x) => <li key={x} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{x}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{item.tech.map((x) => <span key={x} className="rounded-sm border border-border bg-secondary px-2.5 py-1 font-display text-xs text-secondary-foreground">{x}</span>)}</div></div></article>)}
    </section>
  </div></main>;
}