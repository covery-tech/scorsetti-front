export default function onClickCheckbox({
  e,
  values,
  setValues,
}) {
  if(typeof values[e.target.name] === 'object') {
    let newAccessories;
    const existAccessory = values[e.target.name].some(acc => acc.id === e.target.value);
    if(!existAccessory) {
      newAccessories = [...values[e.target.name], {id: e.target.value, description: e.target.placeholder}];
    } else {
      newAccessories = values[e.target.name].filter(acc => acc.id !== e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: newAccessories
    });
  } else {
    setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
  }
}
