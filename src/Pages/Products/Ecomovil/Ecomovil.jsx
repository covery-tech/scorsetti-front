import { useState } from "react";
import icon from "./img/icon.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";
import StyledText from "../../../components/StyledText/StyledText";
import Input from "../../../components/Input/Input";
import addNewPerson from "./functions/addNewPerson";
import onChange from "../defaultFunctions/onChange";
import reloadPage from "../defaultFunctions/reloadPage";
import onSubmit from "./functions/onSubmit";
import Validate from "./functions/validate";
// import useUser from "../../../components/hooks/UseUser";
import { ecomovil_type, province } from "./accessories";
import { CotizationButton } from "./CotizationButton";
import "./index.css";
import ClientSummary from "./ClientSummary/ClientSummary";

export default function Ecomovil() {
  // const { user } = useUser();
  const [nPersons, setPersons] = useState([]);
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    document: "",
    province: "",
    phone: "",
    email: "",
    ecomovil_type: "",
    price: "",
    type:"ecomovil"
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div className="container text-center justify-content-center bg-white rounded-5 p-4 mt-5 my-5">
      <PrincipalText />
      <div className="d-flex row justify-content-center">
        <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto ">
          <img className="formIcon" src={icon} alt="Ecomóvil" />
          <h4 className="mt-3">EcoMóvil</h4>
          <h5 className="mt-2 fs-6 text-start">
    Robo y destrucción total.
    <br />
    Suma asegurada mínima $35.000 Máxima $200.000.
</h5>
        </div>
        {!nPersons.length && (
          <div className="formContainer py-5">
            <p className="mb-3">Campos requeridos*</p>
            <form
              onSubmit={(e) =>
                onSubmit(
                  e,
                  errors,
                  values,
                  setShowErrors,
                  addNewPerson,
                  setPersons,
                  nPersons,
                  setValues
                )
              }
            >
              {/* DATOS DEL CLIENTE */}
              <div className="clientData">
                <StyledText
                  text={"Datos del cliente"}
                  styles={{
                    backgroundColor: "#ef7927",
                    borderRadius: "8px",
                    paddingLeft: "5px",
                  }}
                />
                <div className="inputCouple d-flex">
                  <Input
                    placeholder={"Nombre *"}
                    type={"text"}
                    name={"name"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem" }}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"Apellido *"}
                    type={"text"}
                    name={"lastname"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    validate={Validate}
                  />
                </div>
                <div className="d-flex">
                  <Input
                    placeholder={"DNI/Pasaporte *"}
                    type={"number"}
                    name={"document"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem" }}
                    validate={Validate}
                  />
                                    <Input
                    placeholder={"Provincia *"}
                    type={"select"}
                    name={"province"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{                     
                      marginBottom: "2rem",
                      width: "50%",
                    }}
                    validate={Validate}
                    options={province}
                  />
                </div>
                <div className="d-flex inputCouple">
                  <Input
                    placeholder={"Teléfono *"}
                    type={"number"}
                    name={"phone"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem" }}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"Email *"}
                    type={"text"}
                    name={"email"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    validate={Validate}
                  />
                </div>
              </div>
              {/* DATOS DEL RIESGO */}
              <div className="riskData">
                <StyledText
                  text={"Datos del riesgo"}
                  styles={{
                    backgroundColor: "#ef7927",
                    borderRadius: "8px",
                    paddingLeft: "5px",
                  }}
                />
                <div className="inputCouple d-flex">
                  <Input
                    placeholder={"Tipo *"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{
                      marginRight: "0.5rem",
                      marginBottom: "2rem",
                      width: "50%",
                    }}
                    type={"select"}
                    name={"sub_type"}
                    options={ecomovil_type}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"Suma asegurada en $ *"}
                    type={"number"}
                    name={"price"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ width: "50%" }}
                    validate={Validate}
                  />
                </div>
              </div>

              <button
                className="btn mt-2 mx-auto"
                style={{ backgroundColor: "#ef7927", color: "#fff" }}
                type="submit"
              >
                <b>Cotizar</b>
                
              </button>
            </form>
          </div>
        )}
      </div>
      {nPersons.length !== 0 && (
        <div>
          <div className="row d-flex justify-content-center mt-2">
            {nPersons.map((p) => {
              return <ClientSummary client={p} />;
            })}
          </div>

          <CotizationButton allPerson={nPersons} quantity={nPersons.length} />
          <div className="list-group-item mt-3">
            <button className="btn btn-danger" onClick={() => reloadPage()}>
              Atrás
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
