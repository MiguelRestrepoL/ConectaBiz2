"use client";
import "./productos.css";
import "./productos-dark.css";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const user = "Andrés"; // ⚠️ Sustituye por tu sesión real
  const router = useRouter();

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="logo">CONECTABIZ</div>
          <div className="welcome">¡Bienvenido nuevamente {user}!</div>
        </div>

        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Buscar" />
        </div>

        <div className="header-right">
          <button className="store-button">🛒 Mi tienda</button>
        </div>
      </div>

      <div className="main-container">
        {/* ===== Sidebar ===== */}
        <aside className="sidebar">
          <div className="store-section">
            {/* pon la imagen en /public y ajústala */}
            <img src="/logo-conectabiz-bg.png" alt="Tienda" />
            <div style={{ fontSize: 13, color: "#ddd" }}>cbiz.myshop.com</div>
          </div>

          <input type="text" placeholder="Buscar" />
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
            <p>
              ¡Inicia abasteciendo productos para satisfacer a tus clientes!
            </p>
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
