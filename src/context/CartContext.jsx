import { useContext,createContext,useState} from "react";

const CartContext=createContext(null);


export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);

    const addToCart=(product,quantity = 1, color = null, size = null)=>{
        setCartItems((prev)=>{
            const existing =prev.findIndex((p)=>
            p.id===product.id &&
            p.selectedColor===color &&
            p.selectedSize===size
            );

            if(existing >=0){
                const updatedCart=[...prev];
                updatedCart[existing].quantity +=quantity;
                return updatedCart;
            }else{
                return[
                    ...prev,
                    {...product,quantity,selectedColor:color,selectedSize:size}
                ]
            }
        })
        //   const cartItem = { ...product, quantity, selectedColor: color, selectedSize: size };
        // const existing=cartItems.find((p)=>p.id===product.id);
        // if(existing){
        //     setCartItems(prev=>
        //         prev.map(p=>p.id===product.id? {...p,quantity:p.quantity+1}:p)
        //     );
        // }else{
        //   setCartItems(prev=>[...prev,{...product,quantity:1}])
        // }

    }
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
    <CartContext.Provider value={{cartItems,addToCart,incQty,decQty,remove}}>
        {children}
    </CartContext.Provider>
    )
}
export const useCart=()=>useContext(CartContext);