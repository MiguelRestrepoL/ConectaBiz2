import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Complete todos los campos' }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      'SELECT id, password_hash FROM users WHERE email = $1',
      [email]
    );
    // Si no existe o la comparación falla:
    if (
      rows.length === 0 ||
      !(await bcrypt.compare(password, rows[0].password_hash))
    ) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
  console.error("❌ Login error:", err.message, err.stack);
  return NextResponse.json({ error: 'Error del servidor', details: err.message }, { status: 500 });
} finally {
    client.release();
  }
}
