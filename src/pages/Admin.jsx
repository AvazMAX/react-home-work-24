import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MyButton } from "../UI/Button";
import styled from "@emotion/styled";
import { Input, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AdminItem } from "./AdminItem";
import {
  delelteNewFoodsAdmin,
  postNewFoodsAdmin,
} from "../store/admin/adminThunk";
import { getFoods } from "../store/meals/MealsThunk";

export const Admin = ({ open, closeModal }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  const addNewFoods = (e) => {
    e.preventDefault();
    const data = {
      title,
      price: +price,
      description,
    };
    dispatch(postNewFoodsAdmin(data));
    setTitle("");
    setPrice("");
    setDescription("");
    closeModal()
  };

  const deleteHandler = (data) => {
    dispatch(delelteNewFoodsAdmin(data));
  };

  return (
    <Container>
      {open &&
        ReactDOM.createPortal(
          <Backdrop>
            <ContainerInput>
              <form onSubmit={addNewFoods}>
                <div>
                  <TextField
                    type="text"
                    label="Name food"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TextField
                    type="number"
                    label="Price food"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <TextField
                    type="text"
                    label="Desciption food"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <ContainerButton>
                  <MyButton
                    onClick={closeModal}
                    variant={"outlined"}
                    propswidth={"110px"}
                    propsheight={"44px"}
                    background={"#fff"}
                    propsborderradius={"20px"}
                    outlinedbordercolor={"#8A2B06"}
                    outlinedhoverandactivetextcolor={"#fff"}
                    defaultcolor={"#8A2B06"}
                    hoverbackgroundcolor={"#8A2B06"}
                  >
                    Close
                  </MyButton>
                  <MyButton
                    type={"submit"}
                    variant={"contained"}
                    propswidth={"110px"}
                    propsheight={"44px"}
                    background={"#8A2B06"}
                    propsborderradius={"20px"}
                    hoverbackgroundcolor={"#7E2A0A"}
                  >
                    ADD
                  </MyButton>
                </ContainerButton>
              </form>
            </ContainerInput>
          </Backdrop>,
          document.getElementById("modal")
        )}
      <>
        {meals?.map((el, i) => (
          <AdminItem el={el} key={i} deleteHandler={deleteHandler} />
        ))}
      </>
    </Container>
  );
};
const Container = styled("div")`
  text-align: center;
`;
const ContainerInput = styled("div")`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  width: 400px;
  margin: 150px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      width: 100%;
      text-align: center;
    }
  }
`;
const Backdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  background-color: #000000be;
  backdrop-filter: blur(2px);
`;
const ContainerButton = styled("main")`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;
