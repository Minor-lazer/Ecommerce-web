import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "./CartContext";
import { CartProvider } from "./CartContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);