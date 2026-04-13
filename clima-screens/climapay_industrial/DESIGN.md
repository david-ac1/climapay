```markdown
# Design System Strategy: Industrial Precision

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Sovereign Ledger."** 

In the world of B2B Fintech and ESG, ClimaPay must bridge the gap between high-stakes financial institutionalism and the bleeding-edge transparency of carbon tracking. This system rejects the "friendly SaaS" trope of rounded corners and soft blues. Instead, it adopts a high-contrast, "Industrial Glassmorphism" aesthetic. 

The experience is designed to feel like a high-end physical dashboard—think aerospace instruments or custom-machined laboratory equipment. We achieve this through razor-sharp geometry (max 4px radius), hyper-legible monospaced data, and a "No-Line" structural philosophy that relies on tonal layering and glass refraction rather than antiquated structural borders.

---

## 2. Colors & Surface Philosophy

### The Core Palette
*   **Background:** `#0D0D0D` (Surface / Surface-Dim). A true-black foundation that allows neon accents to vibrate.
*   **Primary (Alpine Teal / Neon Mint):** `primary` (#00E1AB) and `secondary` (#5DDB22). Used for growth indicators, ESG "Positive" states, and primary CTAs.
*   **Tertiary (Sulphur Yellow):** `tertiary` (#B8D300). Reserved for "Alert" or "Action Required" states that require immediate ocular attention without the panic of "Error Red."

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for sectioning. We define space through:
1.  **Tonal Shifts:** Placing a `surface-container-low` (#1C1B1B) card against the `surface` (#131313) background.
2.  **Backdrop Blurs:** Using semi-transparent surfaces with a 20px-40px Gaussian blur to create "Industrial Glass."

### The "Glass & Gradient" Rule
To create the signature "Industrial Glass" look, floating cards should use:
*   **Fill:** `surface-container` at 60% opacity.
*   **Backdrop Filter:** `blur(24px) saturate(150%)`.
*   **The Signature Stroke:** A 0.5px border using a linear gradient: `45deg, outline-variant (30% opacity) to primary (60% opacity)`. This mimics light catching the edge of a precision-cut glass pane.

---

## 3. Typography: Technical Authority

The typographic system is a juxtaposition of institutional strength and data-driven precision.

*   **Headings (Plus Jakarta Sans):** Set in **Semi-Bold** with a tight **-0.02em tracking**. This creates a dense, authoritative block of text that feels "locked in." Use `display-lg` through `headline-sm` for all editorial and page-level titles.
*   **Data & Metrics (Geist Mono):** Every financial figure, ESG metric, and timestamp must use Geist Mono. Monospaced fonts ensure that columns of numbers align perfectly, reinforcing the feeling of an audited, technical ledger. Use `label-md` and `label-sm` for these technical outputs.
*   **Body (Inter):** Used for long-form descriptions. Inter provides a neutral, high-legibility bridge between the "personality" fonts.

---

## 4. Elevation & Depth: Tonal Layering

We do not use drop shadows to indicate "elevation" in the traditional sense. We use **Luminance Stacking.**

*   **Base Level:** `surface` (#131313) - The "ground" of the application.
*   **Level 1 (Sectioning):** `surface-container-low` (#1C1B1B) - Large layout blocks.
*   **Level 2 (Interaction):** `surface-container-high` (#2A2A2A) - Hover states and active cards.
*   **Floating Elements:** `surface-container-highest` (#353534) with 60% opacity and `backdrop-blur`.

**Ambient Shadows:** If a floating modal is required, use a massive 64px blur shadow with only 4% opacity of the `primary` color (#00E1AB). This creates a "glow" rather than a "shadow," suggesting the element is a light-emitting screen.

---

## 5. Components

### Buttons: The "Machined" Variant
*   **Primary:** Solid `primary` (#00E1AB) with `on-primary` (#003828) text. 4px radius. No gradient.
*   **Secondary (Glass):** `surface-variant` at 20% opacity + 0.5px Gradient Stroke.
*   **Tertiary:** Ghost style. No background, `primary` text, Geist Mono font.

### Inputs: The "Terminal" Field
Text inputs should feel like command-line entries.
*   **Style:** `surface-container-lowest` fill.
*   **Border:** 0.5px solid `outline-variant`. On focus, the border transitions to a `primary` to `secondary` gradient.
*   **Font:** Geist Mono for the input text to emphasize "Data Entry."

### Cards: ESG Visualizers
*   **Rule:** Forbid divider lines.
*   **Separation:** Use a 16px gap between card sections and a subtle background shift (e.g., `surface-container-low` for the header, `surface-container` for the body).
*   **ESG Linkage:** Every card should have a 2px vertical "Indicator Tab" on the left edge using either `primary` (ESG Neutral/Positive) or `tertiary` (Action Required).

### Data Tables
*   **Header:** `surface-container-highest` background, Geist Mono, uppercase, 0.05em tracking.
*   **Rows:** No borders. Alternate row backgrounds using `surface` and `surface-container-low`.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. A metric card can be 70% width with a smaller data-viz taking 30% to create an editorial feel.
*   **Do** use "Neon-Mint" sparks for micro-interactions (e.g., a 2px glowing dot next to an active invoice).
*   **Do** embrace negative space. In a high-density financial tool, space is the ultimate luxury.

### Don't
*   **Don't** use border-radii larger than 4px. Anything "round" breaks the institutional, technical feel.
*   **Don't** use standard "Grey" for text. Use `on-surface-variant` (#BCCAC5) for secondary text to keep the Alpine Teal undertone consistent.
*   **Don't** use 1px solid borders. If a 0.5px gradient stroke is too complex for a specific view, use a background color shift instead. No "boxes" inside "boxes."