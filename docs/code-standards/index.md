# Code Standards

## Overview

This document defines the coding standards and conventions for the Vue.js admin dashboard project.

## Quick Reference

| Topic | Location |
|-------|----------|
| File Naming | [naming-conventions.md](./naming-conventions.md) |
| TypeScript Guidelines | [typescript-guidelines.md](./typescript-guidelines.md) |
| Vue Component Patterns | [vue-patterns.md](./vue-patterns.md) |
| Import/Export Patterns | [module-patterns.md](./module-patterns.md) |

## Core Principles

1. **Type Safety First**: Strict TypeScript mode enabled
2. **Self-Documenting Code**: Clear, descriptive names
3. **File Size Limits**: Keep files under 200 lines
4. **Composition Over Inheritance**: Prefer composables
5. **Consistency**: Follow established patterns throughout

## File Organization

```
src/
├── components/ui/        # UI components (shadcn-vue)
├── routes/              # File-based routes
├── repositories/        # API layer
├── composables/         # Reusable logic
├── stores/              # Pinia stores
├── lib/                 # Utilities
└── i18n/                # Internationalization
```

## Quick Examples

### File Naming
```
use-login-form.ts           // Composable
posts.repository.ts         // Repository
user-card.vue               // Component
axios.ts                    // Utility
```

### Component Structure
```vue
<script setup lang="ts">
// 1. Imports
// 2. Types/Interfaces
// 3. Props/Emits
// 4. Composables
// 5. Local state
// 6. Computed
// 7. Methods
</script>
```

## Size Limits

- Vue components: < 200 lines
- Composables: < 150 lines
- Repositories: < 200 lines
- Utils: < 100 lines

Split files when approaching limits.
