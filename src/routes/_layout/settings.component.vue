<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Building2,
  Mail,
  Bell,
  Shield,
  Save
} from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-foreground">{{ t("admin.settings") }}</h1>
      <p class="text-muted-foreground mt-1">Cấu hình hệ thống và tùy chọn</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- Company Settings -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Building2 class="h-5 w-5 text-primary" />
            Thông tin công ty
          </CardTitle>
          <CardDescription>Cập nhật thông tin cơ bản của công ty</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <Label for="company-name">Tên công ty</Label>
            <Input id="company-name" value="HR Manager Company" />
          </div>
          <div class="space-y-2">
            <Label for="company-address">Địa chỉ</Label>
            <Input id="company-address" value="123 Nguyễn Văn A, Quận 1, TP.HCM" />
          </div>
          <div class="space-y-2">
            <Label for="company-phone">Số điện thoại</Label>
            <Input id="company-phone" value="+84 123 456 789" />
          </div>
          <Button class="w-full">
            <Save class="h-4 w-4 mr-2" />
            Lưu thay đổi
          </Button>
        </CardContent>
      </Card>

      <!-- Email Settings -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Mail class="h-5 w-5 text-primary" />
            Cấu hình Email
          </CardTitle>
          <CardDescription>Thiết lập email thông báo hệ thống</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <Label for="smtp-host">SMTP Host</Label>
            <Input id="smtp-host" value="smtp.gmail.com" />
          </div>
          <div class="space-y-2">
            <Label for="smtp-port">SMTP Port</Label>
            <Input id="smtp-port" value="587" />
          </div>
          <div class="space-y-2">
            <Label for="email-from">Email gửi đi</Label>
            <Input id="email-from" value="noreply@company.com" />
          </div>
          <Button class="w-full">
            <Save class="h-4 w-4 mr-2" />
            Lưu cấu hình
          </Button>
        </CardContent>
      </Card>

      <!-- Notification Settings -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Bell class="h-5 w-5 text-primary" />
            Thông báo
          </CardTitle>
          <CardDescription>Tùy chỉnh thông báo hệ thống</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Thông báo check-in</p>
              <p class="text-xs text-muted-foreground">Gửi email khi nhân viên check-in</p>
            </div>
            <Badge variant="default">Đang bật</Badge>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Thông báo nghỉ phép</p>
              <p class="text-xs text-muted-foreground">Gửi email khi có đơn xin nghỉ</p>
            </div>
            <Badge variant="default">Đang bật</Badge>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Báo cáo hàng tuần</p>
              <p class="text-xs text-muted-foreground">Gửi báo cáo tự động mỗi tuần</p>
            </div>
            <Badge variant="outline">Đang tắt</Badge>
          </div>
        </CardContent>
      </Card>

      <!-- Security Settings -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Shield class="h-5 w-5 text-primary" />
            Bảo mật
          </CardTitle>
          <CardDescription>Cài đặt bảo mật và quyền truy cập</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Xác thực 2 yếu tố</p>
              <p class="text-xs text-muted-foreground">Yêu cầu OTP khi đăng nhập</p>
            </div>
            <Badge variant="default">Đang bật</Badge>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Đăng nhập từ xa</p>
              <p class="text-xs text-muted-foreground">Cho phép đăng nhập từ IP bên ngoài</p>
            </div>
            <Badge variant="default">Đang bật</Badge>
          </div>
          <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div>
              <p class="font-medium text-foreground">Ghi log hoạt động</p>
              <p class="text-xs text-muted-foreground">Lưu lịch sử thao tác người dùng</p>
            </div>
            <Badge variant="default">Đang bật</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
