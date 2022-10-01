/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  //obtengo el valor del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  //Validaciones:
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    setForm(initialForm);
  };
  return {
    form,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  };
}
