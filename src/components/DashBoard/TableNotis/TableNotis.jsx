import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/UseUser'
import { TableNotisAdmin } from './TableNotisAdmin'
import { TableNotiPas } from './TableNotiPas'
import { TableNotiClient } from './TableNotiClient'
import { toast } from 'react-toastify'
import axios from 'axios'

export const TableNotis = () => {
    const {user, jwt} = useUser() 
    const [notis,setNotis] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [loadingNextPage,setLoadingNextPage] = useState(false)
    const [showShowMore,setShowShowMore] = useState(true)
    const deleteNoti = (id, table) => {
        const config = {
          method: "put",
          baseURL: `${process.env.REACT_APP_URI_API}/product/deleteNotification/${id}/${table}`,
          headers: { token: jwt },
        };
        axios(config)
          .then((e) => {
            if (e.data) {
              toast.success("Notificación eliminada", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });          
              let info = notis.flat();
              let contador = 0;
              info.map((noti) => {
                if (noti.id == id) {
                  //(noti.id);
                  info.splice(contador, 1);
                }
                contador++;
              });
              //(info);
              setNotis(info);
            } else alert("server error");
          })
          .catch((e) => {
            toast.error("Notificación no pude ser eliminada", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }); 
          });
      };

    return (
        (user.type === "admin" || user.type==="superadmin") ?
        <TableNotisAdmin 
        notis={notis} 
        setPage={setPage} 
        loading={loading}
        loadingNextPage={loadingNextPage} 
        showShowMore={showShowMore}
        page={page}
        setLoading={setLoading}
        setLoadingNextPage={setLoadingNextPage}
        setNotis={setNotis}
        setShowShowMore={setShowShowMore}
        deleteNoti={deleteNoti}
        />
        :  user?.type === "pas" ?
        <TableNotiPas
        notis={notis} 
        setPage={setPage} 
        loading={loading}
        loadingNextPage={loadingNextPage} 
        showShowMore={showShowMore}
        page={page}
        setLoading={setLoading}
        setLoadingNextPage={setLoadingNextPage}
        setNotis={setNotis}
        setShowShowMore={setShowShowMore}
        deleteNoti={deleteNoti}
        />
        : user?.type === "client" ?
        <TableNotiClient
        notis={notis} 
        setPage={setPage} 
        loading={loading}
        loadingNextPage={loadingNextPage} 
        showShowMore={showShowMore}
        page={page}
        setLoading={setLoading}
        setLoadingNextPage={setLoadingNextPage}
        setNotis={setNotis}
        setShowShowMore={setShowShowMore}
        deleteNoti={deleteNoti}/>
        :<></>
    )
}

