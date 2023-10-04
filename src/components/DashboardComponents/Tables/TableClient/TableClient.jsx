import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import useUser from "../../../../hooks/UseUser";

export const TableClient = () => {
  const { jwt, user } = useUser();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  //(clients)
  useEffect(() => {
    setLoading(true);
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/getClientsOfPas/${user.id_user}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        setLoading(false);
        setClients(e.data);
      })
      .catch((e) => {
        setLoading(false);
        alert("error de servidor: Not Found");
      });
  }, []);
  return (
    <div className="w-100 h-100 pre">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        {clients.length ? (
          <tbody>
            {clients.map((e, i) => (
              <tr key={i}>
                <td>{e?.name}</td>
                <td>{e?.last_name}</td>
                <td>{e?.email}</td>
                <td>
                  {e?.phone_number}{" "}
                  <a
                    href={`https://wa.me/+549${e?.phone_number}`}
                    target="_blank"
                  >
                    <Icon icon="ic:baseline-whatsapp" height="24" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              <strong className="empty">
                Aún no tienes clientes.
              </strong>
            </td>
          </tr>
        </tbody>
        )}
      </table>
      <div className="tc mb1 mt3">
        {loading ? <strong>Cargando...</strong> : <></>}
      </div>
    </div>
  );
};
