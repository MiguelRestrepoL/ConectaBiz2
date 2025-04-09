"use client";

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
  // Estados para avisos de error separados
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");

  // Credenciales de prueba
  const usuarioValido = {
    email: "andres@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Limpiamos los errores anteriores
    setEmailError("");
    setPasswordError("");
    setMessage("");

    // Verificamos el email
    if (email !== usuarioValido.email) {
      setEmailError("Correo incorrecto. Inténtalo de nuevo.");
      return;
    }
    // Verificamos la contraseña (solo si el email es correcto)
    if (password !== usuarioValido.password) {
      setPasswordError("Contraseña incorrecta. Inténtalo de nuevo.");
      return;
    }
    // Si ambos son correctos, se notifica el éxito
    setMessage("¡Inicio de sesión exitoso!");
    if (onSuccess) onSuccess();
  };

  return (
    <div className={cn("flex flex-col items-center w-full", className)} {...props}>
      <div className="w-full bg-[#1f3b5b] text-white p-8 rounded-xl ring-2 shadow-[0_0_12px_rgba(0,0,0,0.3)]">
        <h1 className="text-2xl font-semibold text-center mb-2">CONECTABIZ</h1>
        <div className="w-10 h-10 mx-auto mb-4 border-4 border-pink-400 rounded-full"></div>
        <h2 className="text-xl text-center mb-1">¡Bienvenido nuevamente!</h2>
        <p className="text-center mb-6">
          Ingrese su correo y contraseña para acceder
        </p>
        <Card className="bg-white text-black shadow-lg ring-1 ring-gray-300">
          <CardHeader>
            <CardTitle className="text-center">Inicio de sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="block mb-1">
                  Correo electrónico
                </Label>
                <div className="flex items-center bg-gray-100 rounded-md p-2">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/new-post.png"
                    alt="Email Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent outline-none"
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
                <Label htmlFor="password" className="block mb-1">
                  Contraseña
                </Label>
                <div className="flex items-center bg-gray-100 rounded-md p-2">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/key.png"
                    alt="Key Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent outline-none"
                  />
                </div>
                {passwordError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2 text-sm">
                    {passwordError}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-700 transition"
              >
                Sign In
              </Button>
              {message && (
                <div className="text-center text-sm mt-2">{message}</div>
              )}
            </form>
          </CardContent>
        </Card>

        <a
          href="#"
          className="block text-center text-gray-300 mt-4 text-sm underline"
        >
          ¿Olvidó su contraseña?
        </a>
        <p className="text-center text-sm mt-2">
          ¿No tienes cuenta?{" "}
          <a href="#" className="font-bold text-white underline">
            ¡Regístrese!
          </a>
        </p>

        <div className="flex flex-col gap-2 mt-6">
          <Button
            type="button"
            className="flex items-center justify-center gap-2 bg-white text-black py-2 rounded-full hover:bg-gray-200"
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
            className="flex items-center justify-center gap-2 bg-white text-black py-2 rounded-full hover:bg-gray-200"
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
            className="flex items-center justify-center gap-2 bg-white text-black py-2 rounded-full hover:bg-gray-200"
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
