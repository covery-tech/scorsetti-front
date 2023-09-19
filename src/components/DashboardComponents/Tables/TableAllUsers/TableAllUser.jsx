import React, { useEffect, useState } from 'react'
import useUser from '../../../../hooks/UseUser'
import axios from 'axios'

export const TableAllUser = () => {
  const {jwt} = useUser() 
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [users,setUsers] = useState([])
    const [loadingNextPage,setLoadingNextPage] = useState(false)
    const [showShowMore,setShowShowMore] = useState(true)


    useEffect(()=>{
      const config = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_URI_API}/user/getAllUsers/${page}`,
      headers:{token:jwt} 
    };
    axios(config).then(response=>{
      if(response.data.length === 0 || response.data.length<6) setShowShowMore(false)
      setLoading(false)
      setLoadingNextPage(false)
      setUsers(users.concat(response.data));
    })
    },[page])
    return (
    <div>
        <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            {/* puede ir el slug en vez del id */}
            <th scope="col">Id</th>
            <th scope="col">Actualizar a Usuario</th>
            <th scope="col"><input type="search"/></th>
          </tr>
        </thead>
        {
          loading ? <p>Cargando...</p>
          :
            <tbody>
                {users.map((e) => (
                    <tr>
                    <td>{e?.name}</td>
                    <td>{e?.last_name}</td>
                    <td>{e?.email}</td>
                    <td>{e?.phone_number} <a href={`https://wa.me/+549${e?.phone_number}`} target="_blank">{e.phone_number ? e.phone_number : "no asignado"}</a></td>
                    <td>{e?.id_user}</td>
                    <td>{e?.type}</td>
                    
                    </tr>
                ))}
            </tbody>
        }
      </table>
      {
            showShowMore ? loadingNextPage ?<strong>cargando...</strong>:<strong onClick={()=>setPage(prev=>prev+1)} style={{color:"#0d6efd",cursor:"pointer"}}>mostrar mas resultados</strong>:<strong>Ops parece que a llegado al final</strong>
        }
    </div>
    </div>
  )
}
