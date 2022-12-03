import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import EditNameContact from "../editNameContact";
import NewEmailContact from "../newEmailContact";
import NewPhoneContact from "../newPhoneContact";

const ListContacts = () => {
  const { contacts, DeletePhone, DeleteEmail, DeleteContact } =
    useContext(ContactContext);
  return (
    <div>
      <ul>
        {contacts &&
          contacts.map((contact) => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <EditNameContact id={contact.id} />
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
              <button onClick={() => DeleteContact(contact.id)}>Delete</button>
              <NewPhoneContact userId={contact.id} />
              <NewEmailContact userId={contact.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListContacts;
