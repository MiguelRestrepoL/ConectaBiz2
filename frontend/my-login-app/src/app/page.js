'use client';

import { useState, useEffect } from 'react';
import { LoginForm }    from '@/components/ui/login-form';
import { RegisterForm } from '@/components/ui/register-form';
import { PlanSelector } from '@/components/ui/plan-selector';

export default function Home() {
  // Sólo renderizamos el contenido tras el primer mount:
  const [mounted, setMounted] = useState(false);

  // Estado de sesión y registro (no dependiente de localStorage)
  const [isLogged,      setIsLogged     ] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Tema con fallback a light en SSR
  const [theme, setTheme] = useState('light');

  // Al montar en el cliente, leemos localStorage y activamos el render
  useEffect(() => {
    setMounted(true);

    const saved = window.localStorage.getItem('theme');
    setTheme(saved === 'dark' ? 'dark' : 'light');
  }, []);

  // Cada vez que cambie theme ya montado, actualizamos el <html> y lo guardamos
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Si aún no estamos montados, devolvemos null (no HTML SSR mismatcheable)
  if (!mounted) return null;

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  const handleLoginSuccess    = () => setIsLogged(true);
  const handleRegisterSuccess = () => setIsLogged(true);

  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center p-4
      bg-[var(--background)] text-[var(--foreground)]
    ">
      <button
        type="button"
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 rounded-lg border border-[var(--border)]"
      >
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>

      <div className="w-full max-w-md">
        {!isLogged ? (
          isRegistering ? (
            <>
              <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
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
          ) : (
            <>
              <LoginForm onSuccess={handleLoginSuccess} />
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
          )
        ) : (
          <>
            <PlanSelector />
            <button
              type="button"
              onClick={() => setIsLogged(false)}
              className="mt-4 w-full py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:underline"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}
