import React from "react";
import "./SideBar.css";

function SideBar()
{
    return (
        <div>
        <nav class="comp-nav">
        <div class="top-name">
        
            <a href="index.html" class="logo-font-effect"> अवयव  v1.0</a>
        </div>
        <ul class="side-nav">
            <li class="nav-list-item"><a href="index.html">Introduction</a></li>
            <li class="nav-list-item"><a href="avtar.html">Avtars</a></li>
            <li class="nav-list-item"><a href="alert.html">Alerts</a></li>
            <li class="nav-list-item"><a href="badge.html">Badges</a></li>
            <li class="nav-list-item"><a href="card.html">Cards</a></li>
            <li class="nav-list-item"><a href="image.html">Image</a></li>
            <li class="nav-list-item"><a href="input.html">Input</a></li>   
            <li class="nav-list-item"><a href="modal.html">Modal</a></li>
            <li class="nav-list-item"><a href="list.html">Lists</a></li>
            <li class="nav-list-item"><a href="grid.html">Grid</a></li>
            <li class="nav-list-item"><a href="toast.html">Toast</a></li> 
            
        </ul>
    </nav>
    </div>
    )
}

export default SideBar;