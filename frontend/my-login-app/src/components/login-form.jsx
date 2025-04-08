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

export function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Credenciales locales definidas
  const usuarioValido = {
    email: "andres@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === usuarioValido.email && password === usuarioValido.password) {
      setMessage("¡Inicio de sesión exitoso!");
      // Aquí podrías redirigir al usuario o actualizar el estado de autenticación
    } else {
      setMessage("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-[#1f3b5b] p-8",
        className
      )}
      {...props}
    >
      {/* Contenedor principal con estilos de fondo, redondeado, etc. */}
      <div className="max-w-md w-full bg-[#1f3b5b] text-white p-8 rounded-xl shadow-lg">
        {/* Logo y bienvenida */}
        <h1 className="text-2xl font-semibold text-center mb-2">CONECTABIZ</h1>
        <div className="w-10 h-10 mx-auto mb-4 border-4 border-pink-400 rounded-full"></div>
        <h2 className="text-xl text-center mb-1">¡Bienvenido nuevamente!</h2>
        <p className="text-center mb-6">
          Ingrese su correo y contraseña para acceder
        </p>

        {/* Tarjeta que contiene el formulario de login */}
        <Card className="bg-white text-black">
          <CardHeader>
            <CardTitle className="text-center">Inicio de sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Grupo de Input para Email */}
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
              </div>

              {/* Grupo de Input para Contraseña */}
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
              </div>

              {/* Botón de envío */}
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

        {/* Enlace para recuperar contraseña y registrarse */}
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

        {/* Botones de inicio de sesión social */}
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
