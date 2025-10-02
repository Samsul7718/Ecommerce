import { createContext, useContext } from "react";


const ProductContext=createContext(null);


export const ProductProvider=({children})=>{
    return (
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
         
    )
}
export const useProduct=()=>useContext(ProductContext);