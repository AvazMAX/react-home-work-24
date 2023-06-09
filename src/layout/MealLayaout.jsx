import React from "react";
import { Meals } from "../components/meals/Meals";
import { Headline } from "../components/header/Headline";

export const MealLayaout = () => {
  return (
    <div>
      <Headline />
      <Meals />
    </div>
  );
};
