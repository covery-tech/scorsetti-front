import capitalizeFirstLetter from "./capitalize-first-letter";

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
