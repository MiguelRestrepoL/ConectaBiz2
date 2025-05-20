'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input }  from '@/components/ui/input';
import { Label }  from '@/components/ui/label';
import { AccountSection } from './AccountSection'; // Ajusta mayúsculas/minúsculas si tu fichero difiere

export function AccountView() {
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [loading,  setLoading]  = useState(true);
  const [saving,   setSaving]   = useState(false);
  const [error,    setError]    = useState('');

  // Carga inicial de datos
  useEffect(() => {
    fetch('/api/user')
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setUsername(data.username || '');
          setEmail(data.email || '');
        }
      })
      .catch(() => setError('No se pudo cargar tu perfil'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const resp = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.error || 'Error al guardar');
      }

      alert('¡Perfil actualizado!');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600 dark:text-gray-400">Cargando...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Administración de tu cuenta
      </h2>

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {/* Nombre de usuario */}
      <AccountSection
        title="Nombre de usuario"
        description={<p>Este será tu alias público.</p>}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Alias"
          className="
            bg-gray-100 dark:bg-[#334155]
            text-gray-900 dark:text-[#e2e8f0]
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500
          "
        />
      </AccountSection>

      {/* Correo electrónico */}
      <AccountSection
        title="Correo electrónico"
        description={<p>Aquí recibes notificaciones y restableces contraseña.</p>}
      >
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="
            bg-gray-100 dark:bg-[#334155]
            text-gray-900 dark:text-[#e2e8f0]
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500
          "
        />
      </AccountSection>

      {/* Cambiar contraseña */}
      <AccountSection
        title="Cambiar contraseña"
        description={<p>Opcional: solo completa si deseas cambiar tu contraseña.</p>}
      >
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Nueva contraseña"
          className="
            bg-gray-100 dark:bg-[#334155]
            text-gray-900 dark:text-[#e2e8f0]
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500
          "
        />
      </AccountSection>

      <Button
        type="submit"
        disabled={saving}
        className="w-full bg-[#3b82f6] dark:bg-[#2563eb] text-white"
      >
        {saving ? 'Guardando…' : 'Guardar cambios'}
      </Button>
    </form>
  );
}
