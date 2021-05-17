import { createContext, useContext,useReducer } from "react";
import { useState } from "react";
import product_card from "./ProductData.js"
import React from "react";
 import {cartReducer} from "./Reducer";

export const DEFAULT_STATE =
{
  cartItems:[],
  wishlist:[]
};

export function useCart() {
  return useContext(CartContext);
}

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer,  DEFAULT_STATE );
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

