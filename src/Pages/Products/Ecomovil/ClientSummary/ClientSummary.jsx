import "./index.css";

export default function ClientSummary({ client }) {
  const {
    name,
    lastname,
    document,
    province,
    phone,
    email,
    home_address,
    sub_type,
    price

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
            <b>DNI:</b> {document}
          </li>
          <li className="list-item">
            <b>Dirección:</b> {home_address}
          </li>
          <li className="list-item">
            <b>Provincia:</b> {province}
          </li>
        </div>
        <div>
          <li className="list-item">
            <b>Celular:</b> {phone}
          </li>
          <li className="list-item">
            <b>Email:</b> {email}
          </li>
          <li className="list-item">
            <b>Tipo de ecomovil:</b> {sub_type}
          </li>
          <li className="list-item">
            <b>Suma asegurada:</b> ${price}
          </li>
        </div>
      </ul>
    </div>
  );
}
