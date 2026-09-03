---
name: ShiftSync Operations Command
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e79400'
  on-tertiary-container: '#563400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 2px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-lg: 16px
  space-xl: 20px
  space-2xl: 24px
  gutter-console: 12px
  inset-panel: 16px
---

## Brand & Style

This design system is engineered for mission-critical Network Operations Centers (NOC), Site Reliability Engineering (SRE), and DevOps handover workflows. The visual identity channels precision instrumentation: utilitarian, vigilant, zero-fatigue, and uncompromisingly authoritative. 

The aesthetic synthesizes modern tactical minimalism with industrial telemetry interfaces. Information architecture prioritizes instantaneous visual triage under critical shift rotations, utilizing pitch-dark slate surfaces, razor-sharp 1px boundary lines, and vibrant functional status indicators that immediately signal operational state without cognitive friction.

Target personas include reliability engineers, incident commanders, and systems infrastructure leads who operate in low-ambient lighting environments across 12-hour shifts. The UI evokes clinical calm, computational accuracy, and immediate operational confidence.

## Colors

The palette operates on a deep, obsidian-to-slate scale engineered for dark-mode telemetry consoles. The color system distinguishes purely structural scaffolding from high-signal telemetry data.

### Foundation & Neutrals
- **Canvas Base (`bg-slate-950`):** `#020617` — Deepest background layer for primary workspace canvas.
- **Surface Elevation 1 (`bg-slate-900`):** `#0f172a` — Structural panels, toolbars, and cards.
- **Surface Elevation 2 / Inset (`bg-slate-900/50`):** `rgba(15, 23, 42, 0.5)` — Secondary nested modules, terminal panels, and muted data wells.
- **Subtle Surface Highlight:** `#1e293b` (`slate-800`) — Hover states, selected rows, active tabs.
- **Border Structural:** `#1e293b` (`border-slate-800`) — Precise 1px borders delineating grid partitions.
- **Border Interactive / Focus:** `#334155` (`border-slate-700`) — Element highlights, splitters, active boundaries.

### Functional Accents & Signals
- **Primary / Telemetry Link (`Cyan 500` / `#06b6d4`):** Primary command buttons, system links, focus reticles, active handover generation triggers.
- **Healthy / Resolved (`Emerald 500` / `#10b981`):** Operational services, closed incident tickets, clean health checks, verified handovers.
- **In-Progress / Warning (`Amber 500` / `#f59e0b`):** Degrading metrics, shift transition state, active maintenance windows, pending verification items.
- **Blocker / Critical Incident (`Rose 500` / `#f43f5e`):** P0/P1 escalations, breached SLAs, active outages, shift blockers requiring immediate acknowledgment.

### Text Contrast Tiers
- **Text High-Contrast (Headings, IDs, Values):** `#f8fafc` (`slate-50`)
- **Text Secondary (Labels, Metadata, Descriptors):** `#94a3b8` (`slate-400`)
- **Text Muted (Dividers, Inactive Timestamps, Placeholders):** `#475569` (`slate-600`)

## Typography

The typographic hierarchy enforces strict domain division: **Inter** powers natural language legibility, narrative handover documentation, and UI navigational structure; **JetBrains Mono** governs machine data, incident ticket tags, SHA hashes, UTC timestamps, execution metrics, and badge metadata.

### Typographic Rules
- All timestamps, system statuses, operational codes, port/IP identifiers, and ticket references (`INC-8492`, `JIRA-2041`) must be styled with the Monospace scale.
- Section tags, metric categorization headings, and status labels must use `label-caps` in all uppercase with widened tracking (`0.08em`) to guarantee quick recognition on wall monitors and multi-head workstation displays.
- Handover narrative notes use `body-md` (13px/18px) to maximize data density while preserving comfortable scanning over extended shifts.

## Layout & Spacing

This design system uses a dense 4px baseline sub-grid configured for multi-pane operations consoles. The viewport operates edge-to-edge with no ornamental outer padding, optimizing usable screen real estate.

### Screen Partitioning & Layout Model
- **Primary Grid:** Fluid-column split view with collapsible auxiliary telemetry rails. Standard split: Left Navigation Rail (56px compact / 220px expanded), Main Handover Stream (flexible width, min 600px), and Operational Telemetry / Ticket Inspector (fixed 380px or 440px).
- **Console Guttering:** A uniform 12px gutter partitions sibling panels, maintaining distinct separation while preventing dead space.
- **Card and Row Density:** Dense vertical spacing (8px internal padding on table rows and feed units) accommodates deep incident logs and multi-service health matrices without requiring aggressive vertical scrolling.
- **Breakpoints:**
  - **Desktop Multi-Head (>= 1680px):** 3-column expanded layout with full telemetry inspector, real-time diff preview, and live sync feed.
  - **Standard Desktop (1280px - 1679px):** 2-column layout with toggleable inspector drawer.
  - **Compact / On-Call Tablet (768px - 1279px):** Single-column stacked stream with tabbed handover compilation views and persistent bottom action tray.

## Elevation & Depth

Visual depth is achieved through **tonal stratification and sharp 1px structural boundaries**, rejecting heavy ambient blur drop-shadows that degrade clarity in dark environments.

### Elevation Hierarchy
- **Level 0 (App Canvas):** `bg-slate-950` (`#020617`). The master surface containing the application.
- **Level 1 (Panels, Grid Cells, Toolbars):** `bg-slate-900` (`#0f172a`) bordered with 1px solid `border-slate-800` (`#1e293b`).
- **Level 2 (Active Cards, Sub-sections, Nested Terminal Windows):** `bg-slate-900/50` with high-contrast `border-slate-800` borders and an optional 1px inner inset glow using `rgba(255, 255, 255, 0.03)`.
- **Level 3 (Modals, Command Palettes, Float Overlays):** `bg-slate-900` surrounded by `border-slate-700` (`#334155`) with a focused drop-shadow: `0 8px 30px rgba(0, 0, 0, 0.8)`.

### Accent Borders
Active or alerted elements (e.g., an unacknowledged P0 blocker or currently active shift summary) project a 1px solid border matching their functional status accent (`#f43f5e`, `#f59e0b`, or `#06b6d4`), paired with an ultra-subtle 4px outer glow ring at 15% opacity (`box-shadow: 0 0 0 1px {accent}, 0 0 8px {accent}26`).

## Shapes

The design system embraces a **Soft/Compact (`roundedness: 1`)** geometry. Radii are kept crisp and compact to preserve the architectural feel of physical hardware consoles and high-density tabular displays.

- **Panels, Cards, and Command Windows:** 4px radius (`rounded-sm`).
- **Buttons, Inputs, Pill Badges, and Table Selectors:** 4px radius (`rounded-sm`).
- **Inner Indicators and Status Dots:** 9999px (`rounded-full`) for circular LED status indicators.
- **Corner Treatments:** Outer corners of composite split-panels remain strictly perpendicular (0px) against window boundaries, applying 4px only to internal detached floating modules.

## Components

### Buttons & Action Controls
- **Primary Action (Shift Handover Finalize / Sync):** Solid `bg-cyan-500` text `slate-950` font-medium. Hover: `bg-cyan-400`. Focus: `ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950`.
- **Secondary Action (Filter / Export / Validate):** `bg-slate-900` text `slate-200` with 1px solid `border-slate-800`. Hover: `bg-slate-800 border-slate-700`.
- **Destructive / Escalation Action:** `bg-rose-950/40` text `rose-400` with 1px solid `border-rose-900`. Hover: `bg-rose-900/60 border-rose-700 text-rose-300`.
- **Density:** Button heights are standardized to 28px (compact) and 32px (standard) with horizontal padding of 10px-12px.

### Status Chips & Validation Badges
- Constructed with `font-family: JetBrains Mono` in `mono-sm` or `label-caps`.
- **Structure:** 20px fixed height, 2px border radius, 1px perimeter border, inline status dot (`w-1.5 h-1.5 rounded-full mr-1.5`).
- **Variants:**
  - *Operational / Done:* `bg-emerald-950/40 text-emerald-400 border-emerald-800/60`. Dot is pulsing or solid `bg-emerald-400`.
  - *Investigating / In-Progress:* `bg-amber-950/40 text-amber-400 border-amber-800/60`.
  - *Critical Blocker:* `bg-rose-950/40 text-rose-400 border-rose-800/60`.
  - *Metadata / Neutral Tag:* `bg-slate-800/60 text-slate-300 border-slate-700`.

### Handover Cards & Work Logs
- Built on `bg-slate-900` with `border-slate-800` framing.
- Header row features monospace incident tags left-aligned, UTC timestamp right-aligned in `text-slate-500`, followed by Inter-rendered issue summary and actionable handoff notes.
- Nested system diagnostics render inside a sub-card styled with `bg-slate-950` and 1px `border-slate-800/70`.

### Form Inputs & Terminal Fields
- **Input Fields:** `bg-slate-950` text `slate-100` border `border-slate-800`. Height 30px, horizontal padding 8px. Placeholder text is `slate-600`. Focus transitions instantly to `border-cyan-500`.
- **Checkbox & Switch:** Checkboxes are 14px × 14px squares with 2px radius, `border-slate-700`, checkmark fills with `bg-cyan-500` and `slate-950` icon.

### Command Line & Handover Output Stream
- Monospaced markdown generator window. Integrated with quick-copy controls, raw JSON telemetry toggles, and unified visual diff markers showing items transferred, unresolved blockers, and scheduled tasks for the incoming shift lead.