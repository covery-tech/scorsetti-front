import axios from "axios";
import { toast } from "react-toastify";

const registerSession = async ({ e, values, errors, setShowErrors }) => {
    e.preventDefault();
    const { name, lastName, date, email, password } = values;
    const canInitSession = !(Object.keys(errors).length || values.email === "");
    setShowErrors(!canInitSession);
    if (canInitSession && email && password && name && lastName && date) {
        try {
                axios
                  .post(`${process.env.REACT_APP_URI_API}/user/postUser`, {
                    name,
                    lastName,
                    date,
                    email,
                    password,
                  })
                  .then((res) => {
                    if (res.status === (201 || 202))
                      return toast.error(res.data.data, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    else window.location.replace("/ingresar");
                  });
              } catch (err) {
                toast.error(err.data.respose, {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
            }
    }
  };

  export default registerSession;
  