# AI Development Rules - Alves & Souza

This document outlines the technical stack and development standards for this project.

## Tech Stack
*   **Framework**: React 19 with Vite for fast builds and HMR.
*   **Language**: TypeScript for type safety and better IDE support.
*   **Styling**: Tailwind CSS for all styling, following the shadcn/ui design tokens.
*   **UI Components**: shadcn/ui (built on Radix UI) for accessible, unstyled components.
*   **Icons**: Lucide-React for a consistent and performant icon set.
*   **Animations**: GSAP for complex scroll-triggered animations and Tailwind/CSS for simple transitions.
*   **Form Management**: React Hook Form combined with Zod for schema-based validation.
*   **Notifications**: Sonner for lightweight, accessible toast notifications.
*   **Utilities**: `clsx` and `tailwind-merge` (via `cn` utility) for dynamic class management.

## Library Usage Rules
1.  **UI Components**: Always check `src/components/ui` first. Do not install new UI libraries if shadcn/ui can handle it.
2.  **Icons**: Exclusively use `lucide-react`. Do not use FontAwesome or other icon sets unless specifically requested.
3.  **Animations**: Use `gsap` for any animation involving `ScrollTrigger` or complex timelines. Use Tailwind's `animate-*` classes for simple hover or entrance effects.
4.  **Forms**: Every form must use `react-hook-form` and have a corresponding `zod` schema for validation.
5.  **State Management**: Prefer local React state (`useState`, `useContext`) or URL state. Do not introduce Redux or Zustand unless the application complexity justifies it.
6.  **Styling**: No CSS modules or Styled Components. All styling must be done via Tailwind CSS classes in the TSX files.
7.  **Data Fetching**: If Supabase is added, use the official Supabase client. For generic APIs, use standard `fetch`.
8.  **Responsiveness**: Every new component must be mobile-first and fully responsive using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

## File Structure Conventions
*   `src/components/`: Shared, reusable UI components.
*   `src/pages/`: Main page views (routed in `App.tsx`).
*   `src/hooks/`: Custom React hooks.
*   `src/lib/`: Third-party library configurations (e.g., `utils.ts`).
*   `public/images/`: All static assets like photos and logos.