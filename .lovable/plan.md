# Yallaling Engineering Portfolio

## Goal
Build a polished, recruiter-ready single-page portfolio that immediately presents Yallaling as an Avionics / Embedded Software Engineer with aerospace and defence experience. Use the supplied screenshots as the visual reference and the resume as the factual source.

## Visual Direction
- Dark, restrained engineering interface inspired by the screenshots: near-black surfaces, cyan system accents, amber highlights, and limited violet for secondary emphasis.
- Futuristic but professional typography, crisp borders, subtle grid/connection-line details, compact technology tags, and controlled glow effects.
- Sticky translucent navigation with section links and a prominent contact action.
- Lightweight motion only: animated title cursor, number counter, timeline transitions, card elevation, and reduced-motion support.
- Fully responsive layouts with clear focus states, strong contrast, semantic structure, and mobile-safe navigation.

## Page Structure
1. **Hero** — Yallaling, “Avionics — Embedded Software Engineer,” aerospace/defence positioning, concise introduction, location, and actions for Resume, Projects, LinkedIn, and GitHub.
2. **Engineering Snapshot** — focused metrics for current aerospace role, 500+ DSA problems, 8.3 CGPA, and key verification experience.
3. **About** — concise recruiter-friendly summary grounded in the resume.
4. **Technical Skills** — expandable category cards for programming, avionics, V&V, analysis tools, development tools, and computer science foundations.
5. **Verification Workflow** — a simple interactive relationship view: C / Embedded C / Ada → DO-178C → V&V → LDRA / Polyspace.
6. **Experience** — selectable vertical timeline, with TECLEVER emphasized as current and responsibilities/technologies revealed for the selected role.
7. **Projects** — expandable cards with technology tags; LRLACM-02 distinctly labeled as a professional project without confidential implementation details.
8. **Education** — the three verified qualifications and scores.
9. **Certifications & Achievements** — four certifications, coding bootcamp placement, and animated 500+ DSA achievement.
10. **Contact** — email, phone, LinkedIn, GitHub, CodeChef, portfolio, and location.

## Interactions
- Smooth section navigation and active-section feedback.
- Resume opens/downloads the supplied PDF.
- Expand/collapse skill groups and project details with keyboard-accessible controls.
- Selectable experience entries update the detail panel.
- Animated DSA counter triggers once when visible.
- External profile links open safely in a new tab; email and phone use direct contact links.

## Content & Accuracy
- Use only facts present in the supplied prompt and resume.
- Omit UART and any sensitive LRLACM-02 implementation specifics from public-facing copy.
- Do not invent project links, employers, certifications, metrics, or system details.
- Treat the uploaded screenshots only as visual references, not embedded page imagery.

## Technical Details
- Implement the portfolio at `/` with React and Tailwind’s semantic design tokens.
- Store the resume through the project asset flow and use it for both viewing and downloading.
- Add route-specific SEO metadata describing Yallaling’s avionics and embedded software profile.
- Use small React components and local UI state only; no backend is required.
- Verify desktop and mobile layouts, interactions, accessibility labels, external links, and resume download in the live preview.
