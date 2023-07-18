// import { useState } from "react";
// import { addNewInput, onChangeNewInput } from "./functions/addNewInput";
// import { deleteInput } from "./functions/deleteInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Validate from "./functions/validate";
import axios from "axios";
import useUser from "../../../components/hooks/UseUser";
import { sex } from "./accessories";
import { useState } from "react";
import { addNewPerson } from "./functions/addNewPerson";
import { deletePersons } from "./functions/deletePersons";
import vida from "./img/Vida.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";

export default function Life() {
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
        <div className="row justify-content-center align-content-center gap-4">
          <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto ">
            <img className=" mx-auto d-block w-50" src={vida} alt="Vida" />
            <h4 className="mt-3">Vida</h4>
          </div>
          <div className="col-12 col-md-6 col-xs-12 py-auto px-auto d-flex flex-column align-items-center justify-content-center">
            <Formik
              initialValues={{
                name: "",
                lastname: "",
                dni: "",
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
                <Form className="form-group p-5 container">
                  <p>campos requeridos*</p>
                  <div className="row g-2 justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Nombres *"
                      />
                      <br />
                      <ErrorMessage                      
                        name="name"
                        component={() => <div> {errors.name} </div>}
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                      <Field
                        id="lastname"
                        name="lastname"
                        type="text"
                        className="form-control "
                        placeholder="Apellido *"
                      />
                      <br />
                      <ErrorMessage                      
                        name="lastname"
                        component={() => <div> {errors.lastname} </div>}
                      />
                    </div>
                    </div>
                    <div className="row g-2 justify-content-center">
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                        <Field
                          id="dni"
                          name="dni"
                          type="number"
                          className="form-control"
                          placeholder="DNI/Pasaporte *"
                        />
                        <br />
                        <ErrorMessage                        
                          name="dni"
                          component={() => <div> {errors.dni} </div>}
                        />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                        <Field
                          as="select"
                          id="sex"
                          name="sex"
                          className="form-control form-select"
                        >
                          <option value="" disabled="disabled">
                            Sexo *
                          </option>
                          {sex.map((u) => (
                            <option value={u}>{u}</option>
                          ))}
                        </Field>
                        <br />
                        <ErrorMessage                        
                          name="sex"
                          component={() => <div> {errors.sex} </div>}
                        />
                      </div>
                    </div>
                    <div className="row g-2 justify-content-center">
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                        <Field
                          id="birthdate"
                          name="birthdate"
                          type="date"
                          className="form-control"
                          placeholder="Fecha de nacimiento *"
                        />
                        <br />
                        <ErrorMessage                        
                          name="birthdate"
                          component={() => <div> {errors.birthdate} </div>}
                        />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
                        <Field
                          as="select"
                          id="province"
                          name="province"
                          className="form-control form-select"
                        >
                          <option value="" disabled="disabled">
                            Selecciona la provincia *
                          </option>
                          <option value="1">CAPITAL FEDERAL</option>
                          <option value="2">BUENOS AIRES</option>
                          <option value="3">CATAMARCA</option>
                          <option value="4">CORDOBA</option>
                          <option value="5">CORRIENTES</option>
                          <option value="6">CHACO</option>
                          <option value="7">CHUBUT</option>
                          <option value="8">ENTRE RIOS</option>
                          <option value="9">FORMOSA</option>
                          <option value="10">JUJUY</option>
                          <option value="11">LA PAMPA</option>
                          <option value="12">LA RIOJA</option>
                          <option value="13">MENDOZA</option>
                          <option value="14">MISIONES</option>
                          <option value="15">NEUQUEN</option>
                          <option value="16">RIO NEGRO</option>
                          <option value="17">SALTA</option>
                          <option value="18">SAN JUAN</option>
                          <option value="19">SAN LUIS</option>
                          <option value="20">SANTA CRUZ</option>
                          <option value="21">SANTA FE</option>
                          <option value="22">SANTIAGO DEL ESTERO</option>
                          <option value="23">TIERRA DEL FUEGO</option>
                          <option value="24">TUCUMAN</option>
                        </Field>
                        <br />
                        <ErrorMessage                        
                          name="province"
                          component={() => <div> {errors.province} </div>}
                        />
                      </div>
                    </div>
                  <div className="row g-2 justify-content-center">
                    <div className="col-6 col-md-6 mt-2"></div>
                  <div className="col-6 col-md-6 mt-2">
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
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {/* Persons Added */}
          <h4>Beneficiarios</h4>
          {nPersons.length ? (
            nPersons.map((p, index) => {
              return (
                <div className="card mb-3 mx-1" style={{ maxWidth: "15rem" }}>
                  <div className="card-header card-title">
                    Persona {index + 1}
                  </div>
                  <div className="card-body text-center">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Nombre: {p.name}</li>
                      <li className="list-group-item">
                        Apellido: {p.lastname}
                      </li>
                      <li className="list-group-item">DNI: {p.dni}</li>
                    </ul>
                    {nPersons.length > 1 && (
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => {
                          deletePersons(setPersons, nPersons, p);
                        }}
                      >
                        Eliminar persona
                      </button>
                    )}
                  </div>
                </div>
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
