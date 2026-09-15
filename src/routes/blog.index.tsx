import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageAtmosphere } from "@/components/PageAtmosphere";
import { blogPosts } from "@/lib/blog";

const origin = "https://avionics-code-haven.lovable.app";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Avionics Software Engineering Blog | Yallaling" },
      { name: "description", content: "Technical articles on avionics software engineering, DO-178C, Embedded C programming, and verification and validation." },
      { property: "og:title", content: "Avionics Software Engineering Blog | Yallaling" },
      { property: "og:description", content: "Practical articles on airborne software, DO-178C, Embedded C, and V&V." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${origin}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${origin}/blog` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Blog", name: "Yallaling Avionics Software Engineering Blog", url: `${origin}/blog`, author: { "@type": "Person", name: "Yallaling" }, blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${origin}/blog/${post.slug}` })) }) }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return <main className="portfolio-content relative isolate min-h-screen overflow-hidden px-5 py-8 lg:px-8"><PageAtmosphere /><div className="relative z-10 mx-auto max-w-6xl">
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6" aria-label="Blog navigation"><Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Portfolio</Link></Button><Button variant="console" asChild><Link to="/resume"><FileText /> Resume</Link></Button></nav>
    <header className="py-16 md:py-24"><div className="flex items-center gap-3 text-primary"><BookOpen className="size-6" /><p className="technical-label text-xs">Technical flight log</p></div><h1 className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-tight md:text-7xl">Avionics software, explained with <span className="text-primary">engineering clarity.</span></h1><p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">Source-backed notes on airborne software development, DO-178C, Embedded C, and Verification & Validation—written from an avionics embedded software engineer’s perspective.</p></header>
    <section className="grid gap-5 border-t border-border py-14 md:grid-cols-2" aria-label="Technical articles">{blogPosts.map((post, index) => <article key={post.slug} className={`panel group rounded-md p-6 transition-all hover:-translate-y-1 hover:border-primary/50 md:p-8 ${index === 1 ? "signal-border" : ""}`}><div className="flex items-center justify-between gap-4"><span className="technical-label text-[10px] text-primary">{post.category}</span><span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="size-3.5" />{post.readingTime}</span></div><h2 className="mt-5 font-display text-2xl font-semibold leading-snug group-hover:text-primary">{post.title}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{post.excerpt}</p><Button variant="ghost" className="mt-6 px-0 text-primary" asChild><Link to={post.path}>Read article <ArrowRight /></Link></Button></article>)}</section>
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-border py-10"><p className="text-sm text-muted-foreground">Educational articles based on public FAA, NASA, SEI, and MISRA material.</p><Button variant="signal" asChild><Link to="/professional-profile">Professional profile <ArrowRight /></Link></Button></footer>
  </div></main>;
}