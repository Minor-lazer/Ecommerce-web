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
               value = {searchText}
               class = "input-area"
               style = {{bordeRadius : "0px"}}
               onChange = {(e) => { 
                   setSearchText (e.target.value);
                   showToast("changed")
               }}
            ></input>
            <label for = "name" style = {{visibility: searchText === ""?"visible" : "hidden" ,}}>Search</label>

             </div>
             <button 
              clasName = "btn btm-primary"
              stylem = {{width:"20%", margin:"0",borderRadius : "0px"}} 
             
             > 
             <i class = "fa fa-search" aria-hidden = "true" ></i>

             </button>
         </div>

         <div className = "container-sort-filter-wrapper">
             <div className = "container container-sort">
                 <select 
                 onChange = {(e) => 
                 dispatch ({type:"SORT" , payload:e.target.value})
                 }
                name = "sort"
                id = "sort"
                >
                    <option value = "" >Newest First</option>
                    <option value = "PRICE_HIGH_TO_LOW">Price highh to low</option>
                    <option value = "PRICE_LOW_TO_HIGH">Price low to high</option>
                </select>
               </div>
               <div clasName = "container container-filter">
                <p className ="container-title" > Filter By </p>
                <label>
                    <input 
                     type = "checkbox"
                     className = "checkbox"
                     checked = {showInventoryAll}
                     onChange = {() => dispatch ({type:"TOGGLE_INVENTORY"})}
                     />

                </label>
               </div>
        
         </div>

     </div>
 )   

}