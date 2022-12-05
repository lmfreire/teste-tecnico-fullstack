import { useNavigate } from "react-router-dom";
import LoginUser from "../../components/loginForm";
import { StyledContainer } from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <h1>Login</h1>
      <LoginUser />
      <p>OR</p>
      <button onClick={() => navigate("/register")}>Registrar</button>
    </StyledContainer>
  );
};

export default LoginPage;
