"use client";

import React from "react";

export function AccountView() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#1b2d47]">
        Administración de tu cuenta
      </h2>

      {/* 1) Nombre de usuario */}
      <AccountSection
        title="Nombre de usuario"
        description={
          <>
            <p>
              Los clientes observarán este nombre al hacer la compra, o al tú
              realizar una.
            </p>
            <p className="text-xs mt-1">
              Al cambiar tu nombre, tendrás que esperar un periodo de 1d para
              volverlo a cambiar
            </p>
          </>
        }
      >
        <input
          type="text"
          placeholder="Alias"
          className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
        />
      </AccountSection>

      {/* 2) Información general */}
      <AccountSection
        title="Información general"
        description={
          <>
            <p>
              Esta información es privada, se compartirá de manera parcial al
              comprador en caso de compra.
            </p>
            <p className="text-xs mt-1">
              El comprador observará un e-mail donde debes manejar el tema de
              reembolsos…
            </p>
          </>
        }
      >
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Correo electrónico principal"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="Correo electrónico para compradores"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="País/Región"
            defaultValue="COL"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="Fecha de nacimiento (dd-mm-aaaa)"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
        </div>
      </AccountSection>

      {/* 3) Contraseña */}
      <AccountSection
        title="Contraseña"
        description={
          <>
            <p>
              Recomendamos cambiar tu contraseña de manera periódica para evitar
              accesos no autorizados.
            </p>
            <p className="text-xs mt-1">
              Por políticas de privacidad, no compartas tu contraseña con
              terceros.
            </p>
          </>
        }
      >
        <div className="flex flex-col gap-3">
          <input
            type="password"
            placeholder="Contraseña actual"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <input
            type="password"
            placeholder="Nueva contraseña"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none w-full"
          />
          <button className="self-start px-4 py-2 rounded-lg bg-[#1e293b] text-white font-medium">
            Confirmar
          </button>
        </div>
      </AccountSection>

      {/* 4) Factor de autenticación (2FA) */}
      <AccountSection
        title="Factor de autenticación (2FA)"
        description={
          <p>
            Protege tu cuenta frente a accesos NO autorizados al solicitar
            códigos para iniciar sesión.
          </p>
        }
      >
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Autenticación por correo"
              className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none"
            />
            <button className="px-4 py-2 rounded-lg bg-[#1e293b] text-white font-medium">
              Activar
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Autenticación por aplicación"
              className="px-4 py-2 rounded-full bg-[#e2e8f0] text-[#0f172a] focus:outline-none"
            />
            <button className="px-4 py-2 rounded-lg bg-[#1e293b] text-white font-medium">
              Activar
            </button>
          </div>
        </div>
      </AccountSection>
    </div>
  );
}

/**
 * Componente auxiliar para cada sección de la vista “Administración de tu cuenta”
 */
function AccountSection({ title, description, children }) {
  return (
    <div className="bg-[#f1f5f9] border border-[#cbd5e1] rounded-xl p-6 flex flex-wrap justify-between gap-6">
      {/* Lado izquierdo: título y descripción */}
      <div className="flex-1 min-w-[200px] pr-4">
        <h3 className="text-lg font-semibold text-[#1b2d47] mb-2">{title}</h3>
        <div className="text-sm text-[#334155] space-y-1">{description}</div>
      </div>
      {/* Lado derecho: inputs/controles */}
      <div className="flex-1 min-w-[250px] flex flex-col gap-3">{children}</div>
    </div>
  );
}
