# Portfolio Website – Implementation Plan

## 1. Goals & Scope
- **Goal**: Build a single-page portfolio site with a left-side navigation and dark, minimal aesthetic inspired by the reference UI.
- **Structure**:
  - **Section 1 – About**
    - Sub-section 1: **Who I Am** (intro paragraph)
    - Sub-section 2: **Skills** (skill list / tags / simple grid)
  - **Section 2 – Work**
    - Project / work entries (cards or rows)
- **Navigation**: Fixed vertical nav on the **left**, content on the **right**.

## 2. Tech Stack (to confirm)
- **Framework**: **Next.js** (project already set up).
- **Language**: TypeScript or JavaScript depending on existing config.
- **Styling**: Global CSS / CSS Modules / Tailwind (to follow whatever is already configured in the project).
- **Behavior**: Minimal client-side JS (smooth scrolling for nav links, simple interactions).

> **Decision**: Use the existing **Next.js** app as the framework and build the portfolio as a single-page experience (one main route) with sections.

## 3. Layout & Structure
- **Base layout (Next.js)**
  - Use a root layout (e.g. `app/layout.tsx`) or page-level layout to define a full-height flex container.
  - **Left column**: fixed-width nav (e.g. 260–320px) containing:
    - Name / role (e.g. “Design Engineer”, “Software Developer”).
    - Nav links: `About`, `Work` (anchor links to sections in the main content).
  - **Right column**: scrollable main content area with sections stacked vertically.

- **Component structure (high-level)**
  - `Layout` component with two columns (left nav + right content).
  - `Nav` component inside an `aside` for left nav.
  - `MainContent` area containing:
    - `section#about`
      - `AboutIntro` → Who I Am paragraph.
      - `AboutSkills` → Skills list.
    - `section#work`
      - `WorkList` → list of work items / projects.

## 4. Sections & Content
- **About / Who I Am**
  - One or two paragraphs describing background, focus, and what you do.
- **About / Skills**
  - Skills grouped (e.g. Languages, Frameworks, Tools) or a single list of tags.
- **Work**
  - Reusable **work card** component with:
    - Title
    - Role / type (e.g. “Personal Project”, “Client Work”)
    - Short description
    - Optional tech stack / link.

## 5. Visual Style (based on reference)
- **Theme**
  - Dark background: near-black / charcoal.
  - Subtle gradients or overlays to create depth.
  - High-contrast but muted accent colors.
- **Typography**
  - Large, elegant title on left nav (e.g. “Design Engineer” / your role).
  - Clean sans-serif for body text.
- **Cards & Surfaces**
  - Work items in dark cards with slight elevation (shadow or lighter surface color).
  - Thin borders or hairlines for separation.
- **Interactions**
  - Smooth scroll when clicking nav links.
  - Subtle hover states on work cards and nav items.

## 6. Responsive Behavior
- **Desktop (primary)**
  - Persistent left nav.
  - Right content area with generous spacing.
- **Tablet & Mobile**
  - Collapse left nav into a top bar or hamburger.
  - Sections stack full-width.

## 7. Implementation Phases
1. **Review & align with existing Next.js setup**
   - Confirm whether the app uses the **App Router (`app/` directory)** or **Pages Router (`pages/` directory)**.
   - Identify the main entry point for the portfolio route (e.g. `app/page.tsx` or `pages/index.tsx`).
   - Verify styling approach (global CSS, CSS Modules, Tailwind, etc.).

2. **Build base layout & left navigation**
   - Implement a root or page layout component with a two-column flex layout.
   - Add a dedicated `Nav` component on the left with name/role and links to `#about` and `#work`.
   - Ensure nav is fixed/persistent on desktop and scrolls independently from main content if needed.

3. **Implement About section components**
   - Add `section#about` to the main content area.
   - Implement `AboutIntro` (Who I Am paragraph).
   - Implement `AboutSkills` (skills list/grid component).

4. **Implement Work section components**
   - Add `section#work` to the main content area.
   - Create a reusable `WorkCard` component.
   - Render an array of work items using `WorkCard`.

5. **Apply dark visual style**
   - Implement global background and typography to match the reference (dark theme, large left title).
   - Style left nav, About, and Work sections with appropriate spacing.
   - Add hover states and smooth scroll behavior (e.g. with `scroll-behavior: smooth` in CSS).

6. **Responsive adjustments & polish**
   - Add responsive breakpoints in the chosen styling system.
   - Collapse left nav into top bar / drawer on smaller screens.
   - Refine spacing, font sizes, and contrast; test in major browsers.

## 8. Next Steps
- Use this plan assuming **Next.js** is the framework (already set up).
- Define **actual text content** for Who I Am, Skills, and Work items.
- Start with Phase 1 and Phase 2: align with the existing Next.js router, then implement the base layout and left nav.
