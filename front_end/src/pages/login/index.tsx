import { useNavigate } from "react-router-dom";
import LoginUser from "../../components/loginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <LoginUser />
      <button onClick={() => navigate("/register")}>Registrar</button>
    </div>
  );
};

export default LoginPage;
