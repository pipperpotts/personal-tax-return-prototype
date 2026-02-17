# Hart & Co Accountancy Website – Implementation Kickstart

## Project Overview
Single full-width landing page for Hart & Co Accountancy. Purpose: position Amelia Hart as a professional tax return specialist for PAYE individuals and small landlords. Tone: professional, warm, reassuring. CTA: one unified "Start my tax return" button that opens a modal intake form.

---

## A. PAGE STRUCTURE & SECTION ORDER

Landing page built as **single full-width responsive page** with the following sections in order:

1. **Hero Section**
   - Split layout: text (left), headshot placeholder (right)
   - Headline: "Your tax return. Done properly."
   - Subheadline: "No jargon. No rushing. No guesswork."
   - Primary CTA: "Start my tax return"
   - Micro-trust line: "HMRC-compliant | Fixed fee | Results in 3–5 days"
   - Responsive: stacks vertically on mobile

2. **Service Features Section**
   - 6 feature cards in 2×3 grid (or responsive flex)
   - Each card: icon + title + short description
   - Features: Professional expertise, Stress-free process, HMRC compliance, Timely delivery, Fixed pricing, Personal attention

3. **Trust & Reassurance Section**
   - 3 key trust pillars in cards:
     - Fixed Pricing (£249)
     - HMRC Compliance Guaranteed
     - 3–5 Day Turnaround
   - Emphasizes risk reduction

4. **Who This Is For Section**
   - Checklist of 5 qualifying criteria
   - Each with checkmark icon
   - Secondary CTA: "Start my tax return" (scroll-linked)

5. **How It Works Section**
   - 3-step visual process:
     - Step 1: Complete intake form
     - Step 2: We prepare & review
     - Step 3: Download + submit to HMRC
   - Simple numbered cards with smooth connections

6. **Pricing Section**
   - Single fixed-price card (£249)
   - Included items (bulleted list)
   - Optional add-ons section (listed, priced separately / quoted upfront)
   - Primary CTA: "Start my tax return"

7. **Confidence/Guarantee Section**
   - 4 professional assurance points:
     - Years of experience
     - Full confidentiality
     - HMRC standing
     - Money-back satisfaction guarantee
   - Tone: reassuring, risk-reducing

8. **Social Proof Section**
   - 4 stat cards (e.g., "1000+ Returns Filed", "4.9★ Average Rating")
   - 3 sample testimonial cards with quotes
   - Visible disclaimer: "Sample testimonials shown for prototype purposes"

9. **FAQ Section**
   - Accordion component (collapsible)
   - 8 common questions + answers
   - Handles objections: "Why not just DIY?", "What if I've missed something?", etc.

10. **Final CTA Strip**
    - Full-width section with headline, reassurance text, and large CTA
    - Purpose: last conversion opportunity before footer

11. **Footer**
    - Company name, email, location
    - Copyright + muted links
    - Tax disclaimer (small text)

---

## B. COMPONENT ARCHITECTURE

**File structure** (separate files per major section to keep code organized and under 600 lines):

```
app/
├── page.tsx (main page, imports all sections)
├── layout.tsx (SEO metadata, fonts, global styles)
└── components/
    ├── Hero.tsx (section 1)
    ├── Features.tsx (section 2)
    ├── TrustPillars.tsx (section 3)
    ├── WhoIsFor.tsx (section 4)
    ├── HowItWorks.tsx (section 5)
    ├── Pricing.tsx (section 6)
    ├── Confidence.tsx (section 7)
    ├── SocialProof.tsx (section 8)
    ├── FAQ.tsx (section 9)
    ├── FinalCTA.tsx (section 10)
    ├── Footer.tsx (section 11)
    └── IntakeFormModal.tsx (shared modal, triggered by any CTA)
```

**Key reusable patterns:**
- Card component (used in Features, TrustPillars, SocialProof, etc.)
- Button component (single style: "Start my tax return" CTA)
- Modal wrapper (for intake form overlay)
- Icon set (simple, consistent 24px icons from existing shadcn/ui or custom SVGs)

---

## C. CTA STRATEGY & MODAL FLOW

### One CTA Label
- All buttons throughout the page use identical label: **"Start my tax return"**
- Consistent styling: accent color background, white text, subtle hover state

### Modal Intake Form Behavior
- **Trigger:** Any "Start my tax return" CTA button
- **Modal opens:** Centered overlay with form
- **Form fields:**
  1. First Name (required, text input)
  2. Email (required, email input)
  3. Income Type (required, checkboxes: PAYE, Rental, Contractor/Self-employed, Multiple)
  4. Optional: "Anything we should know?" (optional, textarea)
- **Validation:** Simple client-side (required fields, email format)
- **Success flow:**
  1. Submit button disabled during submission (loading state)
  2. Success confirmation message displayed ("Thank you! We'll be in touch within 24 hours")
  3. Auto-close modal after 2 seconds
  4. Smooth scroll-to-top (window.scrollTo with smooth behavior)
- **No backend call** (prototype UI only; form submission is mocked)

### Mobile Modal Behavior
- Modal adapts to mobile viewport: full height, no scrollable body overflow
- Close button (X) in top-right always visible
- Touch-friendly form inputs (larger tap targets)

---

## D. STYLING SYSTEM

### Design Approach
- **Premium minimal** with subtle **glass morphism** accents
- Strong contrast for accessibility (WCAG AA minimum)
- Single accent color used only for CTAs and key highlights
- Neutral base: white backgrounds, gray text, light gray borders

### Color Palette
- **Primary**: White (`#ffffff`)
- **Secondary**: Light gray (`#f5f5f5`) for subtle backgrounds
- **Text**: Dark gray (`#1a1a1a`) for headings, medium gray (`#666666`) for body
- **Accent**: Blue (`#2563eb`) for all CTA buttons and highlights
- **Borders/dividers**: Very light gray (`#e5e5e5`)
- **Overlays**: Semi-transparent dark (modal backdrop, rgba(0,0,0,0.5))

### Typography
- **Font family**: Single sans-serif (system font or Inter from next/font/google)
- **Headings**: Bold, large (h1: 3rem–4rem, h2: 2rem–2.5rem, h3: 1.25rem–1.5rem)
- **Body text**: 16–18px, line-height 1.5–1.6 (leading-relaxed)
- **Small text**: 14px (secondary info, disclaimers)

### Card Styling
- White background with subtle border (1px #e5e5e5)
- Rounded corners: 8–12px (consistent radius)
- Padding: 24px–32px (consistent spacing)
- Shadow: subtle (box-shadow: 0 1px 3px rgba(0,0,0,0.1))
- **Glass morphism accent:** Light background gradient + semi-transparent border for premium feel (applied sparingly to key cards like pricing and CTAs)

### Spacing & Layout
- Use Tailwind spacing scale: p-6, p-8, gap-4, gap-8
- Avoid arbitrary values; stick to consistent intervals
- Flex layouts for most sections (flexbox > grid for this layout)
- Max-width container: 1200px centered with padding

### Responsive Breakpoints
- Mobile-first approach
- `md:` (768px) — desktop layout kicks in (2-column grids become 1-column on mobile)
- `lg:` (1024px) — fine-tuning for larger screens

---

## E. NAVIGATION BEHAVIOR

### Desktop Navigation
- **Header:** Sticky or static (to be determined)
- Company logo/name on left
- Navigation menu on right (if any; spec doesn't require it, so likely minimal or none)
- CTA button in header (optional; primary CTA is in hero)

### Mobile Navigation
- **Hamburger menu** (3 horizontal lines icon)
- Burger menu opens full-screen mobile nav on click
- Close button (X) inside nav to dismiss
- Smooth animation: slide-in from top or fade-in
- Nav items (if any): smooth link scrolling to sections, auto-close menu on link click
- Subtle transition: fade or slide, no heavy motion

### Smooth Scroll Behavior
- All anchor links use smooth scroll (scroll-behavior: smooth in CSS)
- When form is submitted, window.scrollTo({ top: 0, behavior: 'smooth' })

---

## F. ANIMATION & MICRO-INTERACTIONS

### Philosophy
- Subtle, purposeful animations only
- No heavy motion or distracting transitions
- Focus on hover states and gentle scroll effects

### Specific Animations
- **Button hover:** Subtle shadow increase, slight scale (1.02×), color shift
- **Card hover:** Lift effect (shadow increase), slight scale
- **Form inputs:** Underline or border color change on focus
- **FAQ accordion:** Smooth height transition when expanding/collapsing
- **Modal entrance:** Fade-in + subtle scale-up (no bounce)
- **Scroll-to-top:** Smooth scrolling over ~500ms
- **Links:** Underline or color transition on hover (100ms duration)

### CSS Transitions
- Default: 200–300ms cubic-bezier(0.4, 0, 0.2, 1) (ease-out)
- Page scroll: 500ms ease-out

---

## G. SEO & METADATA

### Page Title & Description
- **Title:** "Hart & Co Accountancy | Professional Tax Returns for PAYE & Landlords"
- **Meta Description:** "Expert tax return preparation. HMRC-compliant, fixed fee (£249), delivered in 3–5 days. Perfect for PAYE workers and small landlords."

### Semantic HTML
- Use `<header>`, `<main>`, `<section>`, `<footer>` landmarks
- Proper heading hierarchy: h1 (one per page) → h2 (major sections) → h3 (subsections)
- Alt text for all images (or mark as decorative if applicable)

### Open Graph & Social
- og:title, og:description, og:image (if applicable)
- og:type: "website"
- og:url: site URL

### Robots & Canonical
- robots.txt: allow all (standard)
- Canonical link: self-referential (good practice)

---

## H. ASSUMPTIONS & RISKS

### Assumptions
1. **Single page only** (no multi-page navigation)
2. **No backend integration** for form submission (mocked/prototype behavior)
3. **No email confirmation** or follow-up automation
4. **Placeholder images** for headshot and any decorative assets (user to provide later)
5. **No analytics tracking** (user can add later via GA or Vercel Analytics)
6. **Modal form only** — no server-side validation or submission
7. **Mobile-first responsive design** but assumes modern browsers (no IE11 support)

### Risks
1. **Form submission mocking:** Currently no backend. User may want to integrate Formspree, Vercel KV, or a database later.
2. **Placeholder images:** Visual hierarchy depends on good headshot; user must provide high-quality image.
3. **Modal overflow:** If form grows or user adds fields, modal may scroll on mobile.
4. **Testimonial authenticity:** Sample testimonials clearly labeled; user should replace with real ones.
5. **SEO decay:** Static page; no blog or content updates may limit long-term SEO.

### Open Questions (None)
- All decisions have been made per user's approval decisions above.

---

## I. IMPLEMENTATION CHECKLIST

### Phase B (Build)
- [ ] Setup: Next.js 16, TypeScript, Tailwind, shadcn/ui
- [ ] Layout: Configure metadata, viewport, fonts
- [ ] Hero: Headshot placeholder, headline, CTA
- [ ] Features: 6 cards, grid layout
- [ ] TrustPillars: 3 cards, key benefits
- [ ] WhoIsFor: 5 checklist items
- [ ] HowItWorks: 3-step process with visuals
- [ ] Pricing: £249 card, included items, add-ons list
- [ ] Confidence: 4 assurance points
- [ ] SocialProof: 4 stats + 3 sample testimonials + disclaimer
- [ ] FAQ: 8 accordions with answers
- [ ] FinalCTA: Full-width section + CTA
- [ ] Footer: Contact info, links, disclaimer
- [ ] IntakeFormModal: Form fields, validation, success flow
- [ ] Navigation: Header (minimal), burger menu (mobile), smooth scroll
- [ ] Animations: Hover states, transitions, scroll effects
- [ ] Responsive: Test mobile, tablet, desktop
- [ ] Accessibility: WCAG AA, semantic HTML, alt text, focus states
- [ ] SEO: metadata, canonical, OG tags
- [ ] Testing: Form submission flow, modal behavior, mobile nav

---

## J. BUILD APPROACH

1. **Setup:** Layout, global styles, color tokens
2. **Component-by-component:** Build each section as a separate component
3. **Modal:** Shared modal wrapper + intake form
4. **Navigation:** Header + mobile burger menu
5. **Integration:** Assemble all components into main page
6. **Polish:** Animations, responsive tweaks, accessibility checks
7. **QA:** Test all flows (CTA → modal → success → scroll-to-top)

---

## Files to Create
- `app/page.tsx` (main page)
- `app/layout.tsx` (update with metadata)
- `app/components/Hero.tsx`
- `app/components/Features.tsx`
- `app/components/TrustPillars.tsx`
- `app/components/WhoIsFor.tsx`
- `app/components/HowItWorks.tsx`
- `app/components/Pricing.tsx`
- `app/components/Confidence.tsx`
- `app/components/SocialProof.tsx`
- `app/components/FAQ.tsx`
- `app/components/FinalCTA.tsx`
- `app/components/Footer.tsx`
- `app/components/IntakeFormModal.tsx`
- `app/components/Header.tsx` (minimal)

---

## Summary
This plan establishes a **premium minimal single-page landing page** with **11 sections**, **modular component architecture**, **one unified CTA strategy** (modal intake form), **glass morphism styling**, **micro-animations**, **full responsiveness** (mobile + desktop), **SEO optimization**, and **prototype-level form handling** (no backend). Ready for build upon approval.
