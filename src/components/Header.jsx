import { useState } from "react"
import { CartModal } from "./CartModal";

export const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const handleToggle = ()=>{
   setToggleCart(!toggleCart)
  }
  return (
    <>
    <header>
        <nav className="bg-violet-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            CartShop
          </div>
          <div>
            <p onClick={handleToggle} className="text-white ml-4 cursor-pointer hover:text-gray-200">Cart</p>
          </div>
        </div>
      </div>
    </nav>
    </header>
    {
      toggleCart && <CartModal handleToggle={handleToggle} />
    }

    </>

  )
}
