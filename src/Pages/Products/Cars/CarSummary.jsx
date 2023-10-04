import axios from "axios";
import useUser from "../../../hooks/UseUser";
import StyledText from "../../../components/StyledText/StyledText";
import SummaryCard from "../../../components/ClientSummary/SummaryCard";
import ClientSummary from "../../../components/ClientSummary/ClientSummary";

export default function CarSummary({ values, reloadPage }) {
  const { user, pas } = useUser();
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
      users_id: user ? user.id : null,
    };
    const sendCotization = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/product/postOrdersBack`,
      params: {
        pas_id: pas.id,
      },
      data: {
        values,
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
        values,
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
        values,
      },
    };
    try {
      await axios(sendEmailtoClient);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <ClientSummary>
        <SummaryCard>
          <StyledText className="dark-text f-medium" fontClasses="f4 f3-m f3-l">
            Datos del vehículo
          </StyledText>
          <hr />
          <div className="flex flex-column">
            <p>{año}</p>
            <p>
              {marca}, {modelo}
            </p>
            <p>Es 0km: {cero_km ? "Si" : "No"}</p>
            <p>Úso {tipo_uso}</p>
            <p>Vigencia {vigencia}</p>
          </div>
        </SummaryCard>
        <SummaryCard>
          <StyledText className="dark-text f-medium" fontClasses="f4 f3-m f3-l">
            Datos personales
          </StyledText>
          <hr />
          <div className="flex flex-column">
            <p>
              {nombre}, {apellido}
            </p>
            <p>
              {tipo_documento} {numero_documento}
            </p>
            <p>{sexo}</p>
            <p>{fecha_nacimiento}</p>
            <p>{domicilio}</p>
            <p>{provincia},</p>
            <p>{ciudad}</p>
            <p>
              {email}, {telefono}
            </p>
          </div>
        </SummaryCard>
      </ClientSummary>
      <div className="mt3 flex justify-center">
        <button
          className="button main-button mh1"
          onClick={(e) => sendCotization(e)}
        >
          Cotizar
        </button>
        <button className="button back-button mh1" onClick={() => reloadPage()}>
          Atrás
        </button>
      </div>
    </>
  );
}
