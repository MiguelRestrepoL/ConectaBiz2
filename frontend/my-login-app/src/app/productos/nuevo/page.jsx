"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import "./agregar.css"; // estilos light   ( SÓLO este form )
import "./agregar-dark.css"; // variantes dark  ( SÓLO este form )

/**
 * /productos/nuevo – Formulario para crear un producto
 */
export default function AddProductPage() {
  const router = useRouter();
  const user = "Andrés"; // ⚠️ reemplaza por tu sesión real

  /* ───────────── Estados del formulario ───────────── */
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Activo");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  /* ───────────── Guardar en BD vía API ───────────── */
  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        status,
        publication: "online",
      }),
    });
    const body = await res.json();
    setSaving(false);

    if (!res.ok) {
      setError(body.error || "Error al guardar");
      return;
    }
    router.push("/productos"); // volver al listado
  }

  /* ────────────────── UI ────────────────── */
  return (
    <form onSubmit={handleSave}>
      {/* ---------- HEADER ---------- */}
      <header className="header">
        <div className="header-left">
          <span className="logo">CONECTABIZ</span>
          <span className="welcome">¡Bienvenido nuevamente {user}!</span>
        </div>

        <div className="search-container">
          <input className="search-bar" placeholder="Buscar" />
        </div>

        <div className="header-right">
          {/* Volver al listado de productos */}
          <Link href="/productos" className="back-button">
            ← Listado
          </Link>
          <button type="button" className="store-button">
            🛒 Mi tienda
          </button>
        </div>
      </header>

      {/* ---------- LAYOUT ---------- */}
      <div className="main-container form-layout">
        {/* ===== Sidebar (idéntico al listado) */}
        <aside className="sidebar">{/* … tu sidebar aquí … */}</aside>

        {/* ===== Panel izquierdo ===== */}
        <section className="left-panel">
          {/* Información básica */}
          <div className="card">
            <h4>Título</h4>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <h4>Descripción</h4>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Multimedia */}
          <div className="card">
            <h4>Multimedia</h4>
            <span className="upload-caption">
              <strong>Subir nuevo</strong> │ Seleccionar existente
              <br />
              <small>Acepta imágenes, vídeos o modelos 3D</small>
            </span>
          </div>

          {/* Precio */}
          <div className="card grid-3">
            <div>
              <h4>Precio</h4>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            {/* campos comparativa / coste / margen opcionales */}
          </div>

          {/* Inventario (placeholder) */}
          <div className="card">
            <h4>Inventario</h4>
            {/* radios y cantidad aquí si los necesitas */}
          </div>

          {/* Error y botón Guardar */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="save" disabled={saving}>
            {saving ? "Guardando…" : "Guardar"}
          </button>
        </section>

        {/* ===== Panel derecho ===== */}
        <section className="right-panel">
          <div className="card">
            <h4>Estado</h4>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <div className="card">
            <h4>Publicación</h4>
            <button type="button" className="badge">
              Tienda online
            </button>
            <button type="button" className="badge">
              Punto de venta
            </button>
          </div>

          <div className="card">
            <h4>Organización del producto</h4>
            <input placeholder="Tipo" />
            <input placeholder="Proveedor" />
            <input placeholder="Colecciones" />
            <input placeholder="Etiquetas" />
          </div>
        </section>
      </div>
    </form>
  );
}
