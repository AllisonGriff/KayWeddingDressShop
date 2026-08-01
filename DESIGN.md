# Kay — Design Bible

Visual system for Kay: a young designer who sews with attitude and is moving into wedding dresses. Warm, a little rough, not luxury-brochure.

---

## Spirit

This site should feel like something pinned up in a studio — paper, ink, photos with hard edges — not a polished fashion template.

| Pillar | Meaning |
| --- | --- |
| **Warm** | Paper beige, lived-in light, no cold chrome luxury |
| **Direct** | Plainspoken copy. Short. Sounds like a person. |
| **Spunky** | Vermillion accent, heavy display type, slight crookedness |

---

## What to avoid (AI tells)

- Champagne / blush / gold “elegant bridal” palettes
- Tracked uppercase eyebrow labels (`COLLECTION`, `ABOUT`)
- Frosted glass sticky headers
- Dual primary + ghost CTA buttons
- Staggered fade-up hero animations / ken burns
- Poetic marketing lines (“refuse to whisper”, “walks in first”)
- Centered sermon-style contact blocks
- Quote cards with “— Name”
- Perfect symmetry and soft gradient atmospheres

---

## Color

Tokens live in `src/styles/tokens.css`.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-paper` | `#F6F0E6` | Page ground |
| `--color-paper-deep` | `#E4D9C8` | Photo placeholders |
| `--color-ink` | `#0C0908` | Type, rules, frames |
| `--color-ink-mid` | `#2A211C` | Body |
| `--color-ink-faint` | `#5C4F45` | Meta |
| `--color-pop` | `#E03120` | Accent / focus / underline hits |
| `--color-white` | `#FFFAF4` | Type on ink |

Use hard borders (`3px solid ink`) instead of soft shadows. Texture via light grain, not mesh gradients.

---

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display / brand | **Bricolage Grotesque** | Uneven workshop energy |
| Body | **Petrona** | Warm reading serif; italic for asides |

Brand wordmark can be lowercase `kay` in the nav; hero brand stays large and dominant.

---

## Layout habits

1. Hero = full-bleed photo + paper slab (hard edge), not floating white type on a dark veil.
2. One CTA link, not a button pair.
3. Carousel reads like a lookbook frame, not a premium product slider.
4. About can be slightly crooked (tilted photo). That’s intentional.
5. Contact is left-aligned big email on ink — no centered pitch.
6. Nav sits on the hero only (absolute), not a sticky glass bar.

---

## Motion

Keep it quiet. Crossfade slides. No entrance choreography. Honor `prefers-reduced-motion`.

---

## Scaling

Structure stays section-based for now. Future pages/shop should keep paper/ink/pop and hard frames — don’t slide back into soft bridal gradients.
