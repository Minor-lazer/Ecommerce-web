import "./index.css";
import "./App.css";
import SideBar from "./SideBar";
import  MainContent from "./ProductList";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./cart-context";
import { useCart } from "./cart-context";

export function CartHeader() {
    const { itemsInCart } = useCart();
    return <h3>Items in Cart {itemsInCart.length}</h3>;
  }
  

export function Cart() {
  
    const { product_card,itemsInCart, counter, dispatch: cartDispatch } = useCart();
    <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
    return (
      <>
      <>
        <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
        <ul className="list-group">
          {itemsInCart.map((item) => {
            return (
              <li className="list-group-item">
                {item.name}
                <p>{item.price}</p>
                <button
                  className="btn-primary-sm pd-quarter"
                  onClick={() =>{
                    cartDispatch({ type: "INCREMENT", payload: item })
                    alert("button working")
                  }               
                  }
                >
                  +
                </button>
                {item.quantity}
                <button
                  className="btn-secondary-sm pd-quarter"
                  onClick={() =>
                    cartDispatch({ type: "DECREMENT", payload: item })                
                  }
                >
                  -
                </button>
                <button
                  onClick={() => cartDispatch({ type: "REMOVE", payload: item }) 
                  }
                >
                  Remove From Cart
                </button>
              </li>
            );
          })}
        </ul>
      </>
      </>
    );
  }
  
