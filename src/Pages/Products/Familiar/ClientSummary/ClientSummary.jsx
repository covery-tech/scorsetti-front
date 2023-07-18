import "./index.css";

export default function ClientSummary({ client }) {
  const {
    name,
    lastname,
    document,
    birthdate,
    fiscal_cond,
    home_address,
    home_number,
    home_floor,
    postal_code,
    locality,
    province,
    nationality,
    phone,
    email,
    house_type,
    house_use,
    risk_location,
    meters,
    material_type,
    roof_type,
    fire_measures,
    other_fire_measures,
    theft_measures,
    other_theft_measures,
    type
  } = client;
  return (
    <div className="client-summary d-flex flex-column mb-3 mt-4">
      <hr />
      <h2 className="mb-3">Resumen</h2>
      <ul className="d-flex">
        <div className="list">
          <li className="list-item">
            <b>Nombre:</b> {name} {lastname}
          </li>
          <li className="list-item">
            <b>Nac:</b> {birthdate}
          </li>
          <li className="list-item">
            <b>DNI:</b> {document}
          </li>
          <li className="list-item">
            <b>Condición fiscal:</b> {fiscal_cond}
          </li>
          <li className="list-item">
            <b>Dirección:</b> {home_address}
          </li>
          {home_number.length ? (
            <li className="list-item">
              <b>N°:</b> {home_number}
            </li>
          ) : (
            <></>
          )}
          {home_floor.length ? (
            <li className="list-item">
              <b>Piso:</b> {home_floor}
            </li>
          ) : (
            <></>
          )}
          <li className="list-item">
            <b>Codigo postal:</b> {postal_code}
          </li>
          <li className="list-item">
            <b>Localidad:</b> {locality}
          </li>
          <li className="list-item">
            <b>Provincia:</b> {province}
          </li>
        </div>
        <div>
          <li className="list-item">
            <b>Nacionalidad:</b> {nationality}
          </li>
          <li className="list-item">
            <b>Celular:</b> {phone}
          </li>
          <li className="list-item">
            <b>Email:</b> {email}
          </li>
          <li className="list-item">
            <b>Úso de la vivienda:</b> {house_use}
          </li>
          <li className="list-item">
            <b>Tipo de la vivienda:</b> {house_type}
          </li>
          <li className="list-item">
            <b>Dirección del riesgo:</b> {risk_location}
          </li>
          <li className="list-item">
            <b>Metros cuadrados cubiertos:</b> {meters} mt2
          </li>
          <li className="list-item">
            <b>Material de construcción:</b> {material_type}
          </li>
          <li className="list-item">
            <b>Tipo de tejado:</b> {roof_type}
          </li>
          <li className="list-item">
            <b>Medidas de incendio: </b>
            {fire_measures.length
              ? fire_measures.map((f) => f + ", ")
              : "No seleccionado"}
          </li>
          <li className="list-item">
            <b>Medidas de robo: </b>
            {theft_measures.length
              ? theft_measures.map((t) => t + ", ")
              : "No seleccionado"}
          </li>
        </div>
      </ul>
    </div>
  );
}
