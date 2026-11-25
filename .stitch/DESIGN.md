# Project: Kesav Ram Singh — Science & Strategy Monograph
- **Platform:** Web (Responsive Desktop 1440px & Mobile 390px)
- **Stitch Project ID:** `pending-stitch-sync`

## Visual Theme & Atmosphere
An institutional New York healthcare venture capital and life-sciences editorial monograph — inspired by Pentagram, Financial Times Weekend, Monocle, and Flagship Pioneering print/digital systems. Warm archival bone paper meets razor-sharp 1px architectural hairline grids, museum-scale serif typography, disciplined negative space, and Edward Tufte-inspired analytical graphics.

### Strictly Forbidden (Anti-AI-Slop Guardrails)
- **Zero** dark-slate (`#060913`) neon/cyberpunk backgrounds or glowing blurred radial orbs
- **Zero** `backdrop-blur` glassmorphic cards or floating rounded pill navbars
- **Zero** gradient text fills or repeating "plain serif + colored italic last two words" heading clichés
- **Zero** pulsing green "online" status dots, sparkle emojis/icons, or generic Lucide icons inside tinted rounded squares
- **Zero** floating overlapping badges on portraits or `#tag` pill clouds on every card
- **Zero** bubbly `rounded-3xl` SaaS bento boxes; use crisp architectural corners (`0px–2px`) and hairline dividers

## Color Palette & Semantic Roles

### Light Mode — Archival Paper (Primary Default)
- **Primary Surface (`--surface-primary`):** Warm archival bone `#F5F2EB` — main page canvas
- **Elevated Surface (`--surface-elevated`):** Crisp gallery paper `#FAF8F4` and warm linen `#EBE6DC` — expandable rows, modal sheets, analytical panels
- **Primary Text (`--text-primary`):** Deep carbon ink `#141412` — display headlines, primary prose
- **Muted Text (`--text-muted`):** Warm archival graphite `#5C5850` — captions, index labels, dates
- **Primary Action (`--action-primary`):** Deep Oxblood / Carmine `#9E1B32` — disciplined accent for active states, figure markers, and primary links
- **Secondary Scientific Marker (`--accent-science`):** Botanical Slate `#265340` — restrained accent for clinical/translational annotations only
- **Border / Divider (`--border-hairline`):** Crisp architectural hairline `rgba(20, 20, 18, 0.14)` and strong rule `rgba(20, 20, 18, 0.85)`

### Dark Mode — Obsidian Monograph (Optional Ink Toggle)
- **Primary Surface (`--surface-primary`):** Warm matte obsidian `#111110` (zero blue/navy tint)
- **Elevated Surface (`--surface-elevated`):** Deep carbon `#191816`
- **Primary Text (`--text-primary`):** Warm parchment `#F0ECE4`
- **Muted Text (`--text-muted`):** Stone gray `#9B968C`
- **Primary Action (`--action-primary`):** Editorial Crimson `#D9465F`
- **Border / Divider (`--border-hairline`):** `rgba(240, 236, 228, 0.14)`

## Typography
- **Display / Editorial Serif:** `Newsreader` (optical sizes) & `Cormorant Garamond`, tight tracking (`-0.03em`), sculptural leading (`0.96–1.05`), upright + selective italic contrast without color gimmicks
- **Body / Swiss Grotesque:** `Inter Tight` & `Plus Jakarta Sans`, 16px–18px base, `1.6` line-height, max-width `60ch` measure
- **Archival Index / Analytical Mono:** `IBM Plex Mono`, 11px–12px, uppercase tracking (`0.14em`) for dossier numbers (`01`, `FIG. 01`, `DOSSIER 02`), financial metrics (`rNPV`, `ICER`, `HTA`), and table columns

## Layout & Component Rules
- **Grid:** 12-column Swiss architectural grid (`max-width: 1360px`), generous horizontal margins (`24px` mobile, `48px` desktop)
- **Spacing rhythm:** Editorial breathing room (`py-24` to `py-36`), 1px structural horizontal rules separating major movements
- **Radii & elevation:** Crisp `0px–2px` architectural edges; hierarchy achieved through typographic scale, hairline borders, and tonal surface shifts — never heavy drop shadows
- **Navigation pattern:** Full-width top architectural masthead with 1px bottom rule, numbered text navigation (`01 Practice`, `02 Dossiers`, `03 Toolkit`, `04 Credentials`), understated text link for `Resume ↗`, and `Paper / Ink` surface switcher
- **Motion language:** Refined editorial choreography — masked baseline text reveals, scroll-linked hairline path drawing (`pathLength`), crisp cubic-bezier easing `[0.19, 1, 0.22, 1]`, zero bouncy spring loops
