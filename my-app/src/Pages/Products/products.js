import React from "react";
import { useState,useEffect,useRef } from "react";
import { userProductsData } from "../../Context/ProductDataContext";
import {product_card} from "./prductData";
import { useLocation } from "react-router-dom";

function useQuery()
{
    return new URLSearchParams(useLocation.search);

}

export function products() { 
    const [searchText,setSearchText] = useState("");
    const [result,setResult] = useState ([]);
    const [categories,setCategories] = useState([])
    const searchInput = useRef(null);
    const query = useQuery();
    const {showToas} = useToast()

    const {dispatch,filterData,maxValue,showInventoryAll,showFastDeliveryOnly,} = useProductsData();

    useEffect(()=>{
    searchInput.current.focus();
    },[])
    
    useEffect(()=> { 
        setResult (
        filteredData.filter((item) => { 
            return item.name.toUpperCase().includes(searchText.trim.toUpperCase());
        })
        )
    },[searchText,filteredData]);

 return ( 
     <div className = "products" >
         <div class = "container-column">
             <div
             
             className = "container search-container"
             style = {{flexwrap : "nowrap"}}
            id = "search"
                       
             > 
             <div class = "input-group" style = {{width:"100%", margin :"0"}}>
             <input 
               id = "name"
               type = "search"
               value = {seacrR}
             </div>
         </div>

     </div>
 )   

}