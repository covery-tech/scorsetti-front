import { Icon } from "@iconify/react";
import {  useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/UseUser";
import ModalPortal from "../modal";
import { TableSearchUser } from "../Tables/TableSearchUser";
import "./style.css"

export default function () {
  const [showModal, setShowModal] = useState(false);
  const {logout,isLoggedIn} = useUser()
  const handleOpenModal = () => {setShowModal(true)};
  const handleClose = ()=>{setShowModal(false)}

  return (
    <div className="card-body text-center">
      <div className="row align-items-center justify-content-center text-center m-3">
        <div className="col-md-4">
          <Icon icon="fa6-solid:users-rectangle" width="60" />
          <Link to="tabla_pas"><h5 className="card-title">PAS Habilitados / Edición</h5></Link>
        </div>
        <div className="col-md-4">
          <a href="/formulario">
            <Icon icon="material-symbols:edit-document-outline" width="60" />
            <h5 className="card-title">Personalización Productos</h5>
          </a>
        </div>
        <div className="col-md-4">
          <a href="/newproduct">
            <Icon icon="material-symbols:edit-outline-rounded" width="60" />
            <h5 className="card-title">Creación Producto</h5>
          </a>
        </div>
      </div>
      <div className="row justify-content-center text-center m-3">
        <div className="col-md-4">
          <Icon icon="material-symbols:view-list-outline-rounded" width="60" />
          <h5 className="card-title">
            Historial de pedidos / Gestión de Pólizas
          </h5>
        </div>
        <div className="col-md-4" onClick={handleOpenModal} style={{cursor:"pointer"}}>
          <Icon icon="eos-icons:admin-outlined" width="60" />
          <h5 className="card-title">Usuarios Aseguradora</h5>
          {showModal && 
          <ModalPortal onClose={handleClose}>
            <TableSearchUser onClose={handleClose}/>
          </ModalPortal>
          }
        </div>
      </div>
      <div className="row justify-content-center text-center m-3">
        <div className="col-md-6">
          {isLoggedIn ?
            <button className="btn btn-warning" onClick={logout}>
              Cerrar Sesión
            </button>
            : <></>  
        }
        </div>
      </div>
    </div>
  );
}
