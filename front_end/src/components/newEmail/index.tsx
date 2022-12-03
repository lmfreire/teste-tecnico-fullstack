import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";

export interface IEmail {
  email: string;
  id?: string;
}

interface IEmailProps {
  userId: string;
}

const NewEmailContact = ({ userId }: IEmailProps) => {
  const { NewEmail } = useContext(UserContext);
  const { handleSubmit, register } = useForm<IEmail>();

  function RegisterPhone(data: IEmail) {
    data.id = userId;
    NewEmail(data);
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
