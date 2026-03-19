# Design System Specification: High-End Editorial Portfolio

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system rejects the "template" aesthetic of modern portfolios in favor of a sophisticated, research-oriented editorial experience. It draws inspiration from high-end archival journals and minimalist architectural monographs. The goal is to move beyond "standard" UI by treating the screen as a physical space—utilizing intentional asymmetry, breathing room, and tonal depth.

To break the rigid grid, we employ **Active Negative Space**. Elements should not always align to a traditional center-axis; instead, use the spacing scale to create rhythmic offsets. Overlapping elements (e.g., a display-lg headline partially bleeding into a surface-container-high image card) creates a sense of intentionality and "curated" layering that signals premium quality.

---

## 2. Colors & Surface Philosophy
The palette is rooted in Anthropic’s warm, neutral DNA, emphasizing a "paper-like" tactility over cold digital whites.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections or cards.
Boundaries must be defined solely through background color shifts. For example, a project gallery section should transition from `surface` (#fcf9ef) to `surface-container-low` (#f7f4e9) to signal a new context without the visual noise of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested layers. Each level of importance is defined by its "altitude" in the surface-container tier:
- **Level 0 (Base):** `surface` (#fcf9ef) for the main body.
- **Level 1 (Sections):** `surface-container-low` (#f7f4e9) for secondary background blocks.
- **Level 2 (Interactive Elements):** `surface-container-highest` (#e5e2d9) for cards and modals.

### The "Glass & Gradient" Rule
To add a signature "soul" to the minimalist aesthetic:
- **Glassmorphism:** Use `surface-container-lowest` at 80% opacity with a `backdrop-blur: 12px` for sticky navigation bars. This allows the warm paper tones to bleed through as the user scrolls.
- **Signature Gradients:** For primary CTAs and hero highlights, utilize a subtle linear gradient from `primary` (#99462a) to `primary-container` (#d97757) at a 135-degree angle. This prevents the "flat" look and adds a polished, research-lab glow.

---

## 3. Typography
The typography is a dialogue between the systemic and the technical, using a 95/5 split between Sans-Serif and Monospace.

- **Display & Headline:** Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero statements. This creates an authoritative, editorial impact.
- **Monospace Accents:** Use `label-sm` with `ui-monospace` for metadata (e.g., project dates, categories, or technical specs). This reinforces the "research-oriented" aesthetic.
- **The Hierarchy Strategy:**
- **Display (Modernist):** Large, bold headers that act as visual anchors.
- **Body (Legibility):** `body-lg` (1rem) using `-apple-system` for high-density reading, ensuring the portfolio feels accessible and academic.
- **Captions:** Use `label-md` in `secondary` (#5f5f57) for image credits and side-notes.

---

## 4. Elevation & Depth
We eschew traditional "box-shadows" in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on top of a `surface-container-low` background to create a soft, natural lift.
- **Ambient Shadows:** If a floating effect is required (e.g., a dropdown menu), use a "Long Shadow": `box-shadow: 0 20px 40px rgba(28, 28, 22, 0.06)`. The color must be a tinted version of `on-surface` (#1c1c16), never pure black.
- **The Ghost Border:** If a container lacks sufficient contrast, use a "Ghost Border": `1px solid rgba(136, 114, 108, 0.1)` (the `outline-variant` at 10% opacity). This provides a hint of structure without breaking the minimalist flow.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `DEFAULT` roundedness (0.25rem).
- **Secondary:** `surface-container-highest` background, `on-surface` text. No border.
- **Tertiary (Editorial Link):** Text-only with a 1px underline using `primary` color, offset by 4px.

### Cards & Lists
- **Forbid Dividers:** Never use horizontal lines to separate list items. Use `spacing-8` (2rem) of vertical white space or a subtle hover state shift to `surface-container-high`.
- **Project Cards:** Use `surface-container-low` with no shadow. On hover, transition the background to `surface-container-highest` and slightly shift the image scale (1.02x).

### Chips & Tags
- **Technical Tags:** Use `ui-monospace` at `label-sm` size. Background: `secondary-container` (#e2e0d6). No border. High roundedness (`full`) to contrast the sharp typography.

### Input Fields
- **Search/Forms:** Use `surface-container-low` as the background. On focus, transition to `surface-container-lowest` and apply a `Ghost Border`. Use `label-md` for floating labels.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `spacing-20` and `spacing-24` for section padding to allow the eye to rest.
- **Do** mix type sizes aggressively (e.g., a `display-lg` title next to a `label-sm` mono-tag).
- **Do** use `surface-dim` (#dddad0) for footer backgrounds to ground the page.

### Don’t:
- **Don't** use 100% black (#000000). Use `on-surface` (#1c1c16) for all text to maintain the warm, organic feel.
- **Don't** use standard `lg` or `xl` roundedness for primary containers; keep it to `DEFAULT` (0.25rem) to maintain a professional, architectural edge.
- **Don't** use icons unless absolutely necessary. Rely on typography and spacing to communicate hierarchy and action.