import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, email, password, acceptedTerms } = await req.json();

  if (!username || !email || !password || acceptedTerms !== true) {
    return NextResponse.json(
      { error: 'Complete todos los campos y acepta términos' },
      { status: 400 }
    );
  }

  const client = await pool.connect();
  try {
    // 1) Revisar email duplicado
    const { rowCount } = await client.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );
    if (rowCount > 0) {
      return NextResponse.json({ error: 'Email ya registrado' }, { status: 409 });
    }

    // 2) Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3) Insertar usando now() para timestamps
    await client.query(
      `INSERT INTO users
         (username, email, password_hash, accepted_terms, created_at, updated_at)
       VALUES ($1, $2, $3, $4, now(), now())`,
      [username, email, hashedPassword, acceptedTerms]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  } finally {
    client.release();
  }
}
