import React, { useState } from "react";
import { Admin } from "../pages/Admin";
import styled from "@emotion/styled";
import { MyButton } from "../UI/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/authSlice";
import { useSearchParams } from "react-router-dom";

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { open } = Object.fromEntries(searchParams);

  const openModal = () => setSearchParams({ open: "modal-admin" });

  const closeModal = () => setSearchParams({});

  return (
    <div>
      <HeaderContainer>
        <h1>ReactMeals</h1>
        <div>
          <MyButton
            onClick={openModal}
            variant={"contained"}
            propswidth={"200px"}
            propsheight={"56px"}
            background={"#5a1f08"}
            propsborderradius={"50px"}
            hoverbackgroundcolor={"#7E2A0A"}
          >
            Add new foods
          </MyButton>
          <MyButton
            onClick={() => dispatch(authActions.logOut())}
            variant={"contained"}
            propswidth={"110px"}
            propsheight={"56px"}
            background={"#5a1f08"}
            propsborderradius={"50px"}
            hoverbackgroundcolor={"#7E2A0A"}
          >
            logout
          </MyButton>
        </div>
      </HeaderContainer>
      <Main>
        <Admin open={open} closeModal={closeModal} />
      </Main>
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
const Main = styled("div")`
  margin: 120px 0;
`;
