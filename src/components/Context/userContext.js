import React,{ useState} from "react";

const Context = React.createContext({})

export const UserContext= ({children})=>{
    const [jwt,setJWT] = useState(()=>window.sessionStorage.getItem("jwt"))
    const [user,setUser] = useState(()=>JSON.parse(window.sessionStorage.getItem("user")))
    const [pas,setPas] = useState(()=>JSON.parse(window.sessionStorage.getItem("pas")))
    const [tokenPas,setTokenPas] = useState(()=>window.sessionStorage.getItem("tokenPas"))
    const [site, setSite] = useState(()=>"panel")
    return <Context.Provider value={{jwt,setJWT,user,setUser,pas,setPas,tokenPas,setTokenPas,site, setSite}}>
    {children}
    </Context.Provider>
}

export default Context