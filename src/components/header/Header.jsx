import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import basket from "../../assets/icon/basket.svg";
import imageheader from "../../assets/image/headerimage.jpg";

export const Header = ({ setOpen }) => {
  const { items } = useSelector((state) => state.items);
  const db = items?.data?.data?.items;

  const totalAmount = db?.reduce((prev, current) => prev + current.amount, 0);

  return (
    <div>
      <HeaderContainer>
        <h1>ReactMeals</h1>
        <button onClick={() => setOpen(true)}>
          <img src={basket} />
          <span>Your Cart</span>
          <p>{totalAmount}</p>
        </button>
      </HeaderContainer>
      <ImageContainer>
        <img src={imageheader} />
      </ImageContainer>
      <MainContainer>
        <div>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </MainContainer>
    </div>
  );
};
const HeaderContainer = styled("header")`
  background-color: #8a2b06;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  position: fixed;
  z-index: 2;
  right: 0;
  left: 0;
  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }
  button {
    width: 249px;
    height: 59px;
    background: #5a1f08;
    border-radius: 30px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    span {
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
    }
    p {
      width: 51px;
      background: #8a2b06;
      border-radius: 30px;
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
      padding: 3px;
    }
  }
`;
const ImageContainer = styled("div")`
  img {
    width: 100%;
    margin-top: 100px;
  }
`;
const MainContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: -200px;
  div {
    background: #383838;
    padding: 40px 36px;
    width: 746px;
    height: 200px;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    text-align: center;
    h1 {
      font-weight: 600;
      font-size: 36px;
      color: #ffffff;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      margin-top: 20px;
    }
  }
`;
