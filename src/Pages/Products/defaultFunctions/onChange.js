
export default function onChange (e, values, setValues, setErrors, validate) {
  e.preventDefault();
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...values,
    [e.target.name]: e.target.value
  }))
};