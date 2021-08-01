import React from "react";
export const cartReducer = (state, action) => {
    switch (action.type) {

      case "ADD" :
      
       
          return {...state,cartItems:state.cartItems.concat(action.payload)}
    
      case "INCREMENT":
        
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity : item.quantity + 1 }
              : item
          )
        };
  
      case "DECREMENT":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity : item.quantity - 1 }
              : item
          )
        };
      case "REMOVE":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (prevItem) => prevItem.id !== action.payload.id
          )
        };

        case "REMOVE_FROM_CART":
          return {
            ...state,
            wishlist: state.wishlist.filter(
              (prevItem) => prevItem.id !== action.payload.id
            )
          };

          case "MOVE_TO_CART" :
      
       
            return {...state,cartItems:state.cartItems.concat(action.payload), wishlist: state.wishlist.filter(
              (prevItem) => prevItem.id !== action.payload.id
            )
             }

            case "ADD_TO_WISHLIST" :
      
       
              return {...state,wishlist:state.wishlist.concat(action.payload)}
  
      default:
        return { state };
    }
  };