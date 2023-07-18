export function onSelectBrand({
  e,
  brand,
  values,
  setValues,
  setErrors,
  validate,
}) {
  e.preventDefault();
  let b = {
    description: brand.Description,
    markCode: brand.MarkCode,
  };
  setValues({
    ...values,
    brand: b,
  });
  setErrors(
    validate({
      ...values,
      brand: brand.MarkCode,
    })
  );
}
export function onSelectModel({
  e,
  model,
  values,
  setValues,
  setErrors,
  validate,
}) {
  e.preventDefault();
  let m = {
    modelCode: model.ModelCode,
    descriptionType: model.DescriptionType,
    description: model.Description,
    originDescription: model.OriginDescription,
    price: model.Price,
  };
  setValues({
    ...values,
    model: m,
  });
  setErrors(
    validate({
      ...values,
      model: model.ModelCode,
    })
  );
}
