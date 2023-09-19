import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleUser, faCreditCard } from "@fortawesome/free-regular-svg-icons"
import { faShop, faBell, faSignal, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import useUser from '../../../hooks/UseUser'
import { Link } from 'react-router-dom'
export const SideBarPas = ({ logout, updateSite }) => {
    const { jwt } = useUser()
    const [notis, setNotis] = useState(0)
    const [screen,setScreen] = useState(0)
    useEffect(() => {
        setScreen(window.screen.width);
        const config = {
            method: "get",
            baseURL: `${process.env.REACT_APP_URI_API}/product/getCountNotisPas`,
            headers: { token: jwt }
        }
        axios(config).then((res) => {
            //(res.data)
            setNotis(res.data[0]["COUNT(*)"])
        })
    }, [])
    return (
        <>
            <ul>
                <p className='centerP'>Listas</p>
                <li onClick={() => updateSite("clientes")}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='text'>Clientes</div>
                </li>
                <li onClick={() => updateSite("productos")}>
                    <FontAwesomeIcon icon={faShop} />
                    <div className='text'>Productos</div>
                </li>
                <li onClick={() => updateSite("ordenes")}>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <div className='text'>Ordenes</div>
                </li>
                <p className='centerP'>Útil</p>
                <li onClick={() => updateSite("notificaciones")} style={{ position: "relative" }}>
                    {
                        notis ? <div style={{ backgroundColor: "#dc3545", height: "12px", minWidth: 10, position: "absolute", borderRadius: "100%", left: "12px", fontSize: 10, top: "4px", textAlign: "center" }}>{(notis < 10) ? notis : "+10"}</div>
                            : <></>
                    }

                    <FontAwesomeIcon icon={faBell} />
                    <div className='text'>Notificaciones</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignal} />
                    <div className='text'>Estadísticas</div>
                </li>
                <p className='centerP'>Usuario</p>
                <li onClick={() => updateSite("profile")}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <div className='text'>Perfil</div>
                </li>
                {
                    screen > 768 ?
                        <li onClick={logout}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <div className='text'>Cerrar Sesión</div>
                        </li> :
                        <></>
                }
            </ul>
        </>
    )
}
