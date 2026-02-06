<script setup lang="ts">
import { ref } from "vue";
import { Building2, Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLoginForm } from "@/composables/use-login-form";
import { formatFormErrors } from "@/lib/utils";

const showPassword = ref(false);
const loginError = ref("");

const { form, loginSchema } = useLoginForm(loginError);
const isSubmitting = form.useStore((state) => state.isSubmitting);
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background p-4">
    <!-- Background Pattern -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      <div class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl" />
    </div>

    <!-- Login Card -->
    <Card class="relative w-full max-w-md border-0 shadow-2xl">
      <CardHeader class="space-y-6 pb-8">
        <!-- Logo -->
        <div class="flex justify-center">
          <div class="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
            <Building2 class="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        <!-- Title -->
        <div class="text-center space-y-2">
          <CardTitle class="text-2xl font-bold text-foreground">
            Welcome back
          </CardTitle>
          <CardDescription class="text-base">
            Sign in to your HR Manager account
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent class="space-y-6">
        <!-- Error Message -->
        <div
          v-if="loginError"
          class="p-3 rounded-lg bg-destructive/10 text-destructive text-sm text-center"
        >
          {{ loginError }}
        </div>

        <!-- Login Form -->
        <form @submit.prevent.stop="form.handleSubmit" class="space-y-4">
          <!-- Email Field -->
          <form.Field
            name="email"
            :validators="{
              onChange: loginSchema.shape.email,
            }"
          >
            <template v-slot="{ field, state }">
              <div class="space-y-2">
                <Label :for="field.name" class="text-sm font-medium">Email</Label>
                <div class="relative">
                  <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    :id="field.name"
                    :name="field.name"
                    :model-value="field.state.value"
                    type="email"
                    placeholder="admin@company.com"
                    class="pl-10 h-12"
                    :disabled="isSubmitting"
                    @blur="field.handleBlur"
                    @update:model-value="(val) => field.handleChange(val as string)"
                  />
                </div>
                <p v-if="state.meta.errors.length" class="text-sm text-destructive">
                  {{ formatFormErrors(state.meta.errors).join(', ') }}
                </p>
              </div>
            </template>
          </form.Field>

          <!-- Password Field -->
          <form.Field
            name="password"
            :validators="{
              onChange: loginSchema.shape.password,
            }"
          >
            <template v-slot="{ field, state }">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <Label :for="field.name" class="text-sm font-medium">Password</Label>
                  <a
                    href="#"
                    class="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div class="relative">
                  <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    :id="field.name"
                    :name="field.name"
                    :model-value="field.state.value"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="pl-10 pr-10 h-12"
                    :disabled="isSubmitting"
                    @blur="field.handleBlur"
                    @update:model-value="(val) => field.handleChange(val as string)"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Eye v-if="showPassword" class="w-5 h-5" />
                    <EyeOff v-else class="w-5 h-5" />
                  </button>
                </div>
                <p v-if="state.meta.errors.length" class="text-sm text-destructive">
                  {{ formatFormErrors(state.meta.errors).join(', ') }}
                </p>
              </div>
            </template>
          </form.Field>

          <!-- Remember Me -->
          <form.Field name="rememberMe">
            <template v-slot="{ field }">
              <div class="flex items-center gap-2">
                <input
                  :id="field.name"
                  :name="field.name"
                  type="checkbox"
                  :checked="field.state.value"
                  class="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                  @change="(e) => field.handleChange((e.target as HTMLInputElement).checked)"
                />
                <Label :for="field.name" class="text-sm text-muted-foreground cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>
            </template>
          </form.Field>

          <!-- Submit Button -->
          <Button
            type="submit"
            class="w-full h-12 text-base font-semibold"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Signing in...</span>
            <span v-else class="flex items-center gap-2">
              Sign in
              <ArrowRight class="w-5 h-5" />
            </span>
          </Button>
        </form>

        <!-- Demo Credentials -->
        <div class="p-4 rounded-lg bg-muted/50 space-y-2">
          <p class="text-sm font-medium text-foreground">Demo Credentials</p>
          <div class="text-sm text-muted-foreground space-y-1">
            <p>Email: <span class="font-mono text-foreground">admin@company.com</span></p>
            <p>Password: <span class="font-mono text-foreground">password</span></p>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Footer -->
    <p class="fixed bottom-6 text-sm text-muted-foreground">
      © 2024 HR Manager. All rights reserved.
    </p>
  </div>
</template>
