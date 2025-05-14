'use client';

import React from 'react';

/**
 * Componente auxiliar para cada sección de la vista “Administración de tu cuenta”
 */
export function AccountSection({ title, description, children }) {
  return (
    <div
      className="
        bg-white dark:bg-[#1e293b]
        border border-gray-200 dark:border-[#334155]
        rounded-xl p-6
        flex flex-wrap justify-between gap-6
      "
    >
      {/* Lado izquierdo: título y descripción */}
      <div className="flex-1 min-w-[200px] pr-4">
        <h3 className="text-lg font-semibold text-[#1b2d47] dark:text-[#e2e8f0] mb-2">
          {title}
        </h3>
        <div className="text-sm text-[#334155] dark:text-[#cbd5e1] space-y-1">
          {description}
        </div>
      </div>
      {/* Lado derecho: inputs/controles */}
      <div className="flex-1 min-w-[250px] flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}
