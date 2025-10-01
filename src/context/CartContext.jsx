import { useContext,createContext,useState} from "react";

const CartContext=createContext(null);


export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);

    const addToCart=(product)=>{
        const existing=cartItems.find((p)=>p.id===product.id);
        if(existing){
            setCartItems(prev=>
                prev.map(p=>p.id===product.id? {...p,qty:p.qty+1}:p)
            );
        }else{
          setCartItems(prev=>[...prev,{...product,qty:1}])
        }

    }
    const incQty=(id)=>{
        setCartItems((prev)=>prev.map(item=>item.id===id?{...item,qty:item.qty+1}:item))
    }
    const decQty=(id)=>{
       setCartItems((prev)=>prev.map(item=>item.id===id?{...item,qty:item.qty>1?item.qty-1:1}:item))
    }
    const remove=(id)=>{
       setCartItems((prev)=>prev.filter(item=>item.id !=id))
    }
    return (
    <CartContext.Provider value={{cartItems,addToCart,incQty,decQty,remove}}>
        {children}
    </CartContext.Provider>
    )
}
export const useCart=()=>useContext(CartContext);