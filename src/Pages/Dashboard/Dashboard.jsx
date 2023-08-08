import React, { useEffect, useState } from 'react'
import { Charts } from '../../components/DashBoard/Charts/Charts'
import { Featured } from '../../components/DashBoard/Featured/Featured'
import { SideBar } from '../../components/DashBoard/SideBar/SideBar'
import { Widget } from '../../components/DashBoard/Widget/widget'
import "./dash.css"
import useUser from '../../components/hooks/UseUser'
import { TableClient } from '../../components/DashBoard/TableClient/TableClient'
import { TableProducts } from '../../components/DashBoard/TableProducts/TableProducts'
import { TableOrders } from '../../components/DashBoard/TableOrders/TableOrders'
import axios from 'axios'
import { TableNotis } from '../../components/DashBoard/TableNotis/TableNotis'
import { TablePas } from '../TablePas/Table'
import {TableSearchUser} from "../../components/Tables/TableSearchUser"
import { MyUser } from '../MyUser/MyUser'
export const Dashboard = () => {
  const {site,user} = useUser()
  const [clients,setClients] = useState()
  const [orders,setOrders] = useState()
  const [amount,setAmount] = useState()

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/numberOfClients/${user.id_user}`,
    }
    axios(config).then(res=>setClients(res.data.data))
  },[])

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/numberOfOrders/${user.id_user}`,
    }
    axios(config).then(res=>setOrders(res.data["COUNT(*)"]))
  },[])

  useEffect(()=>{
    const config = {
      method:"get",
      baseURL:`${process.env.REACT_APP_URI_API}/product/amountOfOrders/${user.id_user}`,
    }
    axios(config).then(res=>setAmount(res.data.sum))
  },[])
  //(site)
  return (
    <div className='sidebar_home'>
        <SideBar/>
        <div className='homeContainer'>
          {
            site === "panel" ?<>
              <div className="widgets">
                <Widget type="client" amount={clients}/>
                <Widget type="order" amount={orders}/>
                <Widget type="balance" amount={amount}/>
              </div>
              <div className="charts">
                <Featured/>
                <Charts/>
              </div>
            </>
            : site === "clientes" ?
            <TableClient/>
            : site === "productos" ?
            <TableProducts/>
            : site === "ordenes" ?
            <TableOrders/>
            : site === "notificaciones" ?
            <TableNotis/>
            : site === "usuariosPas" ?
            <TablePas/>
            : site === "actualizarUser" ? 
            <TableSearchUser/> 
            : site === "profile" ?
            <MyUser/>
            :<></>
          }
          
          
        </div>
    </div>
  )
}
