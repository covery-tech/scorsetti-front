import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useUser from "../../components/hooks/UseUser";
import image from "./img/userIMG.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Validate from "./functions/validate";
import { toast } from "react-toastify";
import "./style.css";
export function MyUser() {
  const { jwt } = useUser();
  const [users, setUser] = useState({
    phone_number: "",
    province: "",
    city: "",
    street_name: "",
    postal_code: "",
    password: "",
  });
  const [image2, setImage] = useState(image);
  const [image3, setImage3] = useState("");

  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/image`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        e.data ? setImage(e.data.data) : setImage(image);
      })
      .catch((e) => setImage(image));

    const config2 = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/myPersonalData`,
      headers: { token: jwt },
    };
    axios(config2).then((e) => {
      setUser(e.data.data);
    });
  }, []);

  const handleSubmit = (event) => {
    const formData = new FormData();
    formData.append("image", image2);
    const config = {
      method: "put",
      baseURL: `${process.env.REACT_APP_URI_API}/user/updateUserInfo`,
      headers: { token: jwt },
      data: {
        users: event,
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
  };
//   const handleFileChange = (event) => {
//     setImage(event?.target?.files[0]);
//     setImage3(URL.createObjectURL(event?.target?.files[0]));
//   };
  return (
    <div className="container bg-white rounded-5 mt-5 p-5 justify-content-center text-center">
      <h1>Actualizar usuario</h1>
      <div className="contentInfo">
        {users?.type === "pas" ? (
          <div className="contentImage">
            <div>
              {users.image ? (
                <img
                  id="img"
                  src={
                    image3
                    // ? image3
                    // : `http://localhost:3001/${users.image}`
                  }
                  alt={users?.name}
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
                  alt={users?.name}
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
        ) : (
          <></>
        )}

        {!users ? (
          <div className="contentForm">
            <Formik
              initialValues={{ users }}
              validate={Validate}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ errors }) => (
                <Form className="form">
                  <label htmlFor="risk_location" className="mt-3 mb-2">
                    Numero de celular
                  </label>
                  <Field
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="phone_number"
                    component={() => <div> {errors?.phone_number} </div>}
                  />
                  <label htmlFor="risk_location" className="mt-3 mb-2">
                    Provincia
                  </label>
                  <Field
                    id="province"
                    name="province"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="province"
                    component={() => <div> {errors.province} </div>}
                  />
                  <label htmlFor="risk_location" className="mt-3 mb-2">
                    Ciudad
                  </label>
                  <Field
                    id="city"
                    name="city"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="city"
                    component={() => <div> {errors.city} </div>}
                  />
                  <label htmlFor="street_name" className="mt-3 mb-2">
                    Calle
                  </label>
                  <Field
                    id="street_name"
                    name="street_name"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="street_name"
                    component={() => <div> {errors.street_name} </div>}
                  />
                  <label htmlFor="postal_code" className="mt-3 mb-2">
                    Codigo postal
                  </label>
                  <Field
                    id="postal_code"
                    name="postal_code"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="postal_code"
                    component={() => <div> {errors.postal_code} </div>}
                  />

                  {users?.type === "pas" ? (
                    <div>
                      <label htmlFor="description" className="mt-3 mb-2">
                        Descripcion
                      </label>
                      <Field
                        id="description"
                        name="description"
                        as="textarea"
                        className="form-control mt-2"
                        rows={4}
                        maxLength={255}
                        style={{ resize: "none" }}
                        placeholder="Escribe tu descripcin aquí (máximo 255 caracteres)"
                      />
                      <br />
                      <ErrorMessage
                        name="description"
                        component={() => <div> {errors.description} </div>}
                      />
                      <label htmlFor="Coordenadas" className="mt-3 mb-2">
                        Coordenadas
                      </label>
                      <Field
                        id="coords"
                        name="coords"
                        type="text"
                        className="form-control mt-2"
                      />
                      <br />
                      <ErrorMessage
                        name="coords"
                        component={() => <div> {errors.coords} </div>}
                      />
                      <label htmlFor="route" className="mt-3 mb-2">
                        Ruta ej.: scorsetti.emitiupoliza.com/ -{" "}
                        <b>productor1</b> -
                      </label>
                      <Field
                        id="route"
                        name="route"
                        type="text"
                        className="form-control mt-2"
                      />
                      <ErrorMessage
                        name="description"
                        component={() => <div> {errors.route} </div>}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <label htmlFor="password" className="mt-3 mb-2">
                    Contraseña
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="text"
                    className="form-control mt-2"
                  />
                  <br />
                  <ErrorMessage
                    name="route"
                    component={() => <div> {errors.password} </div>}
                  />
                  <button className="btn btn-warning mt-2" type="submit">
                    Actualizar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
