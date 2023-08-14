import Input from "../../../../components/Input/Input";
import StyledText from "../../../../components/StyledText/StyledText";
import { use, validity, medidas_contra_fuego, medidas_contra_robos, tipo_de_casa, uso, material, tipo_de_techo  } from "../info";

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
            <div className="basicInfo">
                <StyledText className="form-title">Datos del hogar</StyledText>
                <div className="inputCouple d-flex">
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
                            width: "50%",
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
                            width: "50%",
                        }}
                        type={"select"}
                        name={"uso"}
                        options={uso}
                        validate={Validate}
                    />
                </div>
                <div className="inputCouple d-flex">
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
                        styles={{ marginRight: "0.5rem", width: "100%" }}
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
                        styles={{ width: "40%" }}
                        validate={Validate}
                    />
                </div>
                <div className="inputCouple d-flex">
                    <Input
                        placeholder={"Material de construcción *"}
                        onChange={onChange}
                        values={values}
                        setValues={setValues}
                        errors={errors}
                        setErrors={setErrors}
                        showErrors={showErrors}
                        styles={{
                            marginRight: "2%",
                            marginBottom: "2rem",
                            width: "50%",
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
                            width: "50%",
                        }}
                        type={"select"}
                        name={"tipo_de_cubierta"}
                        options={tipo_de_techo}
                        validate={Validate}
                    />
                </div>
                <StyledText className="form-title">
                    Medidas de seguridad
                </StyledText>
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
                                            width: "20%",
                                        }}
                                        type={"checkbox"}
                                        name={"medidas_contra_fuego"}
                                        validate={Validate}
                                    />
                                )
                        )}
                        <Input
                            placeholder={"Otras medidas"}
                            type={"text"}
                            name={"otras_medidas_contra_fuego"}
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
                                        type={"checkbox"}
                                        name={"medidas_contra_robos"}
                                        validate={Validate}
                                    />
                                )
                        )}
                    </div>
                    <div className="inputCouple d-flex">
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
                        styles={{
                            width: "100%",
                        }}
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
