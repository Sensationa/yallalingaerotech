import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, Award, BookOpen, BriefcaseBusiness, CheckCircle2, ChevronDown,
  Code2, Cpu, Download, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, MapPin, Menu, Phone, Radar, ShieldCheck, Terminal, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroUav } from "@/components/HeroUav";
import { PageAtmosphere } from "@/components/PageAtmosphere";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Avionics Embedded Software Engineer | Yallaling" },
      { name: "description", content: "Yallaling is an avionics embedded software engineer with aerospace and defence experience in C, Ada, DO-178C, V&V, LDRA and Polyspace." },
      { property: "og:title", content: "Avionics Embedded Software Engineer | Yallaling" },
      { property: "og:description", content: "Avionics engineering portfolio covering safety-critical embedded software, DO-178C, and V&V." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avionics-code-haven.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://avionics-code-haven.lovable.app/" }],
  }),
  component: Portfolio,
});

const skills = [
  { title: "Programming Languages", icon: Code2, items: ["C", "C++", "Embedded C", "Ada", "Java", "JavaScript", "SQL", "HTML5", "CSS"] },
  { title: "Embedded & Avionics", icon: Cpu, items: ["Embedded Systems", "Avionics Software", "UAV", "Safety-Critical Software", "DO-178C", "MISRA C"] },
  { title: "Verification & Validation", icon: ShieldCheck, items: ["Verification & Validation (V&V)", "Software Requirements", "Software Verification", "Software Validation", "Software Testing", "Static Analysis"] },
  { title: "Verification & Analysis Tools", icon: Radar, items: ["LDRA", "Polyspace for C/C++", "Polyspace for Ada", "AdaMulti", "Understand"] },
  { title: "Development Tools", icon: Terminal, items: ["Git", "GitHub", "MATLAB", "VS Code", "IntelliJ IDEA", "CLion", "Geany", "Android Studio"] },
  { title: "Core Computer Science", icon: Cpu, items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems", "Computer Networks"] },
];

const experiences = [
  {
    company: "TECLEVER SOLUTIONS PVT. LTD.", role: "Avionics — Embedded Software Engineer", date: "Apr 2026 — Present", current: true,
    tags: ["C", "Embedded C", "Ada", "DO-178C", "LDRA", "Polyspace"],
    bullets: ["Develop and validate embedded software for avionics and aerospace applications.", "Contribute to the LRLACM-02 project through embedded software development and V&V activities.", "Apply DO-178C development and verification practices for safety-critical software.", "Use LDRA and Polyspace for static analysis, code verification, and software quality activities.", "Collaborate across disciplines to support quality, safety, reliability, and performance."],
  },
  {
    company: "Webbers Labs Technologies", role: "Full Stack Web Development Intern", date: "Feb 2025 — May 2025", current: false,
    tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    bullets: ["Developed and maintained full-stack features and integrated backend APIs.", "Built and improved responsive user interface pages.", "Resolved bugs and reduced UI issues by approximately 30%.", "Collaborated in deployment cycles."],
  },
];

const projects = [
  { title: "LRLACM-02", type: "Professional avionics project", professional: true, tags: ["C", "Embedded C", "Ada", "DO-178C", "V&V", "LDRA", "Polyspace"], summary: "Professional aerospace and defence work spanning embedded software development, verification, and validation in a safety-critical environment.", details: ["Developed and validated embedded software using C, Embedded C, and Ada.", "Performed Verification & Validation, static analysis, code verification, debugging, and software validation activities.", "Applied DO-178C development and verification practices using LDRA and Polyspace to support software quality, safety, and reliability."] },
  { title: "Parking Management System", type: "Software project", professional: false, tags: ["Java", "HTML", "CSS", "JavaScript", "SQL"], summary: "A web-based parking automation platform with vehicle logs, slot allocation, and an admin dashboard.", details: ["Implemented vehicle entry and exit record management.", "Built SQL-based storage and improved data retrieval accuracy.", "Reduced manual tracking effort through an administrative workflow."] },
  { title: "Plant Leaf Disease Detection", type: "Machine learning project", professional: false, tags: ["CNN", "Machine Learning", "Deep Learning"], summary: "A CNN model for plant disease classification with more than 95% accuracy.", details: ["Processed the image dataset and trained a convolutional neural network.", "Evaluated classification performance above 95% accuracy.", "Applied deep learning to agricultural disease detection automation."] },
];

function SectionHeading({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro?: string }) {
  return <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
    <p className="technical-label mb-3 text-xs font-semibold text-primary">{eyebrow}</p>
    <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">{title} <span className="text-primary">{accent}</span></h2>
    {intro && <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{intro}</p>}
  </header>;
}

function Tag({ children, warning = false }: { children: string; warning?: boolean }) {
  return <span className={`rounded-sm border px-2.5 py-1 font-display text-xs font-medium ${warning ? "border-warning/35 bg-warning/10 text-warning" : "border-border bg-secondary text-secondary-foreground"}`}>{children}</span>;
}

function Counter() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const started = performance.now();
      const tick = (time: number) => {
        const progress = Math.min((time - started) / 1200, 1);
        setValue(Math.round(500 * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node); return () => observer.disconnect();
  }, []);
  return <span ref={ref}>{value}+</span>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [openProject, setOpenProject] = useState(0);
  const nav = ["About", "Skills", "Experience", "Projects", "Contact"];
  const selectedExperience = experiences[activeExperience] ?? experiences[0];

  if (!selectedExperience) return null;

  return <div className="min-h-screen overflow-x-hidden">
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="flex min-w-0 items-center gap-3 font-display font-semibold text-foreground" aria-label="Yallaling home">
          <span className="grid size-9 shrink-0 place-items-center rounded-sm border border-primary/40 bg-primary/10 text-primary"><Radar className="size-5" /></span>
          <span className="truncate text-lg">YALLALING<span className="text-primary">.SYS</span></span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="font-display text-sm text-muted-foreground transition-colors hover:text-primary">{item}</a>)}
          <Button variant="signal" asChild><a href="mailto:ybhsathkhed@gmail.com"><Mail /> Contact</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
      </nav>
      {menuOpen && <div className="border-t border-border bg-background px-5 py-5 lg:hidden">{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="block border-b border-border py-3 font-display text-sm text-muted-foreground">{item}</a>)}</div>}
    </header>

    <main className="portfolio-content relative isolate">
      <PageAtmosphere />
      <section id="home" className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-16 lg:min-h-[780px] lg:px-8">
        <HeroUav />
        <div className="relative z-10 max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-primary/35 bg-primary/5 px-3 py-2 font-display text-xs text-primary"><span className="size-2 animate-pulse rounded-full bg-primary" /> AVAILABLE FOR ENGINEERING OPPORTUNITIES</div>
          <p className="technical-label mb-4 text-sm text-muted-foreground">Aerospace & Defence · Bengaluru, India</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.04] text-foreground md:text-7xl lg:text-[5.5rem]">Yallaling<br /><span className="text-primary">Avionics</span> Software Engineer<span aria-hidden="true" className="ml-2 inline-block h-[0.8em] w-1 animate-[blink_1s_steps(1)_infinite] bg-primary align-baseline" /></h1>
          <p className="mt-6 max-w-3xl border-l-2 border-primary pl-5 text-base leading-8 text-muted-foreground md:text-lg">Building and verifying safety-critical embedded software with C, C++, Embedded C, and Ada—grounded in DO-178C, V&V, and industry analysis tools.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" variant="signal" asChild><Link to="/resume"><Download /> View Resume</Link></Button>
            <Button size="lg" variant="console" asChild><a href="#projects">View Projects <ArrowDown /></a></Button>
             <Button size="lg" variant="ghost" asChild><Link to="/professional-profile"><Linkedin /> LinkedIn Profile</Link></Button>
             <Button size="lg" variant="ghost" asChild><Link to="/blog"><BookOpen /> Technical Blog</Link></Button>
            <Button size="lg" variant="ghost" asChild><a href="https://github.com/Sensationa" target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
          </div>
        </div>
      </section>

      <section aria-label="Engineering snapshot" className="border-y border-border bg-card/55">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 md:grid-cols-4 md:divide-y-0 lg:px-8">
          {[ ["CURRENT", "Avionics", "Aerospace software"], ["PROBLEM SOLVING", <Counter key="count" />, "DSA problems"], ["ACADEMICS", "8.3", "Engineering CGPA"], ["PROCESS", "DO-178C", "V&V knowledge"] ].map(([label, value, sub]) => <div key={String(label)} className="px-4 py-7 md:px-7"><p className="technical-label text-[10px] text-muted-foreground">{label}</p><p className="mt-2 font-display text-2xl font-semibold text-primary md:text-3xl">{value}</p><p className="mt-1 text-xs text-muted-foreground">{sub}</p></div>)}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="technical-label mb-3 text-xs text-primary">Profile / 01</p><h2 className="font-display text-4xl font-semibold md:text-5xl">Engineering for <span className="text-primary">certainty.</span></h2></div>
          <div className="panel signal-border rounded-md p-7 md:p-10"><p className="text-lg leading-8 text-foreground">B.E. Computer Science and Engineering graduate with professional experience in aerospace and defence software development.</p><p className="mt-5 leading-8 text-muted-foreground">My current work focuses on avionics and embedded software using C, C++, Embedded C, and Ada, supported by DO-178C practices, Verification & Validation, static analysis, and software verification. I currently contribute to the LRLACM-02 project at TECLEVER SOLUTIONS PVT. LTD., following earlier full-stack development experience.</p><div className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" /> Bengaluru, Karnataka, India</div></div>
        </div>
      </section>

      <section id="skills" className="border-y border-border bg-card/35 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Technical matrix / 02" title="Core" accent="Capabilities" intro="Select a discipline to inspect the engineering toolkit behind my work." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skills.map((skill, index) => { const Icon = skill.icon; const open = activeSkill === index; return <button key={skill.title} onClick={() => setActiveSkill(open ? -1 : index)} aria-expanded={open} className={`panel rounded-md p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 ${open ? "signal-border md:col-span-2 lg:col-span-1" : ""}`}><span className="flex items-center justify-between gap-3"><span className="flex min-w-0 items-center gap-3"><Icon className="size-5 shrink-0 text-primary" /><span className="font-display text-base font-semibold">{skill.title}</span></span><ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} /></span>{open && <span className="mt-5 flex flex-wrap gap-2">{skill.items.map((item) => <Tag key={item}>{item}</Tag>)}</span>}</button>; })}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionHeading eyebrow="Verification chain" title="From code to" accent="confidence" intro="A clear view of the disciplines and tools that support safety-critical software quality." />
        <div className="panel signal-border grid items-stretch overflow-hidden rounded-md md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {[{ n:"01", title:"Languages", tags:["C", "Embedded C", "Ada"] }, { n:"02", title:"Process", tags:["DO-178C"] }, { n:"03", title:"Assurance", tags:["V&V", "Static Analysis"] }, { n:"04", title:"Tooling", tags:["LDRA", "Polyspace"] }].map((step, i) => <div key={step.n} className="contents"><div className="p-6 md:min-h-44"><span className="technical-label text-[10px] text-primary">STEP {step.n}</span><h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3><div className="mt-5 flex flex-wrap gap-2">{step.tags.map((x) => <Tag key={x}>{x}</Tag>)}</div></div>{i < 3 && <div className="grid place-items-center border-y border-border px-3 py-2 text-primary md:border-x md:border-y-0"><ArrowRight className="rotate-90 md:rotate-0" /></div>}</div>)}
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-card/35 px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Career timeline / 03" title="Professional" accent="Experience" />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative space-y-3 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-border">{experiences.map((exp, index) => <button key={exp.company} onClick={() => setActiveExperience(index)} className={`panel relative w-full rounded-md p-5 pl-14 text-left transition-colors ${activeExperience === index ? "signal-border" : "hover:border-primary/35"}`}><span className={`absolute left-[15px] top-7 size-3 rounded-full border-2 ${activeExperience === index ? "border-primary bg-primary" : "border-muted-foreground bg-card"}`} /><span className="flex flex-wrap items-center gap-2">{exp.current && <span className="rounded-sm bg-primary/15 px-2 py-1 font-display text-[10px] text-primary">CURRENT</span>}<span className="text-xs text-muted-foreground">{exp.date}</span></span><strong className="mt-3 block font-display text-lg">{exp.role}</strong><span className="mt-1 block text-sm text-primary">{exp.company}</span></button>)}</div>
          <article className="panel signal-border rounded-md p-6 md:p-8"><p className="technical-label text-xs text-primary">Selected role</p><h3 className="mt-3 font-display text-2xl font-semibold">{selectedExperience.role}</h3><p className="mt-2 text-sm text-muted-foreground">{selectedExperience.company} · {selectedExperience.date}</p><ul className="mt-7 space-y-4">{selectedExperience.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{bullet}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{selectedExperience.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div></article>
        </div><div className="mt-8 flex justify-center"><Button variant="console" asChild><Link to="/career">View full career timeline <ArrowRight /></Link></Button></div></div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><SectionHeading eyebrow="Selected work / 04" title="Engineering" accent="Projects" intro="Professional and independent work across embedded avionics, full-stack systems, and machine learning." />
        <div className="grid gap-5 lg:grid-cols-3">{projects.map((project, index) => { const open = openProject === index; return <article key={project.title} className={`panel rounded-md p-6 transition-all hover:-translate-y-1 ${project.professional ? "signal-border lg:col-span-2" : ""}`}><div className="flex items-start justify-between gap-3"><span className={`technical-label text-[10px] ${project.professional ? "text-primary" : "text-warning"}`}>{project.type}</span>{project.professional ? <ShieldCheck className="size-5 text-primary" /> : <Code2 className="size-5 text-warning" />}</div><h3 className="mt-5 font-display text-2xl font-semibold">{project.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag} warning={!project.professional}>{tag}</Tag>)}</div>{open && <ul className="mt-6 space-y-3 border-t border-border pt-5">{project.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{detail}</li>)}</ul>}<Button variant="ghost" className="mt-5 px-0 text-primary" onClick={() => setOpenProject(open ? -1 : index)} aria-expanded={open}>{open ? "Hide details" : "View details"}<ChevronDown className={open ? "rotate-180" : ""} /></Button></article>; })}</div>
      </section>

      <section className="border-y border-border bg-card/35 px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Education & recognition / 05" title="Built on" accent="fundamentals" />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"><div className="space-y-3">{[["Dayananda Sagar College of Engineering", "B.E. Computer Science and Engineering", "8.3 CGPA · 2021–2025"], ["Alvas PU College", "II PUC — Science (PCMB)", "91.15%"], ["Mahalaxmi High School", "SSLC / 10th Standard", "88.48%"]].map(([school, degree, result]) => <article key={school} className="panel grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-md p-5"><GraduationCap className="size-5 text-primary" /><div><h3 className="font-display font-semibold">{school}</h3><p className="mt-1 text-sm text-muted-foreground">{degree}</p><p className="mt-2 font-display text-sm text-primary">{result}</p></div></article>)}</div>
          <div className="panel signal-border rounded-md p-7"><Award className="size-7 text-warning" /><p className="technical-label mt-6 text-xs text-muted-foreground">Problem solving record</p><p className="mt-2 font-display text-5xl font-semibold text-warning"><Counter /></p><p className="mt-2 text-sm text-muted-foreground">Data Structures & Algorithms problems solved across LeetCode, CodeChef, and GeeksforGeeks.</p><div className="my-6 h-px bg-border" /><p className="text-sm leading-6 text-foreground">10th place — DSCE Coding Bootcamp</p></div></div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">{["Cyber Security Certification — C-DAC", "Database Management System Certification — Infosys Springboard", "C++ Programming Certification — Udemy", "AWS Cloud Practitioner Course — Cloud Institution"].map((cert) => <div key={cert} className="panel flex items-center gap-3 rounded-md p-4 text-sm"><Award className="size-4 shrink-0 text-warning" />{cert}</div>)}</div>
      </div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="panel signal-border overflow-hidden rounded-md"><div className="grid lg:grid-cols-[1.2fr_0.8fr]"><div className="p-7 md:p-12"><p className="technical-label text-xs text-primary">Contact / 06</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold md:text-5xl">Let’s build reliable systems.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Open to conversations about avionics, embedded systems, aerospace and defence software, and broader software engineering opportunities.</p><div className="mt-8 flex flex-wrap gap-3"><Button variant="signal" size="lg" asChild><a href="mailto:ybhsathkhed@gmail.com"><Mail /> Send Email</a></Button><Button variant="console" size="lg" asChild><a href="/Yallaling-Avionics-Resume.pdf" download="Yallaling-Avionics-Resume.pdf"><Download /> Download Resume</a></Button></div></div>
          <div className="border-t border-border bg-secondary/30 p-7 md:p-10 lg:border-l lg:border-t-0"><div className="space-y-4">{[
            [Mail, "Email", "ybhsathkhed@gmail.com", "mailto:ybhsathkhed@gmail.com"], [Phone, "Phone", "+91 7349038090", "tel:+917349038090"], [Linkedin, "LinkedIn", "yallaling03", "https://www.linkedin.com/in/yallaling03/"], [Github, "GitHub", "Sensationa", "https://github.com/Sensationa"], [Code2, "CodeChef", "yallaling143", "https://www.codechef.com/users/yallaling143"], [ExternalLink, "Portfolio", "yallalingtechworld.lovable.app", "https://yallalingtechworld.lovable.app/"]
          ].map(([Icon, label, text, href]) => { const LinkIcon = Icon as typeof Mail; return <a key={String(label)} href={String(href)} target={String(href).startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-4 text-sm hover:text-primary"><LinkIcon className="size-4 text-primary" /><span className="min-w-0"><span className="block text-xs text-muted-foreground">{String(label)}</span><span className="block truncate">{String(text)}</span></span><ArrowRight className="size-4" /></a>; })}</div></div></div></div>
      </section>
    </main>
     <footer className="border-t border-border px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-muted-foreground sm:flex-row"><span>© 2026 Yallaling. Avionics & Embedded Software Engineer.</span><div className="flex flex-wrap gap-5"><Link to="/aerospace-defence-software" className="hover:text-primary">Aerospace & Defence</Link><Link to="/blog" className="hover:text-primary">Technical Blog</Link><Link to="/professional-profile" className="hover:text-primary">Professional Profile</Link><span className="font-display text-primary">SYSTEM STATUS: READY</span></div></div></footer>
  </div>;
}