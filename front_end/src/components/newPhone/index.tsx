import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";

export interface IPhone {
  phone: string;
  id?: string;
}

interface IPhoneProps {
  userId: string;
}

const NewPhone = ({ userId }: IPhoneProps) => {
  const { NewPhone } = useContext(UserContext);
  const { handleSubmit, register } = useForm<IPhone>();

  function RegisterPhone(data: IPhone) {
    data.id = userId;
    NewPhone(data);
  }

  return (
    <form className="Form-Header" onSubmit={handleSubmit(RegisterPhone)}>
      <label>phone</label>
      <input type="text" {...register("phone")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default NewPhone;
