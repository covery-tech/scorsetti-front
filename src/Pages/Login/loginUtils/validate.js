export default function Validate(values, instance) {
  let errors = {};
  const errorMsg = "Campo requerido.";
  if (!values.email) {
    errors.email = errorMsg;
  }
  if (!values.password) {
    errors.password = errorMsg;
  }
  return errors;
}
