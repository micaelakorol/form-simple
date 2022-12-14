import img from "../../img/img.jpg";
import useForm from "../../hooks/useForm";
import { initialForm } from "../data/initialForm";
import { validationsForm } from "./FormValidate";
import { styles } from "../styles";

const Form = () => {
  const { form, errors, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );
    return (
      <>
        <div className="contenedor-form">
        <form onSubmit={handleSubmit} className="form">
      <img src={img} alt="" className="imagen_logo" />
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        required
      />
      {errors.name && <p style={styles}>*{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="name@example.com"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.email}
        required
      />
      {errors.email && <p style={styles}>*{errors.email}</p>}

      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.subject}
        required
      />
      {errors.subject && <p style={styles}>*{errors.subject}</p>}

      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.comments}
        required
      ></textarea>
      {errors.comments && <p style={styles}>{errors.comments}</p>}
      <b>Tú opinión nos interesa!</b>

      <button className="boton" type="submit">
        {" "}
        Enviar{" "}
      </button>
    </form>
  );
        </div>
      </>
    );
  };
  
  export default Form;