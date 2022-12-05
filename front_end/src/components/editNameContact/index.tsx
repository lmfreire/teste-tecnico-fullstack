import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/ContactContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { style } from "../../pages/home/styled";

export interface INameContact {
  name: string;
  id?: string;
}

interface IEditProps {
  id: string;
  className?: string;
}

const EditNameContact = ({ id }: IEditProps) => {
  const { editName } = useContext(ContactContext);
  const { handleSubmit, register } = useForm<INameContact>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function edit(data: INameContact) {
    data.id = id;
    editName(data);
  }
  return (
    <div>
      <Button onClick={handleOpen}>Editar nome do contato</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="Form-Header" onSubmit={handleSubmit(edit)}>
            <label>Nome novo</label>
            <input type="text" {...register("name")} />

            <button type="submit">Cadastrar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditNameContact;
