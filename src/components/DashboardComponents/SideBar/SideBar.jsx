import React from 'react'
import "./SideBar.css"
import useUser from "../../../hooks/UseUser" 
import { SideBarPas } from './SideBarPas'
import { SideBarAdmin } from './SideBarAdmin'
import { SideBarClient } from './SideBarClient'
export const SideBar = () => {
    const {logout,updateSite,user} = useUser()
  return (
      <div className="sidebar pa2">
        <div className="top">
        {
            user.type === "pas" ?<span className="titleSide justify-center" onClick={()=>updateSite("panel")}>Panel de Pas</span>:<></>
        }
        {
            user.type === "admin" ?<span className="titleSide justify-center" onClick={()=>updateSite("panel")}>Panel de admin</span>:<></>
        }
        {
            user.type === "superadmin" ?<span className="titleSide justify-center" onClick={()=>updateSite("panel")}>Panel de superadmin</span>:<></>
        }
        {
            user.type === "client" ?<span className="titleSide justify-center" onClick={()=>updateSite("profile")}>Panel de cliente</span>:<></>
        }
        </div>
        <hr />
        <div className="center">
            {
                user.type==="pas" ?
                <SideBarPas logout={logout} updateSite={updateSite}/>
                : user.type === "admin" || user.type === "superadmin" ?
                <SideBarAdmin logout={logout} updateSite={updateSite}/>
                : user.type === "client" ? 
                <SideBarClient logout={logout} updateSite={updateSite}/>
                :<></>
            }
        </div>
    </div>
  )
}
