import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export  function Login(){
  const { isLogin, isLoginHandler } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
 <div className ="Login container-center">
 <div className="container-center container-column login-form-container">
    <h2>Login</h2>
  </div>
  <form className = "basic=form-container container-column">
    <div className = "basic-input-group">
      <label for = "email">
        Email : <span style = {{color:"red"}}>*</span>
      </label>
      <input 
        id = "password"
        type = "password"
        className = "input-area"
        // value = {password}  
       />
       <small className = "err-msg">Error</small>
    </div>
    <button className="btn btn-primary btn-login" >baby</button>
  <div className="container-space-between btn-login">
   <link to = "/signup">
      <p>Register Now</p>
   </link>
   <p>Forget Password?</p>
  </div>
  <hr color="white" width="100%" className="btn-login"/>
  <br/>
  <p>
    <u>OR Login with</u>
  </p>
  <div className="container-space-between social=login btn-login">
    <button class="btn btn-facebook" disabled>
      Facebook
      <FontAwesomeIcon clasName={faCoffee}/>
    </button>

    <button class="btn btn-twitter" disabled>
      Facebook
      <FontAwesomeIcon clasName={faCoffee}/>
    </button>

    <button class="btn btn-google" disabled>
      Facebook
      <FontAwesomeIcon clasName={faCoffee}/>
    </button>

  </div>
  </form>
</div>
)



      // { <h1> Chhabhi laaya kya? </h1>
      // <button onClick={loginHandler}>
      //   {isLogin ? "I am logged In" : "I am logged out"}
      // </button> }
    


  function loginHandler() {
    isLoginHandler("Masum", "jenny");
  }
}

