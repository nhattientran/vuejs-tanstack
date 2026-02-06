import { useRouter } from "@tanstack/vue-router";
import { useForm } from "@tanstack/vue-form";
import { loginSchema } from "@/schemas/login.schema";

export function useLoginForm(loginError: { value: string }) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: async ({ value }) => {
      loginError.value = "";

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (value.email === "admin@company.com" && value.password === "password") {
        localStorage.setItem("auth_token", "mock_token");
        router.navigate({ to: "/dashboard" });
      } else {
        loginError.value = "Invalid email or password";
      }
    },
  });

  return { form, loginSchema };
}
