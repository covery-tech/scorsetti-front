import { useCallback, useContext } from 'react'
import Context from '../Context/userContext'
import loginService from "../../services/getUser"
import routeService from "../../services/getRoute"
import {toast} from 'react-toastify'
import axios from 'axios'

export default function useUser() {
    const {jwt,setJWT,user,setUser,tokenPas,setTokenPas,site, setSite,route,setRoute} = useContext(Context)
    const login = useCallback( async ({email,password})=>{
        loginService({email,password}).then(res=>{
          if(!res) return
          window.sessionStorage.setItem("jwt",res?.token)
          window.sessionStorage.setItem("user",JSON.stringify(res?.user))
          setJWT(res.token)
          setUser(res.user)
        })
    },[setJWT])

    const getRoute = useCallback( (id) =>{
      routeService(id).then(res=>{
          setRoute(res.route)
          window.sessionStorage.setItem("route",res.route)
      }).catch((err)=>{
        console.log(err)
          window.sessionStorage.removeItem("route")
      })
  },[setRoute])

    const getTokenPasLibra = ()=>{
        const config = {
          method: "POST",
          baseURL: `${process.env.REACT_APP_URI_API}/libra/token`,
          data: {
            formData:{
              username:`${process.env.REACT_APP_USER_LIBRA}`,
              password:`${process.env.REACT_APP_PASSWORD_LIBRA}`,
              grant_type:"password"
            }
          },
        }
        axios(config).then(resp=>{
          //(resp)
          window.sessionStorage.setItem("tokenPas",resp.data.access_token)
          setTokenPas(resp.data.access_token)
          return
        }).catch(err=>{
          //(err)
          alert("server error")
          return
        })
      } 

      const updateSite = (value)=>{
        setSite(value)
      }


    const logout = useCallback(()=>{
        window.sessionStorage.removeItem("jwt")
        window.sessionStorage.removeItem("user")
        setJWT(null)
        setUser(null)
    },[setJWT])

  return {
    isLoggedIn:Boolean(jwt),
    login,
    logout,
    user,
    jwt,
    getTokenPasLibra,
    tokenPas,
    updateSite,
    site,
    getRoute,
    route
  }
}
