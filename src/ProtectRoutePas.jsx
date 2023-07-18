import React from 'react'
import useUser from './components/hooks/UseUser';
import {Navigate} from "react-router-dom"
export const ProtectRoutePas = ({children}) => {
    let {user,isLoggedIn} = useUser();
    if(isLoggedIn) { 
      if(user?.type === "superadmin" || user.type==="admin" || user.type=== "pas")
      return (
        children
      )
      else return <Navigate to="/"/>
    }else return <Navigate to="/"/>
}
