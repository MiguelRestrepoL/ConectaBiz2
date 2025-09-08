"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/ui/login-form";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          onSuccess={() => {
            router.push("/panel"); // 👈 aquí mandas al usuario a la pantalla con PlanSelector
          }}
        />
      </div>
    </div>
  );
}

