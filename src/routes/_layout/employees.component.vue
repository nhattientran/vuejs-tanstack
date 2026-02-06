<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  Briefcase
} from "lucide-vue-next";

const { t } = useI18n();

const employees = [
  { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@company.com", phone: "0901234567", department: "Engineering", position: "Senior Developer", status: "active", avatar: "NA" },
  { id: 2, name: "Trần Thị B", email: "tranthib@company.com", phone: "0902345678", department: "HR", position: "HR Manager", status: "active", avatar: "TB" },
  { id: 3, name: "Lê Văn C", email: "levanc@company.com", phone: "0903456789", department: "Sales", position: "Sales Lead", status: "on-leave", avatar: "LC" },
  { id: 4, name: "Phạm Thị D", email: "phamthid@company.com", phone: "0904567890", department: "Marketing", position: "Marketing Specialist", status: "active", avatar: "PD" },
  { id: 5, name: "Hoàng Văn E", email: "hoangvane@company.com", phone: "0905678901", department: "Engineering", position: "Junior Developer", status: "probation", avatar: "HE" },
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
    "active": { variant: "default", label: "Đang làm" },
    "on-leave": { variant: "secondary", label: "Nghỉ phép" },
    "probation": { variant: "outline", label: "Thử việc" },
    "inactive": { variant: "destructive", label: "Đã nghỉ" },
  };
  return variants[status] || { variant: "default", label: status };
};
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-foreground">{{ t("admin.employees") }}</h1>
        <p class="text-muted-foreground mt-1">Quản lý danh sách nhân viên</p>
      </div>
      <Button>
        <Plus class="w-4 h-4 mr-2" />
        Thêm nhân viên
      </Button>
    </div>

    <!-- Filters -->
    <Card>
      <CardHeader>
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="relative flex-1 max-w-sm">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Tìm kiếm nhân viên..." class="pl-9" />
          </div>
          <div class="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter class="w-4 h-4 mr-2" />
              Lọc
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <!-- Employee Table -->
        <div class="border rounded-lg overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Nhân viên</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Liên hệ</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Phòng ban</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Chức vụ</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Trạng thái</th>
                <th class="px-4 py-3 text-right font-medium text-muted-foreground">Thao tác</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="employee in employees" :key="employee.id" class="hover:bg-muted/50 transition-colors">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-3">
                    <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      {{ employee.avatar }}
                    </div>
                    <div>
                      <p class="font-medium text-foreground">{{ employee.name }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="space-y-1">
                    <div class="flex items-center gap-1 text-muted-foreground">
                      <Mail class="h-3 w-3" />
                      <span class="text-xs">{{ employee.email }}</span>
                    </div>
                    <div class="flex items-center gap-1 text-muted-foreground">
                      <Phone class="h-3 w-3" />
                      <span class="text-xs">{{ employee.phone }}</span>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <Building2 class="h-3 w-3 text-muted-foreground" />
                    <span class="text-foreground">{{ employee.department }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <Briefcase class="h-3 w-3 text-muted-foreground" />
                    <span class="text-foreground">{{ employee.position }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <Badge :variant="getStatusBadge(employee.status).variant" class="text-xs">
                    {{ getStatusBadge(employee.status).label }}
                  </Badge>
                </td>
                <td class="px-4 py-3 text-right">
                  <Button variant="ghost" size="icon" class="h-8 w-8">
                    <MoreHorizontal class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between mt-4">
          <p class="text-sm text-muted-foreground">Hiển thị 1-5 của 150 nhân viên</p>
          <div class="flex gap-2">
            <Button variant="outline" size="sm" disabled>Trước</Button>
            <Button variant="outline" size="sm">Sau</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
