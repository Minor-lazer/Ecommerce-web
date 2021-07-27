import { 
    useContext,
    createContext,
    useState,
    useReducer,
    useContext,
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
            return products.find((product)=>product._id == id)
        }

        return (
            
            <productDataContext.provider value = {{dispatch,maxValu,filteredData,showInventoryAll,fastDeliveryOnly,sortBy,getProductDataById,initializeData}}>
            {children}
            </productDataContext.provider>
        );
}
export const userProductsData = () => useContext(productsDataContext);