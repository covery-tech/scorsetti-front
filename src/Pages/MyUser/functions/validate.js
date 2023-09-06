export default function Validate(values) {
  let errors = {};
  if(!values.phone_number) {
    errors.password = '→ Porfavor ingrese numero de telefono';
  }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#@$!%*?&])([A-Za-z\d$@$!%*?&]|[^]){8,15}$/.test(values.password)) {
    errors.password = '→ 8 a 15 caracteres - Al menos una letra mayúscula - Al menos un dígito numérico - Sin espacios - Al menos un carácter especial.'
  }
  if (!/^[a-zA-Z0-9-]+$/.test(values.route)) {
    errors.route = '→ acepta letras, números y "-"';
  }
  return errors;
}