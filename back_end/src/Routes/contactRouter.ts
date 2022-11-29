import { Router } from "express";
import ContactController from "../Controller/ContactController";

const contactRoutes = Router();

contactRoutes.post("/create_contact/:user_id", ContactController.create);
contactRoutes.get("/list_contact/", ContactController.list);
contactRoutes.patch("/update_contact/:contact_id", ContactController.update);
contactRoutes.delete("/delete_contact/:contact_id", ContactController.delete);

export default contactRoutes;
