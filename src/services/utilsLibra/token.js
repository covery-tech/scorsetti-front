
import axios from "axios";

export default function postTokenPas(password,username,grant_type){
        const formData = {
                password,
                username,
                grant_type
        }
        const config = {
                method: "post",
                baseURL: `${process.env.REACT_APP_URI_API}/libra/token`,
                data:{formData}
                };
        return axios(config)
                .then(res=>{
                return res.data
                }).catch(e=>{
                        return e
                })
}