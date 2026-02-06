# Vue Component Patterns

## Component Structure

```vue
<script setup lang="ts">
// 1. Imports: Vue, external, internal
import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/composables/use-auth';

// 2. Types/Interfaces
interface Props {
  userId: number;
  showActions?: boolean;
}

// 3. Props/Emits with defaults
const props = withDefaults(defineProps<Props>(), {
  showActions: true
});

const emit = defineEmits<{
  (e: 'update', id: number): void;
  (e: 'delete', id: number): void;
}>();

// 4. Composables
const { user, isLoading } = useUser(props.userId);
const { t } = useI18n();

// 5. Local state
const isEditing = ref(false);

// 6. Computed
const displayName = computed(() => user.value?.name ?? t('common.guest'));

// 7. Methods
async function handleUpdate() {
  emit('update', props.userId);
}
</script>

<template>
  <div class="user-card">
    <h3>{{ displayName }}</h3>
    <Button v-if="showActions" @click="handleUpdate">
      {{ t('common.edit') }}
    </Button>
  </div>
</template>
```

## Props Definition

```typescript
// Required + Optional with defaults
interface Props {
  title: string;           // Required
  description?: string;    // Optional
  size?: 'sm' | 'md' | 'lg'; // Union with default
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  size: 'md'
});
```

## Event Handling

```typescript
// Typed emits
const emit = defineEmits<{
  (e: 'submit', data: FormData): void;
  (e: 'cancel'): void;
}>();

// Handler functions (not inline)
function handleSubmit() {
  emit('submit', formData.value);
}
```

## Composable Pattern

```typescript
// use-feature.ts
import { ref, computed, readonly } from 'vue';

export function useFeature(initialValue: string) {
  // State
  const state = ref(initialValue);
  const isLoading = ref(false);

  // Computed
  const normalized = computed(() => state.value.trim().toLowerCase());

  // Methods
  async function update(newValue: string) {
    isLoading.value = true;
    try {
      state.value = newValue;
    } finally {
      isLoading.value = false;
    }
  }

  // Return readonly where appropriate
  return {
    state: readonly(state),
    isLoading: readonly(isLoading),
    normalized,
    update
  };
}
```

## Form Handling Standards

```typescript
// use-login-form.ts
import { useForm } from '@tanstack/vue-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export function useLoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      // Handle submission
    }
  });

  return {
    form,
    emailField: form.Field('email', {
      validators: { onChange: loginSchema.shape.email }
    }),
    passwordField: form.Field('password', {
      validators: { onChange: loginSchema.shape.password }
    })
  };
}
```
