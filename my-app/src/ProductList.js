import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./ProductList.css";
import { useCart } from "./CartContext";
import photo1 from "./images/photo1.jpg";
import SideBar from "./SideBar";
import ProductData from "./ProductData";
import product_card from "./ProductData";


const MainContent = () => {
    const { dispatch:cartDispatch } = useCart();
    console.log(product_card)
    const samanList = product_card.map((item)=>
    <div style={{display:"inline-block"}}className="card-list">

    <div class="card-box">
     <img class="card-image" src={photo1}/>
     <div class="card-badge-tilted">New</div>
     <div class="card-details">
         <h3>{item.name}</h3>
         <p>{item.description}</p>
     <div onClick={()=>cartDispatch({type:"ADD_TO_WISHLIST",payload:item})} class="like-btn-holder">
         <p>{item.price}</p>
         <button class="like-btn">
         <FontAwesomeIcon icon={faHeart} size="2x" className="heartIcon" />
         </button>
     </div>
     <button onClick={()=>cartDispatch({type:"ADD",payload:item})} class="buy-btn">Add to cart</button>
     {/* <button onClick={()=>cartDispatch({type:"ADD_TO_WISHLIST",payload:item})} class="buy-btn">Add to wishlist</button> */}
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