import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";

export interface IUserLogin {
  email: string;
  password: string;
}
const LoginUser = () => {
  const { handleSubmit, register } = useForm<IUserLogin>();
  const { loginUser } = useContext(UserContext);
  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <label>email</label>
      <input type="text" {...register("email")} />
      <label>password</label>
      <input type="text" {...register("password")} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginUser;
