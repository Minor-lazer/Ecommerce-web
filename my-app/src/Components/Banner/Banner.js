import React , {useEffect,useState} from "react";
import "./Banner.css";

export function Banner() 
{
  const [frontClass ,setFrontClass] = useState("card_side card_card--front front-1");
  const [backClass,setBackClass] = useState("card_side card_side--back back-1");       
let flipCheck = 1;
function rotateCards() {
  if(flipCheck === 0) {
    setFrontClass("card__side card__side--front showGreen")
    setBackClass("card_side card__side--back showRed");
    flipCheck = 1;
  }

  else { 
    setFrontClass("card__side card__side--front");
    setBackClass("card__side card__side--back");
    flipCheck = 0;
  }

  setTimeout(rotateCards,3500);
}

useEffect(()=> 
{
  rotateCards();
},[]);

return ( 
 <div className = "banner-card">
   <div clasName={frontClass} id="front-1">
     <div className ="text-box">
       <h3 className = "text-box-top">HAPINESS</h3>
       <h1 className = "text-box-middle">is getting vegetables</h1>
       <h3 className = "text-box-lower ">----Garden----</h3>
     </div>
   </div>
   <div className={backClass} id = "back-1">
   <div className = "text-box">
      <h3 className = "text-box-top">HAPPINESS</h3>
      <h1 className = "text-box-lower">is having more and more</h1>
      <h3 className = "text-box-lower">------Plants------</h3>
   </div>
   </div>
 </div> 
)

}