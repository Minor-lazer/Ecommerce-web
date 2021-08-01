import React from "react";
import "./Header.js";
import photo from "./images/photo.jpg";

function Header ()
{
    return (
        <nav className = "header">
            <img className="amazon_logo" src ={photo} />
            <div className="header_search">
                <input type="text" className="header_search_input"/>
            </div>
            <div className = "logo"></div>
            <div className="header_options">
                <span className="header_1">Hello User</span>
                <span className="header_1">Sign-In</span>
                <span className="header_1">Sign-Out</span>
                <span className="header_1">Koka Bura</span>               
            </div>
        </nav>
    )
}

export default Header;