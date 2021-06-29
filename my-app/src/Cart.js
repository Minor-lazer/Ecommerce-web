import "./index.css";
import "./App.css";
import SideBar from "./SideBar";
import  MainContent from "./ProductList";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { useCart , cartItem,DEFAULT_STATE} from "./CartContext";
// import {cartReducer} from "./Reducer";


// export function CartHeader() {
//     const { cartItems } = useCart();
//     // return <h3>Items in Cart {cartItems.length}</h3>;
//   }
  
export const CartItem = ({item}) => {
  
    const {dispatch: cartDispatch} = useCart();
    // console.log(itemsInCart);
    // <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
    // return (
      // <>
      // <>
      //   <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
        // <ul className="list-group">
        //   {cartItems.map((item) => {
            return (
              <div style={{ border: "2px solid black", padding: "1rem", margin: "1rem" }}>
              <h3> {item.name} </h3>
              <div> Rs. {item.price} </div>
              <div style={{ display: "flex", margin: "1rem", padding: "1rem" }}>
                <button
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => cartDispatch({ type: "INCREMENT", payload: item })}
                >
                  {" "}
                  + {" "}
                </button>
                <h3 style={{ margin: "auto" }}> {item.quantity} </h3>
                <button
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => cartDispatch({ type: "DECREMENT", payload: item })}
                >
                  {" "}
                  - {" "}
                </button>
              </div>
              <button onClick={() => cartDispatch({ type: "REMOVE", payload: item })}>
                RemoveFromCart
              </button>
            </div>
    );
  }

export function Store ()
{
  const {state} = useCart();
  const totalPrice = state.cartItems.reduce(
    (total, b) => total + b.price * b.quantity,
    0
  );

  if (state.cartItems.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }

return (
  <main>
    <p>
      Total price:{" "}
      {totalPrice.toLocaleString("en", {
        style: "currency",
        currency: "INR"
      })}
    </p>
    {state.cartItems.map((item, index) => (
      <CartItem key={item.id} item={item} />
    ))}
  </main>
);
}




  
