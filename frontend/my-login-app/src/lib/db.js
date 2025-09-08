// src/lib/db.js

import { Pool } from "pg";

let pool;

if (!global.__pgPool) {
  global.__pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // 👈 necesario en Railway
    },
  });
}

pool = global.__pgPool;

// ——— Función para leer un usuario por ID ———
export async function getUserById(userId) {
  const { rows } = await pool.query(
    "SELECT id, username, email FROM users WHERE id = $1",
    [userId]
  );
  return rows[0];
}

// ——— Función para actualizar campos de un usuario ———
export async function updateUserById(userId, data) {
  const sets = [];
  const vals = [];
  let idx = 1;

  if (data.username) {
    sets.push(`username = $${idx++}`);
    vals.push(data.username);
  }
  if (data.email) {
    sets.push(`email = $${idx++}`);
    vals.push(data.email);
  }
  if (data.password_hash) {
    // 👈 usamos password_hash, no password
    sets.push(`password_hash = $${idx++}`);
    vals.push(data.password_hash);
  }

  if (sets.length === 0) return null; // nada que actualizar

  // colocamos el userId como último parámetro
  vals.push(userId);
  const query = `
    UPDATE users
    SET ${sets.join(", ")}
    WHERE id = $${idx}
    RETURNING id, username, email
  `;
  const { rows } = await pool.query(query, vals);
  return rows[0];
}

export default { pool };