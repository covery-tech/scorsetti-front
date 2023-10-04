import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useUser from "../../../../hooks/UseUser";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TableNotisAdmin = ({
  notis,
  setPage,
  loading,
  showShowMore,
  loadingNextPage,
  setLoading,
  setLoadingNextPage,
  setNotis,
  page,
  setShowShowMore,
  deleteNoti,
}) => {
  const { jwt } = useUser();
  //(notis)
  const getNotis = () => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getNotificationAdmin/${page}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        if (e.data.length === 0 || e.data.length < 6) setShowShowMore(false);
        setLoading(false);
        setLoadingNextPage(false);
        setNotis(notis.concat(e.data));
      })
      .catch((e) => {
        setLoadingNextPage(false);
        setLoading(false);
        alert("error de servidor: Not Found");
      });
  };

  useEffect(() => {
    if (!notis?.length) {
      setLoading(true);
    }
    setLoadingNextPage(true);
    getNotis();
  }, [page]);

  return (
    <div className="w-100 h-100 pre">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Descripción</th>
            <th scope="col">Visitar Perfil</th>
            <th scope="col">Eliminar Notificación</th>
          </tr>
        </thead>
        {notis?.length ? (
          <tbody>
            {notis.map((e) => (
              <tr key={e.id}>
                <td>
                  <img
                    src={`${process.env.REACT_APP_URI_API}/${e?.img}`}
                    style={{
                      height: 40,
                      borderRadius: 40,
                    }}
                  />
                </td>
                <td>
                  {e?.name},{e?.last_name}
                </td>
                <td>{e?.phone_number}</td>
                <td>{e?.email}</td>
                <td>{e?.description}</td>
                <td>
                  <Link
                    to={`user/${e?.idPas}`}
                    style={{
                      color: "var(--color-first-medium-light)" ,
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph1">Ver</span>
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </td>
                <td>
                  <button
                      className="btn delete-button"
                      onClick={() => deleteNoti(e?.id, "notification_for_user")}
                    >
                      Eliminar
                    </button> 
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
          <tr>
            <td colSpan="7" className="text-center">
              <strong className="empty">
                Nada nuevo por aquí!
              </strong>
            </td>
          </tr>
          </tbody>
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
