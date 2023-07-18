import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/UseUser'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TableNotisAdmin } from './TableNotisAdmin'
import { TableNotiPas } from './TableNotiPas'

export const TableNotis = () => {
    const {jwt,user} = useUser() 
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
        : 
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
    )
}

