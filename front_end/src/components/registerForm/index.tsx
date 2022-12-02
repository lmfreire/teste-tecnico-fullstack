import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";

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
      <form className="Form-Header" onSubmit={handleSubmit(registerUser)}>
        <label>name</label>
        <input type="text" {...register("name")} />
        <label>email</label>
        <input type="text" {...register("email")} />
        <label>phone</label>
        <input type="text" {...register("phone")} />
        <label>password</label>
        <input type="text" {...register("password")} />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default RegisterUser;
