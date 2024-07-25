import { useLoaderData } from "react-router-dom"

export const IndexProducts = () => {
    const {products} = useLoaderData() 
  return (
    <div className="container mx-auto p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-3" />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-green-700 mb-4 font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-auto w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
