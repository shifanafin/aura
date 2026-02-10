"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials");
        return;
      }

      toast.success("Logged in!");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Login with Google
        </Button>
      </div>

      <p className="mt-4 text-center">
        No account?{" "}
        <a href="/dashboard/register" className="text-blue-600">
          Register
        </a>
      </p>
    </div>
  );
}
