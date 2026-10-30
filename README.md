# Kay Website

Website for Kay — a young clothing designer branching into wedding dresses.

## Design

See [DESIGN.md](./DESIGN.md) for the full design bible (color, type, layout, motion, scaling notes).

## Develop

```bash
npm install
cp .env.example .env
npm run dev
```

Set `VITE_CONTACT_EMAIL` in `.env` to the inbox that should receive form inquiries. The form uses [FormSubmit](https://formsubmit.co) — the first submission sends an activation email to that address; confirm it once, then submissions land in the inbox.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/  # Page sections (Header, Hero, PhotoCarousel, About, Contact, Footer)
  data/        # Content & imagery data (ready to grow into a shop later)
  pages/       # Route-level pages
  styles/      # Design tokens
```

The design playground is available at `/playground` as a starting point for future visual experiments.
