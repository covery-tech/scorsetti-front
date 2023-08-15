import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/UseUser'
import { TableNotisAdmin } from './TableNotisAdmin'
import { TableNotiPas } from './TableNotiPas'
import { TableNotiClient } from './TableNotiClient'

export const TableNotis = () => {
    const {user} = useUser() 
    const [notis,setNotis] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [loadingNextPage,setLoadingNextPage] = useState(false)
    const [showShowMore,setShowShowMore] = useState(true)

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
        setShowShowMore={setShowShowMore}/>
        :<></>
    )
}

