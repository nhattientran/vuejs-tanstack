<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "@tanstack/vue-router";
import { Building2, Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const router = useRouter();
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const isLoading = ref(false);
const error = ref("");

const handleLogin = async () => {
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Please enter both email and password";
    return;
  }

  isLoading.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock authentication - in real app, call auth API
  if (email.value === "admin@company.com" && password.value === "password") {
    localStorage.setItem("auth_token", "mock_token");
    router.navigate({ to: "/dashboard" });
  } else {
    error.value = "Invalid email or password";
  }

  isLoading.value = false;
};
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
          v-if="error"
          class="p-3 rounded-lg bg-destructive/10 text-destructive text-sm text-center"
        >
          {{ error }}
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Email Field -->
          <div class="space-y-2">
            <Label for="email" class="text-sm font-medium">Email</Label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                v-model="email"
                type="email"
                placeholder="admin@company.com"
                class="pl-10 h-12"
                :disabled="isLoading"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <Label for="password" class="text-sm font-medium">Password</Label>
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
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                class="pl-10 pr-10 h-12"
                :disabled="isLoading"
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
          </div>

          <!-- Remember Me -->
          <div class="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              class="w-4 h-4 rounded border-input text-primary focus:ring-primary"
            />
            <Label for="remember" class="text-sm text-muted-foreground cursor-pointer">
              Remember me for 30 days
            </Label>
          </div>

          <!-- Submit Button -->
          <Button
            type="submit"
            class="w-full h-12 text-base font-semibold"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Signing in...</span>
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
