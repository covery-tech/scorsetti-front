// import { useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import axios from "axios";
import Validate from "./Validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
import {toast} from 'react-toastify'

export default function ContainerRegister() {
  const navigate = useNavigate();

  return (
    <section className="services" id="services">
      <div className="container contenedor bg-white rounded-4 p-5 mt-5 text-center justify-content-center">
        <PrincipalText />
        <h4 className="text-center">Registre su usuario</h4>
        <div className="FormContainer">
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              date: "",
              email: "",
              password: "",
            }}
            validate={Validate}
            onSubmit={(values) => {
              const dateString = values.date.toString();
              try {
                axios
                  .post(`${process.env.REACT_APP_URI_API}/user/postUser`, {
                    name: values.name,
                    lastName: values.lastname,
                    date: dateString,
                    email: values.email,
                    password: values.password,
                  })
                  .then((res) => {
                    if (res.status === (201 || 202)) return toast.error(res.data.data ,{
                      position: "bottom-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light"});
                    else navigate("/ingresar");
                  });
              } catch (err) {
                toast.error( err.data.respose, {
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
            }}
          >
            {({ errors }) => (
              <Form className="form-group p-5 row">
                <div className="col-4">
                  <label className="mt-2" htmlFor="name">
                    Nombre/s
                  </label>
                  <Field
                    className="form-control mt-2"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className="errorPC"> {errors.name} </div>
                    )}
                  />
                  <label className="mt-2" htmlFor="lastname">
                    Apellido
                  </label>
                  <Field
                    className="form-control mt-2"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Apellido"
                  />
                  <ErrorMessage
                    name="lastname"
                    component={() => (
                      <div className="errorPC"> {errors.lastname} </div>
                    )}
                  />
                </div>
                <div className="col-4">
                  <label className="mt-2" htmlFor="date">
                    Fecha de nacimiento
                  </label>
                  <Field
                    className="form-control mt-2"
                    type="date"
                    id="date"
                    name="date"
                    label="Fecha de nacimiento"
                    placeholder="Fecha de nacimiento *"
                    required="required"
                  />
                  {/* Manejar el error de datepicker */}
                  {/* <ErrorMessage
                    name="username"
                    component={() => (
                      <div className="errorPC"> {errors.username} </div>
                    )}
                  /> */}
                  <label className="mt-2" htmlFor="email">
                    e-mail
                  </label>
                  <Field
                    className="form-control  mt-2"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="e-mail *"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="errorPC"> {errors.email} </div>
                    )}
                  />{" "}
                  <button className="btn btn-primary mt-4" type="submit">
                    Crear usuario
                  </button>
                </div>

                <div className="col-4">
                  <label className="mt-2" htmlFor="password">
                    Contraseña
                  </label>
                  <Field
                    className="form-control  mt-2"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ejemplo123%"
                  />
                  <ErrorMessage
                    name="username"
                    component={() => (
                      <div className="errorMOB"> {errors.username} </div>
                    )}
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="errorMOB"> {errors.password} </div>
                    )}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
