import axios from "axios";

export default function route(id){
    const config = {
        method: "get",
        baseURL: `${process.env.REACT_APP_URI_API}/user/pasRoutes/${id}`,
        };
        return axios(config).then(res=>res.data).catch(e=>console.error(e))
}