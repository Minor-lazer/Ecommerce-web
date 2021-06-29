import React from "react"
import {navlinks} from "./NavLink";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCoffee, faSearch, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {PrivateRoute} from "../../PrivateRoute";
import {Link,Routes,Route,useNavigate} from "react-router-dom";
import {WishlistItem} from "../../Wishlist"
import {Address} from "../../Pages/Private/Address";


export const NavBar = () =>
{

    const navigate = useNavigate();
    const links = () => navlinks.map((item)=> 
    {
    <li key={item.id}> 
      <a> {item.name} </a>
    </li>
    }
    )

    return ( 
      <nav className="navbar">
        <div className="container--center">
           
           <div 
            //className={hamburgerStyles}
            //onClick={hamburgerclickHandler}
            id="button--menu"
            role="button"
           >

            <span className="hamburger-menu-line"></span>
            <span className="hamburger-menu-line"></span>
            <span className="hamburger-menu-line"></span>
          
          </div>

          <Link to="/" className="container-center brand-logo">
            <p className="brand-name">
              Gardenin<span>Store</span>
            </p>
          </Link>

        </div>

        <div className = "container-center">
          <Link to="/products" className="nav-icon-label-container">
          <div className="avatar-badge-container" role="button">
            <div  
               className="avatar-noborder container-center"
               style = {{fonstSize:"0.6rem" ,width:"2rem"}}
            >
              <i className="fa fa-search"></i>

            </div>
          </div>
          <p className="nav=icon-label">Search</p>

           </Link>

           <Link to="/wishlist" className="nav-icon-label-container">
             <div className="avtar-badge-container" role="button">
               <div
                 className="avtar-noborder container=center"
                 style = {{fontsize:"0.6rem",width:"2rem"}}
               
               >
                <FontAwesomeIcon icon={{faSearch}} />

               </div>
               <div className="icob-badge-top container-center" style={{right:"0"}}>
                 <span>{WishlistItem.length}</span>
              </div>
             </div>
             <FontAwesomeIcon icon={{faCartArrowDown}}/> 
             <p className="nav-icon-label">Wishlist</p> 
           </Link>
           <Link to="/cart" className="nav-icon-label-container">
             <div className="avatar-badge-container" role="button">
               <div
                className="avatar-badge-container" role="button"
                style={{ 
                  fontSize:"0.6rem",
                  width:"2rem",
                  margin:"0rem 0.1rem",
                }}
               >
                 <i 
                 className="fa fa-shopping-cart"
                  aria-hidden="true" 
                  style={{right:"0"}}
                  >
                 </i>

               </div>
               <div className="icon-badge-top container-center">
                 {/* <span></span> */}
               </div>

             </div>
             <p className="nav-icon-label">Cart</p>
           </Link>
          </div>

          {/* <ul id="menu">
            <li className="menu-item">
              <b>
              <Link to="/products" className="link-to">Products</Link>
              </b>  
            </li>
            <li className="menu-item">
              <Link to="/products">Fruit Plants</Link>
            </li>
            <li className="menu-item">
              <Link to="/products" >Indoor Plants</Link>
            </li>
            <li className="menu-item">
              <Link to="/products" >Indoor Plants</Link>
            </li>
            <li className="menu-item">
              <Link to="/products" >Gardening tools</Link>
            </li>
            <li className="menu-item">
              <b>
                <Link  to="/products">Pots</Link>
              </b>
            </li>
            <li className="menu-item">
              <b>
                <Link  to="/offers">  Special offers</Link>
              </b>
            </li>
            <li className="menu-item">
              <b>
                <Link  to="/offers">My wishlist</Link>
              </b>
            </li>
            <li className="menu-item">
              <b>
                <Link  to="/offers">Profile</Link>
              </b>
            </li>
            <li className="menu-item">
              <b>
                <Link  to="/offers">Settings</Link>
              </b>
            </li>
            


          </ul> */}
      </nav>
    );
};

    

export default NavBar