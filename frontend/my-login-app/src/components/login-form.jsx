'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ className, onSuccess, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");

  const usuarioValido = {
    email: "andres@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setMessage("");

    if (email !== usuarioValido.email) {
      setEmailError("Correo incorrecto. Inténtalo de nuevo.");
      return;
    }
    if (password !== usuarioValido.password) {
      setPasswordError("Contraseña incorrecta. Inténtalo de nuevo.");
      return;
    }
    setMessage("¡Inicio de sesión exitoso!");
    if (onSuccess) onSuccess();
  };

  return (
    <div className={cn("flex flex-col items-center w-full", className)} {...props}>
      {/* Panel del formulario */}
      <div
        className="
          w-full p-8
          bg-[var(--form-bg)]
          text-[var(--foreground)]
          border border-[var(--border)]
          rounded-xl shadow-lg
        "
      >
        {/* Encabezado */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          CONECTABIZ
        </h1>
        <div className="w-10 h-10 mx-auto mb-4 border-4 border-pink-400 rounded-full" />
        <h2 className="text-xl text-center mb-1">
          ¡Bienvenido nuevamente!
        </h2>
        <p className="text-center mb-6 text-[var(--foreground)]">
          Ingrese su correo y contraseña para acceder
        </p>

        {/* Tarjeta interna */}
        <Card className="border border-[var(--border)] bg-[var(--form-bg)] shadow-sm text-[var(--foreground)]">
          <CardHeader>
            <CardTitle className="text-center">Inicio de sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="block mb-1 text-[var(--foreground)]">
                  Correo electrónico
                </Label>
                <div
                  className="
                    flex items-center w-full
                    bg-[var(--background)]
                    border border-[var(--border)]
                    rounded-full px-4 py-3 mb-4
                    focus-within:ring-1 focus-within:ring-[var(--border)]
                  "
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/new-post.png"
                    alt="Email Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      flex-1 bg-transparent outline-none
                      placeholder:text-[var(--border)]
                      text-[var(--foreground)]
                    "
                  />
                </div>
                {emailError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2 text-sm">
                    {emailError}
                  </div>
                )}
              </div>

              {/* Contraseña */}
              <div>
                <Label htmlFor="password" className="block mb-1 text-[var(--foreground)]">
                  Contraseña
                </Label>
                <div
                  className="
                    flex items-center w-full
                    bg-[var(--background)]
                    border border-[var(--border)]
                    rounded-full px-4 py-3 mb-4
                    focus-within:ring-1 focus-within:ring-[var(--border)]
                  "
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/key.png"
                    alt="Key Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                      flex-1 bg-transparent outline-none
                      placeholder:text-[var(--border)]
                      text-[var(--foreground)]
                    "
                  />
                </div>
                {passwordError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2 text-sm">
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Botón principal */}
              <Button
                type="submit"
                className="
                  w-full py-3
                  bg-[var(--background)]
                  text-[var(--foreground)]
                  border border-[var(--border)]
                  rounded-full font-bold transition
                  hover:bg-[var(--foreground)] hover:text-[var(--background)]
                "
              >
                Sign In
              </Button>

              {message && (
                <div className="text-center text-sm mt-2 text-[var(--foreground)]">
                  {message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Olvidó contraseña / Registro */}
        <a
          href="#"
          className="block text-center mt-4 text-sm underline text-[var(--border)]"
        >
          ¿Olvidó su contraseña?
        </a>
        <p className="text-center text-sm mt-2">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="font-bold underline text-[var(--foreground)]"
          >
            ¡Regístrese!
          </a>
        </p>

        {/* Botones sociales */}
        <div className="flex flex-col gap-2 mt-6">
          <Button
            type="button"
            className="
              flex items-center justify-center gap-2 w-full py-3
              bg-[var(--background)]
              text-[var(--foreground)]
              border border-[var(--border)]
              rounded-full transition
              hover:bg-[var(--foreground)] hover:text-[var(--background)]
            "
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google icon"
              className="w-5 h-5"
            />
            Continuar con Google
          </Button>
          <Button
            type="button"
            className="
              flex items-center justify-center gap-2 w-full py-3
              bg-[var(--background)]
              text-[var(--foreground)]
              border border-[var(--border)]
              rounded-full transition
              hover:bg-[var(--foreground)] hover:text-[var(--background)]
            "
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone icon"
              className="w-5 h-5"
            />
            Continuar con el teléfono
          </Button>
          <Button
            type="button"
            className="
              flex items-center justify-center gap-2 w-full py-3
              bg-[var(--background)]
              text-[var(--foreground)]
              border border-[var(--border)]
              rounded-full transition
              hover:bg-[var(--foreground)] hover:text-[var(--background)]
            "
          >
            <img
              src="https://img.icons8.com/color/48/000000/microsoft.png"
              alt="Microsoft icon"
              className="w-5 h-5"
            />
            Continuar con Microsoft
          </Button>
        </div>
      </div>
    </div>
  );
}
