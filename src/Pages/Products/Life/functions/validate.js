export default function Validate(values) {
  let errors = {};
  if(!values.name) {
    errors.name = (<p className="errors1" >→ Por favor ingrese el nombre</p>);
  }
  if(!values.lastname) {
    errors.lastname = (<p className="errors1" >→ Por favor ingrese el apellido</p>);
  }
  if(!values.dni) {
    errors.dni = (<p className="errors1" >→ Por favor ingrese el DNI'</p>);
  }
  if(!values.sex) {
    errors.sex = (<p className="errors1" >→ Por favor ingrese el sexo</p>);
  }
  if(!values.birthdate) {
    errors.birthdate = (<p className="errors1" >→ Por favor ingrese la fecha de nacimiento</p>);
  }
  if(!values.province) {
    errors.province = (<p className="errors1" >→ Por favor ingrese la provincia</p>);
  }
  return errors;
}