
export const CartModal = ({handleToggle}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">CartShop</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="h-5" onClick={handleToggle}>X</span>
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Producto" className="h-12 w-12 rounded object-cover" />
            <div className="ml-4">
              <p className="text-sm font-medium">Nombre del Producto</p>
              <p className="text-sm text-gray-500">$20.00</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-gray-800 px-2">-</button>
            <span className="px-2">1</span>
            <button className="text-gray-600 hover:text-gray-800 px-2">+</button>
            <button className="ml-4 text-red-500 hover:text-red-700">Eliminar</button>
          </div>
        </li>
        {/* Repite este bloque para más productos */}
      </ul>
      <div className="mt-4">
        <div className="flex justify-between items-center font-medium">
          <span>Total:</span>
          <span>$40.00</span>
        </div>
        <button className="mt-4 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg">Ir a pagar</button>
        <button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">Vaciar carrito</button>
      </div>
    </div>
  </div>
  )
}
