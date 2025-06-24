"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import "./agregar.css";
import "./agregar-dark.css";

/**
 * /productos/nuevo   – Formulario para crear un nuevo producto
 */
export default function AddProductPage() {
  const user   = "Andrés";          // ← sustituye por tu sesión real
  const router = useRouter();

  /* ---------- estado de cada campo ---------- */
  const [title,        setTitle]        = useState("");
  const [description,  setDescription]  = useState("");
  const [price,        setPrice]        = useState("");
  const [comparePrice, setComparePrice] = useState("");
  const [cost,         setCost]         = useState("");
  const [status,       setStatus]       = useState("Activo");
  const [error,        setError]        = useState("");
  const [saving,       setSaving]       = useState(false);

  /* ---------- submit -> API ---------- */
  async function handleSave(e) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const resp = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        comparePrice: Number(comparePrice) || null,
        cost: Number(cost) || null,
        status,
        publication: "online",
        trackInventory: false,
      }),
    });

    const body = await resp.json();
    setSaving(false);

    if (!resp.ok) {
      setError(body.error || "Error al guardar");
      return;
    }

    // Éxito → volvemos al listado
    router.push("/productos");
  }

  return (
    <form onSubmit={handleSave}>
      {/* ---------- HEADER ---------- */}
      <div className="header">
        <div className="header-left">
          <div className="logo">CONECTABIZ</div>
          <div className="welcome">¡Bienvenido nuevamente {user}!</div>
        </div>

        <div className="search-container">
          <input className="search-bar" placeholder="Buscar" />
        </div>

        <div className="header-right">
          <Link href="/" className="back-button">
            ← Inicio
          </Link>

          <button type="button" className="store-button">
            🛒 Mi tienda
          </button>
        </div>
      </div>

      {/* ---------- LAYOUT ---------- */}
      <div className="main-container form-layout">
        {/* ===== Sidebar (idéntica al listado) ===== */}
        <aside className="sidebar">
          {/* … copia exacta del sidebar del listado … */}
        </aside>

        {/* ===== LEFT ===== */}
        <section className="left-panel">
          {/* --- Título & descripción --- */}
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

          {/* --- Multimedia --- */}
          <div className="card">
            <h4>Multimedia</h4>
            <span className="upload-caption">
              <strong>Subir nuevo</strong> | Seleccionar existente
              <br />
              <small>Acepta imágenes, vídeos o modelos 3D</small>
            </span>
          </div>

          {/* --- Categorías --- */}
          <div className="card">
            <h4>Categorías</h4>
            <select defaultValue="">
              <option value="" disabled>
                Elige una categoría del producto
              </option>
            </select>
          </div>

          {/* --- Precio & márgenes --- */}
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
            <div>
              <h4>Precio comparativa</h4>
              <input
                type="number"
                value={comparePrice}
                onChange={(e) => setComparePrice(e.target.value)}
              />
            </div>
            <div>
              <h4>Costo por artículo</h4>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div>
              <h4>Beneficio</h4>
              <input type="number" placeholder="0,00" disabled />
            </div>
            <div>
              <h4>Margen</h4>
              <input type="number" placeholder="0,00" disabled />
            </div>
          </div>

          {/* --- Inventario (placeholder) --- */}
          <div className="card">
            <h4>Inventario</h4>
            {/* … mantener radios y cantidad si los necesitas … */}
          </div>

          {/* --- error y botón Guardar --- */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="save" disabled={saving}>
            {saving ? "Guardando…" : "Guardar"}
          </button>
        </section>

        {/* ===== RIGHT ===== */}
        <section className="right-panel">
          <div className="card">
            <h4>Estado</h4>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
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
            <input type="text" placeholder="Tipo" />
            <input type="text" placeholder="Proveedor" />
            <input type="text" placeholder="Colecciones" />
            <input type="text" placeholder="Etiquetas" />
          </div>
        </section>
      </div>
    </form>
  );
}
