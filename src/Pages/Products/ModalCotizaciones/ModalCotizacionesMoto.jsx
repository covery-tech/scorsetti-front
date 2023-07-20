// import { cotizaciones } from "./example";
import { useState } from 'react';
import { MpButton } from "../Motov2/mpButton";
import "./Modal.css";

export default function ModalCotizacionesMoto({ cotization, nPersons }) {
  console.log(nPersons);
  const [selectedProductIndex, setSelectedProductIndex] = useState(); 
  
  // Obtener los datos del producto seleccionado
  const selectedProduct = cotization?.DatosAdicionales?.[selectedProductIndex];


  const handleProductSelect = (index) => {
    setSelectedProductIndex(index);
  };

  return (
    <div className="modalcontainer d-flex flex-column align-items-center">
      <h3>Cotizaciones</h3>
      {cotization?.DatosAdicionales?.length ? (
      <div className="modalscroll table-fixed-header">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Plan Técnico</th>
              <th style={{ width: "50%" }}>Cobertura</th>
              <th style={{ width: "20%" }}>Precio/mes</th>
            </tr>
          </thead>
          <tbody>
            {cotization?.DatosAdicionales?.map((c, index) => (
              <tr key={c?.PlanTecnico}>
                <td className="d-flex">
                  <div className="plan-tecnico-card card mx-auto my-0 px-auto py-3">
                    <b>{c?.PlanTecnico}</b>
                  </div>
                </td>
                <td>
                  <ul className="list-group mx-auto">
                    <li className="list-group-item">
                      {c?.Riesgos[0]?.coberturas
                        ?.map((e) => e?.DescCobertura)
                        .join(", ")}
                    </li>
                  </ul>
                </td>
                <td className="d-flex align-items-center justify-content-center">
                  <ul className="list-group text-center mt-0">
                    <li className="list-group-item mb-0">
                      $ {c?.Cuotas[0].Premio}
                      <MpButton
                        allPerson={nPersons}
                        quantity={nPersons.length}
                        cotization={c}
                        onSelect={() => handleProductSelect(index)}
                      />
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : (<p>No se han encontrado cotizaciones, verifica los datos de tu vehículo o consulta con tu productor Libra!</p>)}
    </div>
  );
}
