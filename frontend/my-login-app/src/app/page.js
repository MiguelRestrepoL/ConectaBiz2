"use client";

import { useState, useEffect } from "react";
import { LoginForm } from "@/components/login-form";
import { PlanSelector } from "@/components/plan-selector";

export default function Home() {
  // Estado para la autenticacion
  const [isLogged, setIsLogged] = useState(false);

  // Estado para el tema (light o dark)
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  );

  // Efecto: cada vez que cambie `theme`:
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // 3.2) Guarda la preferencia en localStorage
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para alternar tema
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLoginSuccess = () => {
    setIsLogged(true);
  };

  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center p-4
        bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]
      "
    >
      {/* 6.1) Botón para alternar tema */}
      <button
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 rounded-lg border border-[var(--color-border)]"
      >
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>

      <div className="w-full max-w-md">
        {/* 6.2) Si no está logueado, muestro LoginForm */}
        {!isLogged ? (
          <LoginForm onSuccess={handleLoginSuccess} />
        ) : (
          /* 6.3) Si ya hizo login, muestro PlanSelector */
          <PlanSelector />
        )}
      </div>
    </div>
  );
}
