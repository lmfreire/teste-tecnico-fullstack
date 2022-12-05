import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CreateContact from "../../components/createContact";
import EditName from "../../components/editName";
import ListContacts from "../../components/listContacts";
import NewEmailContact from "../../components/newEmail";
import NewPhone from "../../components/newPhone";
import { ContactContext } from "../../contexts/ContactContext";
import { UserContext } from "../../contexts/UserContexts";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Container, style } from "./styled";

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

interface IUserContact {
  id: string;
  name: string;
  password: string;
  Email: IEmail[];
  Phone: IPhone[];
}

export interface IUserReturn {
  id: string;
  name: string;
  password: string;
  Email: IEmail[];
  Phone: IPhone[];
  created_at: string;
  UserContact: IUserContact[];
}

const Home = () => {
  const { userToken, DeleteEmail, DeletePhone } = useContext(UserContext);
  const { listContacts, contacts } = useContext(ContactContext);
  const [userReturn, setUserReturn] = useState<IUserReturn | null>(null);

  const [openPhone, setOpenPhone] = useState(false);
  const handleOpenPhone = () => setOpenPhone(true);
  const handleClosePhone = () => setOpenPhone(false);

  const [openEmail, setOpenEmail] = useState(false);
  const handleOpenEmail = () => setOpenEmail(true);
  const handleCloseEmail = () => setOpenEmail(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      setTimeout(() => {
        axios
          .get("http://localhost:3333/list_user_id/", {
            headers: {
              Authorization: `Bearer ${userToken?.token}`,
            },
          })
          .then((response) => {
            setUserReturn(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
    } else {
      const user = localStorage.getItem("user");
      if (typeof user == "string") {
        setUserReturn(JSON.parse(user));
      }
    }

    listContacts();
  }, [contacts]);

  return (
    <Container>
      {userReturn && (
        <div>
          {
            <div className="Contacts">
              <div className="Welcome-and-edit">
                <p>Bem vindo: {userReturn.name}</p>

                <EditName id={userReturn?.id} />
              </div>

              <div className="Phones">
                <div className="Infos-Phones">
                  <p>Seus Telefones</p>
                  <ul>
                    {userReturn.Phone.map((phone) => (
                      <li key={phone.id}>
                        {phone.phone}{" "}
                        <button onClick={() => DeletePhone(phone.id)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button onClick={handleOpenPhone}>
                  Adicionar Novo Telefone
                </Button>
                <Modal
                  open={openPhone}
                  onClose={handleClosePhone}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="Modal"
                >
                  <Box sx={style}>
                    <NewPhone userId={userReturn.id} />
                  </Box>
                </Modal>
              </div>

              <div className="Emails">
                <div className="Infos-Emails">
                  <p>Seus Emails</p>
                  <ul>
                    {userReturn.Email.map((email) => (
                      <li key={email.id}>
                        {email.email}{" "}
                        <button onClick={() => DeleteEmail(email.id)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button onClick={handleOpenEmail}>Adicionar Novo Email</Button>
                <Modal
                  open={openEmail}
                  onClose={handleCloseEmail}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="Modal"
                >
                  <Box sx={style}>
                    <NewEmailContact userId={userReturn.id} />
                  </Box>
                </Modal>
              </div>
            </div>
          }
        </div>
      )}
      <CreateContact />
      <ListContacts />
    </Container>
  );
};

export default Home;
