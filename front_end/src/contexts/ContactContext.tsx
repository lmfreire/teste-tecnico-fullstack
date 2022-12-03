import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { INameContact } from "../components/editNameContact";
import { IEmail } from "../components/newEmailContact";
import { IPhone } from "../components/newPhoneContact";
import { UserContext } from "./UserContexts";

export const ContactContext = createContext<IUserContext>({} as IUserContext);

export interface IContact {
  name: string;
  email: string;
  phone: string;
}

interface IEmailContact {
  email: string;
  id: string;
  user_contact_id: string;
}

interface IPhoneContact {
  phone: string;
  id: string;
  user_contact_id: string;
}

interface IUserContact {
  id: string;
  name: string;
  password: string;
  created_at: string;
}

interface IContactReturn {
  id: string;
  name: string;
  user_id: string;
  user: IUserContact;
  Phone: IPhoneContact[];
  Email: IEmailContact[];
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  contacts: IContactReturn[] | undefined;
  registerContact: (data: IContact) => void;
  listContacts: () => void;
  NewPhoneContact: (data: IPhone) => void;
  NewEmailContact: (data: IEmail) => void;
  DeletePhone: (id: string) => void;
  DeleteEmail: (id: string) => void;
  DeleteContact: (id: string) => void;
  editName: (data: INameContact) => void;
}

const ContactProvider = ({ children }: IUserProviderProps) => {
  const { userToken } = useContext(UserContext);
  const [contacts, setContacts] = useState<IContactReturn[]>();

  function registerContact(data: IContact) {
    const userIdToken = localStorage.getItem("user");
    let id = "";
    if (typeof userIdToken == "string") {
      const user = JSON.parse(userIdToken);
      id += user.id;
    }

    axios
      .post(`http://localhost:3333/create_contact/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });

    listContacts();
  }

  function listContacts() {
    axios
      .get(`http://localhost:3333/list_contact/`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        toast.error("Erro ao carregar seus contatos");
      });
  }

  function NewPhoneContact(data: IPhone) {
    const newData = {
      phone: data.phone,
    };
    axios
      .post(`http://localhost:3333/create_contact_phone/${data.id}`, newData)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function NewEmailContact(data: IEmail) {
    const newData = {
      email: data.email,
    };

    axios
      .post(`http://localhost:3333/create_contact_email/${data.id}`, newData)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function DeletePhone(id: string) {
    axios
      .delete(`http://localhost:3333/delete_contact_phone/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function DeleteEmail(id: string) {
    axios
      .delete(`http://localhost:3333/delete_contact_email/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function DeleteContact(id: string) {
    axios
      .delete(`http://localhost:3333/delete_contact/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Cadastro não efetuado verifique os dados");
      });
  }

  function editName(data: INameContact) {
    const newData = {
      name: data.name,
    };

    axios
      .patch(`http://localhost:3333/update_contact/${data.id}`, newData)
      .then((response) => {
        toast.success("Editado com sucesso");
        listContacts();
      })
      .catch((error) => {
        toast.error("Email ou senha incorretos");
      });
  }
  return (
    <ContactContext.Provider
      value={{
        contacts,
        registerContact,
        listContacts,
        NewPhoneContact,
        NewEmailContact,
        DeletePhone,
        DeleteEmail,
        DeleteContact,
        editName,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
