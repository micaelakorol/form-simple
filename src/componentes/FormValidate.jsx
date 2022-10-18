/* eslint-disable no-unused-vars */
import "../css/form.css";

export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  //Validacion de errores:
  if (!form.name.trim()) {
    errors.name = "El campo Nombre está vacío";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre solo acepta letras y espacios en blanco";
  } else if (!form.email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Escriba un formato email válido";
  } else if (!form.subject.trim()) {
    errors.subject = "El campo Asunto es requerido";
  } else if (!form.comments.trim()) {
    errors.comments = "El campo Comentario es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo Comentarios no debe exceder los 255 caracteres";
  }

  return errors;
};


