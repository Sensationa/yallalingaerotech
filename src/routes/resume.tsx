import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Award, BriefcaseBusiness, CheckCircle2, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeAsset from "@/assets/Yallaling-Resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Avionics Engineer Resume — Yallaling" },
      { name: "description", content: "Yallaling’s avionics engineer resume: embedded C and Ada, DO-178C, V&V, LDRA, Polyspace, experience, education and certifications." },
      { name: "keywords", content: "avionics engineer resume, embedded software engineer resume, DO-178C resume, V&V engineer, C Ada engineer" },
      { property: "og:title", content: "Avionics Engineer Resume — Yallaling" },
      { property: "og:description", content: "Embedded avionics experience, DO-178C and V&V skills, education, and certifications." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://avionics-code-haven.lovable.app/resume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://avionics-code-haven.lovable.app/resume" }],
  }),
  component: ResumePage,
});

const skillGroups = [
  ["Programming Languages", "C, C++, Embedded C, Ada, Java, JavaScript, SQL, HTML5, CSS"],
  ["Embedded & Avionics", "Embedded Systems, Avionics Software, UAV, Safety-Critical Software, DO-178C, MISRA C"],
  ["Verification & Validation", "V&V, Software Requirements, Software Verification, Software Validation, Software Testing, Static Analysis"],
  ["Verification & Analysis Tools", "LDRA, Polyspace for C/C++, Polyspace for Ada, AdaMulti, Understand"],
  ["Development Tools", "Git, GitHub, MATLAB, VS Code, IntelliJ IDEA, CLion, Geany, Android Studio"],
];

const roles = [
  { title: "Avionics — Embedded Software Engineer", company: "TECLEVER SOLUTIONS PVT. LTD.", date: "Apr 2026 — Present", bullets: ["Developed and validated embedded software for avionics and aerospace applications using C, Embedded C, and Ada.", "Contributed to LRLACM-02 through embedded software development and Verification & Validation activities.", "Applied DO-178C software development and verification practices for safety-critical avionics software.", "Used LDRA and Polyspace for static analysis, code verification, and software quality activities.", "Collaborated with cross-functional teams to support quality, safety, reliability, and system performance."] },
  { title: "Full Stack Web Development Intern", company: "Webbers Labs Technologies", date: "Feb 2025 — May 2025", bullets: ["Developed and maintained full-stack features using Java, HTML, CSS, JavaScript, and SQL.", "Built and improved UI pages, integrated backend APIs, and resolved bugs, reducing UI issues by approximately 30%.", "Enhanced responsive design and collaborated in deployment cycles."] },
];

function ResumePage() {
  return <main className="min-h-screen px-5 py-8 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6" aria-label="Resume navigation">
        <Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Portfolio</Link></Button>
        <div className="flex flex-wrap gap-3"><Button variant="console" asChild><a href={resumeAsset.url} target="_blank" rel="noopener noreferrer"><ArrowRight /> View PDF</a></Button><Button variant="signal" asChild><a href={resumeAsset.url} download="Yallaling-Resume.pdf"><Download /> Download PDF</a></Button></div>
      </nav>

      <header className="py-14 md:py-20">
        <p className="technical-label text-xs text-primary">Resume / Curriculum vitae</p>
        <h1 className="mt-4 font-display text-5xl font-semibold md:text-7xl">Yallaling</h1>
        <p className="mt-3 font-display text-xl text-primary md:text-2xl">Avionics — Embedded Software Engineer | Aerospace & Defence</p>
        <p className="mt-6 max-w-4xl text-base leading-8 text-muted-foreground">B.E. graduate in Computer Science and Engineering with professional experience in aerospace and defence software development. Skilled in C, C++, Embedded C, and Ada, with experience in avionics software development, Verification and Validation, and DO-178C software development and verification processes.</p>
      </header>

      <ResumeSection icon={BriefcaseBusiness} label="Experience" title="Professional experience">
        <div className="mb-5 flex justify-end"><Button variant="console" asChild><Link to="/career"><BriefcaseBusiness /> Full career timeline <ArrowRight /></Link></Button></div>
        <div className="space-y-5">{roles.map((role, index) => <article key={role.company} className={`panel rounded-md p-6 md:p-8 ${index === 0 ? "signal-border" : ""}`}><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-display text-xl font-semibold">{role.title}</h3><p className="mt-1 text-sm text-primary">{role.company}</p></div><span className="font-display text-xs text-muted-foreground">{role.date}</span></div><ul className="mt-6 space-y-3">{role.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{bullet}</li>)}</ul></article>)}</div>
      </ResumeSection>

      <ResumeSection icon={GraduationCap} label="Education" title="Academic foundation">
        <div className="grid gap-4 md:grid-cols-3">{[
          ["Dayananda Sagar College of Engineering, Bangalore", "B.E. Computer Science and Engineering", "Dec 2021 — May 2025 · CGPA 8.3"],
          ["Alvas PU College", "II PUC — Science (PCMB)", "2020 — 2021 · 91.15%"],
          ["Mahalaxmi High School", "SSLC / 10th Standard", "2018 — 2019 · 88.48%"],
        ].map(([school, course, result]) => <article key={school} className="panel rounded-md p-5"><h3 className="font-display font-semibold">{school}</h3><p className="mt-3 text-sm text-muted-foreground">{course}</p><p className="mt-4 text-sm text-primary">{result}</p></article>)}</div>
      </ResumeSection>

      <ResumeSection icon={CheckCircle2} label="Skills" title="Technical skills">
        <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">{skillGroups.map(([title, items]) => <div key={title} className="bg-card p-5"><dt className="font-display font-semibold text-primary">{title}</dt><dd className="mt-3 text-sm leading-6 text-muted-foreground">{items}</dd></div>)}</dl>
      </ResumeSection>

      <ResumeSection icon={Award} label="Credentials" title="Certifications & achievements">
        <div className="grid gap-4 md:grid-cols-2">{["Cyber Security Certification — C-DAC (Information Security, Network Security)", "Database Management System Certification — Infosys Springboard (SQL, Relational Databases)", "C++ Programming Certification — Udemy (OOP, Data Structures)", "AWS Cloud Practitioner Course — Cloud Institution (Cloud Fundamentals)", "Secured 10th place in DSCE Coding Bootcamp", "Solved 500+ DSA problems across LeetCode, CodeChef, and GeeksforGeeks"].map((item) => <div key={item} className="panel flex gap-3 rounded-md p-5 text-sm leading-6"><Award className="mt-1 size-4 shrink-0 text-warning" />{item}</div>)}</div>
      </ResumeSection>

    </div>
  </main>;
}

function ResumeSection({ icon: Icon, label, title, children }: { icon: typeof Award; label: string; title: string; children: ReactNode }) {
  return <section className="border-t border-border py-14"><div className="mb-8 flex items-center gap-4"><span className="grid size-10 place-items-center rounded-sm border border-primary/40 bg-primary/10"><Icon className="size-5 text-primary" /></span><div><p className="technical-label text-[10px] text-primary">{label}</p><h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">{title}</h2></div></div>{children}</section>;
}