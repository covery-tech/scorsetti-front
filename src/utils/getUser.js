import axios from "axios";
import { toast } from "react-toastify";

export default function login({ email, password }) {
  const config = {
    method: "POST",
    baseURL: `${process.env.REACT_APP_URI_API}/user/loginUser`,
    data: {
      email,
      password,
    },
  };
  return axios(config)
    .then((res) => {
      return {
        token: res.data.token,
        user: res.data.result,
      };
    })
    .catch((err) => {
      window.sessionStorage.removeItem("jwt");
      window.sessionStorage.removeItem("user");
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
    });
}
