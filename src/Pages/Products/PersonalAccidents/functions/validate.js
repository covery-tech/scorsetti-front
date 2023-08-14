export default function Validate(values, instance) {
  let errors = {};
  const errorMsg = 'Campo requerido.'
  if(instance === 1) {
    if(!values.nombre) {
      errors.año = errorMsg;
    }
    if(!values.apellido) {
      errors.marca = errorMsg;
    }
    if(!values.tipo_documento) {
      errors.modelo = errorMsg;
    }
    if(!values.documento) {
      errors.tipo_uso = errorMsg;
    }    
    if(!values.fecha_nacimiento) {
      errors.fecha_nacimiento = errorMsg;
    }
    if(!values.domicilio) {
      errors.domicilio = errorMsg;
    }
    if(!values.ciudad) {
      errors.ciudad = errorMsg;
    }
    if(!values.provincia) {
      errors.provincia = errorMsg;
    }
    if(!values.actividad) {
      errors.actividad = errorMsg;
    }
  }
  if(instance === 2) {

    if(!values.email) {
      errors.email = errorMsg;
    }
    if(!values.telefono) {
      errors.telefono = errorMsg;
    }
  }
  return errors;
}
