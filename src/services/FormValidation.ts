import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "./BaseUrl";

export function useFormik({ initialValues, validate }: any) {
  const [touched, setTouched] = useState({ email: false });
  const [errors, setErrors] = useState({ email: true });
  const [value, setValue] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    validateValue(value);
  }, [value]);

  const handleChange = (e: any) => {
    const name = e.target.getAttribute("name");
    const { value } = e.target;
    const capitalized = value.toLowerCase();
    setValue({ ...value, [name]: capitalized });
    {
      capitalized.length >= 10 &&
      capitalized.includes("@") &&
      capitalized.includes(".com")
        ? setDisabled(false)
        : setDisabled(true);
    }
  };

  function handleBlur(e: any) {
    const name = e.target.getAttribute("name");
    setTouched({ ...value, [name]: true });
  }

  function validateValue(value: any) {
    setErrors(validate(value));
  }

  function send() {
    const formData = new FormData();
    Object.keys(value).forEach((key) => formData.append(key, value[key]));
    axios
      .post(`${BaseUrl}/send`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => console.log(resp.data));
  }

  return {
    value,
    errors,
    touched,
    disabled,
    handleBlur,
    setErrors,
    handleChange,
    send,
  };
}
