'use client';

import { useState, useEffect } from 'react';
import { LoginForm }    from "@/components/ui/login-form";
import { RegisterForm } from "@/components/ui/register-form";
import { PlanSelector } from "@/components/ui/plan-selector";

export default function Home() {
  const [isLogged,      setIsLogged     ] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [theme,         setTheme       ] = useState(
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme') || 'light'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center p-4
      bg-[var(--background)] text-[var(--foreground)]
    ">
      {/* Toggle Light/Dark */}
      <button
        type="button"
        onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
        className="mb-6 px-4 py-2 rounded-lg border border-[var(--border)]"
      >
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>

      <div className="w-full max-w-md">
        {!isLogged
          ? isRegistering
            ? <>
                <RegisterForm onRegisterSuccess={() => setIsLogged(true)} />
                <p className="text-center mt-4">
                  ¿Ya tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegistering(false)}
                    className="underline text-[var(--foreground)]"
                  >
                    Iniciar sesión
                  </button>
                </p>
              </>
            : <>
                <LoginForm onSuccess={() => setIsLogged(true)} />
                <p className="text-center mt-4">
                  ¿No tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegistering(true)}
                    className="underline text-[var(--foreground)]"
                  >
                    Regístrate
                  </button>
                </p>
              </>
          : <PlanSelector />
        }
      </div>
    </div>
  );
}
