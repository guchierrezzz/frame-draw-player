import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import your main App component or the entry point of your application
import "./index.css";
import { MainContextProvider } from "./provider/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
