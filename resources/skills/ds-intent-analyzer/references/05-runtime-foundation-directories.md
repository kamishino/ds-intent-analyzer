# DS Primary Directories Schema v1

## Purpose

This document defines the primary directories that the analyzer and audit workflow should use when recommending foundations and tokens.

The goal is to:
- keep recommendation work foundation-first
- avoid jumping too early to components
- make token direction more consistent
- provide a stable audit structure

---

## Core primary directories

### 1. Color
**Role**
Defines semantic meaning, hierarchy, state communication, and brand-expression boundaries.

**First-move clues**
- if risky and routine states blend together, inspect state contrast here before general hierarchy cleanup
- if the screen already scans structurally but urgency still disappears, inspect action and state emphasis here before spacing or layout work

**What to inspect**
- semantic roles
- neutral scale
- interactive states
- success / warning / danger logic
- contrast discipline
- emphasis hierarchy

**What good looks like**
- clear semantic roles
- usable contrast
- restrained but expressive where needed
- no accidental color meaning collisions

**Red flags**
- too many accents
- unclear state colors
- “brand color everywhere”
- low-contrast text/UI states

**Token recommendation fields**
- primitives
- semantic background/surface roles
- text/icon roles
- border roles
- action roles
- state roles

---

### 2. Typography
**Role**
Defines readability, scan speed, tone, and information hierarchy.

**Likely effect**
- changes reading comfort, perceived effort, and scan speed
- can make the product feel calmer, denser, more serious, or more demanding

**First-move clues**
- if users cannot tell what matters first, inspect hierarchy roles and weight contrast here before adding more tokens
- if dense information feels tiring, inspect text-role compression and line-height clarity here before changing layout
- if headings are clear but risky and routine actions still read the same, typography is probably secondary and state emphasis should lead instead

**What to inspect**
- type scale
- heading/body hierarchy
- weight usage
- line-height logic
- density support
- reading comfort

**What good looks like**
- clear hierarchy
- stable text roles
- readable body text
- scan-friendly rhythm
- strong support for dense or calm layouts as needed

**Red flags**
- too many text sizes
- weak distinction between roles
- decorative type harming usability
- poor rhythm in forms or tables

**Token recommendation fields**
- font families
- text role scale
- weight roles
- line-height roles
- tracking rules
- max text-width guidance

---

### 3. Spacing
**Role**
Defines rhythm, grouping, separation, and density behavior.

**Likely effect**
- changes grouping clarity, calm vs crowding, and cognitive load
- can make the UI feel breathable, compressed, orderly, or noisy

**First-move clues**
- if sections blur together, inspect grouping rhythm here before adding more visual styling
- if the UI feels busy but not information-rich, inspect spacing hierarchy before reducing content
- if groups are internally readable but priorities still feel flat, spacing is probably secondary and emphasis should lead instead

**What to inspect**
- spacing scale
- consistency
- grouping logic
- section rhythm
- dense vs relaxed modes

**What good looks like**
- consistent spacing system
- clear grouping logic
- rhythm matches product density needs
- spacing supports readability and action clarity

**Red flags**
- arbitrary gaps
- inconsistent vertical rhythm
- overly tight forms
- overly loose enterprise UI

**Token recommendation fields**
- spacing primitives
- inset roles
- stack/gap roles
- dense / default / relaxed guidance

---

### 4. Grid
**Role**
Defines structural alignment, layout predictability, and scan behavior.

**What to inspect**
- column logic
- alignment discipline
- responsive grid behavior
- content width rules
- relationship to cards, tables, and forms

**What good looks like**
- predictable structure
- good scan lines
- responsive consistency
- alignment that reduces noise

**Red flags**
- floating alignment
- arbitrary widths
- weak responsive transitions
- no clear relationship between grid and content types

**Token recommendation fields**
- container widths
- columns
- gutters
- breakpoints
- max content widths

---

### 5. Layout
**Role**
Defines page structure and how major content blocks relate to each other.

**First-move clues**
- if everything feels equally important, inspect layout emphasis here before adding decorative differentiation
- if primary actions or repeated tasks disappear into the page, inspect region weighting here before token work
- if the page feels crowded but stable, inspect grouping boundaries before changing templates or adding more surfaces

**What to inspect**
- page templates
- navigation/content/sidebar structure
- hierarchy of sections
- scroll behavior
- density management

**What good looks like**
- major areas are easy to predict
- layout fits dominant tasks
- structural consistency across screens
- templates support the main pattern families

**Red flags**
- every page feels custom
- layout fights the product’s main jobs
- weak prioritization of key actions/content

**Token recommendation fields**
- layout templates
- region roles
- surface stack rules
- sidebar/content ratios
- page spacing rules

---

### 6. Radius / Shape
**Role**
Defines the system’s shape language and contributes to tone.

**Likely effect**
- changes perceived softness, severity, approachability, and control
- can make controls feel friendlier, more rigid, more precise, or more casual

**First-move clues**
- if the UI feels softer than the product risk allows, inspect shape range here before changing the whole visual language
- if controls feel overly rigid for a low-stress context, inspect shape consistency here before introducing motion or color variation
- if tone feels slightly off but priorities are already unclear, shape is probably secondary and emphasis should lead instead

**What to inspect**
- radius scale
- consistency
- relationship to brand tone
- fit across components/surfaces

**What good looks like**
- deliberate shape language
- consistency across controls and containers
- shape supports tone without hurting clarity

**Red flags**
- random radius values
- mixed visual language
- “soft for the sake of soft”

**Token recommendation fields**
- radius primitives
- control vs container roles
- shape exceptions

---

### 7. Elevation / Shadow
**Role**
Defines depth, layering, focus, and surface distinction.

**Likely effect**
- changes depth clarity, confidence, and visual noise
- can make surfaces feel clearer, more polished, flatter, or unnecessarily busy

**First-move clues**
- if important layers do not stand out, inspect surface distinction here before adding more border or color complexity
- if the UI feels noisy, inspect unnecessary depth variation here before flattening everything else

**What to inspect**
- elevation levels
- overlay/modality behavior
- shadow subtlety
- surface separation logic

**What good looks like**
- clear layering
- restrained use
- enough distinction for overlays and surfaced groups
- depth supports comprehension

**Red flags**
- too many shadow styles
- fake depth everywhere
- weak modal/popover separation

**Token recommendation fields**
- elevation levels
- overlay roles
- border-vs-shadow rules
- surface stacking rules

---

### 8. Motion
**Role**
Defines transition behavior, emphasis, continuity, and tone.

**Likely effect**
- changes continuity, confidence, distraction risk, and perceived polish
- can make interactions feel smoother, more deliberate, more distracting, or more fragile

**First-move clues**
- if the UI feels fragile or overly busy, inspect motion restraint here after hierarchy and state clarity are stable
- do not use motion as the first fix when the real issue is static emphasis or grouping

**What to inspect**
- transition speed
- easing consistency
- feedback motion
- reduce-motion safety
- expressive vs restrained character

**What good looks like**
- motion has purpose
- timing is consistent
- transitions support comprehension
- reduced-motion needs are respected

**Red flags**
- decorative motion overload
- inconsistent timing
- motion masking unclear structure
- no reduced-motion consideration

**Token recommendation fields**
- duration scale
- easing roles
- transition categories
- motion-intent notes

---

### 9. Border / Stroke
**Role**
Defines edges, separation, affordance clarity, and quiet structure.

**Likely effect**
- changes perceived precision, rigidity, quiet structure, and harshness risk
- can make the UI feel more exact, more severe, more orderly, or more brittle

**First-move clues**
- if the UI feels exact but harsh, inspect stroke emphasis here before changing shape or typography
- if important states are too quiet, inspect whether border/stroke contrast is muting priority before adding more components
- if separators are tidy but the screen still feels generic, stroke is probably secondary and region or action emphasis should lead instead

**What to inspect**
- border thickness logic
- stroke color roles
- use in inputs/cards/tables/dividers
- relationship with shadow and surface contrast

**What good looks like**
- borders are intentional
- separation is readable but not noisy
- inputs and data regions are clear

**Red flags**
- border clutter
- inconsistent weights
- over-reliance on borders to solve poor hierarchy

**Token recommendation fields**
- border widths
- divider roles
- control borders
- high/low emphasis stroke roles

---

### 10. Iconography
**Role**
Defines symbolic clarity, action hinting, and visual consistency.

**What to inspect**
- style consistency
- size rules
- stroke/fill logic
- alignment with text roles
- semantic usage

**What good looks like**
- clear style rules
- icons aid recognition
- consistent sizing and alignment
- no mixed icon metaphors

**Red flags**
- mixed styles
- decorative clutter
- icons replacing necessary text clarity

**Token recommendation fields**
- size roles
- stroke/fill rules
- semantic icon usage notes
- alignment rules

---

## Optional directories

### 11. Data Visualization
Use when charts/tables are important.
Inspect:
- semantic chart colors
- comparison clarity
- legend/readability
- dashboard density fit

### 12. Illustration / Imagery
Use when image style materially affects product identity.
Inspect:
- tone consistency
- usage roles
- narrative function
- accessibility implications

### 13. Interaction State Semantics
Use when state-heavy workflows matter.
Inspect:
- hover/focus/active/selected/disabled
- validation/error/loading
- transition between states

### 14. Content / Tone Rules
Use when content-heavy or trust-heavy products dominate.
Inspect:
- plain-language discipline
- microcopy clarity
- tone consistency
- scan behavior

---

## Audit priority rule

Do not inspect all directories equally every time.

Prioritize based on:
- product type
- dominant patterns
- risk
- density
- brand-expression need

Examples:
- trust-heavy service → Color, Typography, Layout, Content/Tone, Motion
- workflow-heavy admin → Typography, Spacing, Grid, Layout, State Semantics
- brand-led consumer → Color, Typography, Shape, Motion, Imagery
- platform-first system → Color semantics, Typography roles, Spacing, Grid, State Semantics, naming discipline

---

## Final rule

These directories are the main bridge between intent analysis and token recommendation.
