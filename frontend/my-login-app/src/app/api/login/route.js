import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log("📩 Email recibido:", email);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Complete todos los campos" },
        { status: 400 }
      );
    }

    // 🚀 Usamos pool.query directamente, sin connect/release
    const { rows } = await pool.query(
      "SELECT id, username, email, password_hash FROM users WHERE email = $1",
      [email]
    );
    console.log("📊 Query result:", rows);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 401 }
      );
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // ✅ Login exitoso
    return NextResponse.json({
      message: "Login exitoso",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    return NextResponse.json(
      { error: "Error del servidor", details: err.message },
      { status: 500 }
    );
  }
}
