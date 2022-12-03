import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/ContactContext";

export interface IEmail {
  email: string;
  id?: string;
}

interface IEmailProps {
  userId: string;
}

const NewEmailContact = ({ userId }: IEmailProps) => {
  const { NewEmailContact } = useContext(ContactContext);
  const { handleSubmit, register } = useForm<IEmail>();

  function RegisterPhone(data: IEmail) {
    data.id = userId;
    NewEmailContact(data);
  }

  return (
    <form className="Form-Header" onSubmit={handleSubmit(RegisterPhone)}>
      <label>email</label>
      <input type="text" {...register("email")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NewEmailContact;
