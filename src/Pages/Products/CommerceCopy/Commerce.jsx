// import { useState } from "react";
// import { addNewInput, onChangeNewInput } from "./functions/addNewInput";
// import { deleteInput } from "./functions/deleteInput";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Validate from "./functions/validate";
import axios from "axios";
import { useState } from "react";
import Commerces from "./imgs/Comercio.png";
import { FormCheck } from "react-bootstrap";

import {
  fire_measures,
  habilitations,
  others,
  theft_measures,
} from "./accessories.js";

export default function Commerce() {
  //helpers
  const [others_fire, setOthersF] = useState("");
  const [others_theft, setOthersT] = useState("");

  return (
    <section className="services" id="services">
      <div className="container bg-white rounded-4 p-5 mt-5 text-center justify-content-center  align-content-top">
        <div className="row justify-content-center align-content-top">
          <div className="col-12 col-md-4 col-xs-12 text-center mt-5 py-auto align-content-top">
            <img className=" mx-auto d-block w-50" src={Commerces} alt="Vida" />
            <h4 className="mt-3">
              Integral
              <br />
              de Comercio
            </h4>
          </div>
          <div className="col-12 col-md-8 col-xs-12 py-auto px-auto d-flex flex-column align-items-center justify-content-start">
            <Formik
              initialValues={{
                activity: "",
                owner_tenant: true,
                risk_location: "",
                meters: "",
                moreplants: false,
                plants_quantity: "",
                merchandise_storage: false,
                merchandise_type: "",
                others: [],
                habilitations: [],
                // liftTruck_dispositions: false,
                // boiler_disposition: false,
                // habilitation: false,
                fire_measures: [],
                theft_measures: [],
                observations: "",
              }}
              validate={Validate}
              onSubmit={(values) => {
                values.fire_measures = [...values.fire_measures, others_fire];
                values.theft_measures = [
                  ...values.theft_measures,
                  others_theft,
                ];
                //(values);
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
              {({ values, errors, resetForm }) => (
                <Form className="form-group container py-5">
                  <div className="row justify-content-center align-content-center">
                    <p className="my-3">campos requeridos*</p>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-start">
                      <Field
                        type="text"
                        id="activity"
                        name="activity"
                        className="form-control mt-2"
                        placeholder="Tipo de comercio*"
                      >
                      </Field>
                      <br />
                      <ErrorMessage
                        name="activity"
                        component={() => <div> {errors.activity} </div>}
                      />
                      <FormCheck
                        className="mb-3 mx-auto"
                        type="radio"
                        label="Inquilino"
                        name="tipo"
                        value="inquilino"
                      />
                      <FormCheck
                        className="mt-3 mx-auto"
                        type="radio"
                        label="Propietario"
                        name="tipo"
                        value="propietario"
                      />
                      <br />
                      <Field
                        id="risk_location"
                        name="risk_location"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Ubicación del riesgo*"
                      />
                      <br />
                      <ErrorMessage
                        name="risk_location"
                        component={() => <div> {errors.risk_location} </div>}
                      />
                      <Field
                        id="meters"
                        name="meters"
                        type="number"
                        className="form-control mt-2"
                        placeholder="Metros cuadrados cubiertos*"
                      />
                      <br />
                      <ErrorMessage
                        name="meters"
                        component={() => <div> {errors.meters} </div>}
                      />
                    </div>
                    <div className=" col-lg-6 col-md-12 col-sm-12 text-start">
                      <label
                        htmlFor="moreplants"
                        className="form-check form-switch mt-3 d-flex align-items-center"
                      >
                        <Field
                          id="moreplants"
                          name="moreplants"
                          type="checkbox"
                          className="form-check-input "
                        />
                        <span className="form-check-label ">
                          Posee otras plantas
                        </span>
                      </label>
                      <br />
                      <Field
                        id="plants_quantity"
                        name="plants_quantity"
                        type="number"
                        className="form-control mt-3"
                        placeholder="Cantidad de plantas*"
                      />
                      <br />
                      <ErrorMessage
                        name="plants_quantity"
                        component={() => <div> {errors.plants_quantity} </div>}
                      />
                      <label
                        htmlFor="merchandise_storage"
                        className="form-check form-switch mt-3 d-flex align-items-center"
                      >
                        <Field
                          id="merchandise_storage"
                          name="merchandise_storage"
                          type="checkbox"
                          className="form-check-input mt-3 mb-1"
                        />
                        <span className="form-check-label mt-3 mb-1">
                          ¿Posee depósito o almacena mercaderia?
                        </span>
                      </label>
                      <br />
                      <Field
                        id="merchandise_type"
                        name="merchandise_type"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Tipo de mercaderia*"
                      />
                      <br />
                      <ErrorMessage
                        name="merchandise_type"
                        component={() => <div> {errors.merchandise_type} </div>}
                      />
                    </div>
                  </div>

                  <div className="row align-content-center">
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <p>Otros</p>
                      {others?.map((o) => (
                        <FieldArray
                          name="others"
                          render={({ push, remove }) => (
                            <label className="form-check form-switch text-start mt-3">
                              {o}
                              <input
                                type="checkbox"
                                onClick={(e) => {
                                  if (e.target.checked) {
                                    push(o);
                                  } else {
                                    remove(o);
                                  }
                                }}
                                className="form-check-input inline"
                              />
                            </label>
                          )}
                        />
                      ))}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <p>Habilitaciones</p>
                      {habilitations?.map((h) => (
                        <FieldArray
                          name="habilitations"
                          render={({ push, remove }) => (
                            <label className="form-check form-switch text-start mt-3">
                              {h}
                              <input
                                type="checkbox"
                                onClick={(e) => {
                                  if (e.target.checked) {
                                    push(h);
                                  } else {
                                    remove(h);
                                  }
                                }}
                                className="form-check-input inline"
                              />
                            </label>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="row mt-2 justify-content-start align-content-center">
                    <div id="checkbox-group mt-5">Medidas contra incendio</div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        {fire_measures?.map((f) => (
                          <FieldArray
                            name="fire_measures"
                            render={({ push, remove }) => (
                              <label className="form-check form-switch text-start mt-2">
                                {f}
                                <input
                                  type="checkbox"
                                  onClick={(e) => {
                                    if (e.target.checked) {
                                      push(f);
                                    } else {
                                      remove(f);
                                    }
                                  }}
                                  className="form-check-input inline mt-2"
                                />
                              </label>
                            )}
                          />
                        ))}                      
                    </div>
                    <div
                      className="col-lg-6 col-md-12 col-sm-12"
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <label className="">Otras medidas contra incendio</label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setOthersF(e.target.value);
                        }}
                        value={others_fire}
                        className="mt-2 form-control inline"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 justify-content-start align-content-center">
                    <div id="checkbox-group">Medidas contra robo</div>
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-start text-start">
                        {theft_measures?.map((t) => (
                          <FieldArray
                            name="theft_measures"
                            render={({ push, remove }) => (
                              <label className="form-check form-switch mt-3">
                                {t}
                                <input
                                  type="checkbox"
                                  onClick={(e) => {
                                    if (e.target.checked) {
                                      push(t);
                                    } else {
                                      remove(t);
                                    }
                                  }}
                                  className="form-check-input inline"
                                />
                              </label>
                            )}
                          />
                        ))}
                        <br />
                      
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 text-start">
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          setOthersT(e.target.value);
                        }}
                        value={others_theft}
                        className="mt-2 form-control"
                        placeholder="Otras medidas contra robo"
                      />
                      <Field
                        type="text"
                        name="observations"
                        className="mt-2 form-control"
                        placeholder="Otras observaciones sobre el inmueble*"
                      />
                      <ErrorMessage
                        name="observations"
                        component={() => <div> {errors.observations} </div>}
                      />
                    </div>
                  </div>

                  {Object.keys(errors).length || values.name === "" ? (
                    <button class="btn btn-outline-secondary mb-4" disabled>
                      Cotizar
                    </button>
                  ) : (
                    <button className="btn btn-warning mt-2" type="submit">
                      Cotizar
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
