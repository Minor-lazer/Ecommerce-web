import "./index.css";
import "./App.css";
import React from "react";
import SideBar from "./SideBar";
import {WishlistItem} from "../src/Pages/Private/Wishlist.js"
import  MainContent from "./ProductList";
import {useContext} from "react";
import {useState} from "react";
import {CartContext} from "./CartContext";
import {useCart} from "./CartContext";
import {Cart,cartItem} from "./Pages/Private/Cart";
import {WishlistStore} from "./Pages/Private/Wishlist";
import NavBar from "./Components/Navbar/NavBar";
// import { Login } from "./Pages/LoginPage";
import {PrivateRoute} from "./PrivateRoute";
import{BrowserRouter as Router ,Routes,Route} from "react-router-dom";
 import {Login} from "./Pages/Login/LoginPage"
import { dom } from "@fortawesome/fontawesome-svg-core";



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
   {/* <NavBar/> */}
    <h1 className="app-header">eCommerce</h1>
    <button onClick={() => setRoute("products")}>Products</button>
    <button onClick={() => setRoute("cart")}>Cart</button>
    <button onClick={()=>setRoute("wishlist")}>Wishlist</button>
    <div className="flow">
    <NavBar/> 
       <SideBar/> 
        {/* {route === "cart" && <Store/>}  */}
        {/* {route === "wishlist" && <WishlistStore/>}  */}
        {/* {route === "products" && <MainContent/>} */}

      <Routes>
        <Route path="/" element = {<MainContent/>}/>

        <Route exact path="/login" element={<Login/>}/>

        <PrivateRoute path="/wishlist">
          <WishlistStore/>
        </PrivateRoute> 

        <privateRoute path="/cart">
          <Cart/>
        </privateRoute>

      </Routes>
    </div>
    </div>
  );
}
      




