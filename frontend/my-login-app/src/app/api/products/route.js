/**
 *  REST / api/products
 *  ───────────────────
 *  GET    → lista todos los productos
 *  POST   → crea producto
 *  PUT    → actualiza producto (id desde body)
 *  DELETE → elimina producto (id desde body)
 */
import { NextResponse } from "next/server";
import pool from "@/lib/db";             // ← tu mismo pool de PG

/* ---------- GET /api/products ---------- */
export async function GET() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      `SELECT id, title, description, price, status
         FROM products
        ORDER BY created_at DESC`
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ---------- POST /api/products ---------- */
export async function POST(req) {
  const body = await req.json();
  const { title, description, price, comparePrice, cost, status } = body;

  if (!title || !price) {
    return NextResponse.json({ error: "Título y precio son requeridos" }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    const {
      rows: [prod],
    } = await client.query(
      `INSERT INTO products
        (title, description, price, compare_price, cost, status, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6, now(), now())
       RETURNING *`,
      [title, description, price, comparePrice, cost, status || "Activo"]
    );
    return NextResponse.json(prod, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ---------- PUT /api/products ---------- */
export async function PUT(req) {
  const body = await req.json();
  const { id, ...fields } = body;

  if (!id) {
    return NextResponse.json({ error: "id requerido" }, { status: 400 });
  }

  // Construye dinámicamente SET col = $n …
  const keys   = Object.keys(fields);
  const values = Object.values(fields);
  if (keys.length === 0)
    return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });

  const setSQL = keys.map((k, i) => `${k} = $${i + 1}`).join(", ");

  const client = await pool.connect();
  try {
    const {
      rows: [prod],
    } = await client.query(
      `UPDATE products SET ${setSQL}, updated_at = now()
         WHERE id = $${keys.length + 1}
       RETURNING *`,
      [...values, id]
    );
    if (!prod) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    return NextResponse.json(prod);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ---------- DELETE /api/products ---------- */
export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: "id requerido" }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    const {
      rows: [prod],
    } = await client.query(`DELETE FROM products WHERE id = $1 RETURNING *`, [id]);
    if (!prod) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  } finally {
    client.release();
  }
}
