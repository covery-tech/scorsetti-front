import React from 'react'
import useUser from './components/hooks/UseUser';
import {Navigate} from "react-router-dom"
export const ProtectRoute = ({children}) => {
    let {user,isLoggedIn} = useUser();
    if(isLoggedIn) { 
      if(user?.type === "superadmin" || user.type==="admin")
      return (
        children
      )
      else return <Navigate to="/"/>
    }else return <Navigate to="/"/>
}
