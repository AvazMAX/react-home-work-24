import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import basket from "../../assets/icon/basket.svg";
import { MyButton } from "../../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth/authSlice";

export const Header = ({ setOpen }) => {
  const { items } = useSelector((state) => state.items);
  const { isAuthorization } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalAmount = items?.reduce(
    (prev, current) => prev + current.amount,
    0
  );
  console.log(totalAmount);

  return (
      <HeaderContainer>
        <h1>ReactMeals</h1>
        <div>
          <Button onClick={() => setOpen(true)}>
            <img src={basket} />
            <span>Your Cart</span>
            <p>{totalAmount}</p>
          </Button>
          {isAuthorization ? (
            <MyButton
              onClick={() => dispatch(authActions.logout())}
              variant={"contained"}
              propswidth={"110px"}
              propsheight={"56px"}
              background={"#5a1f08"}
              propsborderradius={"50px"}
              hoverbackgroundcolor={"#7E2A0A"}
            >
              logout
            </MyButton>
          ) : (
            <MyButton
              onClick={() => navigate("signin")}
              variant={"contained"}
              propswidth={"110px"}
              propsheight={"56px"}
              background={"#5a1f08"}
              propsborderradius={"50px"}
              hoverbackgroundcolor={"#7E2A0A"}
            >
              Sign In
            </MyButton>
          )}
        </div>
      </HeaderContainer>
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
  top: 0;
  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const Button = styled("button")`
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
`;
