import "./App.css";
import { useState } from "react";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { useSelector } from "react-redux";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
