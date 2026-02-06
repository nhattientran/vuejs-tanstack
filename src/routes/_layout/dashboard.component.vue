<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  Briefcase,
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle,
  CheckCircle2
} from "lucide-vue-next";

const { t } = useI18n();

const stats = [
  {
    title: "Tổng nhân viên",
    value: "150",
    icon: Users,
    change: "+12%",
    trend: "up",
    subtitle: "12 nhân viên mới tháng này"
  },
  {
    title: "Phòng ban",
    value: "8",
    icon: Building2,
    change: "+2",
    trend: "up",
    subtitle: "2 phòng ban mới"
  },
  {
    title: "Chức vụ",
    value: "24",
    icon: Briefcase,
    change: "+5",
    trend: "up",
    subtitle: "5 vị trí mới"
  },
  {
    title: "Có mặt hôm nay",
    value: "142/150",
    icon: Calendar,
    change: "94%",
    trend: "up",
    subtitle: "8 nhân viên vắng mặt"
  },
];

const recentActivities = [
  { id: 1, type: "check-in", message: "Nguyễn Văn A đã check-in", time: "5 phút trước", icon: CheckCircle2 },
  { id: 2, type: "leave", message: "Trần Thị B đã đăng ký nghỉ phép", time: "15 phút trước", icon: AlertCircle },
  { id: 3, type: "check-in", message: "Lê Văn C đã check-in", time: "30 phút trước", icon: CheckCircle2 },
  { id: 4, type: "new-employee", message: "Phạm Thị D đã được thêm vào hệ thống", time: "1 giờ trước", icon: Users },
];

const upcomingEvents = [
  { id: 1, title: "Họp team", time: "09:00 - 10:00", type: "meeting" },
  { id: 2, title: "Review quý", time: "14:00 - 16:00", type: "review" },
  { id: 3, title: "Training nhân viên mới", time: "09:00 - 12:00", type: "training" },
];
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-foreground">{{ t("admin.dashboard") }}</h1>
      <p class="text-muted-foreground mt-1">Chào mừng trở lại! Đây là tình hình hôm nay.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card v-for="stat in stats" :key="stat.title" class="hover:shadow-md transition-shadow">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium text-muted-foreground">{{ stat.title }}</CardTitle>
          <div class="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <component :is="stat.icon" class="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <div class="flex items-center gap-2 mt-1">
            <Badge :variant="stat.trend === 'up' ? 'default' : 'destructive'" class="text-xs">
              <component :is="stat.trend === 'up' ? TrendingUp : TrendingDown" class="h-3 w-3 mr-1" />
              {{ stat.change }}
            </Badge>
            <span class="text-xs text-muted-foreground">{{ stat.subtitle }}</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Two Column Layout -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Recent Activity -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Clock class="h-5 w-5 text-primary" />
            Hoạt động gần đây
          </CardTitle>
          <CardDescription>Các hoạt động mới nhất trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="activity in recentActivities" :key="activity.id"
                 class="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <component :is="activity.icon" class="h-4 w-4 text-primary" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-foreground">{{ activity.message }}</p>
                <p class="text-xs text-muted-foreground">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Upcoming Events -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Calendar class="h-5 w-5 text-primary" />
            Sự kiện sắp tới
          </CardTitle>
          <CardDescription>Lịch trình trong tuần này</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="event in upcomingEvents" :key="event.id"
                 class="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-lg bg-cta/10 flex items-center justify-center">
                  <Calendar class="h-5 w-5 text-cta" />
                </div>
                <div>
                  <p class="text-sm font-medium text-foreground">{{ event.title }}</p>
                  <p class="text-xs text-muted-foreground">{{ event.time }}</p>
                </div>
              </div>
              <Badge variant="outline">{{ event.type }}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
