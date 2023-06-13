import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/header/Header";
import { Meals } from "../components/meals/Meals";
import { Outlet } from "react-router";
import { Basket } from "../components/basket/Basket";
import { useSearchParams } from "react-router-dom";

export const UserLayout = () => {
  const [open, setOpen] = useSearchParams();

  const openModal = () => {
    open.set("modal", true);
    setOpen(open);
  };

  const closeModal = () => {
    open.delete("modal");
    setOpen(open);
  };

  return (
    <div>
      <Header openModal={openModal} />
      {open.has("modal") &&
        ReactDOM.createPortal(
          <Basket closeModal={closeModal} />,
          document.getElementById("modal")
        )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
