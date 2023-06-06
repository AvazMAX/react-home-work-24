import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods, postFoods } from "../../store/meals/MealsThunk";
import { MealsItem } from "./MealsItem";
import { getBasketFoods } from "../../store/basket/basketThunk";
import styled from "@emotion/styled";

export const Meals = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const [amountChange, setAmountChange] = useState(1);

  useEffect(() => {
    dispatch(getFoods());
    dispatch(getBasketFoods());
  }, [dispatch]);

  return (
    <Container>
      {meals?.map((el, i) => (
        <div key={i}>
          <MealsItem
            el={el}
            dispatch={dispatch}
            amountChange={amountChange}
            setAmountChange={setAmountChange}
          />
        </div>
      ))}
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  margin: 135px 20%;
  padding: 40px;
  border-radius: 16px;
`;
