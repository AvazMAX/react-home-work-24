import axios from "axios";

const URL =
  "http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1";
const headers = { "Content-Type": "application/json", UserID: "Avaz" };

export const axiosInstanse = axios.create({
  baseURL: URL,
  headers,
});
