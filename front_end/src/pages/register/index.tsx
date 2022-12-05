import { useNavigate } from "react-router-dom";
import RegisterUser from "../../components/registerForm";
import { StyledContainer } from "./styled";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <h1>Register</h1>
      <RegisterUser />
      <p>OR</p>
      <button onClick={() => navigate("/")}>Login</button>
    </StyledContainer>
  );
};

export default RegisterPage;
