import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faCircleUser,faCreditCard} from "@fortawesome/free-regular-svg-icons"
import {faShop,faBell,faSignal, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import useUser from '../../hooks/UseUser'
import { Link } from 'react-router-dom'
export const SideBarPas = ({logout,updateSite}) => {
    const {jwt} = useUser()
    const [notis,setNotis] = useState(0)
    useEffect(()=>{
        const config = {
            method:"get",
            baseURL:`${process.env.REACT_APP_URI_API}/product/getCountNotisPas`,
            headers:{token:jwt}
        }
        axios(config).then((res)=>{
            //(res.data)
            setNotis(res.data[0]["COUNT(*)"])
        })
    },[])
  return (
    <>
    <ul>
                <p className='centerP'>Listas</p>
                    <li onClick={()=>updateSite("clientes")}>
                        <FontAwesomeIcon icon={faUser} />
                        Clientes
                    </li>
                <li  onClick={()=>updateSite("productos")}>
                    <FontAwesomeIcon icon={faShop} />
                    Productos
                </li>
                <li  onClick={()=>updateSite("ordenes")}>
                        <FontAwesomeIcon icon={faCreditCard} />
                        Ordenes
                </li>
                <p className='centerP'>Útil</p>
                <li  onClick={()=>updateSite("notificaciones")} style={{position:"relative"}}>
                    {
                        notis ? <div style={{backgroundColor:"#dc3545",height:"12px",minWidth:10,position:"absolute",borderRadius:"100%",left:"12px",fontSize:10,top:"4px",textAlign:"center"}}>{(notis<10) ? notis : "+10" }</div>
                        :<></>
                    }
                    
                    <FontAwesomeIcon icon={faBell} />
                    Notificaciones
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignal} />
                    Estadísticas
                </li>
                <p className='centerP'>Usuario</p>
                <Link to={"/miusuario"}>
                    <li>
                        <FontAwesomeIcon icon={faCircleUser} />
                        Perfil
                    </li>
                </Link>
                <li onClick={logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                    Cerrar Sesión
                </li>
            </ul>
    </>
  )
}
