/**
 *  REST /api/products
 *  ───────────────────
 *  GET    → lista todos los productos
 *  POST   → crea   producto
 *  PUT    → actualiza producto (id en body)
 *  DELETE → elimina producto  (id en body)
 */
import { NextResponse } from "next/server";
import pool from "@/lib/db";

/* ───── GET /api/products ───── */
export async function GET() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      `SELECT id, title, description, price, compare_price, cost, status
         FROM products
        ORDER BY created_at DESC`
    );
    return NextResponse.json(rows);                 // 200 OK
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ───── POST /api/products ───── */
export async function POST(req) {
  const {
    title,
    description = "",
    price,
    comparePrice = null,
    cost = null,
    status = "Activo",
  } = await req.json();

  if (!title?.trim() || !price) {
    return NextResponse.json(
      { error: "Título y precio son requeridos" },
      { status: 400 }
    );
  }

  const client = await pool.connect();
  try {
    const { rows: [prod] } = await client.query(
      `INSERT INTO products
        (title, description, price, compare_price, cost, status, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6, now(), now())
       RETURNING *`,
      [title.trim(), description, price, comparePrice, cost, status]
    );
    return NextResponse.json(prod, { status: 201 });    // 201 Created
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ───── PUT /api/products ───── */
export async function PUT(req) {
  const { id, ...fields } = await req.json();

  if (!id)      return NextResponse.json({ error: "id requerido" }, { status: 400 });
  if (!Object.keys(fields).length)
    return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });

  // construimos dinámicamente   SET col = $n
  const setCols   = Object.keys(fields)
                        .map((k, i) => `${k} = $${i + 1}`)  // price = $1, …
                        .join(", ");
  const values    = Object.values(fields);

  const client = await pool.connect();
  try {
    const { rows: [prod] } = await client.query(
      `UPDATE products
          SET ${setCols}, updated_at = now()
        WHERE id = $${values.length + 1}
      RETURNING *`,
      [...values, id]
    );
    if (!prod) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    return NextResponse.json(prod);                      // 200 OK
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  } finally {
    client.release();
  }
}

/* ───── DELETE /api/products ───── */
export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "id requerido" }, { status: 400 });

  const client = await pool.connect();
  try {
    const { rows: [prod] } =
      await client.query(`DELETE FROM products WHERE id = $1 RETURNING *`, [id]);

    if (!prod) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    return NextResponse.json({ success: true });         // 200 OK
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  } finally {
    client.release();
  }
}
