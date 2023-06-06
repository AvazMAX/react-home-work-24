import React from "react";
import { MyButton } from "../../UI/Button";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

export const BasketItem = ({ el, btnMinus, btnPlus }) => {
  return (
    <Container>
      <div>
        <h2>{el.title}</h2>
      </div>
      <ContainerAmoPri>
        <div>
          <h3>${el.price}</h3>
          <button>x {el.amount}</button>
        </div>
        <main>
          <MyButton
            onClick={() => btnMinus(el)}
            variant={"outlined"}
            propswidth={"48px"}
            propsheight={"36px"}
            background={"#fff"}
            propsborderradius={"6px"}
            outlinedbordercolor={"#8A2B06"}
            outlinedhoverandactivetextcolor={"#fff"}
            defaultcolor={"#8A2B06"}
            hoverbackgroundcolor={"#8A2B06"}
            fontsize={'25px'}
          >
            -
          </MyButton>
          <MyButton
            onClick={() => btnPlus(el)}
            variant={"outlined"}
            propswidth={"48px"}
            propsheight={"36px"}
            background={"#fff"}
            propsborderradius={"6px"}
            outlinedbordercolor={"#8A2B06"}
            outlinedhoverandactivetextcolor={"#fff"}
            defaultcolor={"#8A2B06"}
            hoverbackgroundcolor={"#8A2B06"}
          >
            +
          </MyButton>
        </main>
      </ContainerAmoPri>
    </Container>
  );
};
const Container = styled("div")`
  border-bottom: 1px solid #d6d6d6;
  /* margin-top: 40px; */
  div {
    h2 {
      margin-top: 24px;
    }
  }
`;
const ContainerAmoPri = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 32px;
  div {
    display: flex;
    gap: 47px;
    h3 {
      width: 60px;
      height: 27px;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #ad5502;
    }
    button {
      /* width: 46px; */
      padding: 6px;
      height: 36px;
      border: 1px solid #d6d6d6;
      border-radius: 6px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #222222;
      background-color: #fff;
    }
  }
  main {
    display: flex;
    gap: 20px;
  }
`;
