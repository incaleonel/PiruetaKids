import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [reservedClothing,setReservedClothing] = useState();
    const [totalAmount,setTotalAmount] = useState(0);
    
    const data = {reservedClothing, setReservedClothing, totalAmount,setTotalAmount}

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;
