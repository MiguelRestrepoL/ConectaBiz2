"use client";

import { useState } from "react";
import { PlanGrid } from "./plan-grid"; // extrae tu grid de planes aquí
import { AccountView } from "./AccountView"; // nuevo componente
import  Link  from "next/link";

export function PlanSelector() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0] min-h-screen">
      {/* TOPBAR */}
      <header className="bg-[#14213d] text-white py-5 px-7 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo y bienvenida */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <div className="font-bold text-base mb-1">CONECTABIZ</div>
            <div className="w-10 h-10 rounded-full border-4 border-[#8b5cf6]"></div>
          </div>
          <div className="text-base font-bold">
            <h3>¡Bienvenido nuevamente, Usuario!</h3>
          </div>
        </div>
        {/* Barra de búsqueda */}
        <div className="w-full md:w-[300px] flex justify-center md:justify-end">
          <div className="flex items-center bg-[#334155] rounded-lg py-2 px-4 w-full">
            <span className="mr-3 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent text-white focus:outline-none w-full text-base"
            />
          </div>
        </div>
        {/* Botón Tienda */}
        <button className="bg-[#3b82f6] py-2 px-4 rounded-lg text-white flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
            alt="Carrito"
            className="w-4 h-4"
          />
          Mi tienda
        </button>
      </header>

      {/* LAYOUT GENERAL: Sidebar + Contenido Principal */}
      <div className="flex flex-col md:flex-row">
        {/* SIDEBAR */}
        <aside className="w-full md:w-[220px] bg-[#1e293b] p-5 md:min-h-[calc(100vh-60px)]">
          <ul className="list-none space-y-3">
            <li
              className={`
                p-2 rounded-lg cursor-pointer flex items-center gap-2 text-sm
              ${
                activeTab === "plans"
                  ? "bg-[#334155]"
                  : "bg-transparent hover:bg-[#334155]"
              }
              `}
              onClick={() => setActiveTab("plans")}
            >
              🏠 Inicio
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📦 Pedidos
            </li>
            <li
              className={`mb-3 p-2 border border-[#334155] rounded-lg flex
              items-center gap-2 text-sm cursor-pointer
              ${
                // si ya estás en /productos 👉 mantén highlight
                typeof window !== "undefined" &&
                window.location.pathname.startsWith("/productos")
                  ? "bg-[#334155]"
                  : "bg-transparent hover:bg-[#334155]"
              }`}
            >
              {/* usamos Link para navegación SPA */}
              <Link
                className="flex items-center gap-2 w-full h-full"
                href="/productos"
              >
                🛒 Productos
              </Link>
            </li>

            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              👤 Cliente
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📝 Contenido
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📊 Estadísticas
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📣 Marketing
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🏷️ Descuentos
            </li>
            <li
              className={`
                p-2 rounded-lg cursor-pointer flex items-center gap-2 text-sm
                ${
                  activeTab === "plans"
                    ? "bg-[#334155]"
                    : "bg-transparent hover:bg-[#334155]"
                }
              `}
              onClick={() => setActiveTab("plans")}
            >
              💳 Suscripción
            </li>
            <li
              className={`
                p-2 rounded-lg cursor-pointer flex items-center gap-2 text-sm
                ${
                  activeTab === "account"
                    ? "bg-[#334155]"
                    : "bg-transparent hover:bg-[#334155]"
                }
              `}
              onClick={() => setActiveTab("account")}
            >
              👤 Cuenta
            </li>
          </ul>

          <div className="text-xs text-[#94a3b8] my-5 ml-1 uppercase font-bold">
            Canales de venta
          </div>
          <ul className="list-none">
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🏬 Punto físico
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🛍️ Tienda Online
            </li>
          </ul>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 p-5 md:p-8">
          {activeTab === "plans" ? (
            // 5) Si es “plans”, mostramos tu grid
            <PlanGrid />
          ) : (
            // 6) Si es “account”, renderizamos la nueva vista
            <AccountView />
          )}
        </main>
      </div>
      {/* FOOTER */}
      <footer className="text-center p-5 text-xs text-[#94a3b8]">
        Al seleccionar el paquete se mostrarán todos los detalles del paquete
        deseado.
      </footer>
    </div>
  );
}
