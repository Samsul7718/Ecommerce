import { useContext,createContext,useState} from "react";

const CartContext=createContext(null);


export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);

   const totalQuantity=cartItems.reduce((sum,item)=>sum+item.quantity,0);

  const addToCart = (product, quantity = 1, color = null, size = null) => {
   const existing = cartItems.find(
    (p) => p.id === product.id && p.selectedColor === color && p.selectedSize === size
  );

  if (existing) {
    setCartItems(
      cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, quantity, selectedColor: color, selectedSize: size }]);
  }
};

    const incQty=(id)=>{
        setCartItems((prev)=>prev.map(item=>item.id===id?{...item,quantity:item.quantity+1}:item))
    }
    const decQty=(id)=>{
       setCartItems((prev)=>prev.map(item=>item.id===id?{...item,quantity:item.quantity>1?item.quantity-1:1}:item))
    }
    const remove=(id)=>{
       setCartItems((prev)=>prev.filter(item=>item.id !=id))
    }
    return (
    <CartContext.Provider value={{cartItems,addToCart,incQty,decQty,remove,totalQuantity}}>
        {children}
    </CartContext.Provider>
    )
}
export const useCart=()=>useContext(CartContext);