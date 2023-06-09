import React from "react";
import { Route, Routes } from "react-router";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Meals } from "../components/meals/Meals";
import { UserLayout } from "../layout/UserLayout";
import { MealLayaout } from "../layout/MealLayaout";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<MealLayaout />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
