import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [reservedClothing,setReservedClothing] = useState({total:0,allArticles:[]});
    
    const data = {reservedClothing, setReservedClothing}

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;