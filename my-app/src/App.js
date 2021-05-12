import "./index.css";
import "./App.css";
import SideBar from "./SideBar";
import  MainContent from "./ProductList";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./cart-context";
import { useCart } from "./cart-context";
import {CartHeader} from "./cart"
import {Cart} from "./cart";


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
      




