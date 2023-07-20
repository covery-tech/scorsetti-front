export default function onChange({
  e,
  values,
  setValues,
  setErrors,
  validate,
  boolean,
}) {
  e.preventDefault();
  if (typeof values[e.target.name] === "object") {
    if (e.target.checked) {
      setValues({
        ...values,
        [e.target.name]: [...values[e.target.name], e.target.value],
      });
    }
  } else if (boolean) {
    setValues({
      ...values,
      [e.target.name]: !e.target.value,
    });
  } else {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  setErrors(
    validate({
      ...values,
      [e.target.name]: e.target.value,
    })
  );
  console.warn(values);
}
