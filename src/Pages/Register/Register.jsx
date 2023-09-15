// import { useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import Form from "../../components/FormContainer/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import StyledText from "../../components/StyledText/StyledText";
import onChange from "../../utils/onChangeInput";
import Validate from "../Login/loginUtils/validate";
import registerSession from "./registerUtils/register-session";
import togglePassword from "../Login/loginUtils/toggle-password";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    date: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form>
      <div className="form-container w-100 w-60-l">
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          <FontAwesomeIcon className="img mr2" icon={faPen} />
          Registro
        </StyledText>
        <div className="input-couple">
          <Input
            placeholder={"Nombre/s *"}
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
            name={"name"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
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
            }}
            type={"text"}
            name={"lastName"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
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
              marginTop: "1rem",
            }}
            type={"date"}
            name={"date"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"E-mail *"}
            onChange={onChange}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={"email"}
            name={"email"}
            validate={Validate}
          />
        </div>
        <div className="input-couple">
          <Input
            placeholder={"Contraseña *"}
            onChange={onChange}
            onClick={() => togglePassword({ setShowPassword, showPassword })}
            showPassword={showPassword}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            showErrors={showErrors}
            styles={{
              marginBottom: "2rem",
            }}
            type={showPassword ? "text" : "password"}
            name={"password"}
            validate={Validate}
          />
        </div>
        <div className="flex flex-column items-center">
          <button
            className="button main-button w-50"
            onClick={(e) =>
              registerSession({ e, values, errors, setShowErrors })
            }
          >
            Crear Usuario
          </button>
          <span className="fst-italic pt2">
            ¿Ya tenés cuenta?{" "}
            <button className="button" onClick={() => navigate("/ingresar")}>
              Iniciar sesión
            </button>
          </span>
        </div>
      </div>
    </Form>
  );
}
