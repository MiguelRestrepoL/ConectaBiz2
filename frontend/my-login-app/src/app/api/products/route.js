/**
 *  REST  /api/products   (pero ahora usa tabla "items")
 *  ───────────────────────────────────────────────────
 *  GET    → lista todos los ítems
 *  POST   → crea ítem
 *  PUT    → actualiza ítem (id en body)
 *  DELETE → elimina ítem  (id en body)
 */
import { NextResponse } from "next/server";
import pool from "@/lib/db";

/* ---------- GET ---------- */
export async function GET() {
  const { rows } = await pool.query(
    `SELECT id, title, description, price, status
       FROM items
      ORDER BY created_at DESC`
  );
  return NextResponse.json(rows);
}

/* ---------- POST ---------- */
export async function POST(req) {
  const { title, description = null, price, status = "Activo" } = await req.json();

  if (!title || !price) {
    return NextResponse.json(
      { error: "Título y precio son requeridos" },
      { status: 400 }
    );
  }

  const {
    rows: [item],
  } = await pool.query(
    `INSERT INTO items (title, description, price, status)
     VALUES ($1,$2,$3,$4)
     RETURNING *`,
    [title, description, price, status]
  );

  return NextResponse.json(item, { status: 201 });
}

/* ---------- PUT ---------- */
export async function PUT(req) {
  const { id, ...fields } = await req.json();
  if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });

  const allowed = ["title", "description", "price", "status"];
  const keys    = Object.keys(fields).filter(k => allowed.includes(k));
  if (!keys.length)
    return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });

  const setSQL = keys.map((k, i) => `${k} = $${i + 1}`).join(", ");
  const values = keys.map(k => fields[k]);

  const {
    rows: [item],
  } = await pool.query(
    `UPDATE items SET ${setSQL}, updated_at = now()
       WHERE id = $${keys.length + 1}
     RETURNING *`,
    [...values, id]
  );

  if (!item) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(item);
}

/* ---------- DELETE ---------- */
export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });

  const {
    rows: [item],
  } = await pool.query(`DELETE FROM items WHERE id = $1 RETURNING *`, [id]);

  if (!item) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json({ success: true });
}
