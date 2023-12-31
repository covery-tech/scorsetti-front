import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import useUser from "../../components/hooks/UseUser";
import './tableeditpas.css'

export const TableEditPas = () => {
  const { id } = useParams();
  const [pas, setPas] = useState([]);
  const { jwt } = useUser();
  const getPas = () => {
    const config = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getProductsPas/${id}`,
    };
    axios(config).then((response) => {
      setPas(response.data);
    });
  };
  useEffect(() => {
    getPas();
  }, []);
  //(pas);

  const onChangeEnable = (e, idProduct, campo) => {
    let config;
    if (e) {
      config = {
        method: "PUT",
        baseURL: `${process.env.REACT_APP_URI_API}/product/statusProduct/0/${idProduct}/${campo}`,
        headers: { token: jwt },
      };
    } else {
      config = {
        method: "PUT",
        baseURL: `${process.env.REACT_APP_URI_API}/product/statusProduct/1/${idProduct}/${campo}`,
        headers: { token: jwt },
      };
    }
    axios(config).then((response) => {
      if (response.data) {
        getPas();
      } else {
        alert("response.data");
      }
    });
  };

  return (
    <div className="container bg-light rounded-3 m-5 text-center mx-auto">
      <table className="table table-striped table-fixed">
        <thead>
          <tr>
            <th>Productos</th>
            <th>Activar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auto</td>
            <td>
              {pas.auto ? (
                <button
                  className="btn btn-success"
                  onClick={() =>
                    onChangeEnable(pas?.auto, pas?.users_id, "auto")
                  }
                >
                  habilitado
                </button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    onChangeEnable(pas?.auto, pas?.users_id, "auto")
                  }
                >
                  deshabilitado
                </button>
              )}
            </td>
          </tr>
          <tr>
            <td>Moto</td>
            <td>
              {pas.moto ? (
                <button
                  className="btn btn-success w-25"
                  onClick={() =>
                    onChangeEnable(pas?.moto, pas?.users_id, "moto")
                  }
                >
                  habilitado
                </button>
              ) : (
                <button
                  className="btn btn-warning w-25"
                  onClick={() =>
                    onChangeEnable(pas?.moto, pas?.users_id, "moto")
                  }
                >
                  deshabilitado
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
