import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import EditNameContact from "../editNameContact";
import NewEmailContact from "../newEmailContact";
import NewPhoneContact from "../newPhoneContact";
import { StyledContact } from "./styled";

const ListContacts = () => {
  const { contacts, DeletePhone, DeleteEmail, DeleteContact } =
    useContext(ContactContext);
  return (
    <StyledContact>
      <ul className="card-contact">
        {contacts &&
          contacts.map((contact) => (
            <li key={contact.id} className="card">
              <div className="infos-contact">
                <p>{contact.name}</p>
                <EditNameContact id={contact.id} className="button-edit" />
              </div>
              <p>Emails: </p>
              <ul>
                {contact.Email.map((email) => (
                  <li key={email.id}>
                    {email.email}{" "}
                    <button onClick={() => DeleteEmail(email.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <p>Telefones: </p>
              <ul>
                {contact.Phone.map((phone) => (
                  <li key={phone.id}>
                    {phone.phone}{" "}
                    <button onClick={() => DeletePhone(phone.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>

              <NewPhoneContact userId={contact.id} />
              <NewEmailContact userId={contact.id} />
              <div>
                <button onClick={() => DeleteContact(contact.id)}>
                  Delete Contato
                </button>
              </div>
            </li>
          ))}
      </ul>
    </StyledContact>
  );
};

export default ListContacts;
