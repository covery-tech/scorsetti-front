import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useUser from '../../hooks/UseUser'
import { TableProductsPas } from './TableProductsPas'
import { TableProductsAdmin } from './TableProductsAdmin'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const TableProducts = () => {
    const {jwt,user} = useUser() 
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    //(products)
    const getPas = ()=>{
        const config = {
            method:"get",
            baseURL: `${process.env.REACT_APP_URI_API}/product/getProductsPasAll/${user.id_user}`,
            headers:{token:jwt}
        }
        axios(config).then(e=>{
            setLoading(false)
            setProducts(e.data)
        }).catch(e=>{
            setLoading(false)
            alert("error de servidor: Not Found")
        })
    }



    const handleUpdateState = (name,status)=>{
        //(status,name)
        const config ={
            method:"put",
            baseURL: `${process.env.REACT_APP_URI_API}/product/statusProduct/${status}/${user.id_user}/${name}`,
            headers:{token:jwt}
        }
        axios(config).then(res=>{
            if(res.data) { 
                toast.success('Solicitud enviada', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });               
                getPas()
            }
        }).catch(e=>{
            alert("error ocurrido")
        })
    }

    useEffect(()=>{
        setLoading(true)
        getPas()
    },[])



    return (
        <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
        {
        loading 
            ? 
            <div>Cargando...</div>
            :
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Nombre del Producto</th>
                <th scope="col">Estado del Producto</th>
            </tr>
            </thead>
            {products.length ? (
            <tbody>
                {
                    (user.type === "superadmin" || user.type === "admin" ) ? <>
                    <TableProductsAdmin products={products} handleUpdateState={handleUpdateState}/>
                    </>
                :<>
                    <TableProductsPas products={products} handleUpdateState={handleUpdateState}/>
                </>
                }
                
            </tbody>
            ) : (
            <></>
            )}
            </table>
        }
        </div>
    )
}
