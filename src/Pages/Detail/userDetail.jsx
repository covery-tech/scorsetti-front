import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import MapForPas from "../../components/Map/MapForPas";
import SectionProducts from "../../components/SectionProducts/SectionProducts";
import WeInfo from "../../components/WhoWeAre/WeInfo";
import AlertNoPas from "../../components/AlertNoPas/AlertNoPas";
import useUser from "../../components/hooks/UseUser";

export const UserDetail = () => {
  const {route} = useParams();
  const [user, setUser] = useState([]);
  const {jwt,pas} = useUser()
  const [image, setImage] = useState("")
  const URLSERVER = process.env.REACT_APP_URI_API + ""
  useEffect(() => {
    const config = {
      method: "GET",
      baseURL: `${URLSERVER}/user/getPasByRoute/${route}`,
    };
    const config2 = {
      method: "get",
      baseURL: `${URLSERVER}/user/imageLg/${pas?.id}`,
      headers:{token:jwt}
  };
    axios(config).then((res) => {
      if (res.data) {
        if (res.status === 200) {
          setUser(res.data);
          window.sessionStorage.setItem("pas", JSON.stringify(res.data));
        }
        if (res.status === 201) setUser(res.status);
        if (res.status === 202) setUser(res.status);        
      }
    }).catch((err)=>{
      console.log(err)
    });
    axios(config2).then(res=>{
      setImage(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [setUser, setImage, URLSERVER, route, jwt, pas?.id]);
  return (
    <div>
      {user === 201 ? (
        <AlertNoPas message = {"Éste productor no existe"}/>
      ) : user === 202 ? (
        <AlertNoPas message = {"Éste productor no está habilitado"}/>
      ) : (
        <div>
          <SectionProducts route={pas?.id} />
          {user.description?.length ? (
            <WeInfo description={user.description} image={image || ""} name={user.name}/>
          ) : (
            <></>
          )}
          {user?.coords ? <MapForPas pas={user} /> : <Map></Map>}
        </div>
      )}
    </div>
  );
};
