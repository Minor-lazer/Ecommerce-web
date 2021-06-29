import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "./CartContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./Context/AuthContext";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";


import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
    <AuthProvider>
      <Router>
      <App />
      </Router>
    </AuthProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);