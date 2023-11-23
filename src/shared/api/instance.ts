import axios from "axios";

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    "Content-Type": "application/json",
  },
});
