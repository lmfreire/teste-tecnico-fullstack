import { useContext } from "react";
import { useForm } from "react-hook-form";
import { string } from "yup";
import { ContactContext } from "../../contexts/ContactContext";

export interface IPhone {
  phone: string;
  id?: string;
}

interface IPhoneProps {
  userId: string;
}

const NewPhoneContact = ({ userId }: IPhoneProps) => {
  const { NewPhoneContact } = useContext(ContactContext);
  const { handleSubmit, register } = useForm<IPhone>();

  function RegisterPhone(data: IPhone) {
    data.id = userId;
    NewPhoneContact(data);
  }

  return (
    <form className="Form-Header" onSubmit={handleSubmit(RegisterPhone)}>
      <label>phone</label>
      <input type="text" {...register("phone")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NewPhoneContact;
