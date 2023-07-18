export default function Validate(values) {
  let errors = {};
  if(!values.activity) {
    errors.activity = '→ Porfavor ingrese el rubro';
  }
  if(!values.risk_location) {
    errors.risk_location = '→ Porfavor ingrese la ubicacion del riesgo';
  }
  if(!values.meters) {
    errors.meters = '→ Porfavor ingrese los metros cubiertos';
  }
  if(!values.observations) {
    errors.observations = '→ Porfavor ingrese alguna observacion';
  }
  if(values.moreplants) {
    if(!values.plants_quantity) {
      errors.plants_quantity = '→ Porfavor ingrese la cantidad de plantas';
    }
  }
  if(values.merchandise_storage) {
    if(!values.merchandise_type) {
      errors.merchandise_type = '→ Porfavor describa la mercaderia';
    }
  }

  //(errors);
  return errors;
}