import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import Form from "../../components/FormContainer/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import StyledText from "../../components/StyledText/StyledText";
import Input from "../../components/Input/Input";
import onChange from "../../utils/onChangeInput";
import Validate from "./loginUtils/validate";
import initSession from "./loginUtils/init-session";
import togglePassword from "../../utils/toggle-password";

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoggedIn, pas } = useUser();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      !pas ? navigate("/") : navigate(`/${pas.route}`);
    }
  }, [isLoggedIn, navigate, pas]);

  return (
    <Form principalText>
      <div className="form-container w-100 w-60-l">
        <StyledText className="form-title" fontClasses="f4 f4-m f3-l">
          <FontAwesomeIcon className="img mr2" icon={faRightToBracket} />
          Inicio de sesión
        </StyledText>
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
              initSession({ e, values, errors, setShowErrors, login })
            }
          >
            <b>Acceder</b>
          </button>
          <span className="fst-italic pt2">
            <button
              href="#"
              onClick={() => navigate("/ingresar")}
              className="button button-nohover"
            >
              Olvidaste tu contraseña?
            </button>
          </span>
          <span className="fst-italic">
            ¿No tenés cuenta?{" "}
            <button className="button button-nohover" onClick={() => navigate("/registro")}>
              Crear Usuario
            </button>
          </span>
        </div>
      </div>
    </Form>
  );
}
