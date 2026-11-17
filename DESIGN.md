---
name: Davidson Siga
description: A lecture-hall blackboard typeset in Computer Modern chalk.
colors:
  chalk: "#eceae1"
  slate: "#1b2220"
  slate-lo: "#151b19"
  chalk-2: "#c4c7bd"
  chalk-3: "#9aa198"
  chalk-rule: "rgb(236 234 225 / 0.16)"
  guide: "rgb(236 234 225 / 0.035)"
  ghost: "rgb(236 234 225 / 0.075)"
  smear-ink: "#ffffff"
  humana-green: "#5BA908"
  ibm-blue: "#0F62FE"
  wellsfargo-red: "#D71E28"
  wellsfargo-gold: "#FFCD41"
  musigma-orange: "#CD5827"
  cmu-red: "#C41230"
  kiit-green: "#1E8E3E"
  verizon-red: "#EE0000"
  aiesec-blue: "#037EF3"
typography:
  display:
    fontFamily: "CM Symbols, CMU Serif, Latin Modern Roman, Georgia, serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "CM Symbols, CMU Serif, Latin Modern Roman, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  math:
    fontFamily: "CM Symbols, CMU Serif, Latin Modern Roman, Georgia, serif"
    fontSize: "clamp(1.55rem, 3.4vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "CM Symbols, CMU Serif, Latin Modern Roman, Georgia, serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "CM Symbols, CMU Concrete, CMU Serif, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  annotation:
    fontFamily: "CM Symbols, CMU Serif, Latin Modern Roman, Georgia, serif"
    fontSize: "clamp(0.85rem, 1vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: "CM Symbols, CMU Typewriter, Latin Modern Mono, ui-monospace, monospace"
    fontSize: "0.92em"
    fontWeight: 400
    letterSpacing: "0"
    fontFeature: "tnum"
rounded:
  focus: "2px"
  tool: "0.4rem"
spacing:
  gutter: "clamp(1rem, 4vw, 4rem)"
  panel-y: "clamp(4.5rem, 9vw, 8rem)"
  wrap: "78rem"
  guide-rule: "3.2rem"
  tray-h: "4.25rem"
components:
  org-smear:
    textColor: "{colors.smear-ink}"
    padding: "0 0.32em"
  tray:
    backgroundColor: "{colors.slate-lo}"
    height: "{spacing.tray-h}"
  tray-section:
    textColor: "{colors.chalk-2}"
    typography: "{typography.body}"
    padding: "0.6rem 0.7rem"
  tray-section-current:
    textColor: "{colors.chalk}"
  tray-tool:
    textColor: "{colors.chalk-2}"
    rounded: "{rounded.tool}"
    height: "2.75rem"
    padding: "0 0.6rem"
  tray-tool-pressed:
    textColor: "{colors.chalk}"
  link:
    textColor: "{colors.chalk}"
  draw-hint:
    backgroundColor: "{colors.slate-lo}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.tool}"
    padding: "0.45rem 0.9rem"
---

# Design System: Davidson Siga

## Overview

**Creative North Star: "The Seminar Blackboard"**

The whole site is one deep slate board after a good CMU seminar: a derivation of a person, set in Computer Modern and rendered as chalk. Ink is a single warm chalk white in three strengths; the board carries grain, a faint ruled texture, and half-erased equations left from the previous lecture. Content reads like a paper written on a board: an abstract, a notation table, named projects with boxed results, honors, cited AI projects, and office hours.

Density is low and the board is mostly unprinted. Each section is a full-width panel separated by a hairline seam, with one display-serif heading that writes itself on from left to right. Ornament is never decorative: every mark is a piece of mathematical notation (an underbrace, a box around a result, a therefore sign, an arrow) drawn as a chalk stroke.

Colour exists only as code. Institution names sit on a rubbed smear of coloured chalk in their brand hue; nothing else on the board is coloured. The visitor can pick up chalk from the tray and draw on the board, then erase it. The world refuses the dark-mode developer portfolio: no hero-plus-skill-pills-plus-card-grid.

**Key Characteristics:**
- One slate board, one chalk ink in three strengths, colour reserved for institution smears.
- Computer Modern throughout: Serif for display and math, Concrete for reading, Typewriter for codes, dates and numbers.
- Notation as ornament: underbraces, boxes, ∴ and → are drawn or typeset, never iconography.
- Chalk texture comes from three SVG displacement filters, not from images.
- Motion is a write-on: clip reveals for headings, stroke-draws for marks, once, and fully visible without JS or under reduced motion.

## Colors

A monochrome chalk-on-slate board whose only colour is the institution code.

### Primary
- **Chalk White** (chalk): the one ink. Headings, the name, the objective, emphasized run-in words, current navigation, hand-drawn marks, visitor strokes, the dashed focus ring and the selection fill.

### Tertiary
- **Institution Code** (humana-green, ibm-blue, wellsfargo-red, wellsfargo-gold, musigma-orange, cmu-red, kiit-green, verizon-red, aiesec-blue): each brand hue appears only as the smear behind that institution's name, at 62% opacity (85% on hover). Wells Fargo gold rides as a second chalk underline beneath the red smear. Hues live in `src/config.ts` `orgs`, never in stylesheets.
- **Smear Ink** (smear-ink): pure white text on a smear, with a 1px soft drop shadow for legibility over the grainy edge. White on every smear measures 5.4:1 or better.

### Neutral
- **Seminar Slate** (slate): the board and page background; also the theme colour.
- **Ledge Slate** (slate-lo): the darker chalk tray ledge, the draw hint panel, the scrollbar track.
- **Worn Chalk** (chalk-2): secondary ink, about 9.4:1 on slate. Body copy in the hero role line, subtitles, annotations, meta and inactive navigation.
- **Faded Chalk** (chalk-3): tertiary ink, about 6.1:1 on slate. Citation keys and the colophon only.
- **Seam** (chalk-rule): the 1px hairline between panels, list rows, entries and the tray's top edge.
- **Guide Ruling** (guide): the horizontal ruled lines across the board every 3.2rem, masked away at both edges.
- **Ghost Chalk** (ghost): half-erased equations behind panels; decorative, aria-hidden, blurred and masked.

### Named Rules
**The Colour Is Code Rule.** Colour appears only as an institution's smear behind its own name. No coloured headings, buttons, links, borders or highlights. The chalk and eraser drawings in the tray depict their real objects and are the only exception.

**The One Ink Rule.** All text and marks are chalk white at one of three strengths (chalk, chalk-2, chalk-3). Hierarchy comes from strength, size and italic, never from a second hue.

## Typography

**Display Font:** CMU Serif (with Latin Modern Roman, Georgia)
**Body Font:** CMU Concrete (with CMU Serif, Georgia)
**Label/Mono Font:** CMU Typewriter (with Latin Modern Mono, ui-monospace)
**Symbols:** CM Symbols, a Latin Modern Math subset loaded first in every stack with a unicode-range, so arrows, relations, ∞, ∴ and math-italic θ/λ fall back into Computer Modern instead of a system face.

**Character:** The typeface of LaTeX, self-hosted. Serif is the lecturer's display hand, Concrete's heavier, rounder strokes carry long reading on dark slate, and Typewriter marks anything that is a code or a number.

### Hierarchy
- **Display** (400, clamp(3.25rem, 8vw, 6rem), 0.95): the name only, with the heavier chalk filter.
- **Headline** (400, clamp(2.25rem, 4.6vw, 3.75rem), 1.05, balanced): one per panel, chalk-filtered, writes on. An optional italic subtitle sits beneath at 0.42em in worn chalk.
- **Math** (400, clamp(1.55rem, 3.4vw, 3.1rem), 1.1): typeset expressions, with sub/superscripts at 0.55em.
- **Title** (400, clamp(1.7rem, 2.6vw, 2.2rem), 1.15): institution names, school names, course names and reference titles (course and reference titles run in their own clamps of the same role).
- **Body** (400, 1.125rem, 1.6): CMU Concrete; prose capped at 68ch, project bodies at 70ch.
- **Annotation** (italic, clamp(0.85rem, 1vw, 1rem), 1.3): notes under underbraces, venue lines, subtitles, run-in leads such as "Touches" or "Coursework".
- **Label** (400, 0.92em, tabular numerals): CMU Typewriter for course codes, date ranges, citation keys and the colophon.

### Named Rules
**The Typeset Not Styled Rule.** Every face is Computer Modern. Emphasis is italic or bold Serif as in a paper (project names in bold Serif, key skills in italic Serif); never uppercase tracking, never a sans.

**The Typewriter Means Data Rule.** CMU Typewriter is used only for codes, dates, keys and numbers. It never sets prose or navigation.

## Layout

The board is full-bleed; content sits in a centred 78rem column with a fluid gutter (clamp(1rem, 4vw, 4rem)). Each section is a panel with fluid vertical padding (clamp(4.5rem, 9vw, 8rem)), separated from the next by a 1px seam. The hero fills the first viewport above the tray (100svh minus the tray height) and sets name, role line, objective, constraints and contact flush left.

Inside panels, structure is a two-column grid that collapses to one column at 860px: Abstract (1.35fr prose, 1fr notation table), Work (13 to 19rem meta column, then projects), Honors, Projects and Education (two equal columns). Lists are separated by hairline seams rather than enclosed. At 640px the objective breaks into lines at marked break points and only the first ghost equation remains.

The fixed chalk tray (4.25rem plus safe area) occupies the bottom of every viewport; the body reserves its height as bottom padding. The ruled guide lines repeat every 3.2rem as board texture.

## Elevation & Depth

The board is flat and depth is tonal: grain, three radial vignettes (lighter upper left and right, darker at the foot), and ghost equations behind content give the slate its surface. Shadows exist only for objects that sit physically above the board.

### Shadow Vocabulary
- **Ledge** (`box-shadow: 0 -12px 28px rgb(0 0 0 / 0.35)`): the chalk tray casting upward onto the board.
- **Hint** (`box-shadow: 0 6px 18px rgb(0 0 0 / 0.4)`): the transient draw hint floating above the tray.
- **Smear legibility** (`text-shadow: 0 1px 1px rgb(0 0 0 / 0.35)`): white text over a coloured smear only.

### Named Rules
**The Board Is Flat Rule.** Nothing written on the board casts a shadow. Only the tray and the hint, which are objects in front of it, are lifted.

## Shapes

Shapes are hand-drawn rather than geometric. Chalk marks (the box around a result, the current-section box, the underbrace) are SVG paths with slightly wobbling control points, round caps, non-scaling strokes of 1.5 to 2.2px, and the chalk-line displacement filter. Smears are skewed (-6deg), tilted (-0.8deg), asymmetrically rounded and masked with fractal noise so their edges rub out. Containers have no outline: separation is a 1px seam above, sometimes a dashed seam between rows. The only true radii are the tray tools and hint (0.4rem) and the focus ring (2px).

## Components

### Institution Smear
Coloured chalk rubbed behind a name. Inline, no-wrap, 0 0.32em padding, white text. The smear pseudo-element is the brand hue at 0.62 opacity, skewed and noise-masked; on hover it deepens to 0.85 and grows 4%. An optional second hue draws a thin tilted underline beneath. Used for every company and university mention, linked or not.

**Logo variant** (`<Org logo />`, used for the Work role headers). The company's own mark, recoloured chalk white (#eceae1) and given the chalk-soft grain, sits on the same smear in place of the typed name: Humana wordmark, IBM 8-bar, Wells Fargo lettering without its red field, and Mu Sigma's μσ glyph with the name set beside it. Each mark has its own height in em (`orgs[k].logo`) so they balance visually. Padding is 0.24em 0.42em. Files live in `public/logos/`, from Wikimedia Commons and recoloured; the Mu Sigma PNG has its source embedded. Never show a logo in full colour: the smear carries the brand hue.

### Navigation (Chalk Tray)
A flat slate ledge fixed to the bottom with a seam on top and the Ledge shadow. Sections are chalk-written words in Serif (1.05rem; 0.95rem under 720px) in worn chalk. **Hover** draws a 2px chalk underline from the left (scaleX, 0.45s). **Current** turns full chalk and is boxed by a hand-drawn chalk outline that stroke-draws in (0.6s). Under 720px the word row scrolls horizontally and fades out at the right.

### Tray Tools
Two buttons to the right of the sections: Chalk and Erase, each a small drawn object plus an italic Serif label, always labelled. 2.75rem tall, 0.4rem radius, worn chalk text turning full chalk on hover. **Pressed** chalk lifts and tilts (translateY(-5px) rotate(-14deg)). The eraser is disabled at 40% opacity until there is something to erase. Under 720px label stacks under the object.

### Links
Inherit their colour; a 1px underline at 40% chalk sits 0.22em below and brightens to full chalk on hover (0.3s). Focus everywhere is a 2px dashed chalk outline offset 4px. The office-hours email is the one display-size link with a 2px underline.

### Project and Result
Each role lists projects: a bold Serif project name, its key skills on the next line in italic Serif separated by middle dots, then short Concrete bullets marked with an en dash. A patent sits under its project as a citation behind a 1px rule. (This replaced an earlier "Lemma i.j" run-in format the owner found hard to scan.) The role closes with a therefore sign (∴) in worn chalk and the result in Serif, enclosed in a hand-drawn chalk box.

### Reference Entry
A bibliography item: Typewriter key in brackets (faded chalk), Serif title with an italic venue beneath, and one recipe line in worn chalk ending in an arrow and the result in italic chalk.

### Notation Table
A definition list under an italic Serif heading, set off by a 25% seam above; italic Serif terms in a 9.5rem column, worn-chalk definitions, dashed seams between rows.

### Objective (Signature)
The hero's typeset loss function. Each term carries a chalk underbrace that stretches to its width and an italic annotation beneath. The λ term is a button that cycles its annotation (polite live region); hover gives it an 8% chalk wash.

### Visitor Chalk
Picking up the chalk sets a chalk-stick cursor and lets the visitor draw 3px chalk strokes (92% opacity, chalk-line filter) on a layer that scrolls with the board. Esc puts the chalk down; Erase blurs and fades every stroke (0.7s). A short italic hint on a slate panel appears for 3.2s on pickup.

### Motion
One easing for everything: ease-out expo (cubic-bezier(0.16, 1, 0.3, 1)). Headings reveal with a left-to-right clip over 1.1s; chalk marks stroke-draw over 1s after a 0.35s delay. Each runs once, on entry. Everything is visible by default and only hidden once JS has loaded; reduced motion removes every reveal and transition.

## Do's and Don'ts

### Do:
- **Do** set every institution name in an institution smear with its brand hue from `orgs`, and add new institutions there rather than in CSS.
- **Do** draw ornament as notation: a chalk box for a result, an underbrace for an annotation, ∴ before a conclusion, → between recipe and result.
- **Do** run chalk texture through the shared #chalk, #chalk-soft and #chalk-line filters: heavy for the name, soft for headings and links, line for strokes.
- **Do** separate content with 1px seams at 16% chalk and leave the board open; panels breathe at clamp(4.5rem, 9vw, 8rem).
- **Do** keep reveals one-shot, ease-out expo, visible without JS, and removed under reduced motion.
- **Do** reach for chalk-2 and italic before reaching for a smaller size.

### Don't:
- **Don't** colour anything except institution smears: no accent buttons, coloured links, coloured headings or tinted panels.
- **Don't** use any face outside Computer Modern; route new symbols through the CM Symbols subset instead of letting a system font fill the glyph.
- **Don't** build the dark-mode developer portfolio: no skill pills, no card grid, no boxed cards with fills or borders on all four sides.
- **Don't** cast shadows from anything written on the board.
- **Don't** use CMU Typewriter for prose, headings or navigation.
- **Don't** put a label above a heading; context goes into an italic subtitle below it.
