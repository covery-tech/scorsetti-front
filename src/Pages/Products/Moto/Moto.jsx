import React from "react";
import PrincipalText from "../../../components/Principal-Text/Principaltext";
import moto from "./img/moto.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Validate from "./functions/validate";
import axios from "axios";

export function FormMoto() {

  return (
    <section className="services" id="services">
      <div className="container text-center justify-content-center bg-white rounded-4 p-4 mt-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mt-0">
              <PrincipalText />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-content-center gap-4">
          <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto">
            <img className="rounded mx-auto d-block w-50" src={moto} alt="Moto" />
            <h4 className="mt-3">Moto</h4>
          </div>
          <div className="col-12 col-md-6 col-xs-12 py-1">            
            <Formik
              className="form-group"
              initialValues={{
                brand: "",
                model: "",
                year: "",
                zerokm: false,
                use: "",
                adjustment: "",
              }}
              validate={Validate}
              onSubmit={(values) => {
                //(values);
                // let form = JSON.stringify(values);
                // //(form);
                // const config = {
                //   method: "POST",
                //   baseURL: `${process.env.REACT_APP_URI_API}/form/postForms`,
                //   data: {
                //     form,
                //   },
                //   headers: { token: jwt },
                // };
                // axios(config).then((res) => {
                //   if (res.data) {
                //     alert("form created");
                //   }
                // });
              }}
            >
              {({ errors }) => (
                <Form className="form-group col-7 col-xs-12 m-auto">
                  <p>campos requeridos *</p>

                  <select
                    label="Marca *"
                    id="brand"
                    name="brand"
                    className="form-control form-select mt-2"
                  >
                    <option value="disable">Marca *</option>
                    <option value="opt1">opt1</option>
                    <option value="opt2">opt2</option>
                  </select>
                  <ErrorMessage
                    name="brand"
                    component={() => <div> {errors.brand} </div>}
                  />
                  <select id="model" name="model" className="form-control form-select mt-2">
                    <option value="disable">Modelo *</option>
                    <option value="opt1">opt1</option>
                    <option value="opt2">opt2</option>
                  </select>
                  <ErrorMessage
                    name="model"
                    component={() => <div> {errors.model} </div>}
                  />

                  <Field
                    name="year"
                    type="number"
                    className="form-control mt-2"
                    step={1}
                    max={2023}
                    min={1960}
                    placeholder="Año *"
                  />

                  <ErrorMessage
                    name="year"
                    component={() => <div> {errors.year} </div>}
                  />
                  <label
                    htmlFor="zerokm"
                    className="form-check form-switch mt-4 mb-4 my-auto d-flex align-items-center"
                  >
                    <Field
                      id="zerokm"
                      name="toggle"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <span className="form-check-label ms-3">0 km</span>
                  </label>
                  <select id="use" name="use" className="form-control form-select mt-2">
                    <option value="disable">Tipo de uso *</option>
                    <option>Particular</option>
                    <option>Comercial</option>
                  </select>
                  <ErrorMessage
                    name="use"
                    component={() => <div> {errors.use} </div>}
                  />
                  <select
                    id="adjustment"
                    name="adjustment"
                    className="form-control form-select mt-2"
                  >
                    {" "}
                    <option value="disable">Ajuste automático *</option>
                    <option>20%</option>
                    <option>30%</option>
                  </select>
                  <ErrorMessage
                    name="adjustment"
                    component={() => <div> {errors.adjustment} </div>}
                  />
                  <button className="btn btn-primary mt-4" type="submit">
                    Cotizar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
