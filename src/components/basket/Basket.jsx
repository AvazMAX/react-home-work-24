import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasketFoods,
  getBasket,
  getBasketFoods,
  minusBasketFoods,
  plusBasketFoods,
} from "../../store/basket/basketThunk";
import { BasketItem } from "./BasketItem";
import { MyButton } from "../../UI/Button";

export const Basket = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  const totalPrice = items?.reduce(
    (prev, current) => prev + +current.price.toFixed(2) * current.amount,
    0
  );

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const btnPlus = (el) => {
    dispatch(plusBasketFoods(el));
  };

  const btnMinus = (el) => {
    if (el.amount === 1) {
      dispatch(deleteBasketFoods(el._id));
    }
    dispatch(minusBasketFoods(el));
  };

  return (
    <Container>
      <Backdrop>
        {items?.length ? (
          <ContainerItem>
            {items?.map((el, i) => (
              <BasketItem
                el={el}
                key={i}
                btnPlus={btnPlus}
                btnMinus={btnMinus}
              />
            ))}
          </ContainerItem>
        ) : null}
        <div>
          <ContainerTotalAmount>
            <h1>Total amount: </h1>
            <h4>$ {totalPrice}</h4>
          </ContainerTotalAmount>
          <ContainerBtns>
            {totalPrice > 0 ? (
              <>
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
                  variant={"contained"}
                  propswidth={"110px"}
                  propsheight={"44px"}
                  background={"#8A2B06"}
                  propsborderradius={"20px"}
                  hoverbackgroundcolor={"#7E2A0A"}
                >
                  Order
                </MyButton>
              </>
            ) : (
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
            )}
          </ContainerBtns>
        </div>
      </Backdrop>
    </Container>
  );
};
const Container = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: #000000be;
  backdrop-filter: blur(2px);
`;
const Backdrop = styled("div")`
  margin: 230px auto;
  background-color: #fff;
  width: 671px;
  padding: 32px;
  border-radius: 20px;
`;
const ContainerItem = styled("div")`
  height: 260px;
  overflow-y: auto;
`;
const ContainerTotalAmount = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  h1 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #222222;
  }
  h4 {
    font-weight: 600;
    font-size: 22px;
    color: #8a2b06;
  }
`;
const ContainerBtns = styled("div")`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 14px;
  gap: 16px;
`;
