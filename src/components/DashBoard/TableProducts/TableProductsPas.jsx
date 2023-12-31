import React from 'react'
import useUser from '../../hooks/UseUser'
import axios from 'axios'
import { DataTablePas } from './DataTablePas'

export const TableProductsPas = ({products,handleUpdateState}) => {
    const {user,jwt} = useUser() 
    
    const sendNotification = (description)=>{
        const config ={
            method:"post",
            baseURL: `${process.env.REACT_APP_URI_API}/product/emitNotificationPas/`,
            headers:{token:jwt},
            data:{
                idPas:user.id_user,
                description,
            }
        }
        axios(config)
    }
  return (
    <>
    {products?.map((e,i)=><DataTablePas key={i} handleUpdateState={handleUpdateState} sendNotification={sendNotification} e={e}/>)}
  </>)
}
