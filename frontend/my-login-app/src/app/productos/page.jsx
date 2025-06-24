// src/app/productos/page.jsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductsPage() {
  const user   = "Andrés";          // ⚠️ Sustituye por tu sesión real
  const router = useRouter();

  /**  ← Botón de retorno
   *  ───────────────────
   *  • Si el PlanSelector está en el historial   →  router.back()
   *  • Si abrimos /productos directamente        →  router.push("/panel")
   */
  function handleBack() {
    if (typeof window !== "undefined" && window.history.state?.idx > 0) {
      router.back();
    } else {
      router.push("/panel");
    }
  }

  return (
    <>
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
          <button type="button" className="back-button" onClick={handleBack}>
            ← Inicio
          </button>
          <button type="button" className="store-button">🛒 Mi tienda</button>
        </div>
      </header>

      {/* ---------- LAYOUT ---------- */}
      <div className="main-container">
        {/* ===== Sidebar ===== */}
        <aside className="sidebar">
          <div className="store-section">
            <img src="/logo-conectabiz-bg.png" alt="Tienda" />
            <small style={{ color: "#ddd" }}>cbiz.myshop.com</small>
          </div>

          <input placeholder="Buscar" />
          <button className="is-active">Inicio</button>
          <button>Pedidos</button>
          <button>Productos</button>
          <button className="sub">Inventario</button>
          <button className="sub">Órdenes compra</button>
          <button>Cliente</button>
          <button>Contenido</button>
          <button>Estadísticas</button>
          <button>Marketing</button>
          <button>Descuentos</button>
          <button>Suscripción</button>
          <button>Punto físico</button>
          <button>Tienda Online</button>
        </aside>

        {/* ===== Contenido ===== */}
        <main className="content">
          <section className="product-card">
            <h3>Agrega tus productos</h3>
            <p>¡Inicia abasteciendo productos para satisfacer a tus clientes!</p>

            <button
              className="add-button"
              onClick={() => router.push("/productos/nuevo")}
            >
              + Agregar producto
            </button>
            <button className="import-button">📁 Importar</button>
          </section>

          <section className="info-card">
            <h4>Buscar productos para vender</h4>
            <p>
              Haciendo uso de dropshipping, los productos se saltan un proceso
              haciendo que sólo debas pagar por lo que vendas.
            </p>
            <button className="explore">📦 Explorar más al respecto</button>
          </section>
        </main>
      </div>
    </>
  );
}
