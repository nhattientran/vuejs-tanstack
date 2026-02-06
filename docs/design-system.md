# Design System - Admin Dashboard

## Overview

Design system cho SaaS Admin Dashboard với phong cách **Professional Minimal**.

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2563EB` | Buttons, links, active states |
| Secondary | `#3B82F6` | Hover states, secondary actions |
| CTA | `#F97316` | Call-to-action buttons |
| Background | `#F8FAFC` | Page background |
| Text | `#1E293B` | Primary text color |

### Extended Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Success | `#10B981` | Success states, positive trends |
| Warning | `#F59E0B` | Warnings, alerts |
| Error | `#EF4444` | Errors, negative trends |
| Info | `#3B82F6` | Information messages |
| Muted | `#64748B` | Secondary text, placeholders |
| Border | `#E2E8F0` | Borders, dividers |
| Card | `#FFFFFF` | Card backgrounds |

### Dark Mode Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0F172A` | Dark page background |
| Card | `#1E293B` | Dark card backgrounds |
| Text | `#F1F5F9` | Dark mode text |
| Muted | `#94A3B8` | Dark mode secondary text |
| Border | `#334155` | Dark mode borders |

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 2rem (32px) | 700 | 1.2 | Page titles |
| H2 | 1.5rem (24px) | 600 | 1.3 | Section headers |
| H3 | 1.25rem (20px) | 600 | 1.4 | Card titles |
| H4 | 1.125rem (18px) | 500 | 1.4 | Sub-sections |
| Body | 1rem (16px) | 400 | 1.5 | Body text |
| Small | 0.875rem (14px) | 400 | 1.5 | Secondary text |
| XS | 0.75rem (12px) | 400 | 1.5 | Captions, labels |

---

## Spacing System

### Base Unit: 4px
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight spacing |
| space-2 | 8px | Icon gaps |
| space-3 | 12px | Small gaps |
| space-4 | 16px | Standard gaps |
| space-5 | 20px | Medium gaps |
| space-6 | 24px | Section gaps |
| space-8 | 32px | Large gaps |
| space-10 | 40px | Section padding |
| space-12 | 48px | Page padding |

### Layout
- **Max Width:** 1440px
- **Sidebar Width:** 260px (desktop), 280px (mobile drawer)
- **Card Padding:** 24px
- **Page Padding:** 24px (desktop), 16px (mobile)

---

## Components

### Buttons

#### Primary Button
```
Background: #2563EB
Text: #FFFFFF
Padding: 10px 16px
Border Radius: 6px
Font Weight: 500
Hover: #3B82F6
```

#### Secondary Button
```
Background: transparent
Border: 1px solid #E2E8F0
Text: #1E293B
Padding: 10px 16px
Border Radius: 6px
Hover: Background #F1F5F9
```

#### CTA Button
```
Background: #F97316
Text: #FFFFFF
Padding: 12px 24px
Border Radius: 6px
Font Weight: 600
Hover: #EA580C
```

### Cards
```
Background: #FFFFFF
Border Radius: 8px
Padding: 24px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Border: 1px solid #E2E8F0
```

### Forms
```
Input Height: 40px
Border Radius: 6px
Border: 1px solid #E2E8F0
Focus Border: #2563EB
Padding: 8px 12px
Placeholder: #94A3B8
```

### Tables
```
Header Background: #F8FAFC
Row Hover: #F1F5F9
Border: 1px solid #E2E8F0
Cell Padding: 12px 16px
```

---

## Layout Patterns

### Dashboard Grid
- **Desktop:** Sidebar (260px) + Main Content (flex-1)
- **Tablet:** Collapsible sidebar + Main Content
- **Mobile:** Bottom nav or hamburger menu

### Content Grid
- **KPI Cards:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Charts:** 2 columns (desktop), 1 column (mobile)
- **Tables:** Full width with horizontal scroll on mobile

---

## Animation & Transitions

### Durations
| Type | Duration | Usage |
|------|----------|-------|
| Micro | 150ms | Hover states, focus |
| Standard | 200ms | Button clicks, toggles |
| Smooth | 300ms | Modals, drawers, cards |

### Easing
- **Default:** cubic-bezier(0.4, 0, 0.2, 1)
- **Enter:** cubic-bezier(0, 0, 0.2, 1)
- **Exit:** cubic-bezier(0.4, 0, 1, 1)

### Transitions
```css
/* Hover states */
transition: background-color 200ms ease;

/* Transform animations */
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Color transitions */
transition: color 150ms ease, border-color 150ms ease;
```

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

---

## Accessibility

### Color Contrast
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text (18px+)
- Minimum 3:1 for UI components

### Focus States
- Visible focus ring on all interactive elements
- Focus ring: 2px solid #2563EB with 2px offset

### Touch Targets
- Minimum 44x44px for interactive elements
- Buttons: min-height 40px, min-width 44px

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Vue.js Guidelines

### State Management
- Use Pinia for global state
- Use TanStack Query for server state
- Keep component state local when possible

### Component Structure
- Single-file components (.vue)
- Composition API with `<script setup>`
- Props define with TypeScript interfaces

### Performance
- Lazy load routes
- Use `shallowRef` for large objects
- Virtualize long lists

---

## Anti-patterns to Avoid

1. **Ornate design** - Keep it minimal and functional
2. **No filtering** - Always provide data filtering options
3. **Horizontal scroll** - Ensure content fits viewport
4. **Content jumping** - Reserve space for async content
5. **Emoji icons** - Use SVG icons (Lucide)

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (use Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
