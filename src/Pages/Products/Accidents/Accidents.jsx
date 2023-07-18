// import { useState } from "react";
// import { addNewInput, onChangeNewInput } from "./functions/addNewInput";
// import { deleteInput } from "./functions/deleteInput";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Validate from "./functions/validate";
import axios from "axios";
import useUser from "../../../components/hooks/UseUser";
import { sex, covert, provinces } from "./accessories";
import { useState } from "react";
import { addNewPerson } from "./functions/addNewPerson";
import { deletePersons } from "./functions/deletePersons";
import Accident from "./img/Accidentes personales.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";

export default function Accidents() {
  const { jwt } = useUser();
  const [nPersons, setPersons] = useState([]);

  return (
    <section className="services" id="services">
      <div className="container text-center justify-content-center bg-white rounded-4 p-4 mt-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mt-1">
              <PrincipalText />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-content-center">
          <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto ">
            <img className=" mx-auto d-block w-50" src={Accident} alt="Vida" />
            <h4 className="mt-3">
              Accidentes
              <br />
              Personales
            </h4>
          </div>
          <div className="col-12 col-md-8 col-xs-12 py-auto px-auto d-flex flex-column align-items-center justify-content-start">
            <Formik
              initialValues={{
                covert: "",
                name: "",
                sex: "",
                birthdate: "",
                province: "",
              }}
              validate={Validate}
              onSubmit={(values) => {
                addNewPerson(setPersons, nPersons, values);
                let finishPersons = [...nPersons];
                !nPersons.find((p) => p.dni === values.dni) &&
                  finishPersons.push(values);
                // let form = JSON.stringify(values);
                //(finishPersons);
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
                <Form className="container py-5">
                  <div className="row justify-content-center align-content-center">
                    <p className="mb-3">Campos requeridos*</p>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="mb-4">
                        <Field
                          as="select"
                          id="covert"
                          name="covert"
                          className={`form-select ${
                            errors.covert && "is-invalid"
                          }`}
                        >
                          <option value="" disabled>
                            Cobertura *
                          </option>
                          {covert.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="covert"
                          component={() => <div> {errors.covert} </div>}
                        />
                      </div>
                      <div className="mb-4">
                        <Field
                          as="select"
                          id="sex"
                          name="sex"
                          className={`form-select ${
                            errors.sex && "is-invalid"
                          }`}
                        >
                          <option value="" disabled>
                            Sexo *
                          </option>
                          {sex.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="sex"
                          component={() => <div> {errors.sex} </div>}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="mb-4">
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          className={`form-control ${
                            errors.name && "is-invalid"
                          }`}
                          placeholder="Nombre completo *"
                        />
                        <ErrorMessage
                          name="name"
                          component={() => <div> {errors.name} </div>}
                        />
                      </div>
                      <div className="mb-4">
                        <Field
                          as="select"
                          id="province"
                          name="province"
                          className={`form-select ${
                            errors.province && "is-invalid"
                          }`}
                        >
                          <option value="" disabled>
                            Provincia *
                          </option>
                          {provinces.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="province"
                          component={() => <div> {errors.province} </div>}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="mb-4">
                        <label htmlFor="birthdate" className="form-label">
                          Fecha de nacimiento *
                        </label>
                        <Field
                          placeholder="Fecha de nacimiento *"
                          id="birthdate"
                          name="birthdate"
                          type="date"
                          className={`form-control ${
                            errors.birthdate && "is-invalid"
                          }`}
                        />
                        <ErrorMessage
                          name="birthdate"
                          component={() => <div> {errors.birthdate} </div>}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                    {Object.keys(errors).length || values.name === "" ? (
                      <button
                        class="btn btn-outline-secondary mt-2 mx-auto"
                        disabled
                      >
                        Cotizar
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning mt-2 mx-auto"
                        type="submit"
                      >
                        Cotizar
                      </button>
                    )}
                    <p className="mx-auto mt-2">O también</p>
                    {Object.keys(errors).length || values.name === "" ? (
                      <button
                        class="btn btn-outline-secondary mx-auto"
                        disabled
                      >
                        Añadir otro beneficiario
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          addNewPerson(setPersons, nPersons, values, resetForm);
                        }}
                      >
                        Añadir otro beneficiario
                      </button>
                    )}
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-3"></div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {/* Persons Added */}
          {nPersons.length ? <h4>Beneficiarios</h4> : <></>}

          {nPersons.length ? (
            nPersons.map((p, index) => {
              return (
                <>
                  <div
                    className="card mb-3 mx-1 d-flex"
                    style={{ maxWidth: "17rem" }}
                  >
                    <div className="card-header card-title">
                      Persona {index + 1}
                    </div>
                    <div className="card-body text-center">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Cobertura: {p.covert}
                        </li>
                        <li className="list-group-item">Nombre: {p.name}</li>
                        <li className="list-group-item">Nac: {p.birthdate}</li>
                      </ul>
                      {nPersons.length > 1 && (
                        <button
                          className="btn btn-danger mb-4"
                          onClick={() => {
                            deletePersons(setPersons, nPersons, p);
                          }}
                        >
                          Eliminar persona
                        </button>
                      )}
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
