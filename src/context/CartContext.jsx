import { useContext,createContext,useState} from "react";

const CartContext=createContext(null);


export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);

    const addToCart=(product)=>{

    }
    const incQty=(id)=>{
        setCartItems((prev)=>prev.map(item=>item.id===id?{...item,qty:item.qty+1}:item))
    }
    const decQty=(id)=>{

    }
    return (
    <CartContext.Provider value={{cartItems,setCartItems,addToCart,incQty,decQty}}>
        {children}
    </CartContext.Provider>
    )
}
export const useCart=()=>useContext(CartContext);