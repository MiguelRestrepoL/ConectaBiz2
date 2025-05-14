// src/components/ui/plan-grid.jsx
'use client';
import React from 'react';

export function PlanGrid() {
  return (
    <>
      <h2 className="text-2xl font-bold">Selecciona un plan</h2>
      <p className="mt-2">
        Puedes cancelar el plan antes del <strong>30 de abril</strong> sin cobro. Puedes cambiar el plan cuando desees.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {/* PLAN – Free */}
        <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155]">
          <span className="bg-[#3b82f6] text-white px-2 py-1 text-xs rounded-full mb-2 inline-block">
            Más popular
          </span>
          <h3 className="mb-2 text-xl text-white">Free</h3>
          <p className="mb-2 italic">
            El paquete más básico, lo suficiente para establecer tu tienda pero sin aprovechar al máximo ConectaBiz
          </p>
          <p className="text-2xl font-bold mb-2 text-white">0€ / mes</p>
          <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
            Seleccionar free package
          </button>
          <ul className="mt-3 space-y-2 text-[#e2e8f0]">
            <li className="flex items-center gap-2">👤 1 socio</li>
            <li className="flex items-center gap-2">🏪 Hasta 5 sucursales</li>
            <li className="flex items-center gap-2">🧾 Puntos de venta</li>
            <li className="flex items-center gap-2">📈 Informes de ventas/compras</li>
          </ul>
          <p className="mt-2">
            Envíos: Tarifas de envío por servientrega de (money) COP$
          </p>
        </div>
        {/* PLAN – Premium */}
        <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155]">
          <h3 className="mb-2 text-xl text-white">Premium</h3>
          <p className="mb-2 italic">
            Contiene la mayoría de los servicios para tu tienda, soporte inmediato y lo necesario para establecer la mejor tienda posible
          </p>
          <p className="text-2xl font-bold mb-2 text-white">5€ / mes</p>
          <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
            Seleccionar premium package
          </button>
          <ul className="mt-3 space-y-2 text-[#e2e8f0]">
            <li className="flex items-center gap-2">👥 3 socios</li>
            <li className="flex items-center gap-2">🏪 Hasta 100 sucursales</li>
            <li className="flex items-center gap-2">🧾 Puntos de venta</li>
            <li className="flex items-center gap-2">📊 Análisis de ventas/compras</li>
            <li className="flex items-center gap-2">💰 precios internacionales</li>
          </ul>
          <p className="mt-2">
            Envíos: Tarifas de envío por servientrega de (money) COP$
          </p>
        </div>
        {/* PLAN – Elite */}
        <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155]">
          <h3 className="mb-2 text-xl text-white">Elite</h3>
          <p className="mb-2 italic">
            Todos los beneficios posibles, asistencia por canal privado, soporte 24/7, privilegios para la tienda y página personalizada
          </p>
          <p className="text-2xl font-bold mb-2 text-white">15€ / mes</p>
          <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
            Seleccionar elite package
          </button>
          <ul className="mt-3 space-y-2 text-[#e2e8f0]">
            <li className="flex items-center gap-2">👥 10 socios</li>
            <li className="flex items-center gap-2">🏬 Hasta 1000 sucursales</li>
            <li className="flex items-center gap-2">🧾 Puntos de venta</li>
            <li className="flex items-center gap-2">📈 Informes profesionales</li>
            <li className="flex items-center gap-2">💰 precios internacionales al menor</li>
            <li className="flex items-center gap-2">🛳 Aranceles e impuestos de importación</li>
          </ul>
          <p className="mt-2">
            Envíos: Tarifas de envío por servientrega de (money) COP$
          </p>
        </div>
      </div>
    </>
  );
}
