import onClickCheckbox from "../../Pages/Products/defaultFunctions/onClickCheckbox";
import "./index.css";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  value,
  values,
  setValues,
  errors,
  setErrors,
  showErrors,
  classes,
  styles,
  options,
  validate,
  instance
}) {
  return (
    <>
      {type === "select" ? (
        <div style={styles} className="selectContainer">
          <select
            name={name}
            onChange={(e) =>
              onChange({ e, values, setValues, setErrors, validate, instance })
            }
            style={{
              width: "100%",
            }}
          >
            <option value="disabled">{placeholder}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {showErrors && errors[name] && (
            <p className="errorMessage" style={{ marginTop: "0.5rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      ) : type === "checkbox" ? (
        <div className={`d-flex checkboxContainer ${classes}`} style={styles}>
          <input
            type={type}
            name={name}
            onClick={(e) => {
              onClickCheckbox({ e, values, setValues });
            }}
            placeholder={placeholder}
            value={value}
          />
          <label>{placeholder}</label>
        </div>
      ) : (
        <div className={`d-flex inputContainer ${classes}`} style={styles}>
          {type === "date" && <label>{placeholder}</label>}
          <input
            type={type}
            name={name}
            onChange={(e) => {
              onChange({ e, values, setValues, setErrors, validate, instance });
            }}
            placeholder={placeholder}
            value={values[name]}
          />
          {showErrors && errors[name] && (
            <p className="errorMessage" style={{ marginTop: "0.5rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      )}
    </>
  );
}
