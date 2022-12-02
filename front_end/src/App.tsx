import "./App.css";
import LoginUser from "./components/loginForm";
import RegisterUser from "./components/registerForm";
import UserProvider from "./contexts/UserContexts";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <p>Testando</p>
          <RegisterUser />
          <h1>Login</h1>
          <LoginUser />
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
