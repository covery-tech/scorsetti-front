import { useEffect, useState } from "react";
import PrincipalText from "../Principal-Text/Principaltext";
import axios from "axios";
import useUser from "../hooks/UseUser";
import { useNavigate } from "react-router-dom";

export default function ContainerLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggedIn } = useUser();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const initSession = async (e) => {
    const { email, password } = formData;
    e.preventDefault();
    if (email || password) {
      login({ email, password })
    }
  };

  return (
    <section className="services" id="services">
      <div className="container contenedor bg-white rounded-4 p-3 mt-5">
        <div className="row">
          <div className="col-lg-16">
            <div className="section-heading text-center mt-0">
              <PrincipalText />
              <h6 className="mt-3">Registrate o inicia sesión</h6>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 form justify-content-center">
                <div className="service-item">
                  <div className="icon-big">
                    <span
                      className="iconify"
                      data-icon="ant-design:user-outlined"
                      style={{ fontSize: "50px" }}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="container col-md-6 col-lg-4 form">
                  <div className="row login-wrap p-0">
                    <form action="#" className="signin-form">
                      <div className="form-group d-flex mt-2 ">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => {
                            onChange(e);
                          }}
                          placeholder="E-Mail*"
                          value={formData.email}
                          required
                        />
                      </div>
                      <div className="input-group d-flex my-auto mt-2 border rounded-3">
                        <input
                          id="password-field w-80"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => {
                            onChange(e);
                          }}
                          className="form-control"
                          placeholder="Contraseña*"
                          required
                        />
                        <span
                          className={
                            showPassword
                              ? "fa fa-fw fa-eye-slash field-icon toggle-password w-20 mx-2 my-auto bg-light"
                              : "fa fa-fw fa-eye field-icon toggle-password w-20 mx-2 my-auto bg-light rounded"
                          }
                          onClick={togglePassword}
                        ></span>
                      </div>
                      <div className="form-group mt-2">
                        <button
                          type="submit"
                          className="form-control btn btn-primary submit px-3"
                          onClick={initSession}
                        >
                          Inicia Sesión
                        </button>
                      </div>
                      <div className="form-group d-md-flex mt-2 text-center">
                        <div className="w-100">
                          <a href="#" style={{ color: "#fff" }}>
                            Olvidaste contraseña?
                          </a>
                          <br />
                          <span className="fst-italic">¿No tenés cuenta? </span>
                          <a
                            className="btn btn-primary"
                            onClick={() => navigate("/registro")}
                            style={{ color: "rgb(255, 255, 255)" }}
                          >
                            Crear Usuario
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
