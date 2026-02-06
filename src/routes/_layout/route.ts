import { createFileRoute, Outlet, Link, redirect } from "@tanstack/vue-router";
import { computed, ref, h } from "vue";
import type { FunctionalComponent } from "vue";
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

const AppLayout: FunctionalComponent = () => {
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

  return h("div", { class: "min-h-screen bg-background flex" }, [
    // Sidebar
    h(
      "aside",
      {
        class: [
          "fixed inset-y-0 left-0 z-50 w-sidebar bg-card border-r border-border transition-transform duration-300 ease-in-out",
          isSidebarOpen.value ? "translate-x-0" : "-translate-x-full",
        ].join(" "),
      },
      [
        // Logo
        h(
          "div",
          { class: "h-16 flex items-center px-6 border-b border-border" },
          [
            h("div", { class: "flex items-center gap-3" }, [
              h(
                "div",
                { class: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center" },
                [h(Building2, { class: "w-5 h-5 text-primary-foreground" })]
              ),
              h(
                "span",
                { class: "text-lg font-semibold text-foreground" },
                "HR Manager"
              ),
            ]),
          ]
        ),
        // Navigation
        h(
          "nav",
          { class: "flex-1 px-4 py-6 space-y-1 overflow-y-auto" },
          navigation.value.map((item) =>
            h(
              Link,
              {
                key: item.name,
                to: item.to,
                class: "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-standard text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                activeProps: {
                  class: "bg-primary/10 text-primary",
                },
              },
              () => [h(item.icon, { class: "w-5 h-5 flex-shrink-0" }), item.name]
            )
          )
        ),
        // User Profile
        h(
          "div",
          { class: "border-t border-border p-4" },
          [
            h("div", { class: "flex items-center gap-3" }, [
              h(
                "div",
                { class: "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium" },
                user.avatar
              ),
              h("div", { class: "flex-1 min-w-0" }, [
                h("p", { class: "text-sm font-medium text-foreground truncate" }, user.name),
                h("p", { class: "text-xs text-muted-foreground truncate" }, user.email),
              ]),
              h(
                "button",
                { class: "p-2 text-muted-foreground hover:text-foreground transition-standard" },
                [h(LogOut, { class: "w-5 h-5" })]
              ),
            ]),
          ]
        ),
      ]
    ),
    // Main Content
    h(
      "div",
      {
        class: [
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          isSidebarOpen.value ? "ml-[var(--sidebar-width)]" : "ml-0",
        ].join(" "),
      },
      [
        // Header
        h(
          "header",
          { class: "h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8" },
          [
            h("div", { class: "flex items-center gap-4" }, [
              h(
                "button",
                {
                  class: "p-2 text-muted-foreground hover:text-foreground transition-standard touch-target",
                  onClick: () => (isSidebarOpen.value = !isSidebarOpen.value),
                },
                isSidebarOpen.value
                  ? h(X, { class: "w-6 h-6" })
                  : h(Menu, { class: "w-6 h-6" })
              ),
              h(
                "div",
                { class: "hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2" },
                [
                  h(Search, { class: "w-4 h-4 text-muted-foreground" }),
                  h("input", {
                    type: "text",
                    placeholder: "Search employees...",
                    class: "bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-64",
                  }),
                ]
              ),
            ]),
            h("div", { class: "flex items-center gap-4" }, [
              // Notifications
              h(
                "button",
                { class: "relative p-2 text-muted-foreground hover:text-foreground transition-standard touch-target" },
                [
                  h(Bell, { class: "w-5 h-5" }),
                  h("span", { class: "absolute top-1 right-1 w-2 h-2 bg-cta rounded-full" }),
                ]
              ),
              // Theme Toggle
              h(
                "button",
                {
                  class: "p-2 text-muted-foreground hover:text-foreground transition-standard touch-target",
                  onClick: () => toggleTheme(),
                },
                theme.value === 'dark'
                  ? h(Sun, { class: "w-5 h-5" })
                  : h(Moon, { class: "w-5 h-5" })
              ),
              // Language Switcher
              h(
                "div",
                { class: "hidden sm:flex items-center gap-2" },
                [
                  h(
                    "button",
                    {
                      class: [
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-standard",
                        locale.value === 'en'
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent",
                      ].join(" "),
                      onClick: () => switchLocale('en'),
                    },
                    "EN"
                  ),
                  h(
                    "button",
                    {
                      class: [
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-standard",
                        locale.value === 'vi'
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent",
                      ].join(" "),
                      onClick: () => switchLocale('vi'),
                    },
                    "VI"
                  ),
                ]
              ),
            ]),
          ]
        ),
        // Main
        h("main", { class: "flex-1 overflow-auto p-4 sm:p-6 lg:p-8" }, h(Outlet)),
      ]
    ),
  ]);
};

export const Route = createFileRoute("/_layout")({
  component: AppLayout,
});
