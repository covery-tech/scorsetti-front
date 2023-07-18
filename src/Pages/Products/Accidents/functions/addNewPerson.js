export const addNewPerson = (setPersons,nPersons,values,resetForm) => {
  if(!nPersons.find(p => p.name === values.name)) {
    setPersons([...nPersons, values]);
    resetForm();
  } else {
    alert("Esta persona ya se encuentra registrada!")
  }
};