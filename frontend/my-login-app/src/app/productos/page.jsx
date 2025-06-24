"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductsPage() {
  const router = useRouter();

  /* ---------- ① estado ---------- */
  const [products, setProducts] = useState([]);
  const [loading,  setLoading ] = useState(true);
  const [error,    setError   ] = useState("");

  /* ---------- ② cargar al montar ---------- */
  useEffect(() => {
    fetch("/api/products")
      .then(r => r.ok ? r.json() : Promise.reject("Error al cargar"))
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  /* ---------- ③ render ---------- */
  if (loading) return <p>Cargando…</p>;
  if (error)   return <p style={{color:"red"}}>{error}</p>;

  return (
    <>
      {/* …tu header/sidebar tal cual… */}

      <main className="content">
        <button
          className="add-button"
          onClick={() => router.push("/productos/nuevo")}
        >
          + Agregar producto
        </button>

        {/* LISTADO */}
        <ul className="mt-6 space-y-4">
          {products.map(p => (
            <li
              key={p.id}
              className="card flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold">{p.title}</h4>
                <small>{p.price.toLocaleString()} €</small>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/productos/${p.id}`}
                  className="badge"
                >
                  ✏️ Editar
                </Link>
                <button
                  className="badge"
                  onClick={() => handleDelete(p.id)}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );

  /* ---------- ④ delete ---------- */
  async function handleDelete(id) {
    if (!confirm("¿Eliminar producto?")) return;
    const r = await fetch(`/api/products/${id}`, { method:"DELETE" });
    if (r.ok) setProducts(prod => prod.filter(x => x.id !== id));
    else alert("No se pudo eliminar");
  }
}
