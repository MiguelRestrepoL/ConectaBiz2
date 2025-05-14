import { clsx }     from 'clsx';
import { twMerge }  from 'tailwind-merge';

/** Combina clases con clsx + twMerge */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


/**
 * Devuelve la sesión del usuario desde la request.
 * En producción deberías sustituir esta lógica por la tuya
 * (verificar JWT, cookie de NextAuth, Supabase, etc.).
 */
export async function getSession(request) {
  // Ejemplo de stub: siempre “loguea” al usuario con id=1
  // request.headers.get('cookie')  → parsea tu token o cookie aquí
  return { user: { id: 6 } };
}
