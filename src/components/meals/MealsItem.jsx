import styled from "@emotion/styled";
import React, { useState } from "react";
import { MyButton } from "../../UI/Button";
import { postFoods } from "../../store/meals/MealsThunk";

export const MealsItem = ({ el, dispatch }) => {
  const [number, setNumber] = useState(1);

  const addFoods = () => {
    const data = {
      ...el,
      amount: +number,
    };
    dispatch(postFoods(data));
    setNumber(1);
  };

  return (
    <Container>
      <ContainerItem>
        <h1>{el.title}</h1>
        <i>{el.description}</i>
        <p>$ {el.price}</p>
      </ContainerItem>
      <ContainerForm>
        <div>
          <p>Amount</p>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <MyButton
          variant={"contained"}
          background={"#8A2B06"}
          propsborderradius={"22px"}
          propswidth={"99px"}
          propsheight={"41px"}
          hoverbackgroundcolor={"#7E2A0A"}
          onClick={addFoods}
        >
          + ADD
        </MyButton>
      </ContainerForm>
    </Container>
  );
};
const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  /* &:last-child {
    border-bottom: none;
  } */
`;
const ContainerItem = styled("div")`
  margin: 24px 0;
  width: 800px;
  h1 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
  }
  i {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #222222;
    margin-top: 4px;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
    margin-top: 4px;
  }
`;
const ContainerForm = styled("div")`
  text-align: end;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    input {
      width: 60px;
      height: 32px;
      border: 1px solid #d6d6d6;
      border-radius: 6px;
      font-weight: 500;
      font-size: 16px;
      color: #222222;
    }
    p {
      font-weight: 600;
      font-size: 18px;
      color: #222222;
    }
  }
`;
