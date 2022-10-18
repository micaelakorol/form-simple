/* eslint-disable no-unused-vars */
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../componentes/firebase/config";

export default function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const db = getFirestore(app);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    try {
      await addDoc(collection(db, "users"), {
        ...form,
      });
      setForm(initialForm);
      return alert("Formulario enviado!");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    form,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  };
}
