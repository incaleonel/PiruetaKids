import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [amount,setAmount] = useState(0);
    
    const data = {amount, setAmount}

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;