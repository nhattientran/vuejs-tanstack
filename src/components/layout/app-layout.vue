<script setup lang="ts">
import { computed, ref } from "vue";
import { Link, Outlet } from "@tanstack/vue-router";
import { useI18n } from "vue-i18n";
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  Building2,
  Briefcase,
  Calendar,
  BarChart3,
  Sun,
  Moon,
} from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme";

interface NavItem {
  name: string;
  to: string;
  icon: typeof LayoutDashboard;
}

const isSidebarOpen = ref(true);
const { locale, t } = useI18n();
const { theme, toggleTheme } = useTheme();

const switchLocale = (lang: "en" | "vi") => {
  locale.value = lang;
  localStorage.setItem("locale", lang);
};

const navigation = computed<NavItem[]>(() => [
  { name: t("admin.dashboard"), to: "/dashboard", icon: LayoutDashboard },
  { name: t("admin.employees"), to: "/employees", icon: Users },
  { name: t("admin.departments"), to: "/departments", icon: Building2 },
  { name: t("admin.positions"), to: "/positions", icon: Briefcase },
  { name: t("admin.attendance"), to: "/attendance", icon: Calendar },
  { name: t("admin.reports"), to: "/reports", icon: BarChart3 },
  { name: t("admin.settings"), to: "/settings", icon: Settings },
]);

const user = {
  name: "Admin User",
  email: "admin@company.com",
  avatar: "AU",
};
</script>

<template>
  <div class="h-screen overflow-hidden bg-background flex">
    <!-- Sidebar -->
    <aside
      :class="[
        'flex flex-col fixed inset-y-0 left-0 z-50 w-sidebar bg-card border-r border-border transition-transform duration-300 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- Logo -->
      <div class="h-16 flex items-center px-6 border-b border-border">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Building2 class="w-5 h-5 text-primary-foreground" />
          </div>
          <span class="text-lg font-semibold text-foreground">HR Manager</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <Link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-standard text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          :active-props="{ class: 'bg-primary/10 text-primary' }"
        >
          <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
          {{ item.name }}
        </Link>
      </nav>

      <!-- User Profile -->
      <div class="border-t border-border p-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
            {{ user.avatar }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-foreground truncate">{{ user.name }}</p>
            <p class="text-xs text-muted-foreground truncate">{{ user.email }}</p>
          </div>
          <button class="p-2 text-muted-foreground hover:text-foreground transition-standard">
            <LogOut class="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div
      :class="[
        'flex-1 flex flex-col transition-all duration-300 ease-in-out',
        isSidebarOpen ? 'ml-[var(--sidebar-width)]' : 'ml-0',
      ]"
    >
      <!-- Header -->
      <header class="h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button
            class="p-2 text-muted-foreground hover:text-foreground transition-standard touch-target"
            @click="isSidebarOpen = !isSidebarOpen"
          >
            <X v-if="isSidebarOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
          <div class="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
            <Search class="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search employees..."
              class="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-64"
            />
          </div>
        </div>

        <div class="flex items-center gap-4">
          <!-- Notifications -->
          <button class="relative p-2 text-muted-foreground hover:text-foreground transition-standard touch-target">
            <Bell class="w-5 h-5" />
            <span class="absolute top-1 right-1 w-2 h-2 bg-cta rounded-full" />
          </button>

          <!-- Theme Toggle -->
          <button
            class="p-2 text-muted-foreground hover:text-foreground transition-standard touch-target"
            @click="toggleTheme"
          >
            <Sun v-if="theme === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center gap-2">
            <button
              :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-standard',
                locale === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent',
              ]"
              @click="switchLocale('en')"
            >
              EN
            </button>
            <button
              :class="[
                'px-3 py-1.5 text-sm font-medium rounded-md transition-standard',
                locale === 'vi'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent',
              ]"
              @click="switchLocale('vi')"
            >
              VI
            </button>
          </div>
        </div>
      </header>

      <!-- Main -->
      <main class="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  </div>
</template>
