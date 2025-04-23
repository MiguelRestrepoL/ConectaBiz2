'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({ className, onRegisterSuccess, ...props }) {
  const [username,        setUsername       ] = useState("");
  const [email,           setEmail          ] = useState("");
  const [emailConfirm,    setEmailConfirm   ] = useState("");
  const [password,        setPassword       ] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [terms,           setTerms          ] = useState(false);
  const [error,           setError          ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones básicas
    if (!username || !email || !password) {
      setError("Complete todos los campos");
      return;
    }
    if (email !== emailConfirm) {
      setError("Los correos no coinciden");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (!terms) {
      setError("Debe aceptar términos y condiciones");
      return;
    }

    // Llamada a la API de registro
    const resp = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        acceptedTerms: terms,
      }),
    });
    const body = await resp.json();

    if (!resp.ok) {
      setError(body.error || "Error desconocido");
      return;
    }

    // Éxito
    onRegisterSuccess();
  };

  return (
    <div className={cn("flex flex-col items-center w-full", className)} {...props}>
      <div className="w-full p-8 bg-[var(--form-bg)] text-[var(--foreground)] border border-[var(--border)] rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Crear cuenta</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Usuario */}
          <div>
            <Label htmlFor="username" className="block mb-1">
              Nombre de usuario
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="block mb-1">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Confirmar Email */}
          <div>
            <Label htmlFor="emailConfirm" className="block mb-1">
              Confirme su email
            </Label>
            <Input
              id="emailConfirm"
              type="email"
              placeholder="Confirme su email"
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
          </div>

          {/* Contraseña */}
          <div>
            <Label htmlFor="password" className="block mb-1">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <Label htmlFor="passwordConfirm" className="block mb-1">
              Confirme contraseña
            </Label>
            <Input
              id="passwordConfirm"
              type="password"
              placeholder="Confirme contraseña"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          {/* Términos */}
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            Acepto términos y condiciones
          </label>

          {/* Error */}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {/* Botón Registrar */}
          <Button
            type="submit"
            className="w-full py-3 bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] rounded-full font-bold"
          >
            Registrarse
          </Button>
        </form>
      </div>
    </div>
  );
}
