import React from "react";
import useUser from "../../hooks/UseUser";
import { useParams } from "react-router-dom";
import axios from "axios";

export const TableProductsAdmin = ({ products, handleUpdateState }) => {


  const {user,jwt} = useUser() 
  const { userId } = useParams();
  let sendNotification;
  if(userId){
    //("hola")
  sendNotification = (description)=>{
      const config ={
          method:"post",
          baseURL: `${process.env.REACT_APP_URI_API}/product/emitNotificationAdmin`,
          headers:{token:jwt},
          data:{
              idAdmin:user.id_user,
              description,
              idPas:userId,
          }
      }
      axios(config)
  }
}else{
  sendNotification = (description)=>{} 
}

  return (
    <>
      <div className="p-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Acciones</th>              
            </tr>
          </thead>
          {products.map((e,i) => (
            <tbody key={i}>
              <tr>
                <th scope="row">{e.title}</th>
                <td>
                  {e.status === "habilitado" ? (
                    <>
                      <button
                        className="btn btn-success w-25 me-4"
                        onClick={() =>{
                          handleUpdateState(e.name, "pendiente deshabilitado")
                          sendNotification(`estado de solicitud de para venta de polizas tipo ${e.name} a deshabilitado`)
                        }
                        }
                      >
                        {e.status}
                      </button>
                      <strong>click para pedir deshabilitar</strong>
                    </>
                  ) : e.status === "pendiente deshabilitado" ? (
                    <>
                      <button
                        className="btn btn-warning w-25 me-4"
                        onClick={() =>
                          handleUpdateState(e.name, "deshabilitado")
                        }
                      >
                        {e.status}
                      </button>
                      <strong>
                        click para cancelar solicitud de deshabilitacion
                      </strong>
                    </>
                  ) : e.status === "pendiente habilitado" ? (
                    <>
                      <button
                        className="btn btn-warning w-25 me-4"
                        onClick={() => {
                          handleUpdateState(e.name, "habilitado")
                          sendNotification(`estado de solicitud de para venta de polizas tipo ${e.name} a habilitado`)
                        }}
                      >
                        {e.status}
                      </button>
                      <strong>
                        click para cambiar estado a pendiente y esperar que un
                        administrador acepte su solicitud
                      </strong>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-danger w-25 me-4"
                        onClick={() =>
                          handleUpdateState(e.name, "pendiente habilitado")
                        }
                      >
                        {e.status}
                      </button>
                      <strong>
                        click para cambiar estado a pendiente y esperar que un
                        administrador acepte su solicitud
                      </strong>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};
