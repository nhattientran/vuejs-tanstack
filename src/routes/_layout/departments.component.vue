<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Plus,
  Users,
  MoreHorizontal,
  Edit,
  Trash2
} from "lucide-vue-next";

const { t } = useI18n();

const departments = [
  { id: 1, name: "Engineering", manager: "Nguyễn Văn A", employees: 45, budget: "2.5B VND" },
  { id: 2, name: "Human Resources", manager: "Trần Thị B", employees: 8, budget: "800M VND" },
  { id: 3, name: "Sales", manager: "Lê Văn C", employees: 25, budget: "1.5B VND" },
  { id: 4, name: "Marketing", manager: "Phạm Thị D", employees: 15, budget: "1.2B VND" },
  { id: 5, name: "Finance", manager: "Hoàng Văn E", employees: 12, budget: "900M VND" },
  { id: 6, name: "Operations", manager: "Ngô Thị F", employees: 20, budget: "1.1B VND" },
];
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-foreground">{{ t("admin.departments") }}</h1>
        <p class="text-muted-foreground mt-1">Quản lý các phòng ban trong công ty</p>
      </div>
      <Button>
        <Plus class="w-4 h-4 mr-2" />
        Thêm phòng ban
      </Button>
    </div>

    <!-- Departments Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card v-for="dept in departments" :key="dept.id" class="hover:shadow-md transition-shadow">
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 class="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle class="text-lg">{{ dept.name }}</CardTitle>
                <CardDescription>Trưởng phòng: {{ dept.manager }}</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" class="h-8 w-8">
              <MoreHorizontal class="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-2">
              <Users class="h-4 w-4 text-muted-foreground" />
              <span class="text-muted-foreground">{{ dept.employees }} nhân viên</span>
            </div>
            <Badge variant="outline">{{ dept.budget }}</Badge>
          </div>
          <div class="flex gap-2 mt-4">
            <Button variant="outline" size="sm" class="flex-1">
              <Edit class="h-3 w-3 mr-1" />
              Sửa
            </Button>
            <Button variant="outline" size="sm" class="flex-1 text-destructive hover:text-destructive">
              <Trash2 class="h-3 w-3 mr-1" />
              Xóa
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
