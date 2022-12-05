import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { ContainarForm } from "./styled";

interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}

const RegisterUser = () => {
  const { handleSubmit, register } = useForm<IUser>();
  const { registerUser } = useContext(UserContext);

  return (
    <>
      <ContainarForm
        className="Form-Header"
        onSubmit={handleSubmit(registerUser)}
      >
        <label>Name</label>
        <input type="text" {...register("name")} />
        <label>Email</label>
        <input type="text" {...register("email")} />
        <label>Phone</label>
        <input type="text" {...register("phone")} />
        <label>Password</label>
        <input type="password" {...register("password")} />

        <button type="submit">Cadastrar</button>
      </ContainarForm>
    </>
  );
};

export default RegisterUser;
