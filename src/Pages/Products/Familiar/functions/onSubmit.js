export default function onSubmit(e, errors, values, setShowErrors, addNewPerson, setPersons, nPersons, setValues) {
    // values.fire_measures = [...values.fire_measures, others_fire];
    // values.theft_measures = [...values.theft_measures, others_theft];
    // //(values);
    // let form = JSON.stringify(values);
    // //(form);
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
    if(values.other_fire_measures.length) {
      values.fire_measures = [...values.fire_measures, values.other_fire_measures]
    }
    if(values.other_theft_measures.length) {
      values.theft_measures = [...values.theft_measures, values.other_theft_measures]
    }
    if (Object.keys(errors).length || values.name === "") {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      addNewPerson(setPersons, nPersons, values, setValues);
      let finishPersons = [...nPersons];
      finishPersons.push(values);
    }
  }