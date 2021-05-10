import { createContext, useContext,useReducer } from "react";
import { useState } from "react";
import product_card from "./ProductData.js"

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        product_card: state.product_card.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity : item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        product_card: state.product_card.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity : item.quantity - 1 }
            : item
        )
      };
    case "REMOVE":
      return {
        ...state,
        product_card: state.product_card.filter(
          (prevItem) => prevItem.id !== action.payload.id
        )
      };

    default:
      return { state };
  }
};


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { product_card });
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart, product_card: state.product_card, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
