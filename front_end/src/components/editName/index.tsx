import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";

export interface IName {
  name: string;
  id?: string;
}

interface IEditProps {
  id: string;
}

const EditName = ({ id }: IEditProps) => {
  const { editName } = useContext(UserContext);
  const { handleSubmit, register } = useForm<IName>();

  function edit(data: IName) {
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

export default EditName;
