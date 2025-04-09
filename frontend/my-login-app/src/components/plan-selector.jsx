"use client";

export function PlanSelector() {
  return (
    <div className="bg-[#0f172a] text-[#e2e8f0] min-h-screen">
      {/* TOPBAR */}
      <header className="bg-[#14213d] text-white py-5 px-7 flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <div className="font-bold text-base mb-1">CONECTABIZ</div>
            <div className="w-10 h-10 rounded-full border-4 border-[#8b5cf6]"></div>
          </div>
          <div className="text-base font-bold">
            <h3>¡Bienvenido nuevamente, Usuario!</h3>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-[#334155] rounded-lg py-2 px-4 w-[300px]">
            <span className="mr-3 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent text-white focus:outline-none w-full text-base"
            />
          </div>
        </div>
        <button className="bg-[#3b82f6] py-2 px-4 rounded-lg text-white flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
            alt="Carrito"
            className="w-4 h-4"
          />
          Mi tienda
        </button>
      </header>

      {/* LAYOUT GENERAL */}
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="w-[220px] bg-[#1e293b] p-5 min-h-[calc(100vh-60px)]">
          <ul className="list-none">
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🏠 Inicio
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📦 Pedidos
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🛒 Productos
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              👤 Cliente
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📝 Contenido
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📊 Estadísticas
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              📣 Marketing
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🏷️ Descuentos
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              💳 Suscripción
            </li>
          </ul>

          <div className="text-xs text-[#94a3b8] my-5 ml-1 uppercase font-bold">
            Canales de venta
          </div>
          <ul className="list-none">
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🏬 Punto físico
            </li>
            <li className="mb-3 p-2 border border-[#334155] rounded-lg bg-[#334155] flex items-center gap-2 text-sm">
              🛍️ Tienda Online
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold">Selecciona un plan</h2>
          <p className="mt-2">
            Puedes cancelar el plan antes del <strong>30 de abril</strong> sin
            cobro. Puedes cambiar el plan cuando desees.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {/* PLAN - Free */}
            <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155] w-[280px]">
              <span className="bg-[#3b82f6] text-white px-2 py-1 text-xs rounded-full mb-2 inline-block">
                Más popular
              </span>
              <h3 className="mb-2 text-xl text-white">Free</h3>
              <p className="mb-2">
                <em>
                  El paquete más básico, lo suficiente para establecer tu tienda
                  pero sin aprovechar al máximo ConectaBiz
                </em>
              </p>
              <p className="text-2xl font-bold mb-2 text-white">0€ / mes</p>
              <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
                Seleccionar free package
              </button>
              <ul className="mt-3">
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  👤 1 socio
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🏪 Hasta 5 sucursales
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🧾 Puntos de venta
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  📈 Informes de ventas/compras
                </li>
              </ul>
              <p className="mt-2">
                Envíos: Tarifas de envio por servientrega de (money) COP$
              </p>
            </div>

            {/* PLAN - Premium */}
            <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155] w-[280px]">
              <h3 className="mb-2 text-xl text-white">Premium</h3>
              <p className="mb-2">
                <em>
                  Contiene la mayoría de los servicios para tu tienda, soporte
                  inmediato y lo necesario para establecer la mejor tienda
                  posible
                </em>
              </p>
              <p className="text-2xl font-bold mb-2 text-white">5€ / mes</p>
              <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
                Seleccionar premium package
              </button>
              <ul className="mt-3">
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  👥 3 socios
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🏪 Hasta 100 sucursales
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🧾 Puntos de venta
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  📊 Análisis de ventas/compras
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  💰 precios internacionales
                </li>
              </ul>
              <p className="mt-2">
                Envíos: Tarifas de envio por servientrega de (money) COP$
              </p>
            </div>

            {/* PLAN - Elite */}
            <div className="bg-[#1e293b] p-5 rounded-[15px] shadow-lg border border-[#334155] w-[280px]">
              <h3 className="mb-2 text-xl text-white">Elite</h3>
              <p className="mb-2">
                <em>
                  Todos los beneficios posibles, asistencia por canal privado,
                  soporte 24/7, privilegios para la tienda y página
                  personalizada
                </em>
              </p>
              <p className="text-2xl font-bold mb-2 text-white">15€ / mes</p>
              <button className="bg-[#3b82f6] text-white py-2 w-full rounded-lg mt-2">
                Seleccionar elite package
              </button>
              <ul className="mt-3">
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  👥 10 socios
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🏬 Hasta 1000 sucursales
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🧾 Puntos de venta
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  📈 Informes profesionales
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  💰 precios internacionales al menor
                </li>
                <li className="mb-2 flex items-center gap-2 text-[#e2e8f0]">
                  🛳 Aranceles e impuestos de importacion
                </li>
              </ul>
              <p className="mt-2">
                Envíos: Tarifas de envio por servientrega de (money) COP$
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="text-center p-5 text-xs text-[#94a3b8]">
        Al seleccionar el paquete se mostrarán todos los detalles del paquete
        deseado.
      </footer>
    </div>
  );
}
