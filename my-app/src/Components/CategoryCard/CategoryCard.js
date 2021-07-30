import React from "react";
import "./CategoryCard.css";
import {Link} from "react-router-dom";

export function CategoryCard({imgUrl ="https://www.polhill.co.uk/wp-content/uploads/2018/09/garden-guides.jpg",title="New Cat",categoryUrl="/products"}) { 
return ( 
   <div class="category_card 1">
       <div class="category_card_image">
        <img src ={imgUrl}/>
       </div><Link to={`/products?category=${title}`}>
        <div class="category_card_title title-white">
        <p>{title}</p>
        </div>
       </Link>
     </div>
    );
}
