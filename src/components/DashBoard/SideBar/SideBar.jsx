import React from 'react'
import "./SideBar.css"
import useUser from "../../hooks/UseUser" 
import { SideBarPas } from './SideBarPas'
import { SideBarAdmin } from './SideBarAdmin'
export const SideBar = () => {
    const {logout,updateSite,user} = useUser()
    
  return (
      <div className="sidebar">
        <div className="top">
            <span className="titleSide" onClick={()=>updateSite("panel")}>Panel de Pas</span>
        </div>
        <hr />
        <div className="center">
            {
                user.type==="pas" ?
                <SideBarPas logout={logout} updateSite={updateSite}/>
                : user.type === "admin" || user.type === "superadmin" ?
                <SideBarAdmin logout={logout} updateSite={updateSite}/>
                :<></>
            }
        </div>
    </div>
  )
}
