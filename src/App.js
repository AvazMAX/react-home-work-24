import "./App.css";
import ReactDOM from "react-dom"
import { useState } from "react";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { useSelector } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Header setOpen={setOpen} />
      <Meals />
      {open &&
        ReactDOM.createPortal(<Basket setOpen={setOpen}/>, document.getElementById("modal"))}
    </div>
  );
}

export default App;
