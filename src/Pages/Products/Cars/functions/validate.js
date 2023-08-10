export default function Validate(values, instance) {
  let errors = {};
  const errorMsg = 'Campo requerido.'
  if(instance === 1) {
    if(!values.año) {
      errors.año = errorMsg;
    }
    if(!values.marca) {
      errors.marca = errorMsg;
    }
    if(!values.modelo) {
      errors.modelo = errorMsg;
    }
    if(!values.tipo_uso) {
      errors.tipo_uso = errorMsg;
    }
    if(!values.vigencia) {
      errors.vigencia = errorMsg;
    }
  }
  if(instance === 2) {
    if(!values.nombre) {
      errors.nombre = errorMsg;
    }
    if(!values.apellido) {
      errors.apellido = errorMsg;
    }
    if(!values.tipo_documento) {
      errors.tipo_documento = errorMsg;
    }
    if(!values.numero_documento) {
      errors.numero_documento = errorMsg;
    }
    if(!values.sexo) {
      errors.sexo = errorMsg;
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
    if(!values.email) {
      errors.email = errorMsg;
    }
    if(!values.telefono) {
      errors.telefono = errorMsg;
    }
  }
  return errors;
}
