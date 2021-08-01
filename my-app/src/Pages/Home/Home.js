import React from "react";
import {Link} from "react-router-dom";
import {productDataContext} from "../../Context/ProductDataContext.js";


export function Home () { 
    const {filteredData} = useProductData();

    return ( 
        <div className = "container-column Home">
            <Banner/>
            <div
                 className = "container-center container-column offer-banner"
                 style = {{height:"auto",padding:"0.5rem",background:"#$BFDBFE",color:"#1F2937"}}
            >
                <h2>Get best stationary products and gift personalized only only for you</h2>
                <Link to="/products"><button class="btn btn-danger">Explore Products</button></Link>
            <br></br>
            <h2>Featured Categories</h2>
            <div className="category-card-list">
                <CategoryCard title="pot1" imageUrl="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-1-inch-8-cm-square-plastic-planter-with-rounded-edges-blue-16968456831116_600x600.jpg"/>
                <CategoryCard title="pot2" imageUrl="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-1-inch-8-cm-square-plastic-planter-with-rounded-edges-blue-16968456831116_600x600.jpg"/>
                <CategoryCard title="po3" imageUrl="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-1-inch-8-cm-square-plastic-planter-with-rounded-edges-blue-16968456831116_600x600.jpg"/>
                <CategoryCard title="pot4" imageUrl="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-1-inch-8-cm-square-plastic-planter-with-rounded-edges-blue-16968456831116_600x600.jpg"/>
                <CategoryCard title="pot5" imageUrl="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-1-inch-8-cm-square-plastic-planter-with-rounded-edges-blue-16968456831116_600x600.jpg"/>
            </div>
            <br></br>
           <div 
            className= "container-center container-column offer-banner"
            >
             <h1 className = "offer-title">Independence Day</h1>
             <h1>upto 50%</h1>
             <Link to="/products"><button className ="btn btn-danger">Explore</button></Link>
           
           </div> 
        
        <div class="container-column">
         <br></br>
         <h2>Featured Products</h2>
         <div class="products-cards-container">
             {filteredData.slice(0,5).map((product)=> { 
                 return <ProductCard product = {product}/>;
             })}
        </div>   
        </div>

            </div>

        </div>
    )
}