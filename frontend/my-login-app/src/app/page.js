"use client";

import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { PlanSelector } from "@/components/plan-selector";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  // Función para actualizar el estado de autenticación cuando las credenciales sean correctas
  const handleLoginSuccess = () => {
    setIsLogged(true);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#1f3b5b] p-6 md:p-10">
      <div className="w-full max-w-md">
        {!isLogged ? (
          // Se pasa el callback para notificar el login correcto
          <LoginForm onSuccess={handleLoginSuccess} />
        ) : (
          // En caso de autenticación exitosa, se muestra el componente PlanSelector
          <PlanSelector />
        )}
      </div>
    </div>
  );
}
