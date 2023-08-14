import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";
import { docTypes, sex } from "../info";

export default function PersonalInfo({
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
      <div className="personalInfo">
        <StyledText className="form-title">Datos de Contacto</StyledText>
        {/* <div className="inputCouple d-flex">
          <Input
            placeholder={"Nombre *"}
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
            placeholder={"Apellido/s *"}
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
            type={"text"}
            name={"apellido"}
            validate={Validate}
            instance={instance}
          />
        </div> */}
{/* <        <div className="inputCouple d-flex">
          <Input
            placeholder={"Tipo de documento *"}
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
            options={docTypes}
            name={"tipo_documento"}
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
              width: "50%",
            }}
            type={"number"}
            name={"numero_documento"}
            validate={Validate}
            instance={instance}
          />
        </div>> */}

        <div className="inputCouple d-flex">
          <Input
            placeholder={"Email *"}
            onChange={onChange}
            values={values}
            validate={Validate}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              width: "50%",
              marginRight: "0.5rem",
            }}
            type={"text"}
            name={"email"}
            instance={instance}
          />
          <Input
            placeholder={"Celular *"}
            onChange={onChange}
            values={values}
            validate={Validate}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
              width: "50%",
            }}
            type={"number"}
            name={"telefono"}
            instance={instance}
          />
        </div>
      </div>

      <button
        className="button main-button"
        onClick={(e) => {
          nextInstance({
            e,
            errors,
            values,
            setShowErrors,
            setInstance,
            instance,
          });
        }}
      >
        <b>Siguiente</b>
      </button>
    </form>
  );
}
