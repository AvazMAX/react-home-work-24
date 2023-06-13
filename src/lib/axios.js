import { axiosInstanse } from "./axiosEnstanse";

//meals && basket

export const getAllFoodsRequest = () => {
  return axiosInstanse.get("/foods");
};

export const getBasketFoodsRequest = () => {
  return axiosInstanse.get(`/basket`);
};

export const postNewFoodsRequest = (data) => {
  return axiosInstanse.post(`/foods/${data._id}/addToBasket`, {
    amount: data.amount,
  });
};

export const plusBasketFoodsRequest = (data) => {
  return axiosInstanse.put(`/basketItem/${data._id}/update`, {
    amount: data.amount + 1,
  });
};

export const minusBasketFoodsRequest = (data) => {
  return axiosInstanse.put(`/basketItem/${data._id}/update`, {
    amount: data.amount - 1,
  });
};

export const deleteBasketFoodsRequest = (id) => {
  return axiosInstanse.delete(`/basketItem/${id}/delete`);
};

//sign

export const signInRequest = (data) => {
  return axiosInstanse.post("/auth/login", data);
};

export const signUpRequest = (data) => {
  return axiosInstanse.post("/auth/register", data);
};

//admin

export const postNewFoodsAdminRequest = (data) => {
  return axiosInstanse.post("/foods", data);
};

export const deleteAdminFoodsRequest = (data) => {
  return axiosInstanse.delete(`/foods/${data._id}`);
};

export const editAdminFoodsRequest = (data) => {
  return axiosInstanse.put(`/foods/${data._id}`, data );
};
