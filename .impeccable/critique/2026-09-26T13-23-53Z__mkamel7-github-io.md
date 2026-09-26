---
target: mkamel7.github.io
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "url:https://mkamel7.github.io/"
timestamp: 2026-09-26T13-23-53Z
slug: mkamel7-github-io
---
# Critique mkamel7.github.io 2026-09-26 (26/32, H7+H10 n/a)
P1: no availability/ask at the end (contact.body defined in content.ts, never rendered in Contact.tsx); no CV route (deliberate, revisit).
P1: 14 equal-weight sticky cards, Projects ~10,300px; mechanical work buried at card 10. Tier into flagships + compact grid/filters.
P2: hero first viewport ~75% empty canvas, role line muted 18-20px, FadeIn delays 0.1-0.5s; name uses display-gradient #C3CBD5 dimmer than body ink.
P2: a11y: no skip link; marquee 28 alt announcements (should be alt="" aria-hidden); video dialog no focus trap/return; EN/DE buttons lack aria-pressed and are ~24px tall; unguarded localStorage in i18n.tsx:17 can blank the app.
P3: tag/skill chips hover-lift but are not interactive; Skills missing from nav; no active-section indicator; DE default ignores navigator.language; Experience leads with Rotaract Club Advisor.
Specificity: content authored, frame is generic dark creative-dev template (particle canvas, marquee, scroll-lit text, sticky stack).
Detector: 0 findings (full parser); overlay blocked by site CSP script-src 'self'.
