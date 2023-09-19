import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import useUser from '../../../hooks/UseUser';
import { TableDataSearch } from '../TableDataSearch/TableDataSearch';


export const TableSearchUser = () => {
    const [input, setInput] = useState("a")
    const [users,setUser] = useState([])

    const {jwt,user} = useUser()
    const [page,setPage] = useState(1)
    const [loadingNextPage,setLoadingNextPage] = useState(false)
    const [showShowMore,setShowShowMore] = useState(true)

    const handleChance = (e)=>{
        setInput(e.target.value)
    }

    const getAllUser = (data)=>{
        const config = {
        method: "GET",
        baseURL: `${process.env.REACT_APP_URI_API}/user/getAllUsers/${page}`,
        headers:{token:jwt} 
        };
        axios(config).then(response=>{
        //()
        if(response.data.length === 0 || response.data.length<6) setShowShowMore(false)
        setLoadingNextPage(false)
        // if(response.data.length === 0 || response.data.length<6)
        if(data) setUser(users.concat(response.data));
        }).catch(e=>{
        setLoadingNextPage(false)
            alert("error de servidor: Not Found")
        })
    }

    useEffect(()=>{
        getAllUser(true)
    },[])

    const handleSearch = ()=>{
    const config = {
        method: "GET",
        baseURL: `${process.env.REACT_APP_URI_API}/user/searchUserByEmail/${input}`,
        headers:{token:jwt} 
        };
        axios(config).then(res=>{
        if(res.data){
            setUser(res.data)
        }
    }).catch((err)=>{
        //(err)
        return err
    })
    }
    useEffect(()=>{
        handleSearch()
    },[handleChance])

    return (    
    <div className='container bg-light rounded-3 m-5 justify-content-center text-center mx-auto'>
            {
                <div>
                <table className="table table-striped">
                <thead>
                    <th scope="col">Nombre</th>            
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tipo usuario</th>
                    <th scope="col">Actualizar</th>
                    <th style={{display:"flex"}}>
                        <input className="form-control m-auto" type="text" onChange={handleChance} style={{maxHeight:40,minHeight:20}} placeholder="Buscar usuario por email">
                        </input>
                        <button type="button" className="btn btn-primary  m-auto" onClick={handleSearch}>
                        <Icon icon="material-symbols:search" />
                        </button>
                    </th>
                </thead>
                <tbody>
                {
                    users?.map(e=><TableDataSearch e={e} getAllUser={getAllUser}/>)
                }
                </tbody>
                </table>
                </div>
            }
            {
            showShowMore ? loadingNextPage ?<strong>cargando...</strong>:<strong onClick={()=>setPage(prev=>prev+1)} style={{color:"#0d6efd",cursor:"pointer"}}>mostrar mas resultados</strong>:<strong>Ops parece que a llegado al final</strong>
        }
    </div>
  )
}
