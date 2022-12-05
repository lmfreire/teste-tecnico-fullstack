import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactContext, IContact } from "../../contexts/ContactContext";
import { ContainerStyled } from "./styled";

const CreateContact = () => {
  const { registerContact, newContact, SetNewContact } =
    useContext(ContactContext);

  const { handleSubmit, register } = useForm<IContact>();

  return (
    <ContainerStyled>
      <h1>Crie um novo Contato</h1>
      <button onClick={() => SetNewContact(!newContact)}>Criar Contato</button>
      {newContact && (
        <form className="Form-Header" onSubmit={handleSubmit(registerContact)}>
          <label>name</label>
          <input type="text" {...register("name")} />
          <label>email</label>
          <input type="text" {...register("email")} />
          <label>phone</label>
          <input type="text" {...register("phone")} />

          <button type="submit">Cadastrar</button>
        </form>
      )}
    </ContainerStyled>
  );
};

export default CreateContact;
