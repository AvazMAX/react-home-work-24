import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/header/Header";
import { Meals } from "../components/meals/Meals";
import { Outlet } from "react-router";
import { Basket } from "../components/basket/Basket";

export const UserLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header setOpen={setOpen} />
      {open &&
        ReactDOM.createPortal(
          <Basket setOpen={setOpen} />,
          document.getElementById("modal")
        )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
