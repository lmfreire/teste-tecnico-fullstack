import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";
import { ContainarForm } from "./styled";

export interface IUserLogin {
  email: string;
  password: string;
}
const LoginUser = () => {
  const { handleSubmit, register } = useForm<IUserLogin>();
  const { loginUser } = useContext(UserContext);

  return (
    <ContainarForm onSubmit={handleSubmit(loginUser)}>
      <label>email</label>
      <input type="text" {...register("email")} />
      <label>password</label>
      <input type="password" {...register("password")} />
      <button type="submit">Login</button>
    </ContainarForm>
  );
};

export default LoginUser;
