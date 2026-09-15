import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageAtmosphere } from "@/components/PageAtmosphere";
import { blogPosts, type BlogPost } from "@/lib/blog";

export function BlogArticlePage({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  return <main className="portfolio-content relative isolate min-h-screen overflow-hidden px-5 py-8 lg:px-8">
    <PageAtmosphere />
    <div className="relative z-10 mx-auto max-w-5xl">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6" aria-label="Article navigation">
        <Button variant="ghost" asChild><Link to="/blog"><ArrowLeft /> Technical blog</Link></Button>
        <Button variant="console" asChild><Link to="/resume"><FileText /> View resume</Link></Button>
      </nav>

      <article>
        <header className="border-b border-border py-14 md:py-20">
          <div className="flex flex-wrap items-center gap-3 font-display text-xs text-primary"><span className="technical-label">{post.category}</span><span className="text-border">/</span><span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="size-3.5" /> {post.readingTime}</span></div>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
          <p className="mt-7 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">Educational overview based on public guidance. Project-specific certification decisions should follow approved plans and responsible authorities.</p>
        </header>

        <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="space-y-14">
            {post.sections.map((section, index) => <section key={section.heading} aria-labelledby={`section-${index}`}>
              <p className="technical-label text-[10px] text-primary">Section {String(index + 1).padStart(2, "0")}</p>
              <h2 id={`section-${index}`} className="mt-3 font-display text-2xl font-semibold md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-5">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-muted-foreground">{paragraph}</p>)}</div>
              {section.bullets && <ul className="mt-6 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted-foreground"><CheckCircle2 className="mt-1.5 size-4 shrink-0 text-primary" />{bullet}</li>)}</ul>}
            </section>)}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="panel signal-border rounded-md p-5"><BookOpen className="size-5 text-primary" /><h2 className="mt-4 font-display text-lg font-semibold">Key takeaways</h2><ul className="mt-4 space-y-3">{post.takeaways.map((item) => <li key={item} className="text-sm leading-6 text-muted-foreground">{item}</li>)}</ul></div>
            <div className="panel rounded-md p-5"><p className="technical-label text-[10px] text-primary">Written by</p><p className="mt-3 font-display font-semibold">Yallaling</p><p className="mt-1 text-sm text-muted-foreground">Avionics — Embedded Software Engineer</p></div>
          </aside>
        </div>

        <section className="border-t border-border py-12" aria-labelledby="references"><p className="technical-label text-xs text-primary">Public references</p><h2 id="references" className="mt-3 font-display text-2xl font-semibold">Further reading</h2><div className="mt-6 grid gap-3">{post.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="panel flex items-center justify-between gap-4 rounded-md p-4 text-sm transition-colors hover:border-primary/50 hover:text-primary"><span>{source.label}</span><ExternalLink className="size-4 shrink-0" /></a>)}</div></section>

        <section className="border-t border-border py-12" aria-labelledby="related"><p className="technical-label text-xs text-primary">Continue reading</p><h2 id="related" className="mt-3 font-display text-2xl font-semibold">Related articles</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="panel group rounded-md p-5 transition-colors hover:border-primary/50"><span className="technical-label text-[10px] text-primary">{item.category}</span><h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary">{item.title}</h3><span className="mt-5 flex items-center gap-2 text-sm text-primary">Read article <ArrowRight className="size-4" /></span></Link>)}</div></section>
      </article>
    </div>
  </main>;
}