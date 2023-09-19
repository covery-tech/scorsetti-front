import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useUser from "../../../../hooks/UseUser";

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
            <th scope="col">Telefono</th>
            {/* puede ir el slug en vez del id */}
            <th scope="col">Id</th>
            <th scope="col">Productos</th>
            <th scope="col">Activar</th>
          </tr>
        </thead>
        {pas?.length ? (
          <tbody>
            {pas.map((e, i) => (
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
                <td>{e?.id_user}</td>
                <td>
                  <Link
                    to={`user/${e?.id_user}`}
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                  >
                    Ver usuario
                  </Link>
                </td>
                <td className="content-center">
                  <div className="mx-auto">
                    {e?.status_pas ? (
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          onChangeEnable(e?.status_pas, e?.id_user)
                        }
                      >
                        habilitado
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          onChangeEnable(e?.status_pas, e?.id_user)
                        }
                      >
                        deshabilitado
                      </button>
                    )}
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
          <strong>Ops parece que ha llegado al final</strong>
        )}
      </div>
    </div>
  );
};
