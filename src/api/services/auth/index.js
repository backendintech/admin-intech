import Cookies from "js-cookie";
import api from "../..";
import { ENDPOINT } from "../..";

const loginAdmin = async (form) => {
  try {
    const response = await api.post(`${ENDPOINT.AUTH}/signin-admin`, form);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const logout = async () => {
  Cookies.remove("token");
};

export { loginAdmin , logout};
