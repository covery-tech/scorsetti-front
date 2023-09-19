import React, { useEffect, useState } from "react";
import { Charts } from "../../components/DashboardComponents/Charts/Charts";
import { Featured } from "../../components/DashboardComponents/Featured/Featured";
import { SideBar } from "../../components/DashboardComponents/SideBar/SideBar";
import { Widget } from "../../components/DashboardComponents/Widget/widget";
import "./dash.css";
import useUser from "../../hooks/UseUser";
import { TableClient } from "../../components/DashboardComponents/Tables/TableClient/TableClient";
import { TableProducts } from "../../components/DashboardComponents/Tables/TableProducts/TableProducts";
import axios from "axios";
import { TableNotis } from "../../components/DashboardComponents/Tables/TableNotis/TableNotis";
import { TablePas } from "../../components/DashboardComponents/Tables/TablePas/TablePas";
import { TableSearchUser } from "../../components/DashboardComponents/Tables/TableSearchUser/TableSearchUser";
import { MyUser } from "../MyUser/MyUser";
import OrdersTableAll from "../../components/DashboardComponents/Tables/TableOrders/TableAllOrders";
import OrdersTableAllClient from "../../components/DashboardComponents/Tables/TableOrders/TableAllOrdersClient";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
export const Dashboard = () => {
  const { site, jwt } = useUser();
  const [clients, setClients] = useState();
  const [orders, setOrders] = useState();
  const [amount, setAmount] = useState();
  const [dairySales, setDairySales] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/numberOfClients`,
      headers: { token: jwt },
    };
    axios(config).then((res) => setClients(res.data.data));
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/numberOfOrders`,
      headers: { token: jwt },
    };
    axios(config).then((res) => setOrders(res.data["COUNT(*)"]));
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/amountOfOrders`,
      headers: { token: jwt },
    };
    axios(config).then((res) => setAmount(res.data.sum));
  }, []);

  useEffect(() => {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().slice(0, 10);
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/dairySales/${fechaFormateada}`,
      headers: { token: jwt },
    };
    axios(config).then((res) => setDairySales(res.data));
  }, []);

  return (
    <div className="flex justify-center-xl sidebar_position">
      <SideBar />
      <DashboardContainer>
        {site === "panel" ? (
          <>
            <div className="widgets">
              <Widget type="client" amount={clients} />
              <Widget type="order" amount={orders} />
              <Widget type="balance" amount={amount} />
            </div>
            <div className="charts">
              <Featured amount={dairySales} />
              <Charts />
            </div>
          </>
        ) : site === "clientes" ? (
          <TableClient />
        ) : site === "productos" ? (
          <TableProducts />
        ) : site === "ordenes" ? (
          <OrdersTableAll />
        ) : site === "notificaciones" ? (
          <TableNotis />
        ) : site === "usuariosPas" ? (
          <TablePas />
        ) : site === "actualizarUser" ? (
          <TableSearchUser />
        ) : site === "profile" ? (
          <MyUser />
        ) : site === "compras" ? (
          <OrdersTableAllClient />
        ) : (
          <></>
        )}
      </DashboardContainer>
    </div>
  );
};
