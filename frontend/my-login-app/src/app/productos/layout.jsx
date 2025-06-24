// NO lleva "use client"
import "./productos.css";
import "./productos-dark.css";

export default function ProductosLayout({ children }) {
  return <div className="productos-page">{children}</div>;
}
