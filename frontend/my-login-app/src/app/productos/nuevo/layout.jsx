// NO lleva "use client"
import "../productos.css";         // light + reset encapsulado
import "../productos-dark.css";    // variantes dark

export default function ProductosLayout({ children }) {
  // Encapsulamos los estilos con un wrapper .productos-page
  return <div className="productos-page">{children}</div>;
}
