import StyledText from "../../../../components/StyledText/StyledText";
import SummaryCard from "./SummaryCard";
import "./index.css";

export default function ClientSummary({ client, reloadPage }) {
  const {
    año,
    marca,
    modelo,
    cerokm,
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
  } = client;

  const sendCotization = (e) => {
    // handleSubmit({
    //   e,
    //   values,
    //   setCotization,
    //   setPersons,
    //   nPersons,
    //   addNewPerson,
    //   setValues,
    // });
    // handleOpenModal();
  };
  return (
    <div className="client-summary d-flex align-items-center flex-column mb-3 mt-4">
      <StyledText className="form-title w-50 mb-3 text-center">Resumen</StyledText>
      <div className="d-flex justify-content-center">
        <SummaryCard>
          <StyledText className="dark-text f-lighter">
            Datos del vehículo
          </StyledText>
          <hr/>
          <div className="d-flex flex-column">
            <h5>
              {año}
            </h5>
            <h5>
              {marca}, {modelo}
            </h5>
            <h5>
              Es 0km: {cerokm ? "Si" : "No"}
            </h5>
            <h5>
              Úso {tipo_uso}
            </h5>
            <h5>
              Vigencia {vigencia}
            </h5>
          </div>
        </SummaryCard>
        <SummaryCard>
          <StyledText className="dark-text f-lighter">
            Datos personales
          </StyledText>
          <hr/>
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
            <h5>
              {provincia},
            </h5>
            <h5>
              {ciudad}
            </h5>
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
