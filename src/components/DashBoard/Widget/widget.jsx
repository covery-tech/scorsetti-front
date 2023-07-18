import React, { useEffect, useState } from 'react'
import "./widget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faCreditCard} from "@fortawesome/free-regular-svg-icons"
import {faArrowTrendUp,faSignal} from "@fortawesome/free-solid-svg-icons"
import useUser from '../../hooks/UseUser'
export const Widget = ({type,amount}) => {
    let data;
    const {updateSite} = useUser()

    switch(type){
        case "client":
            data={
                title:"CLIENTES",
                isMoney:false,
                link:<span className='link' onClick={()=>updateSite("clientes")}>Ver clientes</span>,
                icon:<FontAwesomeIcon icon={faUser} className="icon" style={{color:"crimson", backgroundColor:"rgba(255,0,0,.2)"}}/>,
            }
            break;
            case "order":
            data={
                title:"ORDENES",
                isMoney:false,
                link:<span className='link' style={{curso:"pointer"}} onClick={()=>updateSite("ordenes")}>Ver ordenes</span>,
                icon:<FontAwesomeIcon icon={faCreditCard} className="icon" style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,.2)"}}/>
                
            }
            break;
            case "balance":
            data={
                title:"ESTADÍSTICAS",
                isMoney:true,
                link:"Ver estadísticas",
                icon:<FontAwesomeIcon icon={faSignal} className="icon" style={{color:"orange", backgroundColor:"rgba(255, 115, 0, 0.2)"}}/>
            }
            break;
        default:
            break;
    }


  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"}{amount}</span>
            {data.link}
        </div>
        <div className="right">
            <div className="porcentage">
                <FontAwesomeIcon icon={faArrowTrendUp}/>20 %
            </div>
            {data.icon}
        </div>
    </div>
  )
}
