// src/app/api/user/route.js
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/utils';
import { getUserById, updateUserById } from '@/lib/db';

// GET /api/user
export async function GET(request) {
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const user = await getUserById(session.user.id);
  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  return NextResponse.json({
    username: user.username,
    email:    user.email
  });
}

// PUT /api/user  (ya lo tienes)
export async function PUT(request) {
  const session = await getSession(request);
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { username, email, password } = await request.json();
  const updated = await updateUserById(session.user.id, {
    username,
    email,
    ...(password ? { password } : {})
  });

  if (!updated) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  return NextResponse.json({ success: true, user: updated });
}
