# Add a technical avionics blog

## Scope
- Add a dedicated `/blog` page with four technical articles covering avionics software, DO-178C, Embedded C, and verification & validation.
- Add individual article pages so each topic has its own searchable URL, title, description, canonical address, social metadata, and Article structured data.
- Link the blog prominently from the homepage hero and add supporting links from the homepage footer and relevant technical page.

## Content approach
- Keep posts educational, concise, and recruiter-friendly rather than presenting them as certification guidance.
- Ground standards-related claims in public FAA and NASA sources, with a short references section on every article.
- Use only Yallaling's verified public experience for first-person context; do not reveal UART or other confidential LRLACM-02 details.
- Target the strongest measured India search themes naturally: `DO-178C`, `embedded C`, `embedded C programming`, `avionics software engineer`, and `avionics software development`. Avoid keyword stuffing.

## Experience
- Reuse the site's dark aerospace visual system, animated grid, telemetry details, and restrained cyan signals.
- Blog cards will have topic, reading time, summary, and a clear article link.
- Article pages will include an overview, scannable sections, key takeaways, references, related articles, and links back to the portfolio and resume.
- Keep background effects lightweight, secondary to reading, reduced on mobile, and disabled for reduced-motion preferences.

## Technical details
- Create one shared article-data module and reusable blog/article presentation components.
- Add `/blog` plus four static article routes:
  - `/blog/avionics-software-engineering`
  - `/blog/do-178c-software-lifecycle`
  - `/blog/embedded-c-avionics`
  - `/blog/verification-validation-avionics`
- Use absolute self-referencing canonical and `og:url` values under `https://avionics-code-haven.lovable.app`.
- Add `Article` and `BreadcrumbList` JSON-LD to each article route; do not add a placeholder share image.
- Update `public/robots.txt` and add `public/sitemap.xml` with the known published domain and all current public routes.
- Verify page rendering, links, metadata, structured data, readability, and mobile overflow.
