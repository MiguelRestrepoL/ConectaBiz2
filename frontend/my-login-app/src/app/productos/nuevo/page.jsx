"use client";
import "../agregar.css";
import "../agregar-dark.css";

export default function AddProductPage() {
  const user = "Andrés"; // idem

  return (
    <>
      {/* ---------- HEADER ---------- */}
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

      {/* ---------- LAYOUT ---------- */}
      <div className="main-container form-layout">
        {/* ===== Sidebar (igual que listado) ===== */}
        <aside className="sidebar">
          {/* … copia exacta del sidebar del listado … */}
          {/* (puedes refactorizarlo a un componente <Sidebar /> luego) */}
        </aside>

        {/* ===== LEFT ===== */}
        <section className="left-panel">
          {/* --- Título & descripción --- */}
          <div className="card">
            <h4>Título</h4>
            <input type="text" placeholder="Text field data" />
            <h4>Descripción</h4>
            <textarea placeholder="Editor" rows={4} />
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
              <input type="number" placeholder="0,00" />
            </div>
            <div>
              <h4>Precio comparativa</h4>
              <input type="number" placeholder="0,00" />
            </div>
            <div>
              <h4>Costo por artículo</h4>
              <input type="number" placeholder="0,00" />
            </div>
            <div>
              <h4>Beneficio</h4>
              <input type="number" placeholder="0,00" />
            </div>
            <div>
              <h4>Margen</h4>
              <input type="number" placeholder="0,00" />
            </div>
          </div>

          {/* --- Inventario --- */}
          <div className="card">
            <h4>Inventario</h4>
            <label>
              <input type="radio" name="inv" /> Hacer seguimiento de la cantidad
            </label>
            <label>
              <input type="radio" name="inv" /> Seguir vendiendo hasta que se
              acabe el inventario
            </label>
            <label>
              <input type="radio" name="inv" /> Umbral para cuando una cant. de
              inventario
            </label>

            <div style={{ marginTop: 12 }}>
              <h4>Cantidad</h4>
              <input type="number" placeholder="0,00" />
            </div>
          </div>

          <button className="save">Guardar</button>
        </section>

        {/* ===== RIGHT ===== */}
        <section className="right-panel">
          <div className="card">
            <h4>Estado</h4>
            <select defaultValue="Activo">
              <option>Activo</option>
            </select>
          </div>

          <div className="card">
            <h4>Publicación</h4>
            <button className="badge">Tienda online</button>
            <button className="badge">Punto de venta</button>
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
    </>
  );
}
