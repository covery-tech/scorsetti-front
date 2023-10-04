import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";
import {
  medidas_contra_fuego,
  medidas_contra_robos,
  tipo_de_casa,
  uso,
  material,
  tipo_de_techo,
} from "../info";

export default function HomeBasicInfo({
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
      {/* DATOS DEL HOGAR */}
      <div className="basic-info">
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          Datos del hogar
        </StyledText>
        <div className="input-couple">
          <Input
            placeholder={"Vivienda *"}
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
            name={"tipo_de_vivienda"}
            options={tipo_de_casa}
            validate={Validate}
          />
          <Input
            placeholder={"Uso *"}
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
            name={"uso"}
            options={uso}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"Ubicación del riesgo *"}
            type={"text"}
            name={"ubicacion_del_riesgo"}
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
            placeholder={"Mt2 cubiertos *"}
            type={"number"}
            name={"metros_cuadrados"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"Material de construcción *"}
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
            name={"material"}
            options={material}
            validate={Validate}
          />
          <Input
            placeholder={"Tipo de techo *"}
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
            name={"tipo_de_cubierta"}
            options={tipo_de_techo}
            validate={Validate}
          />
        </div>
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          Medidas de seguridad
        </StyledText>
        <div className="security-data">
          <h3 className="pt1 pb1">
            <b>Incendio</b>
          </h3>
          <div className="input-couple">
            {medidas_contra_fuego.map(
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
                    }}
                    classes={"w-20"}
                    type={"checkbox"}
                    name={"medidas_contra_fuego"}
                    validate={Validate}
                  />
                )
            )}
          </div>
          <div className="input-couple">
            <Input
              placeholder={"Otras medidas"}
              type={"text"}
              name={"otras_medidas_contra_fuego"}
              onChange={onChange}
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              showErrors={showErrors}
              validate={Validate}
            />
          </div>
          <h3 className="pt1 pb1">
            <b>Robo</b>
          </h3>
          <div className="input-couple">
            {medidas_contra_robos.map(
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
                    classes={"w-20"}
                    type={"checkbox"}
                    name={"medidas_contra_robos"}
                    validate={Validate}
                  />
                )
            )}
          </div>
          <div className="input-couple">
            {medidas_contra_robos.map(
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
                    classes={"w-20"}
                    type={"checkbox"}
                    name={"medidas_contra_robos"}
                    validate={Validate}
                  />
                )
            )}
          </div>
          <Input
            placeholder={"Otras medidas"}
            type={"text"}
            name={"otras_medidas_contra_robos"}
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
