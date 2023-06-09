import { TextField } from "@mui/material";
import React, { useState } from "react";
import { MyButton } from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { signIn } from "../store/auth/authThunk";

export const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(signIn(data))
      .unwrap()
      .then(() => navigate("/"))
      .then((error) => console.log(error));
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div>
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
        </div>
        <MyButton
          type={"submit"}
          variant={"contained"}
          propswidth={"110px"}
          propsheight={"44px"}
          background={"#8A2B06"}
          propsborderradius={"20px"}
          hoverbackgroundcolor={"#7E2A0A"}
        >
          Sign In
        </MyButton>
      </form>
      <Link to="/signup">You don't have an account?</Link>
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  height: 270px;
  width: 400px;
  margin: 200px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
