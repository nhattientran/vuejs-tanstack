<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  BarChart3
} from "lucide-vue-next";

const { t } = useI18n();

const reports = [
  { id: 1, title: "Báo cáo nhân sự tháng", description: "Tổng hợp biến động nhân sự, tuyển dụng, nghỉ việc", type: "HR", format: "PDF", size: "2.5 MB" },
  { id: 2, title: "Báo cáo chấm công tháng", description: "Chi tiết chấm công, đi trễ, vắng mặt của nhân viên", type: "Attendance", format: "Excel", size: "1.8 MB" },
  { id: 3, title: "Báo cáo lương tháng", description: "Tổng hợp lương, thưởng, phúc lợi", type: "Payroll", format: "Excel", size: "3.2 MB" },
  { id: 4, title: "Báo cáo hiệu suất quý", description: "Đánh giá KPI, hiệu suất làm việc theo phòng ban", type: "Performance", format: "PDF", size: "4.1 MB" },
  { id: 5, title: "Báo cáo tuyển dụng", description: "Kết quả tuyển dụng, chi phí, thời gian tuyển", type: "Recruitment", format: "PDF", size: "1.5 MB" },
];

const getTypeIcon = (type: string) => {
  const icons: Record<string, any> = {
    "HR": Users,
    "Attendance": Calendar,
    "Payroll": DollarSign,
    "Performance": TrendingUp,
    "Recruitment": Users,
  };
  return icons[type] || FileText;
};
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-foreground">{{ t("admin.reports") }}</h1>
      <p class="text-muted-foreground mt-1">Xem và tải xuống các báo cáo</p>
    </div>

    <!-- Reports Grid -->
    <div class="grid gap-4 md:grid-cols-2">
      <Card v-for="report in reports" :key="report.id" class="hover:shadow-md transition-shadow">
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <component :is="getTypeIcon(report.type)" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle class="text-base">{{ report.title }}</CardTitle>
                <CardDescription class="text-xs">{{ report.description }}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <Badge variant="outline">{{ report.type }}</Badge>
              <Badge variant="secondary">{{ report.format }}</Badge>
              <span class="text-xs text-muted-foreground">{{ report.size }}</span>
            </div>
            <Button size="sm" variant="outline">
              <Download class="h-4 w-4 mr-1" />
              Tải xuống
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Quick Stats -->
    <Card>
      <CardHeader>
        <CardTitle class="flex items-center gap-2">
          <BarChart3 class="h-5 w-5 text-primary" />
          Thống kê nhanh
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4 md:grid-cols-4">
          <div class="text-center">
            <div class="text-3xl font-bold text-primary">24</div>
            <p class="text-sm text-muted-foreground">Báo cáo tháng này</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-success">156</div>
            <p class="text-sm text-muted-foreground">Tổng số báo cáo</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-secondary">8</div>
            <p class="text-sm text-muted-foreground">Loại báo cáo</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-cta">45GB</div>
            <p class="text-sm text-muted-foreground">Dung lượng lưu trữ</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
