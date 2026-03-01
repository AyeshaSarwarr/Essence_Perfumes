import { createContext, use, useContext } from "react";

const CartNumberContext = createContext({
    count: 0,
    increaseNumber: () => {},
    decreaseNumber: () => {},
});

const CartNumberProvider = CartNumberContext.Provider;

const useCart = () => {
    return useContext(CartNumberContext);
}

export default CartNumberProvider;
export { useCart };