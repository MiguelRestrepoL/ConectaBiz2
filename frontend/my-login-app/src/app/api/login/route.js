import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log("📩 Email recibido:", email);

    if (!email || !password) {
      return NextResponse.json({ error: "Complete todos los campos" }, { status: 400 });
    }

    const client = await pool.connect();
    console.log("✅ Conectado a la DB");

    const { rows } = await client.query(
      "SELECT id, password_hash FROM users WHERE email = $1",
      [email]
    );
    console.log("📊 Query result:", rows);

    client.release();

    if (rows.length === 0) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 401 });
    }

    const match = await bcrypt.compare(password, rows[0].password_hash);
    if (!match) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Login error:", err);
    return NextResponse.json(
      { error: "Error del servidor", details: err.message },
      { status: 500 }
    );
  }
}