import { useContext,createContext,useState} from "react";

const CartContext=createContext(null);

export const useCart=()=>{
    const cart=useContext(CartContext);
    return cart;
}

export const CartProvider=(props)=>{
    const [cartItems,setCartItems]=useState([]);
    return (
    <CartContext.Provider value={{cartItems,setCartItems}}>
        {props.children}
    </CartContext.Provider>
    )
}
