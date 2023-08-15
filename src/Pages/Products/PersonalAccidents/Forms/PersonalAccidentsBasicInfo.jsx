import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";
import { docTypes, use, validity, tipo_documento, sex } from "../info";

export default function PersonalAccidentsBasicInfo({
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
            placeholder={"Nombre"}
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
            name={"nombre"}
            validate={Validate}
            instance={instance}
          />
          <Input
            placeholder={"Apellido"}
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
            name={"apellido"}
            options={use}
            validate={Validate}
            instance={instance}
          />
        </div>
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
            }}
            type={"select"}
            name={"tipo_documento"}
            options={tipo_documento}
            validate={Validate}
            instance={instance}
          />
          <Input
            placeholder={"Documento *"}
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
            name={"documento"}
            validate={Validate}
            instance={instance}
          />
        </div>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"Sexo *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"select"}
            name={"sexo"}
            options={sex}
            validate={Validate}
            instance={instance}
          />
          <Input
            placeholder={"Fecha de nacimiento *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"date"}
            name={"fecha_nacimiento"}
            validate={Validate}
            instance={instance}
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
            validate={Validate}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"text"}
            name={"provincia"}
            instance={instance}
          />
          <Input
            placeholder={"Ciudad *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            validate={Validate}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              marginRight: "0.5rem",
            }}
            type={"text"}
            name={"ciudad"}
            instance={instance}
          />
          <Input
            placeholder={"Domicilio *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            validate={Validate}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"text"}
            name={"domicilio"}
            instance={instance}
          />
        </div>
        <div className="inputCouple d-flex">
          <Input
            placeholder={"Actividad *"}
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
            name={"actividad"}
            validate={Validate}
            instance={instance}
          />
        </div>

        {/* <div className="inputCouple d-flex">
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
              width: "50%",
              marginRight: "0.5rem",
            }}
            type={"select"}
            name={"vigencia"}
            options={validity}
            validate={Validate}
            instance={instance}
          />
        </div> */}
        {/* <div className="inputCouple d-flex">
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
            name={"cerokm"}
            validate={Validate}
            instance={instance}
          />
        </div> */}
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
