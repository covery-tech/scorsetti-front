import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useUser from "../../../../hooks/UseUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const TablePas = () => {
  const [pas, setPas] = useState([]);
  const { jwt } = useUser();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [showShowMore, setShowShowMore] = useState(true);
  const getPasts = (data) => {
    const config = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_URI_API}/user/getPasUser/${page}`,
      headers: { token: jwt },
    };
    axios(config).then((response) => {
      if (response.data.length === 0 || response.data.length < 6)
        setShowShowMore(false);
      if (data) setPas(pas.concat(response.data));
      else {
        setPas(response.data);
      }
      setLoading(false);
      setLoadingNextPage(false);

      //(pas)
    });
  };
  useEffect(() => {
    if (!pas.flat()?.length) {
      setLoading(true);
    }
    setLoadingNextPage(true);
    getPasts(true);
  }, [page]);

  const onChangeEnable = (e, id) => {
    //(e,id)
    let config;
    if (e) {
      config = {
        method: "PUT",
        baseURL: `${process.env.REACT_APP_URI_API}/user/estatusPas/0/${id}`,
        headers: { token: jwt },
      };
    } else {
      config = {
        method: "PUT",
        baseURL: `${process.env.REACT_APP_URI_API}/user/estatusPas/1/${id}`,
        headers: { token: jwt },
      };
    }
    axios(config).then((response) => {
      if (response.data) {
        getPasts(false);
      } else {
        alert(response.data);
      }
    });
  };

  return (
    <div className="w-100 h-100 pre">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
            {/* puede ir el slug en vez del id */}
            <th scope="col">ID</th>
            <th scope="col">Productos</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        {pas?.length ? (
          <tbody>
            {pas.map((e, i) => (
              <tr key={i}>
                <td>
                  <p>{e?.name}</p>
                </td>
                <td>
                  <p>{e?.last_name}</p>
                </td>
                <td>
                  <p>{e?.email}</p>
                </td>
                <td>
                  <p>
                    <a
                      href={`https://wa.me/+549${e?.phone_number}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--color-first-medium-light)" }}
                      className="flex items-center"
                    >
                      <span className="ph1">{e?.phone_number}</span>
                      <Icon
                        icon="ic:baseline-whatsapp"
                        className="ph1"
                        height="24"
                      />
                    </a>
                  </p>
                </td>
                <td>
                  <p>{e?.id_user}</p>
                </td>
                <td>
                  <Link
                    to={`user/${e?.id_user}`}
                    style={{ color: "var(--color-first-medium-light)" }}
                  >
                    <span className="ph1">Ver</span>
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
                <td>{e?.status_pas ? "Habilitado" : "Deshabilitado"}</td>
                <td className="content-center">
                  <div className="mx-auto">
                    <button
                      className="button main-button"
                      onClick={() => onChangeEnable(e?.status_pas, e?.id_user)}
                    >
                      Cambiar estado
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
      <div className="tc mb1 mt3">
        {showShowMore ? (
          loadingNextPage ? (
            <strong>Cargando...</strong>
          ) : (
            <strong
              onClick={() => setPage((prev) => prev + 1)}
              style={{ color: "#0d6efd", cursor: "pointer" }}
            >
              mostrar mas resultados
            </strong>
          )
        ) : (
          <p style={{ color: "var(--color-first-light-one)" }}>
            Oops parece que ha llegado al final
          </p>
        )}
      </div>
    </div>
  );
};
