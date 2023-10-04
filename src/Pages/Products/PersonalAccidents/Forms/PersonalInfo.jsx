import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";

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
      <div className="personal-info">
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          Datos de Contacto
        </StyledText>
        <div className="input-couple">
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
