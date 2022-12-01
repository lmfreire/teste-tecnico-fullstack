import { Router } from "express";
import ContactController from "../Controller/ContactController";
import ErrorUserContactIdIsValidMiddleware from "../Middleware/ErrorUserContactIdIsValidMiddleware";
import ErrorUserContactMiddleware from "../Middleware/ErrorUserContactMiddleware";
import ErrorUserIdIsValidMiddleware from "../Middleware/ErrorUserIdIsValidMiddleware";
import IsOwnerMiddleware from "../Middleware/IsOwnerMiddleware";

const contactRoutes = Router();

contactRoutes.post(
  "/create_contact/:user_id",
  IsOwnerMiddleware,
  ErrorUserIdIsValidMiddleware,
  ErrorUserContactMiddleware,
  ContactController.create
);
contactRoutes.post(
  "/create_contact_phone/:contact_id",
  ErrorUserContactIdIsValidMiddleware,
  ContactController.addPhone
);
contactRoutes.post(
  "/create_contact_email/:contact_id",
  ErrorUserContactIdIsValidMiddleware,
  ContactController.addEmail
);
contactRoutes.get("/list_contact/", ContactController.list);
contactRoutes.patch(
  "/update_contact/:contact_id",
  ErrorUserContactIdIsValidMiddleware,
  ContactController.update
);
contactRoutes.delete(
  "/delete_contact/:contact_id",
  ErrorUserContactIdIsValidMiddleware,
  ContactController.delete
);
contactRoutes.delete(
  "/delete_contact_phone/:phone_id",
  ContactController.deletePhone
);
contactRoutes.delete(
  "/delete_contact_email/:email_id",
  ContactController.deleteEmail
);

export default contactRoutes;
