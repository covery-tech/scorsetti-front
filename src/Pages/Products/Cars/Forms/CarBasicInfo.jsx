import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";
import { use, validity } from "../info";

export default function CarBasicInfo({
  values,
  setShowErrors,
  setValues,
  errors,
  onChange,
  setErrors,
  showErrors,
  Validate,
  nextInstance,
  instance,
  setInstance,
}) {
  return (
    <form>
      {/* DATOS DEL VEHICULO */}
      <div className="basicInfo">
        <StyledText className="form-title">Datos del vehículo</StyledText>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"Año *"}
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
            type={"number"}
            name={"año"}
            validate={Validate}
            instance={instance}
          />
          <Input
            placeholder={"Tipo de úso *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"select"}
            name={"tipo_uso"}
            options={use}
            validate={Validate}
            instance={instance}
          />
        </div>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"Marca *"}
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
            type={"text"}
            name={"marca"}
            validate={Validate}
            instance={instance}
          />
          <Input
            placeholder={"Modelo *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"text"}
            name={"modelo"}
            validate={Validate}
            instance={instance}
          />
        </div>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"Vigencia *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"select"}
            name={"vigencia"}
            options={validity}
            validate={Validate}
            instance={instance}
          />
        </div>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"0 km"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              width: "20%",
            }}
            type={"checkbox"}
            name={"cero_km"}
            validate={Validate}
            instance={instance}
          />
        </div>
      </div>
      <button
        className="button main-button"
        onClick={(e) =>
          nextInstance({
            e,
            errors,
            values,
            setShowErrors,
            setInstance,
            instance,
          })
        }
      >
        <b>Siguiente</b>
      </button>
    </form>
  );
}
