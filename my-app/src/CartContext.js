import { createContext,useContext,useEffect,useReducer } from "react";
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
 
  const [cart,setCart] = useState([]);
  const [cartProductsIds,setCradProductsIds] = useState([]);

  useEffect(()=> { 
    setCradProductsIds(product_card.map((item) => item._id ));
  },[cart]);

  function isInCart(productId) { 
    return cartProductsIds.includes(productId)
  }

  function initializeCart(cart) { 
    setCart(cart);
  }

  function addToCart(product) { 
    let flag = 1;
    const result = cart.map((item) => { 
      if(item._id === product._id)
      {
        flag = 0;
        return {...item,quantity:item.quantity+1,showFlag:1};
      }
      return item;
    });
    if(flag) { 
      return [...cart,{...product,quantity:1,showFlag:1}];
    } 
    return result;
  }

  function removedFromCart(product) { 
    return cart.map((item) => 
    {
      if(item._id === product._id) { 
        if(item.quantity > 1) { 
          return {...item,quantity:item.quantity -1};
        } else { 
          return {...item,quantity:0,showFlag:0};
        }
      }
      return item;
    });
  }

  function deleteFromCart(product) {
    return cart.map((item) => {
      if (item._id === product._id) { 
        return {...product,quantity:0 , showFlag:0};
      }
      return item;
    });
  }

  const [state, dispatch] = useReducer(cartReducer,  DEFAULT_STATE );
  return (
    <CartContext.Provider value={{cart,addToCart,removedFromCart,deleteFromCart,setCart,isInCart,initializeCart, state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

