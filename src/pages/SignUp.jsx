import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { MyButton } from "../UI/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../store/auth/authThunk";

export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const dispatch = useDispatch();

  const addNewUser = () => {
    const data = {
      name,
      email,
      password,
      role: "USER",
    };
    dispatch(signUp(data));
  };

  return (
    <Container>
      <form onSubmit={addNewUser}>
        <div>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>
        <MyButton
          type={"submit"}
          variant={"contained"}
          propswidth={"120px"}
          propsheight={"44px"}
          background={"#8A2B06"}
          propsborderradius={"20px"}
          hoverbackgroundcolor={"#7E2A0A"}
        >
          Sign Up
        </MyButton>
      </form>
      <Link to={"/signin"}>Do you have account?</Link>
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  height: 400px;
  width: 400px;
  margin: 200px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 100%;
    }
  }
  button {
    margin: 30px;
  }
  a {
    text-decoration: none;
    color: #000000;
    font-size: 19px;
  }
`;
