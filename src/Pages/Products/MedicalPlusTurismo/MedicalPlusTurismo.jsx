import { useState } from "react";
import Accident from "./img/c-icono_pasajero.png";
import PrincipalText from "../../../components/Principal-Text/Principaltext";
import Input from "../../../components/Input/Input";
import addNewPerson from "./functions/addNewPerson";
import onChange from "../defaultFunctions/onChange";
import reloadPage from "../defaultFunctions/reloadPage";
import useUser from "../../../components/hooks/UseUser";
import { sex, covert, provinces } from "./accessories";
import { MpButton } from "./mpButton";
import { ButtonAddOrder } from "./ButtonAddOrder";
import onSubmit from "./functions/onSubmit";
import validate from "./functions/validate";
import "./index.css";
import ClientSummary from "../../../components/ClientSummary/ClientSummary";

export default function MedicalPlusTurismo() {
  const { user } = useUser();
  const [nPersons, setPersons] = useState([]);
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    document: "",
    birthdate: "",
    sex: "",
    province: "",
    covert: {},
    destiny: "",
    from: "",
    to: "",
    address: "",
    email: "",
    phone_number: "",
    location: "",
    type:"mpt"
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  return (
    <div className="container text-center justify-content-center bg-white rounded-5 p-4 mt-5 my-5">
      <PrincipalText />
      <div className="d-flex row justify-content-center">
        <div className="col-12 col-md-4 col-xs-12 text-center my-auto py-auto ">
          <img className="formIcon" src={Accident} alt="Vida" />
          <h4 className="mt-3">
            Medical Plus
            <br />
            Turismo
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
                  validate={validate}
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
                  validate={validate}
                  showErrors={showErrors}
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
                  validate={validate}
                  showErrors={showErrors}
                  styles={{ marginRight: "0.5rem" }}
                />
                <Input
                  placeholder={"Fecha de nacimiento *"}
                  type={"date"}
                  name={"birthdate"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  validate={validate}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                />
              </div>
              <div className="inputCouple d-flex">
              <Input                
                  placeholder={"Provincia *"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  setErrors={setErrors}
                  validate={validate}
                  showErrors={showErrors}
                  styles={{
                    marginRight: "2%",
                    marginBottom: "3rem",
                  }}
                  type={"select"}
                  name={"province"}
                  options={provinces}
                />
              <Input
                  placeholder={"Localidad *"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  validate={validate}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{
                    marginRight: "2%",
                    marginBottom: "3rem",
                  }}
                  type={"text"}
                  name={"location"}
                />
                <Input
                  placeholder={"Dirección *"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  validate={validate}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{                    
                    marginBottom: "3rem",
                  }}
                  type={"text"}
                  name={"address"}
                />
              </div>

              <div className="inputCouple d-flex w-100">
                <Input
                  placeholder={"Email *"}
                  onChange={onChange}
                  values={values}
                  validate={validate}
                  setValues={setValues}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{
                    marginRight: "2%",
                    marginBottom: "3rem",
                  }}
                  type={"text"}
                  name={"email"}
                />
                <Input
                  placeholder={"Whatsapp *"}
                  onChange={onChange}
                  values={values}
                  validate={validate}
                  setValues={setValues}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{                    
                    marginBottom: "3rem",
                  }}
                  type={"number"}
                  name={"phone_number"}
                />
              </div>
              <div className="inputCouple d-flex w-100">
                <Input
                  placeholder={"Sexo *"}
                  onChange={onChange}
                  validate={validate}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{
                    marginRight: "2%",
                    marginBottom: "3rem",
                  }}
                  type={"select"}
                  name={"sex"}
                  options={sex}
                />
                <Input
                  placeholder={"Cobertura *"}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  validate={validate}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  styles={{
                    marginBottom: "3rem",
                  }}
                  type={"select"}
                  name={"covert"}
                  options={covert}
                />
              </div>

              <div className="d-flex inputCouple">
                <Input
                  placeholder={"Destino *"}
                  type={"text"}
                  name={"destiny"}
                  validate={validate}
                  onChange={onChange}
                  values={values}
                  setValues={setValues}
                  errors={errors}
                  setErrors={setErrors}
                  showErrors={showErrors}
                  classes={"w-100"}
                  styles={{ marginRight: "0.5rem" }}
                />
                <div className="d-flex">
                  <Input
                    placeholder={"Desde *"}
                    type={"date"}
                    name={"from"}
                    onChange={onChange}
                    values={values}
                  validate={validate}
                  setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                    styles={{ marginRight: "0.5rem" }}
                  />
                  <Input
                    placeholder={"Hasta *"}
                    type={"date"}
                    name={"to"}
                    onChange={onChange}
                    values={values}
                  validate={validate}
                  setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    showErrors={showErrors}
                  />
                </div>
              </div>

              <button className="btn btn-warning mt-2 mx-auto" type="submit">
                Cotizar
              </button>
            </form>
          </div>
        )}
      </div>
      {nPersons.length !== 0 && (
        <div>
          <div className="row d-flex justify-content-center mt-2">
            {nPersons.map((p, i) => {
              return <ClientSummary client={p} key={i}/>;
            })}
          </div>

          {user?.type === "pas" ? (
            <ButtonAddOrder
              name={nPersons[0]?.name}
              last_name={nPersons[0]?.lastname}
              email={nPersons[0]?.email}
              from={nPersons[0]?.from}
              to={nPersons[0]?.to}
              phone_number={nPersons[0]?.phone_number}
              address={nPersons[0]?.address}
              location={nPersons[0]?.location}
              province={nPersons[0]?.province}
              birthdate={nPersons[0]?.birthdate}
              sex={nPersons[0]?.sex}
              document={nPersons[0]?.document}
              destiny={nPersons[0]?.destiny}
              covert={nPersons[0]?.covert}              
              type={nPersons[0]?.type}
            />
          ) : (
            <MpButton allPerson={nPersons} quantity={nPersons.length} />
          )}
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
