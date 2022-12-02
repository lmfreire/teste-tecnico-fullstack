import { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { IUserLogin } from "../components/loginForm";

export const UserContext = createContext<IUserContext>({} as IUserContext);
interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}

interface IEmail {
  email: string;
  id: string;
  user_id: string;
}

interface IPhone {
  phone: string;
  id: string;
  user_id: string;
}

interface IUserReturn {
  id: string;
  name: string;
  password: string;
  Email: IEmail[];
  Phone: IPhone[];
  created_at: string;
}

interface IToken {
  token: string;
}

interface IUserContext {
  token: IToken | undefined;
  registerUser: (data: IUser) => void;
  loginUser: (data: IUserLogin) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const [token, setToken] = useState<IToken>();

  function registerUser(data: IUser) {
    axios
      .post("http://localhost:3333/create_user", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loginUser(data: IUserLogin) {
    axios
      .post("http://localhost:3333/login", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data));
        const token = localStorage.getItem("token");
        if (typeof token == "string") {
          setToken(JSON.parse(token));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <UserContext.Provider value={{ token, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
