import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { Charts } from '../../components/DashBoard/Charts/Charts'
import { Featured } from '../../components/DashBoard/Featured/Featured'
import { SideBar } from '../../components/DashBoard/SideBar/SideBar'
import { Widget } from '../../components/DashBoard/Widget/widget'
import "./dash.css"
import useUser from '../../hooks/UseUser'
import { TableClient } from '../../components/DashBoard/TableClient/TableClient'
import { TableProducts } from '../../components/DashBoard/TableProducts/TableProducts'
import axios from 'axios'
import { TableNotis } from '../../components/DashBoard/TableNotis/TableNotis'
import { TablePas } from '../TablePas/Table'
import {TableSearchUser} from "../../components/Tables/TableSearchUser"
import { MyUser } from '../MyUser/MyUser'
import OrdersTableAll from '../../components/DashBoard/TableOrders/TableAllOrders'
import OrdersTableAllClient from '../../components/DashBoard/TableOrders/TableAllOrdersClient'
export const Dashboard = () => {
  const {site,jwt} = useUser()
  const [clients,setClients] = useState()
  const [orders,setOrders] = useState()
  const [amount,setAmount] = useState()
  const [dairySales,setDairySales] = useState()

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/numberOfClients`,
      headers: { token: jwt },
    }
    axios(config).then(res=>setClients(res.data.data))
  },[])

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/numberOfOrders`,
      headers: { token: jwt },
    }
    axios(config).then(res=>setOrders(res.data["COUNT(*)"]))
  },[])

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/amountOfOrders`,
      headers: { token: jwt },
    }
    axios(config).then(res=>setAmount(res.data.sum))
  },[])

  useEffect(()=>{
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().slice(0, 10);
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/dairySales/${fechaFormateada}`,
      headers: { token: jwt },
    }
    axios(config).then(res=>setDairySales(res.data))
  },[])

  return (
    <div className='flex'>
        <SideBar/>
        <Container>
          {
            site === "panel" ?<>
              <div className="widgets">
                <Widget type="client" amount={clients}/>
                <Widget type="order" amount={orders}/>
                <Widget type="balance" amount={amount}/>
              </div>
              <div className="charts">
                <Featured amount={dairySales}/>
                <Charts/>
              </div>
            </>
            : site === "clientes" ?
            <TableClient/>
            : site === "productos" ?
            <TableProducts/>
            : site === "ordenes" ?
            <OrdersTableAll/>
            : site === "notificaciones" ?
            <TableNotis/>
            : site === "usuariosPas" ?
            <TablePas/>
            : site === "actualizarUser" ? 
            <TableSearchUser/> 
            : site === "profile" ?
            <MyUser/>
            : site === "compras" ?
            <OrdersTableAllClient/>
            : <></>
          }
          
          
        </Container>
    </div>
  )
}
