export default function onChange({
  e,
  values,
  setValues,
  setErrors,
  validate,
  instance
}) {
  e.preventDefault();
  setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  setErrors(
    validate({
      ...values,
      [e.target.name]: e.target.value,
    }, instance)
  );
}
