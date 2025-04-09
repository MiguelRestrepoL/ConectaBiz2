"use client";

import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { PlanSelector } from "@/components/plan-selector";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginSuccess = () => {
    setIsLogged(true);
  };

  return (
    <div className="min-h-screen w-full">
      {!isLogged ? (
        // Sección de Login (en un contenedor centrado y limitado)
        <div className="flex min-h-screen items-center justify-center bg-[#1f3b5b] p-6 md:p-10">
          <div className="w-full max-w-md">
            <LoginForm onSuccess={handleLoginSuccess} />
          </div>
        </div>
      ) : (
        // Sección de PlanSelector (pantalla completa, sin max-w-md)
        <PlanSelector />
      )}
    </div>
  );
}
