import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods, postFoods } from "../../store/meals/MealsThunk";
import { MealsItem } from "./MealsItem";
import styled from "@emotion/styled";
import { getBasket } from "../../store/basket/basketThunk";

export const Meals = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const [amountChange, setAmountChange] = useState(1);

  useEffect(() => {
    dispatch(getFoods());
    dispatch(getBasket());
  }, []);

  return (
    <Container>
      {meals?.map((el, i) => (
        <main key={i}>
          <MealsItem
            el={el}
            dispatch={dispatch}
            amountChange={amountChange}
            setAmountChange={setAmountChange}
          />
        </main>
      ))}
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  margin: 135px 20%;
  padding: 40px;
  border-radius: 16px;
  main {
      border-bottom: 1px solid #d6d6d6;
      &:last-child {
        border-bottom: none;
      }
    }
`;
