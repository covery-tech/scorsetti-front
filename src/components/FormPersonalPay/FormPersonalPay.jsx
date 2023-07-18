import React from 'react';


export default function FormPersonalPay({ }) {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Información personal</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={datosUsuario.nombre || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellido"
                value={datosUsuario.apellido || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={datosUsuario.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={datosUsuario.telefono || ''}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Siguiente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

