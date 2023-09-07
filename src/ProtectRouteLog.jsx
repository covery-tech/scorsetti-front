import React from 'react'
import useUser from './hooks/UseUser';
import {Navigate} from "react-router-dom"
export const ProtectRouteLogin = ({children}) => {
    let {isLoggedIn} = useUser();
    if(isLoggedIn) { 
      return (
        children
      )
    }else return <Navigate to="/"/>
}