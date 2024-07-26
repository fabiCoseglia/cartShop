import { useContext } from "react"
import { CartContext } from "../context/cartContext"

// eslint-disable-next-line react/prop-types
export const CartModal = ({handleToggle}) => {
  const {clearCart,cart,increaseItemQuantity,decreaseItemQuantity,removeItemFromCart} = useContext(CartContext);

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
        {
          cart.length !== 0 ?
          cart.map((product,i)=>(
            <li className="py-4 flex justify-between items-center" key={i}>
          <div className="flex items-center">
            <img src={product.image} alt="Producto" className="h-12 w-12 rounded object-cover" />
            <div className="ml-4">
              <button className="text-sm font-medium"> {product.title} </button>
              <p className="text-sm text-gray-500">${product.price} </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-4 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={()=>decreaseItemQuantity(product.id)}>-</button>
            <span className="px-2"> {product.quantity} </span>
            <button className=" w-4  bg-green-500 hover:bg-green-600 text-white rounded-md" onClick={()=>increaseItemQuantity(product.id)}>+</button>
            <button className="ml-4 text-red-500 hover:text-red-700" onClick={()=>removeItemFromCart(product.id)}>Delete</button>
          </div>
        </li>
          ))
          : <p className="text-gray-400 text-center">Empty cart</p>
        }
      </ul>
      
      <div className="mt-4">
        <div className="flex justify-between items-center font-medium">
          <span>Total:</span>
          <span className="font-bold">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg">Checkout</button>
        <button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg" onClick={clearCart}>Clear cart</button>
      </div>
    </div>
  </div>
  )
}
