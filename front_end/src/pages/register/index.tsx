import { useNavigate } from "react-router-dom";
import RegisterUser from "../../components/registerForm";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Register</h1>
      <RegisterUser />
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );
};

export default RegisterPage;
