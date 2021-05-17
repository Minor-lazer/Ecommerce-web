import React from "react";
import { useCart , cartItem,DEFAULT_STATE} from "./CartContext";
import {cartReducer} from "./Reducer";

 export function WishlistItem({item})
{
    const {state,dispatch:cartDispatch} = useCart();
    
    return ( 
        <div style={{border:"2px solid black" , padding:"1rem", margin:"1rem"}}>
            <h3>{item.name}</h3>
            <div> Rs. {item.price} </div>
              <div style={{ display: "flex", margin: "1rem", padding: "1rem" }}>
                <button
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => cartDispatch({ type: "MOVE_TO_CART", payload: item })}
                >Move to Cart
                  {" "}
                </button>
                  {" "}
                <button
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: item })}
                >Remove from Wishlist
                  {" "}
                </button>
              </div>
        </div>   
      )
  }
    
      export function WishlistStore ()
      {
        const {state} = useCart();
        const wishlistLength = state.wishlist.length;
      
        if (state.wishlist.length === 0) {
          return (
            <main>
              <h3>wishlist is empty</h3>
            </main>
          );
        }
      
      return (
        <main>
          <p>
            Items in Wishlist {wishlistLength}
          </p>
          {state.wishlist.map((item, index) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </main>
      );
      }
      

