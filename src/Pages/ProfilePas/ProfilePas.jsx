import React, { useEffect, useState } from "react";
import useUser from "../../hooks/UseUser";
import { TableProductsAdmin } from "../../components/DashboardComponents/Tables/TableProducts/TableProductsAdmin";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardContent from "../../components/DashboardContent/DashboardContent";

export default function ProfilePas() {
  const { jwt } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pasState, setPas] = useState(null);
  const { userId } = useParams();
  const getPas = () => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getProductsPasAll/${userId}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        setLoading(false);
        setProducts(e.data);
      })
      .catch((e) => {
        setLoading(false);
        alert("error de servidor: Not Found");
      });
  };
  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/user/getPasById/${userId}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        setLoading(false);
        setPas(e.data);
      })
      .catch((e) => {
        setLoading(false);
        alert("error de servidor: Not Found");
      });
    getPas();
  }, [jwt, userId]);
  const handleUpdateState = (name, status) => {
    //(status, name);
    const config = {
      method: "put",
      baseURL: `${process.env.REACT_APP_URI_API}/product/statusProduct/${status}/${userId}/${name}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((res) => {
        if (res.data) {
          toast.success("Solicitud enviada", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getPas();
        }
      })
      .catch((e) => {
        alert("error ocurrido");
      });
  };
  return (
    <DashboardContent className={"mt4"}>
      <div className="tl">
        <h2 style={{color: "var(--color-first-medium)"}}>
          Productor: {pasState?.name} {pasState?.last_name}
        </h2>
      </div>
      <TableProductsAdmin
        products={products}
        handleUpdateState={handleUpdateState}
        loading={loading}
      />
    </DashboardContent>
  );
}
