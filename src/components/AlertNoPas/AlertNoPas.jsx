import React from "react";
import { Link } from "react-router-dom";

export default function AlertNoPas({message}) {
  return (
    <div className="container bg-white rounded-5 mt-5 p-5">
      <div
        className="row text-center justify-content-center"
        data-toggle="tooltip"
        data-placement="top"
      >
        <h2>{message}</h2>
        <Link className="btn btn-primary w-25" to={"/"}>
          Vuelve a Scorsetti & Asociados
        </Link>
      </div>
    </div>
  );
}
