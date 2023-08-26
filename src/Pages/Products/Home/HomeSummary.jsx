import axios from "axios";
import StyledText from "../../../components/StyledText/StyledText";
import useUser from "../../../components/hooks/UseUser";
import SummaryCard from "../../../components/ClientSummary/SummaryCard";
import ClientSummary from "../../../components/ClientSummary/ClientSummary";
import { toast } from "react-toastify";

export default function HomeSummary({ values, reloadPage }) {
  const { user, pas } = useUser();
  const {
    tipo,
    tipo_de_vivienda,
    uso,
    ubicacion_del_riesgo,
    metros_cuadrados,
    material,
    tipo_de_cubierta,
    medidas_contra_fuego,
    otras_medidas_contra_fuego,
    medidas_contra_robos,
    otras_medidas_contra_robos,
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
        tipo_de_vivienda,
        uso,
        ubicacion_del_riesgo,
        metros_cuadrados,
        material,
        tipo_de_cubierta,
        medidas_contra_fuego,
        otras_medidas_contra_fuego,
        medidas_contra_robos,
        otras_medidas_contra_robos,
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
    const medidasContraFuegoDescriptions =
      values.description.medidas_contra_fuego.map(
        (medida) => medida.description
      );
    const medidasContraFuegoText = medidasContraFuegoDescriptions.join(", ");

    const medidasContraRoboDescriptions =
      values.description.medidas_contra_robos.map(
        (medida) => medida.description
      );
    const medidasContraRoboText = medidasContraRoboDescriptions.join(", ");
    const sendCotization = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/product/postOrdersBack/${pas.id}`,
      params: {
        pas_id: pas.id,
      },
      data: {
        values: {
          ...values,
          description: {
            ...values.description,
            medidas_contra_fuego: medidasContraFuegoText,
            medidas_contra_robos: medidasContraRoboText,
          },
        },
      },
    };
    try {
      const res = await axios(sendCotization);
      if (res) {
        toast("Tu consulta se enviará a tu email!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });    
    }
    } catch (err) {
      console.warn(err);
    }

    const sendEmailtoPAS = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_URI_API}/mail/sendEmailCoti`,
      data: {
        values: {
          ...values,
          description: {
            ...values.description,
            medidas_contra_fuego: medidasContraFuegoText,
            medidas_contra_robos: medidasContraRoboText,
          },
        },
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
        values: {
          ...values,
          description: {
            ...values.description,
            medidas_contra_fuego: medidasContraFuegoText,
            medidas_contra_robos: medidasContraRoboText,
          },
        },
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
            Datos del hogar
          </StyledText>
          <hr />
          <div className="flex flex-column">
            <p>Tipo: {tipo_de_vivienda}</p>
            <p>
              Uso: {uso}, {ubicacion_del_riesgo}
            </p>
            <p>Metros cuadrados: {metros_cuadrados}</p>
            <p>Material: {material}</p>
            <p>Vigencia: {tipo_de_cubierta}</p>{" "}
            <p>
              Medidas contra Fuego:{" "}
              {medidas_contra_fuego.length
                ? medidas_contra_fuego.map((a) => a.description + ", ")
                : "No seleccionado"}
            </p>
            {otras_medidas_contra_fuego.length > 0 ? (
              <p>Otras medidas contra fuego: {otras_medidas_contra_fuego}</p>
            ) : (
              <></>
            )}
            <p>
              Medidas contra Robo:{" "}
              {medidas_contra_robos.length
                ? medidas_contra_robos.map((a) => a.description + ", ")
                : "No seleccionado"}
            </p>
            {otras_medidas_contra_robos.length > 0 ? (
              <p>Otras medidas: {otras_medidas_contra_robos}</p>
            ) : (
              <></>
            )}
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
