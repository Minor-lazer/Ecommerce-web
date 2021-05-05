import React from "react";
import "./ProductList.css";
import { useCart } from "./cart-context";
import photo1 from "./images/photo1.jpg";
import SideBar from "./SideBar";
import ProductData from "./ProductData";
import product_card from "./ProductData";

const MainContent = () => {
    const { setItemsInCart } = useCart();
    console.log(product_card)
    const samanList = product_card.map((item)=>
    <div className="card-list">

    <div class="card-box">
     <img class="card-image" src={photo1}/>
     <div class="card-badge-tilted">New</div>
     <div class="card-details">
         <h3>{item.name}</h3>
         <p>{item.description}</p>
     <div class="like-btn-holder">
         <p>{item.price}</p>
         <button class="like-btn">
         <i class="far fa-lg fa-heart"></i>
         </button>
     </div>
         <button onClick={()=>setItemsInCart((items)=>[...items,item])} class="buy-btn">Shop Now</button>
     </div>
    </div>
 
    </div>
    
)

return ( 
    <div className="Products">
        <h1>Saman ka list</h1>
        {samanList}
    </div>
   )
}
export default MainContent;