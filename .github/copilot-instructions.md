# Repository Copilot Instructions

## Repository Overview

**uttam.dev** (directory name) is a standalone static portfolio site for Uttam Kumar: a recruiter-focused Software Engineer portfolio with CloudCampus as the flagship project. Per its README it is published with GitHub Pages from the repository root of `uttamkumar37/uttam-portfolio-site` on the custom domain `uttam.mycloudcampus.in` (see `CNAME`). Note the directory name and the published domain differ; use the values in `CNAME`, `index.html`, `sitemap.xml` and `llms.txt` as the source of truth.

## Technology Stack

- Plain HTML, CSS and vanilla JavaScript. No framework, no bundler, no package manager, no build step.
- Data files: `assets/data/profile.js` and `assets/data/projects.json`
- Structured data (JSON-LD) in `index.html`; `sitemap.xml`, `robots.txt`, `llms.txt` for discovery
- Hosting: GitHub Pages (no workflow file in this repo)

## Repository Structure

```
index.html                         home page (hero, recruiter snapshot, experience, projects, writing)
projects/index.html                selected work with category filters
projects/cloudcampus|bloghub|parksmart/index.html   project case studies
writing/index.html                 writing index; writing/<slug>/index.html articles; writing/*.md source articles
resume/index.html                  resume overview; resume/*.pdf downloads
assets/site.css, assets/site.js    all styling and behavior
assets/data/profile.js             centralized career, contact and proof-point values
assets/data/projects.json          GitHub project selection
assets/images/                     profile, og-image, CloudCampus screenshots
CNAME, robots.txt, sitemap.xml, llms.txt, favicon.svg
```

## Architecture

Multi-page static site: each page is its own `index.html` sharing `assets/site.css` and `assets/site.js`. Shared facts live in `assets/data/profile.js` and `assets/data/projects.json`. The homepage intentionally shows three focused projects; `/projects/` lists the wider set with filters.

## Development Commands

```bash
python3 -m http.server 8001    # preview at http://localhost:8001
```

There is no build, lint or test command.

## Coding Guidelines

- Write semantic, accessible HTML (landmarks, headings in order, alt text, labelled links); keep pages responsive.
- Keep CSS in `assets/site.css` using existing classes/variables; avoid inline styles and new CSS frameworks.
- Keep JS in `assets/site.js` framework-free, progressively enhanced, with no external runtime dependencies unless approved.
- Change career facts in `assets/data/profile.js` and project selection in `assets/data/projects.json`, and keep the HTML that mirrors them in sync.
- A new page needs: its `index.html` with title/description/canonical/Open Graph metadata, a `sitemap.xml` entry, and a link from the relevant index page. Update `llms.txt` when key sections change.
- Use root-relative or consistently relative asset paths matching neighboring pages, so GitHub Pages serves them correctly.
- Optimize images before adding; do not add large binaries needlessly.

## Testing

None automated. Validate by serving locally and checking affected pages in a browser (layout at mobile and desktop widths, working links, no console errors). Do not claim visual verification that was not done.

## Security

Static site: no secrets, tokens or API keys. Do not add tracking scripts or third-party embeds without approval. Contact details must only be those already published in `assets/data/profile.js`.

## Infrastructure / Deployment

GitHub Pages serving the `main` branch root, custom domain from `CNAME`. Changing `CNAME`, canonical URLs or `sitemap.xml` host values affects SEO; change them only deliberately and consistently across `index.html`, `sitemap.xml`, `robots.txt` and `llms.txt`.

## Change Guidelines

1. Understand the existing implementation first.
2. Make the smallest coherent change.
3. Preserve current architecture unless there is a strong reason to change it.
4. Do not introduce a new library when the existing stack already solves the requirement.
5. Update related pages/data for content changes so they stay consistent.
6. Preview locally before considering the change complete.
7. Do not leave commented-out code.
8. Do not leave TODO placeholders unless explicitly requested.
9. Do not fabricate implementation status.
10. Do not claim something was tested unless it was actually executed.

## Code Quality Rules

- Prefer readable markup and code over clever code; avoid duplication where shared data exists.
- Follow existing file, class and slug naming (kebab-case).
- Keep pages focused; handle edge cases such as missing images and long text on small screens.
- Preserve existing URLs; do not break published links.
- Avoid unrelated refactoring during focused changes.

## Git Commit Rules

- Never add a `Co-Authored-By` trailer unless I explicitly request it.
- Never add Claude, Anthropic, GitHub Copilot, OpenAI, ChatGPT, Codex, Cursor, or any AI tool as an author or co-author.
- Use only the configured Git `user.name` and `user.email`.
- Do not mention AI assistance in commit messages.
- Keep commit messages concise and professional.
- Do not commit automatically unless I explicitly ask.
- Do not push automatically unless I explicitly ask.
- Never force-push unless I explicitly request it.
- Never rewrite Git history unless I explicitly request it.

## AI Assistant Working Rules

When working in this repository:

- Inspect existing code before proposing architecture changes.
- Do not assume a feature exists without verifying it.
- Do not create fake implementations to make UI or tests appear complete.
- Do not generate random metrics, scores, or placeholder business data unless explicitly requested as test/demo data.
- Clearly separate verified behavior from assumptions.
- Prefer completing working vertical slices over creating many unfinished placeholders.
- Preserve repository conventions.
- Avoid massive rewrites unless explicitly requested.
- When fixing a bug, identify the underlying cause where practical.
- When adding functionality, consider error handling and tests.
- Never expose secrets, API keys, tokens, or credentials.
- Never hardcode secrets.

## Repository-Specific Rules (portfolio accuracy)

- Recruiters read this site. Never invent employers, dates, years of experience, metrics, achievements or project status. CloudCampus is described as a platform under active development; keep that accurate.
- Keep positioning consistent with the README: Java backend systems, enterprise integrations, APIs and multi-tenant SaaS.
- Do not modify, rename or delete the resume PDFs in `resume/` (including `backup.pdf`) unless asked; keep the download link pointing at the intended current resume.
- Keep career facts consistent with the sibling `ukglab` and `uttamkumar37` repositories.
- Articles in `writing/` describe real work (CloudCampus multi-tenancy, Spring Boot JWT/RBAC, enterprise integrations); do not add technical claims that the underlying projects do not support.
