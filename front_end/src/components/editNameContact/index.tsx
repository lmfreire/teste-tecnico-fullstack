import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/ContactContext";

export interface INameContact {
  name: string;
  id?: string;
}

interface IEditProps {
  id: string;
}

const EditNameContact = ({ id }: IEditProps) => {
  const { editName } = useContext(ContactContext);
  const { handleSubmit, register } = useForm<INameContact>();

  function edit(data: INameContact) {
    data.id = id;
    editName(data);
  }
  return (
    <form className="Form-Header" onSubmit={handleSubmit(edit)}>
      <label>New name</label>
      <input type="text" {...register("name")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default EditNameContact;
