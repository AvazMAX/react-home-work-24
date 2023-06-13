import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { MyButton } from "../UI/Button";
import { useDispatch } from "react-redux";
import { editAdminFoods } from "../store/admin/adminThunk";
import { TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const AdminItem = ({ el, deleteHandler }) => {
  const [open, setOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const dispatch = useDispatch();

  const editHandler = () => {
    setOpen(true);
    setEditTitle(el.title);
    setEditDescription(el.description);
    setEditPrice(el.price);
  };
  const saveHandler = () => {
    setOpen(false);
    const data = {
      _id: el._id,
      title: editTitle,
      price: +editPrice,
      description: editDescription,
    };
    dispatch(editAdminFoods(data));
  };
  return (
    <Container>
      {open &&
        ReactDOM.createPortal(
          <Backdrop>
            <ContainerModal>
              <div>
                <TextField
                  type="text"
                  label="Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />{" "}
                <TextField
                  type="number"
                  label="Price"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />{" "}
                <TextField
                  type="text"
                  label="Description"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              </div>
              <ContainerButton>
                <MyButton
                  onClick={() => setOpen(false)}
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
                  variant={"contained"}
                  propswidth={"110px"}
                  propsheight={"44px"}
                  background={"#8A2B06"}
                  propsborderradius={"20px"}
                  hoverbackgroundcolor={"#7E2A0A"}
                  onClick={saveHandler}
                >
                  Save
                </MyButton>
              </ContainerButton>
            </ContainerModal>
          </Backdrop>,
          document.getElementById("modal")
        )}
      <div>
        <div>
          <h1>{el.title}</h1>
          <i>{el.description}</i>
          <h3> $ {el.price}</h3>
        </div>
        <ContainerButtonDeleteEdit>
          <MyButton
            variant={"contained"}
            propswidth={"110px"}
            propsheight={"44px"}
            background={"#8A2B06"}
            propsborderradius={"20px"}
            hoverbackgroundcolor={"#7E2A0A"}
            onClick={() => deleteHandler(el)}
          >
            Delete
          </MyButton>
          <MyButton
            variant={"contained"}
            propswidth={"110px"}
            propsheight={"44px"}
            background={"#8A2B06"}
            propsborderradius={"20px"}
            hoverbackgroundcolor={"#7E2A0A"}
            onClick={editHandler}
          >
            Edit
          </MyButton>
        </ContainerButtonDeleteEdit>
      </div>
    </Container>
  );
};
const Container = styled("div")`
  background-color: #fff;
  padding: 30px;
  margin: 10px auto;
  width: 500px;
  border-radius: 22px;
  h3 {
    color: #ad5502;
  }
`;
const Backdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  background-color: #000000ba;
  backdrop-filter: blur(2px);
`;
const ContainerModal = styled("div")`
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
const ContainerButton = styled("main")`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;
const ContainerButtonDeleteEdit = styled("div")`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
