export default function Validate(values) {
  let errors = {};
  if(!values.brand) {
    errors.brand = '→ Por favor ingrese la marca de su vehiculo';
  }
  if(!values.model) {
    errors.model = '→ Por favor ingrese el modelo de su vehiculo';
  }
  if(!values.year) {
    errors.year = '→ Por favor ingrese el año de su vehiculo';
  }
  if(!values.adjustment) {
    errors.adjustment = '→ Por favor ingrese el tipo de uso';
  }
  if(!values.validity) {
    errors.validity = '→ Por favor ingrese la vigencia deseada';
  }
  return errors;
}