<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download
} from "lucide-vue-next";

const { t } = useI18n();

const todayStats = {
  present: 142,
  absent: 5,
  onLeave: 3,
  late: 2,
  total: 150
};

const recentAttendance = [
  { id: 1, name: "Nguyễn Văn A", time: "08:00", status: "on-time", type: "check-in" },
  { id: 2, name: "Trần Thị B", time: "08:05", status: "on-time", type: "check-in" },
  { id: 3, name: "Lê Văn C", time: "08:15", status: "late", type: "check-in" },
  { id: 4, name: "Phạm Thị D", time: "--:--", status: "absent", type: "check-in" },
  { id: 5, name: "Hoàng Văn E", time: "07:55", status: "on-time", type: "check-in" },
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string, icon: any }> = {
    "on-time": { variant: "default", label: "Đúng giờ", icon: CheckCircle2 },
    "late": { variant: "secondary", label: "Đi trễ", icon: AlertCircle },
    "absent": { variant: "destructive", label: "Vắng mặt", icon: XCircle },
  };
  return variants[status] || { variant: "default", label: status, icon: Clock };
};
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-foreground">{{ t("admin.attendance") }}</h1>
        <p class="text-muted-foreground mt-1">Theo dõi chấm công nhân viên</p>
      </div>
      <Button variant="outline">
        <Download class="w-4 h-4 mr-2" />
        Xuất báo cáo
      </Button>
    </div>

    <!-- Stats Cards -->
    <div class="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">Có mặt</CardTitle>
          <div class="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
            <CheckCircle2 class="h-4 w-4 text-success" />
          </div>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ todayStats.present }}</div>
          <p class="text-xs text-muted-foreground">{{ Math.round((todayStats.present / todayStats.total) * 100) }}% tổng số</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">Vắng mặt</CardTitle>
          <div class="h-8 w-8 rounded-lg bg-destructive/10 flex items-center justify-center">
            <XCircle class="h-4 w-4 text-destructive" />
          </div>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ todayStats.absent }}</div>
          <p class="text-xs text-muted-foreground">Không phép</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">Nghỉ phép</CardTitle>
          <div class="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Calendar class="h-4 w-4 text-secondary" />
          </div>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ todayStats.onLeave }}</div>
          <p class="text-xs text-muted-foreground">Có phép</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">Đi trễ</CardTitle>
          <div class="h-8 w-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <AlertCircle class="h-4 w-4 text-warning" />
          </div>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ todayStats.late }}</div>
          <p class="text-xs text-muted-foreground">Sau 08:00</p>
        </CardContent>
      </Card>
    </div>

    <!-- Attendance Table -->
    <Card>
      <CardHeader>
        <CardTitle>Chấm công hôm nay</CardTitle>
        <CardDescription>Danh sách check-in/check-out của nhân viên</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="border rounded-lg overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-muted">
              <tr>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Nhân viên</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Thời gian</th>
                <th class="px-4 py-3 text-left font-medium text-muted-foreground">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="record in recentAttendance" :key="record.id" class="hover:bg-muted/50 transition-colors">
                <td class="px-4 py-3">
                  <span class="font-medium text-foreground">{{ record.name }}</span>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <Clock class="h-3 w-3 text-muted-foreground" />
                    <span class="text-foreground">{{ record.time }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <Badge :variant="getStatusBadge(record.status).variant" class="text-xs">
                    <component :is="getStatusBadge(record.status).icon" class="h-3 w-3 mr-1" />
                    {{ getStatusBadge(record.status).label }}
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
