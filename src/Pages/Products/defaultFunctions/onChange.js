function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
      [e.target.name]: capitalizeFirstLetter(e.target.value),
    });
  setErrors(
    validate({
      ...values,
      [e.target.name]: capitalizeFirstLetter(e.target.value),
    }, instance)
  );
}
