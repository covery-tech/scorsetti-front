export default function onSubmit(e, errors, values, setShowErrors, addNewPerson, setPersons, nPersons, setValues) {
    // values.fire_measures = [...values.fire_measures, others_fire];
    // values.theft_measures = [...values.theft_measures, others_theft];
    // console.log(values);
    // let form = JSON.stringify(values);
    // console.log(form);
    // const config = {
    //   method: "POST",
    //   baseURL: `${process.env.REACT_APP_URI_API}/form/postForms`,
    //   data: {
    //     form,
    //   },
    //   headers: { token: jwt },
    // };
    // axios(config).then((res) => {
    //   if (res.data) {
    //     alert("form created");
    //   }
    // });
    e.preventDefault();
    console.log(errors);
    if (Object.keys(errors).length || values.name === "") {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      addNewPerson(setPersons, nPersons, values, setValues);
      let finishPersons = [...nPersons];
      finishPersons.push(values);
    }
  }