import React from 'react'
import "./featured.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical,faArrowTrendDown} from "@fortawesome/free-solid-svg-icons"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export const Featured = ({amount}) => {
  return (
    <div className='featureds w-30-l ma1'>
      <div className="top">
        <h1 className='title'>Ingresos Totales</h1>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{fontSize:"small"}}/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total de Ventas del Día</p>
        <p className="amount">${amount ? amount.totalVentas : 0}</p>
        <p className="desc">Procesamiento de transacciones anteriores. Es posible que no se incluyan los últimos pagos.</p>
        <div className="summary">
          <div className="items">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult">
              <FontAwesomeIcon icon={faArrowTrendDown} style={{fontSize:"small"}}/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className="items">
            <div className="itemTitle">Semana Pasada</div>
            <div className="itemResult">
              <FontAwesomeIcon icon={faArrowTrendDown} style={{fontSize:"small"}}/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className="items">
            <div className="itemTitle">Mes Pasado</div>
            <div className="itemResult">
              <FontAwesomeIcon icon={faArrowTrendDown} style={{fontSize:"small"}}/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
