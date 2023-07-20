import "./index.css";

export default function ClientSummary({ client }) {
  const {
    year,
    brand,
    model,
    zerokm,
    use,
    adjustment,
    tracker,
    validity,
    accessories,
  } = client;

  return (
    <div className="client-summary d-flex flex-column mb-3 mt-4">
      <h2 className="mb-3">Resumen</h2>
      <ul className="d-flex">
        <div className="list">
          <li className="list-item">
            <b>Año:</b> {year}
          </li>
          <li className="list-item">
            <b>Marca:</b> {brand.description}
          </li>
          <li className="list-item">
            <b>Modelo:</b> {model.description}
          </li>
          <li className="list-item">
            <b>Es 0km:</b> {zerokm ? 'Si' : 'No'}
          </li>
          <li className="list-item">
            <b>Úso:</b> {use}
          </li>
          <li className="list-item">
            <b>Ajuste automático:</b> {adjustment}
          </li>
          <li className="list-item">
            <b>Rastreador Satelital:</b> {tracker ? 'Si' : 'No'}
          </li>
          <li className="list-item">
            <b>Vigencia:</b> {validity}
          </li>
          <li className="list-item">
            <b>Accesorios: </b>
            {accessories.length
              ? accessories.map((a) => a + ", ")
              : "No seleccionado"}
          </li>
        </div>
      </ul>
    </div>
  );
}
