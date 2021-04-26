import { Router } from "express"
import MessagesController from "./controllers/MessagesController";
import SettingsController from "./controllers/SettingsController";
import UsersController from "./controllers/UsersConstroller";

const routes = Router();

const settingsController = new SettingsController();
routes.post("/settings", settingsController.create);

const usersController = new UsersController();
routes.post("/users", usersController.create);

const messagesController = new MessagesController();
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };