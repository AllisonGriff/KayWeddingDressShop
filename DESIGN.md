# Kay — Design Bible

Visual system for Kay: a young designer moving into wedding dresses. The site should feel like a considered bridal editorial — warm, refined, and personal rather than overproduced.

## Spirit

| Pillar | Meaning |
| --- | --- |
| **Warm** | Ivory, soft stone, and natural light |
| **Refined** | Generous whitespace, delicate rules, restrained bronze and lavender accents |
| **Personal** | Plainspoken copy and honest photographs, never a generic luxury template |

## What to avoid

- Loud accent colors, heavy borders, distressed textures, or hard shadows
- Excessive uppercase labels and oversized navigation
- Frosted glass headers or floating CTA button pairs
- Entrance choreography and unnecessary image motion
- Generic luxury copy or ornamental filler

## Color and materials

Tokens live in `src/styles/tokens.css`.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-paper` | `#FAF8F4` | Page ground |
| `--color-paper-deep` | `#E9E3DA` | Soft section contrast |
| `--color-ink` | `#302B27` | Type and dark surfaces |
| `--color-ink-mid` | `#5B544D` | Body |
| `--color-ink-faint` | `#82786E` | Secondary text |
| `--color-pop` | `#9A7A57` | Restrained bronze accent |
| `--color-lavender` | `#B7A5C9` | Soft floral accent |
| `--color-lavender-deep` | `#746080` | Lavender text and detail |
| `--color-lavender-wash` | `#F1ECF4` | Light lavender surface |
| `--color-white` | `#FFFDF9` | Light type |

Use lavender as a quiet secondary accent with the warm neutrals and bronze. Use fine, low-contrast rules and clean image edges; let whitespace and photography create the visual rhythm.

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display / brand | **Cormorant Garamond** | Graceful editorial serif |
| Body | **DM Sans** | Quiet, legible sans serif |

Keep the wordmark understated in navigation and let the hero title provide the scale.

## Layout habits

1. Hero pairs an expansive photograph with a quiet paper title area.
2. Favor a single understated text link over competing CTAs.
3. Keep carousels image-led, with minimal controls and captions.
4. Product cards use clean photos, clear names, and discreet details.
5. Contact stays personal and left-aligned, with a warm contrasting surface.
6. Navigation remains simple and transparent over the hero; avoid sticky glass effects.

## Motion

Keep motion quiet. Crossfade slides and use subtle hover feedback. Honor `prefers-reduced-motion`.

## Scaling

Structure stays section-based for now. Future pages/shop should use the same warm neutrals, editorial typography, restrained bronze and lavender accents, and generous spacing.
