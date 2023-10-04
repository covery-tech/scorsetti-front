export function onSelectBrand({
  e,
  brand,
  values,
  setValues,
  setErrors,
  validate,
  instance
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
      brand: b.markCode,
    }, instance)
  );
}
export function onSelectModel({
  e,
  model,
  values,
  setValues,
  setErrors,
  validate,
  instance
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
      model: m.modelCode,
    }, instance)
  );
}
