import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import React from "react";
const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProviders = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProviders;
export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
