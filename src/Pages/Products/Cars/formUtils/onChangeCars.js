export function onChangeBrands({
  e,
  values,
  setValues,
  setErrors,
  validate,
  instance
}) {
  e.preventDefault();
  let brand = {
    description: e.target.value,
    markCode: ""
  }
  let model = {
    modelCode: "",
    descriptionType: "",
    description: "",
    originDescription: "",
    price: "",
  };
  setValues({
    ...values,
    brand,
    model
  });
  setErrors(
    validate({
      ...values,
      brand: "",
      model: ""
    }, instance)
  );
}

export function onChangeModels({
  e,
  values,
  setValues,
  setErrors,
  validate,
  instance
}) {
  e.preventDefault();
  let model = {
    modelCode: "",
    descriptionType: "",
    description: e.target.value,
    originDescription: "",
    price: "",
  };
  setValues({
    ...values,
    model,
  });
  setErrors(
    validate({
      ...values,
      model: "",
    }, instance)
  );
}
