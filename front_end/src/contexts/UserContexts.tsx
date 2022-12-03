import { createContext, ReactNode, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { IUserLogin } from "../components/loginForm";
import { useNavigate } from "react-router-dom";
import { IName } from "../components/editName";
import { IPhone } from "../components/newPhone";
import { IEmail } from "../components/newEmail";

export const UserContext = createContext<IUserContext>({} as IUserContext);
export interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

interface IUserContext {
  userToken: IToken | undefined;
  registerUser: (data: IUser) => void;
  loginUser: (data: IUserLogin) => void;
  editName: (data: IName) => void;
  NewPhone: (data: IPhone) => void;
  NewEmail: (data: IEmail) => void;
  DeleteEmail: (id: string) => void;
  DeletePhone: (id: string) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let userTokenParse = {
    token: "",
  };
  if (typeof token == "string") {
    const parse = JSON.parse(token);
    userTokenParse.token += parse.token;
  }
  const [userToken, setUserToken] = useState<IToken | undefined>(
    userTokenParse
  );

  function registerUser(data: IUser) {
    axios
      .post("http://localhost:3333/create_user", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        return navigate("/");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function loginUser(data: IUserLogin) {
    axios
      .post("http://localhost:3333/login", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data));
        const token = localStorage.getItem("token");
        if (typeof token == "string") {
          setUserToken(JSON.parse(token));
        }
        toast.success("Seja bem vindo");
        navigate("/home");
      })
      .catch((error) => {
        toast.error("Email ou senha incorretos");
      });
  }

  function editName(data: IName) {
    const newData = {
      name: data.name,
    };

    axios
      .patch(`http://localhost:3333/update_user/${data.id}`, newData)
      .then((response) => {
        toast.success("Editado com sucesso");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error("Email ou senha incorretos");
      });
  }

  function NewPhone(data: IPhone) {
    const newData = {
      phone: data.phone,
    };
    axios
      .post(`http://localhost:3333/create_user_phone/${data.id}`, newData)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function NewEmail(data: IEmail) {
    const newData = {
      email: data.email,
    };

    axios
      .post(`http://localhost:3333/create_user_email/${data.id}`, newData)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function DeletePhone(id: string) {
    axios
      .delete(`http://localhost:3333/delete_user_phone/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function DeleteEmail(id: string) {
    axios
      .delete(`http://localhost:3333/delete_user_email/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  return (
    <UserContext.Provider
      value={{
        userToken,
        registerUser,
        loginUser,
        editName,
        NewPhone,
        NewEmail,
        DeletePhone,
        DeleteEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
