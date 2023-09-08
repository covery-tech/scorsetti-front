import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import onClickCheckbox from "../../utils/onClickCheckboxInput";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  onClick,
  value,
  values,
  setValues,
  errors,
  setErrors,
  showErrors,
  showPassword,
  classes,
  styles,
  options,
  validate,
  instance,
}) {
  return (
    <>
      {type === "select" ? (
        <div
          style={styles}
          className={`select-container w-100 ${classes ? classes : ""}`}
        >
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
            <p className="error-message" style={{ marginTop: "2rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      ) : type === "checkbox" ? (
        <div
          className={`flex checkbox-container ${classes ? classes : ""}`}
          style={styles}
        >
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
        <div
          className={`flex input-container w-100 ${classes ? classes : ""}`}
          style={styles}
        >
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
          {name === "password" && (
            <span onClick={onClick}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          )}
          {showErrors && errors[name] && (
            <p className="error-message" style={{ marginTop: "2rem" }}>
              {errors[name]}
            </p>
          )}
        </div>
      )}
    </>
  );
}
