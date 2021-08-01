import React from "react";
import {useState} from "react";
import {useAuth} from "../../Context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import "./LoginPage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

export  function Login(){
  const { isLogin, isLoginHandler } = useAuth();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  
return ( 
  <>
  <body className="form-body">
  <form>
    <div className="Login-box">
    <label>Email</label>
    <div class="input">
    <input type="text" class="input-txt" required data-fillr-id="824108917" data-fillr="bound" autocomplete="off" placeholder="Email"/>
    <span class="fit-label">
    <i class="fas far fa-user"></i>    
    </span>
    </div>
    <label>Password</label>
    <div class="input">
    <input type="text" class="input-txt-warning" required data-fillr-id="824108917" data-fillr="bound" autocomplete="off" placeholder="Password"/>
    <span class="fit-label">
    <i class="fas far fa-user"> 
    </i>    
    </span>
    </div>
    <button>Login</button>
    </div>
  </form>
  </body>
</>
);




      // { <h1> Chhabhi laaya kya? </h1>
      // <button onClick={loginHandler}>
      //   {isLogin ? "I am logged In" : "I am logged out"}
      // </button> }
    


  function loginHandler() {
    isLoginHandler("Masum", "jenny");
  }
}

