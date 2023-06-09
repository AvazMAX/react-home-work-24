import React from "react";
import styled from "@emotion/styled";
import imageheader from "../../assets/image/headerimage.jpg";

export const Headline = () => {
  return (
    <div>
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
const ImageContainer = styled("div")`
  img {
    width: 100%;
    margin-top: 100px;
  }
`;
