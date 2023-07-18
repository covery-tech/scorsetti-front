import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import { Button, Container  } from "react-bootstrap";
import useUser from '../../components/hooks/UseUser';
import image from "./img/userIMG.png"
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Validate from './functions/validate';
import "./style.css"
export function MyUser() {
    const {jwt} = useUser()
  const [users, setUser] = useState({});
  const [coords, setCoords] = useState({});
  const [image2, setImage] = useState(image);
  const [image3, setImage3] = useState("");
    // const [load,setLoad] = useState(false)

    const URLSERVER = `${process.env.REACT_APP_URI_API}`

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser({ ...users, [name]: value});
    };
    useEffect(() => {
    const config = {
        method: "get",
        baseURL: `${URLSERVER}/user/image`,
        headers:{token:jwt}    
    };
    axios(config).then(e=>{
        e.data ?
        setImage(e.data)
        :
        setImage(image)
    }).catch(e=>setImage(image))

     const config2 = {
        method: "get",
        baseURL: `${URLSERVER}/user/myPersonalData`,
        headers:{token:jwt}    
    };
    axios(config2).then(e=>{
        setUser(e.data)
        setCoords(e.data.coords)
    })
    }, [])

    const handleSubmit = (event) => {
      console.log(event)
    const formData = new FormData()
    formData.append("image",image2)
    console.log(formData)
    
    
    const config = {
        method: "put",
        baseURL: `${URLSERVER}/user/updateUserInfo`,
        headers:{token:jwt},
        data:{
          users:event
        }
    };
    const config2 = {
        method: "post",
        baseURL: `${URLSERVER}/image/image`,
        headers:{token:jwt},
        data:formData
    };
    setTimeout(()=>{
        axios(config).then(e=>{
            if(e.data){
            }
        })
        axios(config2).then(e=>{
            alert(e.data)
        })
    },1000)
    
  };
console.log(users.coords)

const handleFileChange = (event) => {
    setImage(event.target.files[0])
    setImage3(URL.createObjectURL(event.target.files[0]))
};   



    const handleCoords = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setCoords({ ...coords, [name]: value });
    }
    console.log(users)

  return (
    <div className="container bg-white rounded-5 mt-5 p-5 justify-content-center text-center">
    <h1>Actualizar usuario</h1>
    <div className='contentInfo' >
    {users?.type === "pas" ? (
              <div className='contentImage'>
          <div>
            {
              users.image 
              ? 
              <img id="img" src={ image3 ? image3 :`${URLSERVER}${users.image}`} alt={users?.name} style={{ borderRadius:10,display:"block",maxHeight:200,marginTop:50}} className="border"/>
              :
              <img id="img" src={image} alt={users?.name} style={{ borderRadius:10,display:"block",maxHeight:200,marginTop:50}} className="border"/>
            }
        </div>
        <div>
            <Container style={{backgroundColor:"#ff8725",opacity:1,position:"relative",width:170,height:30, borderRadius:5,display:"block"}} className="mt-4 mb-4">
                <label>Seleccionar archivo</label>
            <input type="file" onChange={handleFileChange} style={{position:"absolute",opacity:0,left:0,right:0,top:0,bottom:0,width:170}}>
            </input>
            </Container>
        </div>
        </div>):<></>
        }
    
    {
      users.password ?
    <div className='contentForm'>
    <Formik
    initialValues={users}
    validate={Validate}
    onSubmit={(values)=>{
      handleSubmit(values)
    }}
    >
      {({ errors }) => (
        <Form className='form' >
          <label htmlFor="risk_location" className="mt-3 mb-2">
          Numero de celular
                </label>
                <Field
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  className="form-control mt-2"
                />
                <br />
                <ErrorMessage
                  name="phone_number"
                  component={() => <div> {errors.phone_number} </div>}
                />
                <label htmlFor="risk_location" className="mt-3 mb-2">
                Provincia
                </label>
                <Field
                  id="province"
                  name="province"
                  type="text"
                  className="form-control mt-2"
                />
                <br />
                <ErrorMessage
                  name="province"
                  component={() => <div> {errors.province} </div>}
                />
                <label htmlFor="risk_location" className="mt-3 mb-2">
            Ciudad
                </label>
                <Field
                  id="city"
                  name="city"
                  type="text"
                  className="form-control mt-2"
                />
                <br />
                <ErrorMessage
                  name="city"
                  component={() => <div> {errors.city} </div>}
                /><label htmlFor="street_name" className="mt-3 mb-2">
                Calle
                      </label>
                      <Field
                        id="street_name"
                        name="street_name"
                        type="text"
                        className="form-control mt-2"
                      />
                      <br />
                      <ErrorMessage
                        name="street_name"
                        component={() => <div> {errors.street_name} </div>}
                      /><label htmlFor="postal_code" className="mt-3 mb-2">
                      Codigo postal
                            </label>
                            <Field
                              id="postal_code"
                              name="postal_code"
                              type="text"
                              className="form-control mt-2"
                            />
                            <br />
                            <ErrorMessage
                              name="postal_code"
                              component={() => <div> {errors.postal_code} </div>}
                            />
                            
                            {users?.type === "pas" ? (
                                <div>
                              <label htmlFor="description" className="mt-3 mb-2">
                              Descripcion
                                    </label>
                                    <Field
                                      id="description"
                                      name="description"
                                      as="textarea"
                                      className="form-control mt-2"
                                      rows={4}
                                      maxLength={255}
                                      style={{ resize: "none" }}
                                      placeholder="Escribe tu descripcin aquí (máximo 255 caracteres)"
                                    />
                                    <br />
                                    <ErrorMessage
                                      name="description"
                                      component={() => <div> {errors.description} </div>}
                                    /><label htmlFor="Coordenadas" className="mt-3 mb-2">
                                    Coordenadas
                                          </label>
                                          <Field
                                            id="coords"
                                            name="coords"
                                            type="text"
                                            className="form-control mt-2"
                                          />
                                          <br />
                                          <ErrorMessage
                                            name="coords"
                                            component={() => <div> {errors.coords} </div>}
                                          />
                            </div>):<></>}
                                        <label htmlFor="password" className="mt-3 mb-2">
                                        Contraseña
                                              </label>
                                              <Field
                                                id="password"
                                                name="password"
                                                type="text"
                                                className="form-control mt-2"
                                              />
                                              <br />
                                              <ErrorMessage
                                                name="password"
                                                component={() => <div> {errors.password} </div>}
                                              />
          <button className="btn btn-warning mt-2" type="submit">
                    Actualizar
                  </button>
        </Form>
      )}
    </Formik>
    </div>
    :<></>
    }
    </div>
    </div>
  );
}
