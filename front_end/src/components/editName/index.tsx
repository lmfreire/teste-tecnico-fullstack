import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContexts";
import { style } from "../../pages/home/styled";

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function edit(data: IName) {
    data.id = id;
    editName(data);
  }
  return (
    <div>
      <Button onClick={handleOpen}>Editar Name</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="Modal"
      >
        <Box sx={style}>
          <form className="Form-Header" onSubmit={handleSubmit(edit)}>
            <label>New name</label>
            <input type="text" {...register("name")} />

            <button type="submit">Cadastrar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditName;
