import { 
    useCotext,
    createContext,
    useState,
    useReducer,
} from "react";

import react from "react";
                                                                                                   
const productDataContext = createContex();

export function productDataProvider ({children}) { 
 const [products,setProducts] = useState([]);

 function initializeData(data) { 
     setProducts(data);    
 }

    const [{showInventoryAll,showFastDelivery,sortyBy,maxValue},dispatch] = useReducer ( 
        function reducer (state,action)  
        {
           switch(action.type) 
           {
                case "TOGGLE_INVENTORY":
                    return (state = {...state,
                        showInventoryAll :!state.showInventoryAll,
                    });

                case "TOGGLE_DELIVERY":
                    return (state = {
                        ...state,showFastDeliver:!state.showFastDeliveryOnly,
                    });
                    
                case "SORT":
                  return (state = {...state,sortBy:action.payload });
                
                case "TOTAL_PRICE_RANGE":
                    return (
                        null 
                        // ...state,
                        // maxValue:action.payload,
                    );
                default:
                    return state;
           }
        },
        {
            showInventoryAll:false,
            showtDeliveryOnly:false,
            sortBy:null,
            maxValue:1000,
        })

        function getSortedData(product_card,sortBy)
        {
            if (sortBy && sortBy === "PRICE_HIGH_TO_LOW")
            return (
                product_card.sort((a,b)=>{b["price"]-a["price"]})
            )  

            else if (sortBy && sortBy === "PRICE_HIGH_TO_HIGH")
            return ( 
                product_card.sort((a,b)=>{a["price"]-b["price"]})
            )
            return product_card;

        }

        function getFilteredData(product_card,{showtDeliveryOnly})
        {
           product_card.filter(({showFastDelivery})=> 
           {
               showtDeliveryOnly ? showFastDelivery : true;
           }).filter(({inStock})=> 
           {
               ( showInventoryAll ? true : inStock );
           })
        }

        const getSortedData= getSortedData(product_card,sortBy);

        const getFilteredData = getFilteredData(sortedData,{showFastDeliveryOnly,showInventoryAll});

        function getProductDataById(id) { 
            return 
        }

        return (
            
            <productDataContext.provider value = {{dispatch,maxValu,filteredData,showInventoryAll,fastDeliveryOnly,sortBy,getProductDataById,initializeData}}>
            {children}
            </productDataContext.provider>

             {/* <>
             <fieldset>
                 <legend>SORT</legend>
                 <label>
                     <input 
                    type = "radio"
                    name = "sort"
                    onChange={()=>dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}
                    checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}>
                    </input>{" "}
                    SortBy High to Low
                </label>

                <label>
                    <input 
                    type = "radio"
                    name = "sort"
                    onChange={()=>dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}
                    checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}>
                    </input>{" "}
                    SortBy Low to High
                </label>
            </fieldset>
            <fieldset>
                <legend>Filters</legend>
                <label>
                <input
                 type="checkbox"
                 checked = {showInventoryAll}
                 onChange = {()=>dispatch({type:"TOGGLE_INVENTORY"})}
                 />
                 Include out of stock
                 </label>

                 <label>
                     <input
                     type="checkbox"
                     checked = {showFastDelivery}
                     onChange = {()=>{dispatch({type:'TOGGLE_DELIVERY'})}}

                     >
                     </input>
                     Fast Delivery
                 </label>

                 <label style={{display="block",margin="1rem"}}>
                     <input type="range"/>
                     Price Range
                 </label>
           
            </fieldset>
            </> */}
        )
}
