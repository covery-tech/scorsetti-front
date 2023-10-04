import axios from "axios";
import React, { useEffect } from "react";
import useUser from "../../../../hooks/UseUser";
import "react-toastify/dist/ReactToastify.css";

export const TableNotiPas = ({
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

  const getNotis = () => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getNotificationPas/${page}`,
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
            <th scope="col">Descripción</th>
            <th scope="col">Eliminar Notificación</th>
          </tr>
        </thead>
        {notis?.length ? (
          <tbody>
            {notis?.map((e) => (
              <tr key={e?.id}>
                <td>{e?.description}</td>
                <td>
                  <button
                      className="btn delete-button"
                      onClick={() => deleteNoti(e?.id, "notification")}
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
            <td colSpan="2" className="text-center">
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
