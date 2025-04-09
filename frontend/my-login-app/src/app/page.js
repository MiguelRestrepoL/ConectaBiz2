"use client";

import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { PlanSelector } from "@/components/plan-selector";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    // Contenedor general sin limitaciones
    <div className="min-h-screen w-full">
      {!isLogged ? (
        // -- Cuando NO está logueado --
        // Damos fondo oscuro, centramos contenido
        <div className="flex min-h-screen w-full items-center justify-center bg-[#1f3b5b] p-6 md:p-10">
          {/* Limitar ancho SOLO al login */}
          <div className="w-full max-w-md">
            <LoginForm onSuccess={() => setIsLogged(true)} />
          </div>
        </div>
      ) : (
        // -- Cuando SÍ está logueado --
        // Mostramos el PlanSelector que ya usa su propio min-h-screen y su propio bg
        <PlanSelector />
      )}
    </div>
  );
}
