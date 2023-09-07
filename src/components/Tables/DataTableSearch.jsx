import axios from 'axios'
import React, { useState } from 'react'
import useUser from '../../hooks/UseUser'
import {toast} from 'react-toastify'

export const DataTableSearch = ({e,getAllUser}) => {
    const {jwt,user} = useUser()
    const [select, setSelect] = useState(null);
    const handleSelect= (id,element)=>{
        if(element.target.value.length){
            setSelect({
                ...select,
                type:element.target.value,
                id
            })
        }
        return
    }

    const sendChange = ()=>{
        
        if(select ){
        const config = {
            method: "PUT",
            baseURL: `${process.env.REACT_APP_URI_API}/user/updateUser/${select?.type}/${select?.id}`,
            headers:{token:jwt}    
        };
            axios(config).then(res=>{
            if(res.data){
                toast.success("Usuario actualizado", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                getAllUser(false)
            }
        })}
        return
    }


  return <tr>
        <td>{e?.name}</td>
        <td>{e?.last_name}</td>
        <td>{e?.email}</td>
        <td >{e?.type}</td>
        <td >
        <select onChange={(element)=>handleSelect(e.id_user,element)} >
            <option selected="true" disabled="disabled">type</option>
            <option value="pas">pas</option>
            <option value="client">client</option>
            {user.type==="superadmin" && <option value="admin">admin</option>}
        </select>
        </td>
        <td><div>
                {
                select?.type?.length ?
                <button className='btn btn-success' onClick={sendChange}>Actualizar</button>
                :
                <button className='btn btn-success' disabled>Actualizar</button>
                }</div></td>
    </tr>
}
