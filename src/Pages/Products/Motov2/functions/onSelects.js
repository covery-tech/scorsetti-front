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
    description: brand.brand,
    markCode: brand.cod_brand,
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
    modelCode: model.cod_model,
    descriptionType: "Motocicletas hasta 249 cc",
    description: model.model,
    originDescription: "IMPORTADO",
    price: "1111",
  };
  setValues({
    ...values,
    model: m,
  });
  setErrors(
    validate({
      ...values,
      model: model.cod_model,
    })
  );
}
