import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faCircleUser,faCreditCard} from "@fortawesome/free-regular-svg-icons"
import {faShop,faBell,faSignal, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import { Link } from 'react-router-dom'
export const SideBarAdmin = ({logout,updateSite}) => {
    const [notis,setNotis] = useState(0);
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
        <p className='centerP text'>Listas</p>
        <li onClick={()=>updateSite("usuariosPas")} className='flex'>
            <FontAwesomeIcon icon={faUser} />
            <div className='text'>Usuarios Pas</div>
        </li>
        <li  onClick={()=>updateSite("actualizarUser")} className='flex'>
            <FontAwesomeIcon icon={faShop} />
            <div className='text'>Actualizar Usuario a Pas/Admin</div>
        </li>
        <li  onClick={()=>updateSite("ordenes")} className='flex'>
            <FontAwesomeIcon icon={faShop} />
            <div className='text'>Ordenes del Mercado</div>
        </li>
        <p className='centerP text'>Útil</p>
        <li  onClick={()=>updateSite("notificaciones")} className='flex relative'> 
            {
            notis ? <div style={{backgroundColor:"#dc3545",height:"12px",minWidth:10,position:"absolute",borderRadius:"100%",left:"12px",fontSize:10,top:"4px",textAlign:"center"}}>{(notis<10) ? notis : "+10" }</div>
            :<></>
            }
            <FontAwesomeIcon icon={faBell} />
            <div className='text'>Notificaciones</div>
        </li>
        <li className='flex'>
            <FontAwesomeIcon icon={faSignal} />
            <div className='text'>Estadísticas</div>
        </li>
        <p className='centerP text'>Usuario</p>
        <li onClick={() => updateSite("profile")} className='flex'>
            <FontAwesomeIcon icon={faCircleUser}/>
            <div className='text'>Perfil</div>
        </li>
        <li onClick={logout} className='flex-l dn'>
            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            <div>Cerrar Sesión</div>
        </li>
    </ul>
    </>
  )
}
