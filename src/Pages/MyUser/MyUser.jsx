import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useUser from "../../hooks/UseUser";
import image from "./img/userIMG.png";
import Validate from "./functions/Validate";
import { toast } from "react-toastify";
import "./style.css";
import StyledText from "../../components/StyledText/StyledText";
import Input from "../../components/Input/Input";
import onChange from "../../utils/onChangeInput";
import togglePassword from "../../utils/toggle-password";
export function MyUser() {
  const { jwt } = useUser();
  const [userData, setUserData] = useState({
    phone_number: "",
    province: "",
    city: "",
    street_name: "",
    postal_code: "",
    password: "",
    description: "",
    route: "",
    coords: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [image2, setImage] = useState(image);
  const [image3, setImage3] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/image`,
      headers: { token: jwt },
    };
    setLoadingData(true);
    axios(config)
      .then((e) => {
        e.data ? setImage(e.data.data) : setImage(image);
        setLoadingData(false);
      })
      .catch((e) => setImage(image));

    const config2 = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/myPersonalData`,
      headers: { token: jwt },
    };

    setLoadingData(true);
    axios(config2).then((e) => {
      setUserData(e.data);
      setLoadingData(false);
    });
  }, []);

  const handleSubmit = (user) => {
    if (!loadingData) {
      let canUpdatePassword = true;
      let canUpdatePAS = true;

      if (user.phone_number !== "" && !/^[a-zA-Z0-9-]+$/.test(user.route))
        canUpdatePAS = false;
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@$!%*?&])([A-Za-z\d$@$!%*?&]|[^]){8,15}$/.test(
          user.password
        )
      )
        canUpdatePassword = false;

      let errors = {};
      if (user.type === "pas") {
        if (!canUpdatePAS) {
          errors = {
            phone_number: "Campo requerido",
            route: "Campo requerido",
          };
        }
      }
      if (user.password !== "") {
        if (!canUpdatePassword) {
          errors = {
            password:
              "→ 8 a 15 carac. - Una letra mayúsc. - Un dígito - Sin espacios - Un caractér especial.",
          };
        }
      }

      if (Object.keys(errors).length === 0) {
        const formData = new FormData();
        formData.append("image", image2);
        const config = {
          method: "put",
          baseURL: `${process.env.REACT_APP_URI_API}/user/updateUserInfo`,
          headers: { token: jwt },
          data: {
            users: user,
          },
        };
        const config2 = {
          method: "post",
          baseURL: `${process.env.REACT_APP_URI_API}/image/image`,
          headers: { token: jwt },
          data: formData,
        };
        setTimeout(() => {
          axios(config)
            .then((e) => {
              if (e.data) {
                toast.success("Datos de usuario actualizados", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                toast.warning("La ruta ya está utilizada, intenta con otra", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                return;
              }
            })
            .catch((error) => {
              console.log(
                "Error en la petición para actualizar información del usuario:",
                error
              );
            });

          if (image2) {
            axios(config2)
              .then((e) => {
                toast.success("La imagen ha sido actualizada con éxito", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              })
              .catch((error) => {
                console.log(
                  "Error en la petición para actualizar la imagen:",
                  error
                );
              });
          }
        }, 1000);
      } else {
        setErrors(errors);
        setShowErrors(!showErrors);
      }
    }
  };

  return (
      <div className="form-container w-100 max-height-33rem">
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          Actualizar usuario
        </StyledText>
        <div className="input-couple">
          <Input
            placeholder={"Número de teléfono *"}
            onChange={onChange}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"number"}
            name={"phone_number"}
            validate={Validate}
          />
          <Input
            placeholder={"Provincia *"}
            onChange={onChange}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"text"}
            name={"province"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"Ciudad *"}
            onChange={onChange}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"text"}
            name={"city"}
            validate={Validate}
          />
          <Input
            placeholder={"Calle *"}
            onChange={onChange}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"text"}
            name={"street_name"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"Código postal *"}
            onChange={onChange}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"text"}
            name={"postal_code"}
            validate={Validate}
          />
          <Input
            placeholder={"Contraseña *"}
            onChange={onChange}
            onClick={() => togglePassword({ setShowPassword, showPassword })}
            showPassword={showPassword}
            values={userData}
            setValues={setUserData}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={showPassword ? "text" : "password"}
            name={"password"}
            validate={Validate}
          />
        </div>
        {userData?.type === "pas" && (
          <div>
            <div className="input-couple">
              <Input
                placeholder={"Descripción *"}
                onChange={onChange}
                values={userData}
                setValues={setUserData}
                errors={errors}
                setErrors={setErrors}
                showErrors={showErrors}
                styles={{
                  marginBottom: "2rem",
                }}
                type={"textarea"}
                name={"description"}
                validate={Validate}
                rows="5"
                cols="50"
              />
            </div>
            <div className="input-couple">
              <Input
                placeholder={"Coordenadas *"}
                onChange={onChange}
                values={userData}
                setValues={setUserData}
                errors={errors}
                setErrors={setErrors}
                showErrors={showErrors}
                styles={{
                  marginBottom: "2rem",
                }}
                type={"text"}
                name={"coords"}
                validate={Validate}
              />
            </div>
            <span className="mb2">
              Ej.: scorsetti.emititupoliza.com/<b>productor1</b>
            </span>
            <div className="input-couple">
              <Input
                onChange={onChange}
                values={userData}
                setValues={setUserData}
                errors={errors}
                setErrors={setErrors}
                showErrors={showErrors}
                styles={{
                  marginBottom: "2rem",
                }}
                type={"text"}
                name={"route"}
                validate={Validate}
                placeholder={"Ruta"}
              />
            </div>
            <div className="contentImage">
              <div>
                {userData.image ? (
                  <img
                    id="img"
                    src={
                      image3
                      // ? image3
                      // : `http://localhost:3001/${users.image}`
                    }
                    alt={userData?.name}
                    style={{
                      borderRadius: 10,
                      display: "block",
                      maxHeight: 250,
                      marginTop: 50,
                      maxWidth: 300,
                    }}
                    className="border"
                  />
                ) : (
                  <img
                    id="img"
                    src={image}
                    alt={userData?.name}
                    style={{
                      borderRadius: 10,
                      display: "block",
                      maxHeight: 250,
                      marginTop: 50,
                      maxWidth: 300,
                    }}
                    className="border"
                  />
                )}
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "#ff8725",
                    opacity: 1,
                    position: "relative",
                    width: 170,
                    height: 30,
                    borderRadius: 5,
                    display: "block",
                    padding: 5,
                  }}
                  className="mt-4 mb-4"
                >
                  <label>Seleccionar archivo</label>
                  <input
                    type="file"
                    // onChange={(e) => handleFileChange(e)}
                    style={{
                      position: "absolute",
                      opacity: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: 170,
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center pt2 pb3">
          <button
            className="button main-button"
            onClick={() => handleSubmit(userData)}
          >
            <b>Actualizar</b>
          </button>
        </div>
      </div>
  );
}
