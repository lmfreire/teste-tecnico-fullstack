import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext, IContact } from "../../contexts/ContactContext";

const CreateContact = () => {
  const { registerContact } = useContext(ContactContext);
  const { handleSubmit, register } = useForm<IContact>();

  return (
    <form className="Form-Header" onSubmit={handleSubmit(registerContact)}>
      <label>name</label>
      <input type="text" {...register("name")} />
      <label>email</label>
      <input type="text" {...register("email")} />
      <label>phone</label>
      <input type="text" {...register("phone")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CreateContact;
