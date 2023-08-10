import axios from "axios";
import StyledText from "../../../../components/StyledText/StyledText";
import SummaryCard from "./SummaryCard";
import "./index.css";

export default function ClientSummary({ values, reloadPage }) {
  const {
    tipo,
    año,
    marca,
    modelo,
    cero_km,
    tipo_uso,
    vigencia,
    nombre,
    apellido,
    tipo_documento,
    numero_documento,
    sexo,
    fecha_nacimiento,
    domicilio,
    ciudad,
    provincia,
    email,
    telefono,
  } = values;

  const sendCotization = async (e) => {
    e.preventDefault();
    const values = {
      tipo,
      description: {
        año,
        marca,
        modelo,
        cero_km,
        tipo_uso,
        vigencia,
      },
      client: {
        nombre,
        apellido,
        tipo_documento,
        numero_documento,
        sexo,
        fecha_nacimiento,
        domicilio,
        ciudad,
        provincia,
        email,
        telefono,
      },
    };
    const sendCotization = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/product/postOrdersBack`,
      data: {
        values
      },
    };
    try {
      const res = await axios(sendCotization);
      if (res) {
        alert("Tu consulta se enviará a tu email!");
      }
    } catch (err) {
      console.warn(err);
    }

    const sendEmailtoPAS = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmailCoti`,
      data: {
        values
      },
    };
    try {
      await axios(sendEmailtoPAS);
    } catch (err) {
      console.warn(err);
    }

    const sendEmailtoClient = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmailCotiClient`,
      data: {
        values
      },
    };
    try {
      await axios(sendEmailtoClient);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="client-summary d-flex align-items-center flex-column mb-3 mt-4">
      <StyledText className="form-title w-50 mb-3 text-center">
        Resumen
      </StyledText>
      <div className="d-flex justify-content-center">
        <SummaryCard>
          <StyledText className="dark-text f-lighter">
            Datos del vehículo
          </StyledText>
          <hr />
          <div className="d-flex flex-column">
            <h5>{año}</h5>
            <h5>
              {marca}, {modelo}
            </h5>
            <h5>Es 0km: {cero_km ? "Si" : "No"}</h5>
            <h5>Úso {tipo_uso}</h5>
            <h5>Vigencia {vigencia}</h5>
          </div>
        </SummaryCard>
        <SummaryCard>
          <StyledText className="dark-text f-lighter">
            Datos personales
          </StyledText>
          <hr />
          <div className="d-flex flex-column">
            <h5>
              {nombre}, {apellido}
            </h5>
            <h5>
              {tipo_documento} {numero_documento}
            </h5>
            <h5>{sexo}</h5>
            <h5>{fecha_nacimiento}</h5>
            <h5>{domicilio}</h5>
            <h5>{provincia},</h5>
            <h5>{ciudad}</h5>
            <h5>
              {email}, {telefono}
            </h5>
          </div>
        </SummaryCard>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button
          className="button main-button"
          onClick={(e) => sendCotization(e)}
        >
          Cotizar
        </button>
        <button className="button back-button" onClick={() => reloadPage()}>
          Atrás
        </button>
      </div>
    </div>
  );
}
