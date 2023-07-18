import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faCircleUser,faCreditCard} from "@fortawesome/free-regular-svg-icons"
import {faShop,faBell,faSignal, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import { Link } from 'react-router-dom'
export const SideBarAdmin = ({logout,updateSite}) => {
    const [notis,setNotis] = useState(0)
    useEffect(()=>{
        const config = {
            method:"get",
            baseURL:`${process.env.REACT_APP_URI_API}/product/getCountNotis`,
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
        <li onClick={()=>updateSite("usuariosPas")}>
            <FontAwesomeIcon icon={faUser} />
            Usuarios Pas
        </li>
        <li  onClick={()=>updateSite("actualizarUser")}>
            <FontAwesomeIcon icon={faShop} />
            Actualizar Usuario a Pas/Admin
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
        <li>
            <Link to={"/miusuario"}>
                <FontAwesomeIcon icon={faCircleUser} />
                Perfil
            </Link>
        </li>
        <li onClick={logout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            Cerrar Sesión
        </li>
    </ul>
    </>
  )
}
