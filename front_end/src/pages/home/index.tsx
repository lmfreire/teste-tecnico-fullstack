import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CreateContact from "../../components/createContact";
import EditName from "../../components/editName";
import ListContacts from "../../components/listContacts";
import NewEmailContact from "../../components/newEmail";
import NewPhone from "../../components/newPhone";
import { ContactContext } from "../../contexts/ContactContext";
import { UserContext } from "../../contexts/UserContexts";

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
    <div>
      <h1>Algo aqui</h1>
      {userReturn && (
        <div>
          {
            <>
              <NewPhone userId={userReturn.id} />
              <NewEmailContact userId={userReturn.id} />
              <p>{userReturn.name}</p>
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
            </>
          }
          <EditName id={userReturn?.id} />
        </div>
      )}

      <CreateContact />
      <ListContacts />
    </div>
  );
};

export default Home;
