import { useState } from "react";
import icon from "./img/Comercio.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";
import StyledText from "../../../components/StyledText/StyledText";
import Input from "../../../components/Input/Input";
import addNewPerson from "./functions/addNewPerson";
import onChange from "../defaultFunctions/onChange";
import reloadPage from "../defaultFunctions/reloadPage";
import onSubmit from "./functions/onSubmit";
import Validate from "./functions/validate";
// import useUser from "../../../components/hooks/UseUser";
import {
  fire_measures,
  habilitations,
  others,
  theft_measures,
  property,
  other_plants
} from "./accessories";
import { CotizationButton } from "./CotizationButton";
import "./index.css";
import ClientSummary from "./ClientSummary/ClientSummary";

export default function Commerce() {
  // const { user } = useUser();
  const [nPersons, setPersons] = useState([]);
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    document: "",
    birthdate: "",
    fiscal_cond: "",
    home_address: "",
    home_number: "",
    home_floor: "",
    postal_code: "",
    locality: "",
    province: "",
    nationality: "",
    phone: "",
    email: "",
    activity: "",
    owner_tenant: true,
    commerce_type: "",
    inquiline: false,
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
    other_fire_measures: [],
    other_theft_measures: [],
    observations: "",
    type: "Integral Comercio",
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div className="container text-center justify-content-center bg-white rounded-5 p-4 mt-5 my-5">
      <PrincipalText />
      <div className="d-flex row justify-content-center">
        <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto ">
          <img className="formIcon" src={icon} alt="Comercio" />
          <h4 className="mt-3">
            Integral de
            <br />
            Comercio
          </h4>
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
                    placeholder={"Fecha de nacimiento *"}
                    type={"date"}
                    name={"birthdate"}
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
                    placeholder={"Condición fiscal *"}
                    type={"text"}
                    name={"fiscal_cond"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    classes={"w-100"}
                    validate={Validate}
                  />
                </div>
                <div className="d-flex inputCouple">
                  <Input
                    placeholder={"Domicilio/Calle *"}
                    type={"text"}
                    name={"home_address"}
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
                    placeholder={"N°"}
                    type={"number"}
                    name={"home_number"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem", width: "15%" }}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"Piso"}
                    type={"text"}
                    name={"home_floor"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem", width: "15%" }}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"CP *"}
                    type={"number"}
                    name={"postal_code"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    styles={{ width: "20%" }}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    validate={Validate}
                  />
                </div>
                <div className="d-flex inputCouple">
                  <Input
                    placeholder={"Localidad *"}
                    type={"text"}
                    name={"locality"}
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
                    type={"text"}
                    name={"province"}
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
                    placeholder={"Nacionalidad *"}
                    type={"text"}
                    name={"nationality"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    validate={Validate}
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
                    placeholder={"Tipo de comercio *"}
                    type={"text"}
                    name={"commerce_type"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ width: "100%" }}
                    validate={Validate}
                  />
                  <div
                    style={{
                      marginLeft:"0.5rem",
                      marginBottom: "2rem",
                      width: "50%",
                    }}
                    className="selectContainer"
                  >
                    <select
                      name={"property"}
                      onChange={(e) =>
                        onChange({
                          e,
                          values,
                          setValues,
                          setErrors,
                          validate: Validate,
                        })
                      }
                      style={{
                        width: "100%",
                      }}
                    >
                      <option value="disabled">
                        {"Propietario o inquilino? *"}
                      </option>
                      {property?.length ? (
                        property?.map((e) => (
                          <option
                            value={JSON.stringify({
                              e
                            })}
                          >
                            {e}
                          </option>
                        ))
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                </div>
                <div className="inputCouple d-flex">
                {other_plants.map(
                    (fm, i) =>                     
                      i < 7 && (
                        <Input
                          placeholder={fm}
                          onChange={onChange}
                          values={values}
                          setValues={setValues}
                          errors={errors}
                          setErrors={setErrors}
                          showErrors={showErrors}
                          styles={{
                            marginRight: "0.5rem",
                            marginBottom: "2rem",
                          }}
                          type={"checkbox"}
                          name={"other_plants"}
                          validate={Validate}
                        />
                      )
                  )}
                </div>
                <div className="inputCouple d-flex">
                  <Input
                    placeholder={"Ubicación del riesgo *"}
                    type={"text"}
                    name={"risk_location"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem", width: "100%" }}
                    validate={Validate}
                  />
                  <Input
                    placeholder={"Mt2 cubiertos *"}
                    type={"number"}
                    name={"meters"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ width: "40%" }}
                    validate={Validate}
                  />
                </div>
                <div className="inputCouple d-flex">
                  <Input
                    placeholder={"Actividad/Rubro *"}
                    type={"text"}
                    name={"risk_location"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ width: "100%" }}
                    validate={Validate}
                  />
                </div>
              </div>
              {/* MEDIDAS DE SEGURIDAD */}
              <div className="securityData">
                <StyledText
                  text={"Medidas de seguridad"}
                  styles={{
                    backgroundColor: "#ef7927",
                    borderRadius: "8px",
                    paddingLeft: "5px",
                  }}
                />
                <h3
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <b>Incendio</b>
                </h3>
                <div className="inputCouple d-flex">
                  {fire_measures.map(
                    (fm, i) =>
                      i < 2 && (
                        <Input
                          placeholder={fm}
                          onChange={onChange}
                          values={values}
                          setValues={setValues}
                          errors={errors}
                          setErrors={setErrors}
                          showErrors={showErrors}
                          styles={{
                            marginRight: "0.5rem",
                            marginBottom: "2rem",
                            width: "20%",
                          }}
                          type={"checkbox"}
                          name={"fire_measures"}
                          validate={Validate}
                        />
                      )
                  )}
                  <Input
                    placeholder={"Otras medidas"}
                    type={"text"}
                    name={"other_fire_measures"}
                    onChange={onChange}
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    styles={{
                      width: "58%",
                    }}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    validate={Validate}
                  />
                </div>
                <h3
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <b>Robo</b>
                </h3>
                <div className="inputCouple d-flex">
                  {theft_measures.map(
                    (fm, i) =>
                      i < 3 && (
                        <Input
                          placeholder={fm}
                          onChange={onChange}
                          values={values}
                          setValues={setValues}
                          errors={errors}
                          setErrors={setErrors}
                          showErrors={showErrors}
                          styles={{
                            marginRight: "0.5rem",
                            marginBottom: "2rem",
                          }}
                          type={"checkbox"}
                          name={"theft_measures"}
                          validate={Validate}
                        />
                      )
                  )}
                </div>
                <div className="inputCouple d-flex">
                  {theft_measures.map(
                    (fm, i) =>
                      i > 2 &&
                      i < 7 && (
                        <Input
                          placeholder={fm}
                          onChange={onChange}
                          values={values}
                          setValues={setValues}
                          errors={errors}
                          setErrors={setErrors}
                          showErrors={showErrors}
                          styles={{
                            marginRight: "0.5rem",
                            marginBottom: "2rem",
                          }}
                          type={"checkbox"}
                          name={"theft_measures"}
                          validate={Validate}
                        />
                      )
                  )}
                </div>
                <Input
                  placeholder={"Otras medidas"}
                  type={"text"}
                  name={"other_theft_measures"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  styles={{
                    width: "100%",
                  }}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  validate={Validate}
                />
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
