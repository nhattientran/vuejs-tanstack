# Vue.js Patterns

## Vue Select Components

Always handle null/empty string values explicitly to prevent runtime errors:

```vue
<!-- Use :reduce or custom value handling -->
<v-select
  v-model="selectedValue"
  :options="options"
  :reduce="option => option?.id || ''"
  placeholder="Select an option"
/>
```
