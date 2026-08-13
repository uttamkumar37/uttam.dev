# Portfolio Site

Static personal portfolio for Uttam Kumar.

Domain: `https://uttam.mycloudcampus.in/`

Purpose: recruiter-focused Software Engineer portfolio with CloudCampus as the flagship project.

## Positioning

Software Engineer focused on Java backend systems, enterprise integrations, APIs, and multi-tenant SaaS platforms.

Key signals:

- IIT Guwahati graduate
- Verint + Digit Insurance backend experience
- CloudCampus founder
- Spring Boot, REST APIs, integrations, multi-tenant SaaS, system design

## Local Preview

```bash
python3 -m http.server 8001
```

Open `http://localhost:8001`.

## Project Data

Public GitHub project selection is tracked in `assets/data/projects.json`.

- Canonical GitHub profile: `uttamkumar37`
- The homepage keeps a focused set of three projects for recruiter clarity.
- The `/projects/` index contains meaningful backend and full-stack work with category filters.

## Site Structure

- `/`: recruiter-focused professional portfolio
- `/projects/`: selected work and filters
- `/projects/cloudcampus/`: full CloudCampus case study
- `/writing/`: engineering notes
- `/resume/`: resume overview and PDF download
- `https://ukglab.com/`: separate learning and experiments platform

Centralized career, contact, and proof-point values live in `assets/data/profile.js`.

## Deployment

This standalone repository is intended for GitHub Pages.

- GitHub repo: `uttamkumar37/uttam-portfolio-site`
- Publishing source: `main` branch, repository root
- Custom domain: `uttam.mycloudcampus.in`
