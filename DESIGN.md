# Design Brief

## Direction

Corporate Luxury Consulting — Premium boutique commercial real estate and investment advisory platform for Delhi's executive professionals. Minimal high-end aesthetic paired with cinematic motion.

## Tone

Elegant, understated premium — professional sophistication with refined restraint, positioned as a trusted investment consultancy, not a property marketplace.

## Differentiation

Cinematic hero with animated gradient overlay, glassmorphic testimonial cards on dark background, animated timeline with connecting lines, and smooth parallax motion orchestrated with framer-motion elegance.

## Color Palette

| Token          | OKLCH        | Role                          |
|----------------|--------------|-------------------------------|
| background     | 0.99 0.003 260 | Light content surfaces       |
| foreground     | 0.12 0.02 270 | Primary text (navy)          |
| card           | 1.0 0.0 0    | Card backgrounds (white)     |
| primary        | 0.38 0.12 270 | Deep navy for CTAs & headers |
| accent         | 0.55 0.22 25 | Red for highlights & accents |
| muted          | 0.94 0.01 260 | Subtle backgrounds           |

## Typography

- Display: Space Grotesk — bold, elegant sans-serif for headlines and hero text
- Body: General Sans — clean premium sans-serif for body copy and UI labels
- Scale: hero text-display-lg, section headings text-display-md, labels text-sm font-semibold, body text-base

## Elevation & Depth

Shadow hierarchy with subtle elevation: shadow-elevated (0 12px 24px -6px), shadow-subtle (0 1px 3px 0). Glassmorphism on dark backgrounds using backdrop-filter blur. Glow borders for premium card distinction without overwhelming.

## Structural Zones

| Zone    | Background                | Border              | Notes                                    |
|---------|---------------------------|---------------------|------------------------------------------|
| Header  | bg-background              | border-b border-border | Sticky navbar, transparent blur effect |
| Hero    | Dark navy gradient overlay | —                   | Cinematic full-viewport with parallax   |
| Content | Alternating bg-background & bg-muted/30 | —   | Clean section separation               |
| CTA     | Dark navy (#0d1f3c)        | —                   | Cinematic gradient background            |
| Footer  | bg-muted/50                | border-t border-border | Company info and contact details      |

## Spacing & Rhythm

Spacious vertical rhythm (py-16 md:py-24 between sections), consistent px-6 md:px-12 horizontal padding, card groups separated by gap-6 md:gap-8. Premium letter-spacing on display text for executive tone.

## Component Patterns

- Buttons: bg-primary, rounded-lg, px-6 py-3, hover:shadow-elevated, smooth transitions
- Property Cards: bg-card, shadow-subtle, rounded-lg, hover:scale-105 with image overlay
- Glassmorphism Cards: glass-effect-dark, border border-white/10, backdrop blur 12px
- Authority Boxes: flex with animated line transitions on hover
- Timeline Steps: numbered badges with connecting line, hover glow effects
- Trust Strip: icon + label pairs in row, gap-6, minimal styling

## Motion

- Entrance: Cinematic fade-in with stagger delay (0.05s per element) using framer-motion
- Hover: Smooth card lift (translateY -4px), glow border intensification, shadow elevation
- Decorative: Subtle parallax on hero (offset 0.5), gradient overlay animation, animated connecting lines on timeline
- All transitions use cubic-bezier(0.4, 0, 0.2, 1) for smooth ease

## Constraints

- No flashy or bouncy animations—all motion is refined and cinematic
- Use only brand colors (navy + red) to maintain consistency and premium feel
- Avoid generic defaults; every shadow, border, and spacing choice is intentional
- Glass effects restricted to dark sections to maintain contrast and readability
- Logo always visible in navbar; WhatsApp/Call buttons float persistently

## Signature Detail

Animated connecting line on horizontal timeline that reveals on scroll and responds to hover—a signature orchestration detail that sets apart the consulting experience and signals premium, thoughtful design.
