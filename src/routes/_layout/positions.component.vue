<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Building2
} from "lucide-vue-next";

const { t } = useI18n();

const positions = [
  { id: 1, title: "Senior Developer", department: "Engineering", level: "Senior", employees: 12 },
  { id: 2, title: "Junior Developer", department: "Engineering", level: "Junior", employees: 20 },
  { id: 3, title: "HR Manager", department: "Human Resources", level: "Manager", employees: 2 },
  { id: 4, title: "Sales Lead", department: "Sales", level: "Lead", employees: 3 },
  { id: 5, title: "Marketing Specialist", department: "Marketing", level: "Mid", employees: 8 },
  { id: 6, title: "Accountant", department: "Finance", level: "Mid", employees: 5 },
];

const getLevelBadge = (level: string) => {
  const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    "Junior": "secondary",
    "Mid": "default",
    "Senior": "default",
    "Lead": "outline",
    "Manager": "default",
  };
  return variants[level] || "default";
};
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-foreground">{{ t("admin.positions") }}</h1>
        <p class="text-muted-foreground mt-1">Quản lý chức danh và vị trí công việc</p>
      </div>
      <Button>
        <Plus class="w-4 h-4 mr-2" />
        Thêm chức danh
      </Button>
    </div>

    <!-- Positions Table -->
    <Card>
      <CardContent class="p-0">
        <div class="border rounded-lg overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Chức danh</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Phòng ban</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Cấp bậc</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Số nhân viên</th>
                <th class="px-4 py-3 text-right font-medium text-muted-foreground">Thao tác</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="position in positions" :key="position.id" class="hover:bg-muted/50 transition-colors">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase class="h-4 w-4 text-primary" />
                    </div>
                    <span class="font-medium text-foreground">{{ position.title }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <Building2 class="h-3 w-3 text-muted-foreground" />
                    <span class="text-foreground">{{ position.department }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <Badge :variant="getLevelBadge(position.level)" class="text-xs">
                    {{ position.level }}
                  </Badge>
                </td>
                <td class="px-4 py-3">
                  <span class="text-foreground">{{ position.employees }} người</span>
                </td>
                <td class="px-4 py-3 text-right">
                  <div class="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" class="h-8 w-8">
                      <Edit class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" class="h-8 w-8 text-destructive">
                      <Trash2 class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
