import "./index.css";
import "./App.css";
import SideBar from "./SideBar";
import  MainContent from "./ProductList";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./cart-context";
import { useCart } from "./cart-context";


function ShowItem({ item }) {
  return (
    <div
      key={item.id}
      style={{ margin: "1rem", padding: "1rem", border: "1px solid" }}
    >
      <h2>{item.name}</h2>
      <p>Rs {item.price}</p>
    </div>
  );
}

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3>Items in Cart {itemsInCart.length}</h3>;
}

function Cart() {
  
  const { product_card,itemsInCart, counter, dispatch: cartDispatch } = useCart();
  <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
  return (
    <>
    <>
      <h1 onClick={() => cartDispatch()}>Cart count {counter} </h1>
      <ul className="list-group">
        {product_card.map((item) => {
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

function Products() {
  return <h1> Products </h1>;
}

export default function App()
{     

  const [route, setRoute] = useState("products");
  return (
    <div className="App">
    <h1 className="app-header">eCommerce</h1>
    <button onClick={() => setRoute("products")}>Products</button>
    <button onClick={() => setRoute("cart")}>Cart</button>
    <div className="flow">
        <SideBar/>
        <CartHeader />
        {route === "cart" && <Cart />}
        {route === "products" && <MainContent/>}
    </div>
    </div>
  );
}
      




