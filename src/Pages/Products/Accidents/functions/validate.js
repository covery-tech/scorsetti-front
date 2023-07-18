export default function Validate(values) {
  let errors = {};
  if(!values.covert) {
    errors.covert = (<p className="errors" >→ Por favor ingrese cobertura</p>);
  }
  if(!values.name) {
    errors.name = (<p className="errors" >→ Por favor ingrese el nombre</p>);
  }
  if(!values.sex) {
    errors.sex = (<p className="errors" >→ Por favor ingrese el sexo</p>);
  }
  if(!values.birthdate) {
    errors.birthdate = (<p className="errors" >→ Por favor ingrese la fecha de nacimiento</p>);
  }
  if(!values.province) {
    errors.province = (<p className="errors" >→ Por favor ingrese la provincia</p>);
  }
  return errors;
}