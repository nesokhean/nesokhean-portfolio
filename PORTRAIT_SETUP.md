# Portrait Asset Setup

The hero portrait is a static composition. It does not use WebGL, Three.js, GSAP,
CSS animations, transitions, or hover animation.

## Assets

| File | Purpose |
|------|---------|
| `public/img/hero-portrait-hd.webp` | 1920×1792 foreground portrait cutout |
| `public/img/hero-portrait-hd-960.webp` | 960×896 responsive foreground |
| `public/img/hero-aura-hd.webp` | 1920×1792 Neon Chrome Doppelgänger aura |
| `public/img/hero-aura-hd-960.webp` | 960×896 responsive aura |

Both layers use the same 1920×1792 canvas so the foreground and aura stay aligned.
The 960px variants are used at tablet/mobile sizes; desktop loads the 1920px files.

## Composition

`PortraitStage.vue` stacks four static layers:

1. `.portrait-light` — soft blue/violet radial lighting.
2. `.portrait-aura` — the Neon Chrome Doppelgänger portrait behind the foreground.
3. `.portrait-ring` — the static blue/purple SVG energy ring (`AuraRing.vue`).
4. `.portrait-photo` — the original portrait foreground.

## Replacing the portrait

1. Prepare a transparent WebP cutout at 1920×1792, centered with the subject touching
   the top and bottom of the canvas.
2. Export a 960×896 version.
3. Save as `public/img/hero-portrait-hd.webp` and
   `public/img/hero-portrait-hd-960.webp`.
4. Rebuild with `npm run build`.
